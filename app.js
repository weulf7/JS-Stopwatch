"use strict";
const miliSeconds = document.querySelector(".miliseconds");
const seconds = document.querySelector(".seconds");

let mS = 0;
let sec = 0;

const startButton = document.querySelector(".start-btn");
const stopButton = document.querySelector(".stop-btn");
const resetButton = document.querySelector(".reset-btn");
let t;

function stopwatch() {
  mS++;
  if (mS < 10) {
    miliSeconds.textContent = "0" + mS;
  } else {
    miliSeconds.textContent = mS;
  }
  if (mS === 60) {
    sec++;
    if (sec < 10) {
      seconds.textContent = "0" + sec;
    } else {
      seconds.textContent = sec;
    }
    mS = 0;
    miliSeconds.textContent = "00";
  }
}
function startStopWatch() {
  t = setInterval(stopwatch, 20);
}
startButton.addEventListener("click", function () {
  startStopWatch();
});

stopButton.addEventListener("click", function () {
  clearInterval(t);
});

resetButton.addEventListener("click", function () {
  mS = 0;
  miliSeconds.textContent = "00";
  sec = 0;
  seconds.textContent = "00";
  clearInterval(t);
});
