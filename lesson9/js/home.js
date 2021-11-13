// store the resource, the URL of the JSON file into a const variable to start. //
const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    if (!response.ok) {
      throw Error(response.statusText);
    } else {
      return response.json();
    }
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    prophets.forEach((prophet) => {
     // create the card and each element needed
     let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let birthplace = document.createElement('p');
      let birthdate = document.createElement('p');
      let image = document.createElement('img');

    // now populate the elements with the data from the JSON file
    // h2.innerHTML = prophet.name + ' <span style="color:navy;">' + prophet.lastname + '</span'; // `  can use template literal here instead see below line to replace above
    h2.innerHTML = `${prophet.name} <span class="highlight">${prophet.lastname}</span`;
    birthdate.innerHTML = `Date of Birth: ${prophet.birthdate}`;
    birthplace.innerHTML = `Place of Birth: ${prophet.birthplace}`;
    image.setAttribute('src', prophet.imageurl);
    image.setAttribute('alt', `${prophet.name} ${prophet.lastname}-${prophet.order}`);
    // build the Prophet cards
    card.appendChild(h2);
    card.appendChild(birthdate);
    card.appendChild(birthplace);
    card.appendChild(image);

    
    document.querySelector('div.cards').appendChild(card);
   });  
  });