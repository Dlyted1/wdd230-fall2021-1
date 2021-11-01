
function bannerFriday() {

    const d = new Date();
    const today = d.getDay();
    const banner = document.querySelector(".banner");

    if (today == 5) {
        banner.display = 'block';

    } else {
        banner.display = 'none';
    }
}
bannerFriday();

