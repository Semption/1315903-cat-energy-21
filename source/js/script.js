//Map

const iframeMaps = document.querySelector(".page-footer__yamaps-iframe");
iframeMaps.classList.remove("page-footer__nojs");

// Slider
const example = document.querySelector(".example");
const exampleResult = document.querySelector(".example__result");
const slider = document.querySelector(".slider");
const currentSlider = document.querySelector(".slider__item");
const beforeSlide = document.querySelector(".slider__item--before");
const afterSlide = document.querySelector(".slider__item--after");
const sliderScale = document.querySelector(".slider__scale");
const sliderToggle = document.querySelector(".slider__toggle");
const beforeButton = document.querySelector(".slider__button--before");
const afterButton = document.querySelector(".slider__button--after");

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


  sliderToggle.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (sliderToggle && sliderScale.classList.contains("slider__scale--before")) {
      beforeSlide.classList.remove("slider__item--current");
      afterSlide.classList.add("slider__item--current");
      example.classList.remove("example--before");
      example.classList.add("example--after");
      sliderScale.classList.remove("slider__scale--before");
      sliderScale.classList.add("slider__scale--after");
      exampleResult.classList.remove("example__result--before");
      exampleResult.classList.add("example__result--after");
      sliderToggle.style.left = "95%";
    } else {
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
}

//Menu
const menuButton = document.querySelector(".page-header__toggle");
const mainNav = document.querySelector(".main-nav");

mainNav.classList.add("main-nav--hidden");
menuButton.classList.add("page-header__toggle--closed");


menuButton.addEventListener("click", function (evt) {
  if (menuButton.classList.contains("page-header__toggle--closed")) {
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

const mainForm = document.querySelector(".selection__form");

if (mainForm) {

  const buttonSend = document.querySelector(".selection__submit");
  const nameField = mainForm.querySelector("input#name-field");
  const weightField = mainForm.querySelector("input#weight-field");
  const emailField = mainForm.querySelector("input#email-field");
  const phoneField = mainForm.querySelector("input#phone-field");
  var requiredField = [nameField, weightField, emailField, phoneField];

  buttonSend.addEventListener("click", function (evt) {
    if (nameField.value.length <= 0 || weightField.value.length <= 0 || emailField.value.length <= 0 || phoneField.value.length <= 0) {
      evt.preventDefault();
      for (let i = 0; i <= (requiredField.length - 1); i++) {
        requiredField[i].classList.remove("selection__field--error");
        if (requiredField[i].value.length <= 0) {
          requiredField[i].classList.add("selection__field--error");
        }
      }
    }
  })
}

//Yandex Map
ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
    center: [59.938635, 30.323118],
    zoom: 17
  }, {
    searchControlProvider: 'yandex#search'
  }),

    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {

    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: 'img/map-pin-d.png',
      // Размеры метки.
      iconImageSize: [113, 106],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-45, -78]
    });

  myPlacemarkMobile = new ymaps.Placemark(myMap.getCenter(), {

  }, {
    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: 'default#image',
    // Своё изображение иконки метки.
    iconImageHref: 'img/map-pin.png',
    // Размеры метки.
    iconImageSize: [57, 53],
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    iconImageOffset: [-15, -48]
  });

  if (window.innerWidth < 768) {
    myMap.geoObjects
      .add(myPlacemarkMobile);
  }
  else {
    myMap.geoObjects
      .add(myPlacemark);
  }
});
