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
    let place = document.createElement("p");
    let image = document.createElement("img");

    h3.textContent = `${directory[i].name} ${directory[i].lastname}`;
    address.textContent = `Date of Birth: ${directory[i].address}`;
    place.textContent = `Place of Birth: ${directory[i].birthplace}`;
    image.setAttribute("src", directory[i].imageurl);
    image.setAttribute(
      "alt",
      `${directory[i].name} ${directory[i].lastname}-${directory[i].order}`
    );
    card.appendChild(h3);
    card.appendChild(address);
    card.appendChild(place);
    card.appendChild(image);
    document.querySelector("div.cards").appendChild(card);
  }
});