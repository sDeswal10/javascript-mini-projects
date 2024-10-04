const imgBox = document.querySelector(".image-box");
const imgWrap = document.querySelector(".image-wrap");
const originalImg = document.getElementById("originalImg");

let leftSpace = imgBox.offsetLeft;
originalImg.style.width = `${imgBox.offsetWidth}px`;

imgBox.onmousemove = function (e){
    let boxWidth = `${(e.pageX - leftSpace)}px`;
    imgWrap.style.width = boxWidth;
}