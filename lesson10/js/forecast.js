// const apiURL = "https://api.openweathermap.org/data/data/2.5/weather?id=5604473&units=imperial&appid=86daac23ffd9b9bce45f9ec73da9e4e9";
const apiURL = "https://api.openweathermap.org/data/2.5/forcast?id=5604473&units=imperial&APPID=86daac23ffd9b9bce45f9ec73da9e4e9";
fetch(apiURL)
.then(response => response.json())
  .then((jsObject) => {
    // console.log(jsObject);

const time = jsObject.list.filter((element) => element.dt_txt.includes('18:00:00'));  // x represents what we are pulling from the array in the list or the array point
// console.log(time);
const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let day = 0;

time.forEach(forecast => {
  let x = new Date(forecast.dt_txt);
  //console.log(thedate);
  document.getElementById('dayofweek' + (day + 1)).textContent = weekdays[x.getDay()];
  document.getElementById('forecast' + (day + 1)).textContent = Math.round(forecast.main.temp);
  document.getElementById('img' + (day + 1)).src = "https://openweathermap.org/img/w" + forecast.weather[0].icon + ".png";
  document.getElementById('img' + (day + 1)).alt = forecast.weather[0].description;
  day++;

  });
});





