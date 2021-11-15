const apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={86586ace50f6244d589757e7ab590bcf}";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });