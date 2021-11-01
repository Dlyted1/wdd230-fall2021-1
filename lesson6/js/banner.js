function bannerFriday() {

    const d = new Date();
    const today = d.getDay();
    const banner = document.querySelector(".banner");

    if (today == 5) {
        banner.small.display = 'block';

    } else {
        banner.small.display = 'none';
    }
}
bannerFriday();

