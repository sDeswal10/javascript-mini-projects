const qrImg = document.getElementById("qr-img");
const generateQrBtn = document.getElementById("qr-btn");
const qrInput = document.getElementById("qr-input");
const qrBox = document.querySelector(".qr-box");

function generateQrCode(){
    if(qrInput.value.length > 0){
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrInput.value}`;
        qrBox.classList.add("show-img");
    }else{
        qrInput.classList.add("error");
        setTimeout(()=>{
            qrInput.classList.remove("error");
        },1000);
    }
}

generateQrBtn.addEventListener("click", ()=>{
    generateQrCode();
})