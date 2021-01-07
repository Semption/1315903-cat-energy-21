// Slider
let example = document.querySelector(".example");
let exampleResult = document.querySelector(".example__result");
let slider = document.querySelector(".slider");
let currentSlider = document.querySelector(".slider__item");
let beforeSlide = document.querySelector(".slider__item--before");
let afterSlide = document.querySelector(".slider__item--after");
let sliderBar = document.querySelector(".slider__bar");
let sliderScale = document.querySelector(".slider__scale");
let sliderToggle = document.querySelector(".slider__toggle");
let beforeButton = document.querySelector(".slider__button--before");
let afterButton = document.querySelector(".slider__button--after");

if (slider) {

  example.classList.add("example--before");
  sliderScale.classList.add("slider__scale--before");

  afterButton.addEventListener("click", function (evt) {
    evt.preventDefault();
      if (beforeSlide.classList.contains("slider__item--current")) {
        beforeSlide.classList.remove("slider__item--current");
        afterSlide.classList.add("slider__item--current");
        example.classList.remove("example--before");
        example.classList.add("example--after");
        sliderScale.classList.remove("slider__scale--before");
        sliderScale.classList.add("slider__scale--after");
        exampleResult.classList.remove("example__result--before");
        exampleResult.classList.add("example__result--after");
        sliderToggle.style.left = "95%";
      }
  })

  beforeButton.addEventListener("click", function (evt) {
    evt.preventDefault();
      if (afterSlide.classList.contains("slider__item--current")) {
        afterSlide.classList.remove("slider__item--current");
        beforeSlide.classList.add("slider__item--current");
        example.classList.remove("example--after");
        example.classList.add("example--before");
        sliderScale.classList.remove("slider__scale--after");
        sliderScale.classList.add("slider__scale--before");
        exampleResult.classList.remove("example__result--after");
        exampleResult.classList.add("example__result--before");
        sliderToggle.style.left = "0%";
      }
  })


  sliderBar.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (sliderBar && sliderScale.classList.contains("slider__scale--before")) {
          beforeSlide.classList.remove("slider__item--current");
          afterSlide.classList.add("slider__item--current");
          example.classList.remove("example--before");
          example.classList.add("example--after");
          sliderScale.classList.remove("slider__scale--before");
          sliderScale.classList.add("slider__scale--after");
          sliderToggle.style.left = "95%";
    } else {
      afterSlide.classList.remove("slider__item--current");
      beforeSlide.classList.add("slider__item--current");
      example.classList.remove("example--after");
      example.classList.add("example--before");
      sliderScale.classList.remove("slider__scale--after");
      sliderScale.classList.add("slider__scale--before");
      sliderToggle.style.left = "0%";
    }
  })
}

//Menu
let menuButton = document.querySelector(".page-header__toggle");
let mainNav = document.querySelector(".main-nav");

mainNav.classList.add("main-nav--hidden");
menuButton.classList.add("page-header__toggle--closed");


menuButton.addEventListener("click", function (evt) {
  if(menuButton.classList.contains("page-header__toggle--closed")) {
    menuButton.classList.add("page-header__toggle--open");
    mainNav.classList.remove("main-nav--hidden");
    menuButton.classList.remove("page-header__toggle--closed");
  }
  else {
    menuButton.classList.remove("page-header__toggle--open");
    menuButton.classList.add("page-header__toggle--closed");
    mainNav.classList.add("main-nav--hidden");
  }
})

//Form

let mainForm = document.querySelector(".selection__form");

if(mainForm) {

let buttonSend = document.querySelector(".selection__submit");
let namefield = mainForm.querySelector("input#name-field");
let weightfield = mainForm.querySelector("input#weight-field");
let emailfield = mainForm.querySelector("input#email-field");
let phonefield = mainForm.querySelector("input#phone-field");
var requiredField = [namefield,weightfield,emailfield,phonefield];

  buttonSend.addEventListener("click", function (evt) {
    if (namefield.value.length <= 0 || weightfield.value.length <= 0 || emailfield.value.length <= 0 || phonefield.value.length <= 0) {
      evt.preventDefault();
      for (i=0; i<=(requiredField.length-1); i++) {
        requiredField[i].classList.remove("selection__field--error");
        if (requiredField[i].value.length <= 0) {
          requiredField[i].classList.add("selection__field--error");
        }
      }
    }
  })
}
