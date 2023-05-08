"use strict";

let doubleDigit = (time) => {
  return time < 10 ? "0" + time : time;
};

// countdown timer

let htmlDays = document.getElementById("days").firstElementChild;
let htmlHours = document.getElementById("hours").firstElementChild;
let htmlMins = document.getElementById("minutes").firstElementChild;
let htmlSecs = document.getElementById("seconds").firstElementChild;

const weddingDay = "Jun 6, 2024 00:00:00";
let countDownDate = new Date(weddingDay).getTime();

let countDownClock = setInterval(function () {
  let now = new Date().getTime();
  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  htmlDays.innerHTML = days;
  htmlHours.innerHTML = doubleDigit(hours);
  htmlMins.innerHTML = doubleDigit(minutes);
  htmlSecs.innerHTML = doubleDigit(seconds);

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countDown").innerHTML = "IT'S TODAY";
  }
}, 1000);

//From event handler

//TODO - When multiple entries need to loop through and submit both, build object?
