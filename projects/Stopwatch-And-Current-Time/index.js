let startBtn = document.getElementById("startbtn");
let resetBtn = document.getElementById("resetbtn");
let count = true;
let minute = 0;
let second = 0;
let miliSecond = 0;

// ------------- Adding event listeners to the buttons ---------------------
// ------------- Start button---------------------

startBtn.addEventListener("click", start);
function start() {
  count = true;
  stopWatch();
  startBtn.removeEventListener("click", start);
  document.getElementById("startbtn").innerHTML = "Stop";
  startBtn.addEventListener("click", Stop);
}

// --------------------stop button ------------------

function Stop() {
  count = false;
  document.getElementById("startbtn").innerHTML = "Start";
  startBtn.removeEventListener("click", Stop);
  startBtn.addEventListener("click", start);
}

// ------------------reset button ---------------------

resetBtn.addEventListener("click", reset);
function reset() {
  count = false;
  minute = 0;
  second = 0;
  miliSecond = 0;
  document.getElementById("min").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("miliSec").innerHTML = "00";
  document.getElementById("startbtn").innerHTML = "Start";
  startBtn.addEventListener("click", start);
}

// --------------------- Main logic for the stopwatch --------------------

function stopWatch() {
  if (count) {
    miliSecond++;
    if (miliSecond == 100) {
      second++;
      miliSecond = 0;
    }
    if (second == 60) {
      minute++;
      second = 0;
    }
    if (minute == 60) {
      //  ------------code for stop at 59 minutes and 59 second.---------------
      reset();
    }
    let minString = minute;
    let secString = second;
    let miliSecondString = miliSecond;

    if (minute < 10) {
      minString = "0" + minString;
    }

    if (second < 10) {
      secString = "0" + secString;
    }

    if (miliSecond < 10) {
      miliSecondString = "0" + miliSecondString;
    }
    document.getElementById("min").innerHTML = minString;
    document.getElementById("sec").innerHTML = secString;
    document.getElementById("miliSec").innerHTML = miliSecondString;
    setTimeout(stopWatch, 10);
  }
}

// ----------- code for getting current time string--------------------------

function getTime() {
  const date = new Date();
  let hours = date.getHours();
  let toggle = true;
  console.log(hours);
  if (hours >= 12 && hours < 24) {
    toggle = false;
  }
  if (!toggle) {
    document.getElementById("Toggle").innerHTML = "PM";
  }
  if (hours == 0) {
    hours = 12;
  }
  if (hours > 12) {
    hours = hours - 12;
  }

  let seconds = date.getSeconds();
  let minute = date.getMinutes();

  document.getElementById("currentHours").innerHTML = hours;
  document.getElementById("currentMin").innerHTML = minute;
  document.getElementById("currentSec").innerHTML = seconds;
  setTimeout(getTime, 1000);
}
getTime();
