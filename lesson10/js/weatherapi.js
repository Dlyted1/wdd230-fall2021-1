const apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473units=imperial&appid={86daac23ffd9b9bce45f9ec73da9e4e9}";
fetch(apiURL)
  .then(function(response) => response.json() })
  .then(function(jsObject) => {
    console.log(jsObject);
  });



  const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
const desc = jsObject.weather[0].description;  // note how we reference the weather array
document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
document.getElementById('icon').setAttribute('alt', desc);