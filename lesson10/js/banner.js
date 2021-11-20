
const banner = document.querySelector('.banner');
const weekDay = new Date().getDay();

if (weekDay === 5) {
   banner.classList.add('viewable');
}