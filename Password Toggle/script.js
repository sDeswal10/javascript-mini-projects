const inputBox = document.querySelector("#password-input");
const eyeIcon = document.querySelector("i");

eyeIcon.addEventListener("click", ()=>{
    if(inputBox.type == "password"){
        inputBox.type = "text";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
    }else{
        inputBox.type = "password";
        eyeIcon.classList.add("fa-eye");
        eyeIcon.classList.remove("fa-eye-slash");
    }
})