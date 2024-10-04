let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");



let rTime = setInterval(()=>{        
    let futureDate = new Date("10/31/2024").getTime();        
    let nowTime = new Date().getTime();
    let remainingTime = futureDate - nowTime;
        let rDays = Math.floor(remainingTime / (1000 * 60 * 60 *24));
        let rHours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000* 60 * 60));
         let rMinutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000* 60));
        let rSeconds = Math.floor((remainingTime % (1000 * 60)) / (1000));

        days.innerHTML = rDays;
        hours.innerHTML = rHours;
        minutes.innerHTML = rMinutes;
        seconds.innerHTML = rSeconds;

        if(remainingTime < 0){
            clearInterval(rTime);
            days.innerHTML = "00";
            hours.innerHTML = "00";
            minutes.innerHTML = "00";
            seconds.innerHTML = "00";
        }
    },1000)