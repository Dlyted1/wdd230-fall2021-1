// store the resource, the URL of the JSON file into a const variable to start. //
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

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
    const towns = jsonObject['towns'];
    towns.forEach((town) => {
     // create the card and each element needed
     let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let motto = document.createElement('p');
      let yearFounded = document.createElement('p');
      let currentPopulation = document.createElement('p');
      let averageRainfall = document.createElement('p');

      let image = document.createElement('img');

    // now populate the elements with the data from the JSON file
    // h2.innerHTML = prophet.name + ' <span style="color:navy;">' + prophet.lastname + '</span'; // `  can use template literal here instead see below line to replace above
    h2.innerHTML = `${town.name} <span class="highlight">${town.name}</span`;
    motto.innerHTML = `${town.motto}`;
    yearFounded.innerHTML = `Year Founded: ${town.yearFounded}`;
    currentPopulation.innerHTML = `Population: ${town.currentPopulation}`;
    averageRainfall.innerHTML = `Average Rain Fall: ${town.averageRainfall}`;
    image.setAttribute('src', town.imageurl);
    image.setAttribute('alt', `${town.name} ${town.lastname}-${town.order}`);
    // build the Prophet cards
    card.appendChild(h2);
    card.appendChild(motto);
    card.appendChild(yearFounded);
    card.appendChild(currentPopulation);
    card.appendChild(averageRainfall);
    card.appendChild(image);

    
    document.querySelector('div.cards').appendChild(card);
   });  
  });