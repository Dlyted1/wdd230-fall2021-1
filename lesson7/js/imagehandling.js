const images = document.querySelectorAll("[data-src");

function preLoadImage(img) {
  const src = img.getAttribute("data-src");
  if(!src) {
    return;
  }

  img.src = src;
}

const ImgOptions = {
  threshold: 0,
  rootMargin: "0px 0px 100px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
  if (!entry.isIntersecting) {
    return;
  } else {
    preLoadImage(entry.target);
    imgObserver.unobserve(entry.target);
  }
});
}, imgOptions);

images.forEach(image => {
  imgObserver.observe(image);

});