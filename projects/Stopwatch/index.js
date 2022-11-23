// 23 nov tasks--------------stopwatch
// Features -
// It should run till 59 minutes 59 seconds
// It should have 3 Buttons - Start, Stop & Reset
// Stop Button should be enabled only if stopwatch is running

let startBtn = document.getElementById("startbtn");
let resetBtn = document.getElementById("resetbtn");
let count= true;

let minute = 0;
let second = 0;
let miliSecond = 0;

// startBtn.addEventListener("click", function rev () {
//   count = true;
//   stopWatch();
//   document.getElementById("startbtn").innerHTML='Stop';
//   startBtn.addEventListener('click',function(){
//     document.getElementById("startbtn").innerHTML='Start';
//     count = false;
//   });
// });

function start(){
    startBtn.addEventListener('click',()=>{
        count=true;
        stopWatch();
        document.getElementById("startbtn").innerHTML='Stop';
        startBtn.addEventListener('click',()=>{
            count=false; 
            document.getElementById("startbtn").innerHTML='Start'
        });
        startBtn.addEventListener('click',start);
    });
}
start();
resetBtn.addEventListener("click", function () {
  count = false;
  minute = 0;
  second = 0;
  miliSecond = 0;
  document.getElementById("min").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("miliSec").innerHTML = "00";
});

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


