const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&APPID=86daac23ffd9b9bce45f9ec73da9e4e9";
fetch(apiURL)
.then((response) => response.json())
  .then((jsObject) => {
    
    document.querySelector("#currently").textContent = jsObject.weather[0].description;
    document.querySelector("#high").textContent = jsObject.main.temp.toFixed(0);
    document.querySelector("#humidity").textContent = jsObject.main.humidity;
    document.querySelector("#windspeed").textContent = jsObject.wind.speed.toFixed(0);
 

//windchill
const temp = document.querySelector("#high").textContent;
const wSpeed = document.querySelector("#windspeed").textContent;
let chill = "";

  if (temp <= 50 && wSpeed > 5) {
    chill = windChill(temp, wSpeed);
  } else {
    chill = "N/A";
  }
  function windChill (temp, wSpeed) {
   let chill = (35.74 + (0.6215 * temp))-(35.75 * Math.pow(wSpeed,0.16)) + (0.4275*temp*Math.pow(wSpeed,0.16));
    return chill.toFixed(0);
  } 
  document.querySelector("#windschill").innerHTML = chill;
});

//5 Day Forecast
const apiURL_forecast = "https://api.openweathermap.org/data/2.5/forecast?id=5585010&units=imperial&APPID=86daac23ffd9b9bce45f9ec73da9e4e9";
fetch(apiURL_forecast)
.then((response) => response.json())
.then((jsObject) => {
 // console.log(jsObject);

const forecastData = jsObject.list.filter((element) => element.dt_txt.includes('18:00:00'));  // x represents what we are pulling from the array in the list or the array point
const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let day = 0;

forecastData.forEach(forecast => {
  let x = new Date(forecast.dt_txt);
  //console.log(forecastData);

  document.getElementById('dayofweek' + (day + 1)).textContent = weekdays[x.getDay()];
  document.getElementById('forecast' + (day + 1)).textContent = Math.round(forecast.main.temp) + ' F';
  document.getElementById('img' + (day + 1)).src = "https://openweathermap.org/img/w/" + forecast.weather[0].icon + '.png';
  document.getElementById('img' + (day + 1)).alt = forecast.weather[0].description
  day++;
  
  });
});

