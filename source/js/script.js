
let slider = document.querySelector(".slider");
let currentSlider = document.querySelector(".slider__item");
let beforeSlide = document.querySelector(".slider__item--before");
let afterSlide = document.querySelector(".slider__item--after");
let sliderBar = document.querySelector(".slider__bar");
let sliderToggle = document.querySelector(".slider__toggle");
let beforeButton = document.querySelector(".slider__button--before");
let afterButton = document.querySelector(".slider__button--after");

if (slider) {
  afterButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    beforeSlide.classList.remove("slider__item--current");
    afterSlide.classList.add("slider__item--current");
    sliderBar.style.margin = "3px 4px 0 43px";
    sliderToggle.style.left = "95%";
  })

  beforeButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    afterSlide.classList.remove("slider__item--current");
    beforeSlide.classList.add("slider__item--current");
    sliderBar.style.margin = "3px 43px 0 4px";
    sliderToggle.style.left = "0%";
  })
}
