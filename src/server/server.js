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


app.post('/add', function (request, response) {
    console.log(request);
    makeData(request);
    response.send({
        message: 'New entry was added',
    });

});

app.get('/get-image-and-forecast',function(req, res){
    console.log(req);
    getImageAndForecast()
    const {placeName,selectedDate} = req.body;
    getGeolocation(placename);
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

const getWeatherForecast = async (lat, lng, date) => {
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

(async () => {
    try {
        const weather = await getWeatherForecast(-33.8688, 151.2093, '2024-12-17');
    
        console.log("Weather data:", weather); 
    } catch (error) {
        console.error('Failed :', error.message);
    }
})();



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
1.Write method to get historical weather for a given day of year.
2. Combine two weather methods (if date is in nearest future then get forecast else get historical data)
3. Write method to get picture of place by name (or lat/lon?)
4. Learn how to pass picture to client.


*/


function makeData(request) {
    let newData = request.body;
    let newEntry = {
        date: newData.date,
        temperature: newData.temperature,
        content: newData.content
    };
    projectData.entries.push(newEntry);
}

//getGeolocation('london').then(x => console.log(x));


app.post('/api/v1/forecast', (req,res) => {
    
    const{ destination, tripDate } = req.body;

    try {
        const forecast = {
            weather: `Hello ${destination}, the weather is ${tripDate}`
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