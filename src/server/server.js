// Setup empty JS object to act as endpoint for all routes
projectData = { entries: [] };

// Require Express to run server and routes
const express = require('express');
const app = express();

app.get("/alldata", (request, response) => {
    response.send(projectData);

});

// Start up an instance of app
const bodyParser = require('body-parser');
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('dist'));

app.get('/get-image-and-forecast',function(req, res){
    console.log(req);
    getImageAndForecast()
    const {placeName,selectedDate} = req.body;
    getGeolocation(placename);
    fetchImages(placename);
});


const getGeolocation = async (placeName) => {

    let URL= `http://api.geonames.org/search?q=${placeName}&maxRows=1&username=syanaa9&type=json`;
    try {
        const response = await fetch(URL, {
        method: 'GET',});
        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`);
        }

        const body = await response.json();

        if (body.geonames.length === 0) {
            throw new Error('No results found for the given place name.');
        }

        return {lat: body.geonames[0].lat, lng: body.geonames[0].lng};

    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }




};
/*======================================================= */

weatherbitAPIKey = '215ba38b55724ce4bbde6d2afd164271';

const getForecastWeather = async (lat, lng, date) => {
    const weatherURL = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lng}&key=${weatherbitAPIKey}`;
    const response = await fetch(weatherURL);

    if (!response.ok) {
        throw new Error(`Weather API error: ${response.statusText}`);
    }

    const weatherData = await response.json();

    let forecastDay = weatherData.data.filter( day => day.datetime === date);
    if (forecastDay.length > 0 ) {
        return forecastDay[0].app_max_temp;
    } else if (weatherData.data.length > 0) {
        return weatherData.data[0].app_max_temp;
    } else {
        throw new Error(`forecast for ${date} not found`);
    }
};

const getHistoricalWeather = async (lat, lng, date) => {
    const weatherURL = `https://api.weatherbit.io/v2.0/history/daily?lat=${lat}&lon=${lng}&start_date=${date}&end_date=${date}&key=${weatherbitAPIKey}`;

    const response = await fetch(weatherURL);

    if (!response.ok) {
        throw new Error(`Weather API error: ${response.statusText}`);
    }

    const weatherData = await response.json();

    let historicalDay = weatherData.data[0];
    return {
        max_temp: historicalDay.app_max_temp,
    };

};

const getWeatherData = async (lat, lng, date) => {
    const targetDate = new Date(date);
    const today = new Date();
    const maxForecastDays = 16;

    const isFuture = (targetDate - today) / (1000 * 60 * 60 * 24) < maxForecastDays;

    if (isFuture) {
        return await getForecastWeather(lat, lng, date);
    } else {
        return await getHistoricalWeather(lat, lng, date);
    }

};

/*(async () => {
    try {
        const weather = await getWeatherData(-33.8688, 151.2093, '2024-11-17');
        const placeName = "Sydney";
    
        console.log("Weather data:", weather);


        const urlPicture = await fetchImage("Sydney");
        console.log("Picture url:", urlPicture);

        const weatherInfoDiv = document.getElementById("weather-info");
        const imageContainerDiv = document.getElementById("image-container");

        weatherInfoDiv.innerHTML = `
        <p>Place: ${placeName}</p>
        <p>Max Temperature:${weather.max_temp}°C</p> `;
    
        imageContainerDiv.innerHTML = `
            <img src="${imageUrl}" alt="${placeName}" style="width: 600px; height: auto; border: 1px solid #ccc;">
        `;

    } catch (error) {
        console.error('Failed :', error.message);
    }
})();*/



// (async () => {
//     try {
//         const coordinates = await getGeolocation("Sydney");
    
//         const weather = await getWeather(coordinates.lat, coordinates.lng);
//         console.log("Weather data:", weather); 
//     } catch (error) {
//         console.error('Failed to fetch geolocation:', error.message);
//     }
// })();

/*===================================================== */





/*

ToDo:
1. Write method to get historical weather for a given day of year.
2. Combine two weather methods (if date is in nearest future then get forecast else get historical data)
3. Write method to get picture of place by name (or lat/lon?)
4. Learn how to pass picture to client.


*/


const pixabayApiKey = "47706648-830d690e93491499456fd445b";

const fetchImage = async (placeName) => {
    try {
      const response = await fetch(`https://pixabay.com/api/?key=${pixabayApiKey}&q=${placeName}&image_type=photo`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
      const data = await response.json();
      return data.hits[0].webformatURL;
    } catch (error) {
      console.error("Error:", error.message);
      throw error;
    }
  };

app.post('/api/v1/forecast', async (req,res) => {
    
    const{ destination, tripDate } = req.body;

    try {
        const coords = await getGeolocation(destination);

        const weather = await getWeatherData(coords.lat, coords.lng, tripDate);
        console.log("Weather data:", weather);

        const urlPicture = await fetchImage(destination);
        console.log("Picture url:", urlPicture);

        const forecast = {
            weather: weather,
            pictureURL:  urlPicture,
        };
        res.json(forecast);
    } catch (error) {
        console.error('Error processing request:', error);
    }
})


const port = 8000;

// Setup Server
const server = app.listen(port, listening);
function listening() {
    console.log("server running");
    console.log(`runnig on localhost:${port}`)
};