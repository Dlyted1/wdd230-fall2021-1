const requestURL = "https://dlyted1.github.io/wdd230-fall2021-1/lesson12/data/sebring-directory.json"

fetch(requestURL)
  .then(function(response) {
    return response.json()
  })
  .then(function (jsonObject) {
    console.log(jsonObject);

    const directory = jsonObject["directory"];
    for (let i = 0; i, i < directory length; i++) {

      let card = document.createElement("section");
      let name = document.createElement("h3");
      let address = document.createElement("p");
      let phone = document.createElement("p");
      let url = document.createElement("a");
      let image = document.createElement("img");

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

      const cards = document.querySelector(".cards");
      cards.appendChild(card);
      cards.classList.add("cards_view_grid");

    }
  });

  function listView() {
    const cards = document.querySelector(".cards");
    const listBtn = document.querySelector(".btn_list");
    const gridBtn = document.querySelector(".btn_grid");

    cards.classList.remove("cards_view_grid");
    cards.classList.add("cards_view_list");
    gridBtn.classList.remove("active");
    listBtn.classList.add("active");
}

function gridView() {
    const cards = document.querySelector(".cards");
    const listBtn = document.querySelector(".btn_list");
    const gridBtn = document.querySelector(".btn_grid");

    cards.classList.remove("cards_view_list");
    cards.classList.add("cards_view_grid");
    listBtn.classList.remove("active");
    gridBtn.classList.add("active");
}

// for the scroll
$(function() {
    $('.scrollup').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    })
})

$(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
        $(".scrollup").fadeIn();
    } else {
        $(".scrollup").fadeOut();
    }
});