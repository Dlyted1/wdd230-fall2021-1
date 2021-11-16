// store the resource, the URL of the JSON file into a const variable to start. //
const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
.then(function(resp) { return resp.json() }) // Convert data to json
.then(function(data) {
  console.log(data);
})
.catch(function() {
  // catch any errors
});
}

window.onload = function() {
weatherBalloon( 6167865 );
} 
  