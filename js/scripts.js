const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let interValId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
  if (slides.length > 0) {
    slides[slideIndex].classList.add("displaySlide");
    interValId = setInterval(nextSlide, 5000);
  }
}

function showSlide(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }
  slides.forEach((slide) => {
    slide.classList.remove("displaySlide");
  });
  slides[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
  clearInterval(interValId);
  slideIndex--;
  showSlide(slideIndex);
  interValId = setInterval(nextSlide, 5000);
}

function nextSlide() {
  clearInterval(interValId);
  slideIndex++;
  showSlide(slideIndex);
  interValId = setInterval(nextSlide, 5000);
}
