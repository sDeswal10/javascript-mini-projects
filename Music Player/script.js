const progress = document.getElementById("progress");
const song = document.querySelector(".song");
const ctrl = document.querySelector("#music-control");
const musicImg = document.querySelector(".rotate");

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}
function playPauseMusic(){
    if(ctrl.classList.contains("fa-pause")){
        song.pause();
        ctrl.classList.remove("fa-pause");
        ctrl.classList.add("fa-play");
    }else{
        song.play();
        ctrl.classList.add("fa-pause");
        ctrl.classList.remove("fa-play");
    }
}
ctrl.addEventListener("click", ()=>{
    playPauseMusic();
})

if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime;
    },500)
}
progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    ctrl.classList.add("fa-pause");
    ctrl.classList.remove("fa-play");

}