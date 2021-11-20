
// Weather Summary
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=86daac23ffd9b9bce45f9ec73da9e4e9";
fetch(apiURL)
.then((response) => response.json())
  .then((town) => {
    let description = town.weather[0].description;
    document.getElementById('currently').innerHTML = description.charAt(0).toUpperCase() + description.slice(1);
    document.getElementById('high').innerHTML = Mathround(town.main.temp);
    document.getElementById('hummidity').innerHTML = town.main.humidity;
    document.getElementById('windspeed').innerHTML = Math.round(town.wind.speed);
  });

//windchill
const temp = document.querySelector('#high').innerHTML;
const wSpeed = document.querySelector('#windspeed').innerHTML;

let windChill= (35.74 + (0.6215 * temp))-(35.75 * Math.pow(wSpeed,0.16)) + (0.4275*temp*Math.pow(wSpeed,0.16));
  if (temp <= 50 && windspeed > 5) {
    windchill = Math.round(windchill);
  } else {
    windchill = "N/A";
  }
  document.querySelector('#windchill').textContent = windchill;

//5 Day Forecast
const apiURL_forecast = "https://api.openweathermap.org/data/2.5/forcast?id=5604473&units=imperial&APPID=86daac23ffd9b9bce45f9ec73da9e4e9";
fetch(apiURL_forecast)
.then((response => response.json())
  .then((jsObject) => {
    // console.log(jsObject);

const forecastData = jsObject.list.filter((element) => element.dt_txt.includes('18:00:00'));  // x represents what we are pulling from the array in the list or the array point
// console.log(time);
const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let day = 0;

forecastData.forEach(forecast => {
  let x = new Date(forecast.dt_txt);
  //console.log(forecastData);
  document.getElementById('dayofweek' + (day + 1)).textContent = weekdays[x.getDay()];
  document.getElementById('forecast' + (day + 1)).textContent = Math.round(forecast.main.temp);
  document.getElementById('img' + (day + 1)).src = "https://openweathermap.org/img/w" + forecast.weather[0].icon + ".png";
  document.getElementById('img' + (day + 1)).alt = forecast.weather[0].description;
  day++;

  });
});





