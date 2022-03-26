console.log('Hello')

// API key for reference
const weather_api_key = '7ed156b6edb91e815b025f6d94f6ce0c'

// const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
// const data = await res.json()
const getWeatherByZip = async (zip) => {
    
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=7ed156b6edb91e815b025f6d94f6ce0c&units=imperial`);
    const weather = await res.json()

    console.log(weather)
    // City
    console.log(weather.name)
    // Coords
    console.log(weather.coord.lat)
    console.log(weather.coord.lon)
    // Temp
    console.log(weather.main.temp)
    // Min
    console.log(weather.main.temp_min)
    // Max
    console.log(weather.main.temp_max)
    // Humidity
    console.log(weather.main.humidity)
    // Forecast
    console.log(weather.weather[0].main)
    // Forecast Description
    console.log(weather.weather[0].description)

    return weather
};

const getWeatherByCity = async (city) => {

    const res2 = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7ed156b6edb91e815b025f6d94f6ce0c&units=imperial`)
    const weatherbycity = await res2.json()

    console.log(weatherbycity)

    return weatherbycity
};

const loadWeather = async () => {
    const myInput = document.querySelector('input').value
    let weather = undefined

    // if it's a number search by zip code, if not search by city name
    if (isNaN(myInput)){
        weather = await getWeatherByCity(myInput);
    } else {
        weather = await getWeatherByZip(myInput);
    };
    
    createWeather(weather);
};

const createWeather = (weather) => {
    document.getElementById('city').innerHTML=weather.name;
    document.getElementById('lat').innerHTML=`Lat: ${weather.coord.lat}`;
    document.getElementById('long').innerHTML=`Long: ${weather.coord.lon}`;
    document.getElementById('temp').innerHTML=`${Math.round(weather.main.temp)}\xB0F`;
    document.getElementById('l-temp').innerHTML=`${Math.round(weather.main.temp_min)}\xB0F`;
    document.getElementById('h-temp').innerHTML=`${Math.round(weather.main.temp_max)}\xB0F`;
    document.getElementById('humidity').innerHTML=`${weather.main.humidity}%`;
    document.getElementById('forecast').innerHTML=weather.weather[0].main;
    document.getElementById('f-desc').innerHTML=weather.weather[0].description;
};


const clearData = () => {
    document.querySelector('section').innerHTML=''
};

// clear button
const clear = document.getElementsByClassName('btn-danger')[0]
// add event listener to button
clear.addEventListener('click', clearData)


