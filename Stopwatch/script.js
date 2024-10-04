let [hours, minutes, seconds] = [0,0,0];
let time = document.getElementById("time");
const stopBtn = document.querySelector(".fa-circle-stop");
const playBtn = document.querySelector(".fa-circle-play");
const resetBtn = document.querySelector(".fa-arrow-rotate-left");

let timer = null;
function stopwatch(){
        seconds++;
        if(seconds == 60){
            minutes++;
            seconds = 0;
            if(minutes == 60){
                hours++;
                minutes = 0
            }
        }
        let h = hours<10 ? `0${hours}` : hours;
        let m = minutes<10 ? `0${minutes}` : minutes;
        let s = seconds<10 ? `0${seconds}` : seconds;
        time.innerHTML = `${h}:${m}:${s}`
};

playBtn.addEventListener("click", ()=>{
    if(timer !== null){
        clearInterval(timer);
    }
    timer = setInterval(stopwatch, 1000)
});
resetBtn.addEventListener("click", ()=>{
    clearInterval(timer);
    [hours, minutes, seconds] = [0,0,0];
    time.innerHTML = "00:00:00"
});
stopBtn.addEventListener("click", ()=>{
    clearInterval(timer);
})
