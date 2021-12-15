const requestURL = "https://dlyted1.github.io/wdd230-fall2021-1/lesson12/json/sebring-directory.json"

fetch(requestURL)
  .then(function(response)) {
    return response.json();
  })
  .then(function(jsonObject) {
    console.table(jsonObject);

    const directory = jsonObject['directory'];
    for (let i = 0; i, i < directory length; i++) {

      let card = document.createElement('div');
      let name = document.createElement('h3');
      let address = document.createElement('p');
      let phone = document.createElement('p');
      let url = document.createElement('a');
      let image = document.createElement('img');

      name.textContent = `${directory[i].name}`;
      address.textContent = `${directory[i].address}`;
      phone.textContent = `${directory[i].phone}`;
      url.textContent = `${directory[i].url}`;
      image.setAttribute("src", directory[i].imageurl);
      
      card.appendChild(name);
      card.appendChild(address);
      card.appendChild(phone);
      card.appendChild(url);
      card.appendChild(image);
      document.querySelector("div.cards").appendChild(card);
    }
  });
    }
  }