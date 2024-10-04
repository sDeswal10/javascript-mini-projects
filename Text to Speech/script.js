let speech = new SpeechSynthesisUtterance();
let userText = document.querySelector("textarea");

const speechBtn = document.querySelector("button");
let voices = [];
let selectList = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = ()=>{
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    voices.forEach((voice,i)=>(selectList.options[i] = new Option(voice.name, i)));
};

selectList.addEventListener("change", ()=>{
    speech.voice = voices[selectList.value];
})

speechBtn.addEventListener("click", ()=>{
    speech.text = userText.value;
    window.speechSynthesis.speak(speech);
})
