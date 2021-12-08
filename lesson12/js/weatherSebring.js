// Weather Summary
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=4172383&units=imperial&APPID=86daac23ffd9b9bce45f9ec73da9e4e9";
fetch(apiURL)
.then((response) => response.json())
  .then((jsObject) => {
    
    document.querySelector("#currently").textContent = jsObject.weather[0].description;
    document.querySelector("#high").textContent = jsObject.main.temp.toFixed(0);
    document.querySelector("#humidity").textContent = jsObject.main.humidity;
  });