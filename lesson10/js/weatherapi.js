const apiURL = "http://api.openweathermap.org/data/data/2.5/forecast?id=5604473&appid=86daac23ffd9b9bce45f9ec73da9e4e9";
fetch(apiURL)
.then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });
  