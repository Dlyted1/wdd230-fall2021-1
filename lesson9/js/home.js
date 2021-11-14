// store the resource, the URL of the JSON file into a const variable to start. //
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
    
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    const theTowns = towns.filter((town) =>
      town.name ==='Preston' || town.name === 'Fish Haven' || town.name === 'Soda Springs');
     // create the card and each element needed
     theTowns.forEach((theTowns) => {
     let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let motto = document.createElement('p');
      let yearFounded = document.createElement('p');
      let currentPopulation = document.createElement('p');
      let averageRainfall = document.createElement('p');
      let data = document.createElement('div');
      let image = document.createElement('img');

    // now populate the elements with the data from the JSON file
    // h2.innerHTML = prophet.name + ' <span style="color:navy;">' + prophet.lastname + '</span'; // `  can use template literal here instead see below line to replace above
    h2.innerHTML = `${theTowns.name}`;
    motto.innerHTML = `<i>${theTowns.motto}</i>`;
    yearFounded.innerHTML = `<b>Year Founded:</b> ${theTowns.yearFounded}`;
    currentPopulation.innerHTML = `<b>Population:</b> ${theTowns.currentPopulation}`;
    averageRainfall.innerHTML = `<b>Average Rain Fall:</b> ${theTowns.averageRainfall}`;
    data.className = ('data');
    image.setAttribute('src', `images9/${theTowns.photo}`);
    image.setAttribute('alt', `${theTowns.name} `);
    // build the Prophet cards
    card.appendChild(data);
    data.appendChild(h2);
    data.appendChild(motto);
    data.appendChild(yearFounded);
    data.appendChild(currentPopulation);
    data.appendChild(averageRainfall);
    card.appendChild(image);

    
    document.querySelector('div.cards').appendChild(card);
   });  
  });