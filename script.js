let startTime, updateTime, difference;
let timerInterval;
let isRunning = false;

const display = document.getElementById("display");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

function updatedisplay(time) {
  let hours = Math.floor(time / 3600000);
  let minutes = Math.floor((time & 3600000) / 60000);
  let seconds = Math.floor((time % 60000) / 1000);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  display.textContent = `${hours}:${minutes}:${seconds}`;
}
function startTimer() {
  if (!isRunning) {
    isRunning = true;
    startTime = Date.now() - (difference || 0);
    timerInterval = setInterval(function () {
      updateTime = Date.now();
      difference = updateTime - startTime;
      updatedisplay(difference);
    }, 1000);
  }
}

function stopTimer() {
  if (isRunning) {
    isRunning = false;
    clearInterval(timerInterval);
  }
}
function resetTimer() {
  stopTimer();
  difference = 0;
  updatedisplay(0);
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);
