// store the resource, the URL of the JSON file into a const variable to start. //
const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    // const prophets = jsonObject['prophets'];
    // prophets.forEach((prophet) => {
    // let card = document.createElement('section');
    // let h2 = document.createElement('h2');
    //  h2.innerHTML =
    //  prophet.name +
    //  ' <span style="color:navy;">' +
    //  prophet.lastname +
    //  '</span'; // ` challenge
    //  card.appendChild(h2);
    //  document.querySelector('div.cards').appendChild(card);
    // });  
  });

  