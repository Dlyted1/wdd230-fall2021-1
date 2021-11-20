// const apiURL = "https://api.openweathermap.org/data/data/2.5/weather?id=5604473&units=imperial&appid=86daac23ffd9b9bce45f9ec73da9e4e9";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=86daac23ffd9b9bce45f9ec73da9e4e9";
fetch(apiURL)
.then((response) => response.json())
  .then((jsObject) => {
    // console.log(jsObject);
document.getElementById('current-temp').textContent = jsObject.main.temp;
const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
const desc = jsObject.weather[0].description;  // note how we reference the weather array
document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
document.getElementById('icon').setAttribute('alt', desc);

});  

// other method with template lieral instead:

// const apiURL = "https://api.openweathermap.org/data/2.5/forcast?id=5604473&units=imperial&APPID=86daac23ffd9b9bce45f9ec73da9e4e9";
// fetch(apiURL)
// .then((response) => response.json())
// .then((jsObject) => {
    // console.log(jsObject);

// const currentTemp = document.querySelector('cc-temp');
// const weathericon = document.querySelector('cc-img');

// currentTemp.textContent = jsObject.main.temo.toFixed(0);
// let imgsrc = `https://openweathermap.org.img/w/${jsObject.weather[0].icon}.png`;
// let imgalt = jsObject.weather[0].description;

// currentTemp.textContent = jsObject.main.temp.toFixed(0);
// weathericon.setAttribute('src', imgsrc);
// weathericon.setAttribute('alt', imgalt);

//   )}; 

