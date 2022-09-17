/*
const devBtn = document.querySelector("#devBar-bar");
let devOpen = false;
devBtn.addEventListener("click", () => {
  if (!devOpen) {
    devBtn.classList.add("openFrontEnd");
    devOpen = true;
  } else {
    devBtn.classList.remove("openFrontEnd");
    devOpen = false;
  }
});
*/
/*
// Digital Clock
class DigitalClock {
  constructor(element) {
    this.element = element;
  }

  start() {
    this.update();
    setInterval(() => {
      this.update();
    }, 500);
  }

  update() {
    const parts = this.getTimeParts();
    const minuteFormatted = parts.minute.toString().padStart(2, "0");
    const timeFormatted = `${parts.hour}:${minuteFormatted}`;
    const amPm = parts.isAm ? "AM" : "PM";

    this.element.querySelector(
      ".digitalClockV1__time"
    ).textContent = timeFormatted;
    this.element.querySelector(".digitalClockV1__ampm").textContent = amPm;
  }

  getTimeParts() {
    const now = new Date();

    return {
      hour: now.getHours() % 12 || 12,
      minute: now.getMinutes(),
      isAm: now.getHours() < 12,
    };
  }
}

const clockElement = document.querySelector(".digitalClockV1");
const clockObject = new DigitalClock(clockElement);

clockObject.start();

// Analog Clock

setInterval(setClock, 1000);

const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");

function setClock() {
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

  setRotation(secondHand, secondsRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}

setClock();

// Names of the Week, Month, Year

// Date
var date = new Date();
document.getElementById("date").innerHTML = date.getDate();

// Day
var day = new Date();
var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
document.getElementById("day").innerHTML = days[day.getDay()];

// Month
var month = new Date();
var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
document.getElementById("month").innerHTML = months[month.getMonth()];

// Year
var year = new Date();
document.getElementById("year").innerHTML = year.getFullYear();
*/
/*

// Show Slider
const imgSlider = document.querySelector(".imgSliderShow");
const sliderBtn = document.getElementById('showSlider');
let sliderShow = false;
showSlider.addEventListener("click", () => {
  if (!sliderShow) {
    imgSlider.classList.add("showSlider");
    sliderBtn.classList.add("projectBtnActive")
    sliderShow = true;
  } else {
    imgSlider.classList.remove("showSlider");
    sliderBtn.classList.remove("projectBtnActive")
    sliderShow = false;
  }
});

// Show Gallery
const imgGallery = document.querySelector(".imgGalleryShow");
const galleryBtn = document.getElementById('showGallery');
let galleryShow = false;
showGallery.addEventListener("click", () => {
  if (!galleryShow) {
    imgGallery.classList.add("showGallery");
    galleryBtn.classList.add("projectBtnActive")
    galleryShow = true;
  } else {
    imgGallery.classList.remove("showGallery");
    galleryBtn.classList.remove("projectBtnActive")
    galleryShow = false;
  }
});


// Show Product Gallery
const productGallery = document.querySelector(".imgProductGalleryShow");
const productBtn = document.getElementById('showProduct');
let productShow = false;
showProduct.addEventListener("click", () => {
  if (!productShow) {
    productGallery.classList.add("showProduct");
    productBtn.classList.add('projectBtnActive');
    productShow = true;
  } else {
    productGallery.classList.remove("showProduct");
    productBtn.classList.remove('projectBtnActive');
    productShow = false;
  }
});
*/
