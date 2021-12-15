const requestURL = "https://dlyted1.github.io/wdd230-fall2021-1/lesson12/data/sebring-directory.json"

fetch(requestURL)
.then(function(response) {
  return response.json()
 }) // Convert data to json
.then(function (data) {
  console.log(data);
  const directory = data["directory"];
  for (let i = 0; i < directory.length; i++) {
    let card = document.createElement("section");
    let h3 = document.createElement("h3");
    let address = document.createElement("p");
    let phone = document.createElement("p");
    let image = document.createElement("img");
    let url = document.createElement("a");

    h3.textContent = `${directory[i].name} ${directory[i].lastname}`;
    address.textContent = `${directory[i].address}`;
    phone.textContent = `${directory[i].phone}`;
    image.setAttribute("src", directory[i].imageurl);
    image.setAttribute(
      "alt",
      `${directory[i].name} -${directory[i].order}`
    );
    url.textContent = `${directory[i].url}`;
    
    card.appendChild(image);
    card.appendChild(h3);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(url);
    
    document.querySelector("div.cards").appendChild(card);
  }
});