const popupBox = document.querySelector("#popupBox");
const openBtn = document.querySelector("#openBtn");
const closeBtn = document.querySelector("#closeBtn");

function showPopup(){
    popupBox.classList.add("show-popup");
}
function closePopup(){
    popupBox.classList.remove("show-popup");
}
openBtn.addEventListener("click", ()=>{
    showPopup();
});
closeBtn.addEventListener("click", ()=>{
    closePopup();
})