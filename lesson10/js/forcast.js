// const apiURL = "https://api.openweathermap.org/data/data/2.5/weather?id=5604473&units=imperial&appid=86daac23ffd9b9bce45f9ec73da9e4e9";
const apiURL = "https://api.openweathermap.org/data/2.5/forcast?id=5604473&units=imperial&APPID=86daac23ffd9b9bce45f9ec73da9e4e9";
fetch(apiURL)
.then((response) => response.json())
  .then((jsObject) => {
    // console.log(jsObject);

const noon = jsObject.list.filter ( x => x.dt_txt.includes('12:00:00'));  // x represents what we are pulling from the array in the list or the array point
// console.log(noon);
const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let day = 0;

noon.forEach(forcast => {
  let thedate = new Date(forcast.dt_txt);
  //console.log(thedate);
  document.querySelector(`#dayofweek${day+1}`).textContent = weekdays[thedate.getDay()];
  day++;
  document.querySelector(`#forcast${day+1}`).textContent = forcast.main.temp;

});


const currentTemp = document.querySelector('cc-temp');
const weathericon = document.querySelector('cc-img');

currentTemp.textContent = jsObject.main.temo.toFixed(0);
let imgsrc = `https://openweathermap.org.img/w/${jsObject.weather[0].icon}.png`;
let imgalt = jsObject.weather[0].description;

currentTemp.textContent = jsObject.main.temo.toFixed(0);
weathericon.setAttribute('src', imgsrc);
weathericon.setAttribute('alt', imgalt);

  });





