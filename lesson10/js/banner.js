const weekDay = d.getDay();
const bannerShow = document.querySelector("aside");


if (weekDay == 5) {
   bannerShow.setAttribute("class", "banner");
} else {
    bannerShow.setAttribute("class", "noview"):
}