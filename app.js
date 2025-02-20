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