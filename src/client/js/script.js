const menus = document.querySelector('nav ul');
const header = document.querySelector('header');
const menuBtn= document.querySelector('.menu-btn');
const closeBtn= document.querySelector('.close-btn');

menuBtn.addEventListener("click", ()=>{
    menus.classList.add("display");
})

closeBtn.addEventListener("click", ()=>{
    menus.classList.remove("display");
})

//scroll sticky navbar
window.addEventListener('scroll', ()=>{
    if(document.documentElement.scrollTop > 20) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
   
});

//static numbres  
const countersEl=document.querySelectorAll('.numbers');
countersEl.forEach((counters)=>{
    counters.textContent = 0;

    increamentCounters();
//animations of numbers (counters)

    function increamentCounters(){
        let currentNum = +counters.textContent;
        const dataCeil = counters.getAttribute("data-ceil");
        const increament = dataCeil / 25;

        currentNum = Math.ceil(currentNum + increament);
        if(currentNum<dataCeil) {
            counters.textContent = currentNum;
            // requestAnimationFrame( increamentCounters );
            setTimeout(increamentCounters, 70);

        } else {
            counters.textContent = dataCeil
        }
    }
});


//calendar

const monthYearElement = document.getElementById('monthYear');
const datesElement = document.getElementById('dates');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentDate = new Date();

const updateCalendar = () => {
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    const firstDay = new Date(currentYear, currentMonth, 1 );
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const totalDays = lastDay.getDate();
    const firstDayIndex = (firstDay.getDay() === 0) ? 6 : firstDay.getDay() - 1;
    const lastDayIndex = lastDay.getDay();

    const monthYearString = currentDate.toLocaleString('default', {month:'long', year:'numeric'});
    monthYearElement.textContent = monthYearString;

    let datesHTML = '';

    for(let i = firstDayIndex; i > 0; i--) {
        const prevDate = new Date(currentYear, currentMonth, 0 - i + 1);
        datesHTML += `<div class="date inactive">${prevDate.getDate()}</div>`;
    }

    for(let i = 1; i <= totalDays; i++){
        const date = new Date(currentYear, currentMonth, i);
        const activeClass = date.toDateString() === new Date().toDateString() ? 'active' : '';
        datesHTML += `<div class="date ${activeClass}">${i}</div>`;
    }
    
    for (let i = 1; i <= (7 - ((lastDayIndex === 0) ? 7 : lastDayIndex)); i++) {

        const nextDate = new Date(currentYear, currentMonth + 1, i);
        datesHTML += `<div class="date inactive">${nextDate.getDate()}</div>`;
    }
    
    datesElement.innerHTML = datesHTML;
    //attachDateClickHandlers();


};
  
prevBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    updateCalendar();
});
nextBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    updateCalendar();
});
let selectedDate = new Date();


datesElement.addEventListener('click', (event) => {
    const element = event.target;
    if (element.classList.contains('date') && !element.classList.contains('inactive')) {
        document.querySelectorAll('.date.selected').forEach(
            el => el.classList.remove('selected')
        );
        element.classList.add('selected');

        const dateString = element.textContent.trim();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth();
        selectedDate = new Date(currentYear, currentMonth, dateString);
        //handleSelectedDate(selectedDate);
    }
});
    
// function handleSelectedDate(selectedDate) {
//     console.log(selectedDate);
// }

updateCalendar();

document.getElementById('primary-btn').addEventListener('click', async () =>{
    const x = await getForecastAndPicture();
     updateUI(x.weather, x.pictureURL);
});

async function getForecastAndPicture() {
    let destination = document.getElementById('where-to').value;
    let tripDate = selectedDate.toISOString().split("T")[0];
    
    try {
        const response = await fetch('/api/v1/forecast', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                destination,
                tripDate,
            }),
        });

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error calling API', error);
    }
}

const updateUI = (temp, placePicture) => {
    try {
        const weatherInfoDiv = document.getElementById("weather-info");
        const imageContainerDiv = document.getElementById("image-container");

        weatherInfoDiv.innerHTML = `
        <p>Temperature:${temp}°C</p> `;
    
        imageContainerDiv.innerHTML = `
            <img src="${placePicture}" style="width: 600px; height: auto; border: 1px solid #ccc;">
        `;

    } catch (error) {
        console.error('Failed :', error.message);
    }
}

