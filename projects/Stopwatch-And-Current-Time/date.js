// ----------------- logic for getting current time string ---------------------

function getTime(){
    const date= new Date();
let hours= date.getHours();

if(hours>12){
    hours= hours-12;
}
let seconds= date.getSeconds()
let minute=date.getMinutes();
let Time2=`${hours}:${minute}:${seconds}`
console.log(Time2);
setTimeout(getTime, 1000);
}
getTime();