// Digital Clock
let DigitalClock = () => {
       let date = new Date();
       let hours = date.getHours();
       let sValue = date.getSeconds();
       let mValue = date.getMinutes();
       let minutes = mValue < 10 ? '0' + mValue : mValue;
       let seconds = sValue < 10 ? '0' + sValue : sValue;
       let PmAm = hours <= 12 ? "AM" : "PM";
       minutes.toString();
       if(hours > 12){
          hours = hours - 12; 
       }

       return `${hours}:${minutes}:${seconds} ${PmAm}`;
}
let time;
let clock = document.getElementById('digital-clock-value');

setInterval(()=>{
   time = DigitalClock();
   clock.innerHTML = time;
} , 1000);
const AnalogClock = () => {
   setInterval(()=>{
   let date = new Date();
   let hours = date.getHours();
   let minutes = date.getMinutes();
   let seconds = date.getSeconds();
   let hDeg =(hours * 30) + (minutes * 0.5) + (seconds * (0.5 / 60));
   let mDeg = (minutes*6)+(seconds*0.1);
   let sDeg = seconds * 6;
   document.querySelector('.minute-hand').style.transform = `rotate(${mDeg}deg)`;
   document.querySelector('.hour-hand').style.transform = `rotate(${hDeg}deg)`;
   document.querySelector('.second-hand').style.transform = `rotate(${sDeg}deg)`;
}, 1000);
}
AnalogClock();