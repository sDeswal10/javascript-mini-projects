const password = document.getElementById("password");
const strength = document.getElementById("strength");
const inputBox = document.getElementsByClassName("input-box");

password.addEventListener("input", ()=>{
    if(password.value.length > 0){
        strength.style.display = "block";
    }else{
        strength.style.display = "none";
    }
    if(password.value.length < 4){
        strength.innerHTML = "Password stregth is weak";
        strength.style.color = "#FF5733";
        password.style.borderColor = "#FF5733";
    }else if(password.value.length >= 4 && password.value.length < 8){
        strength.innerHTML = "Password strength is medium";
        strength.style.color = "#ffcc00";
        password.style.borderColor = "#ffcc00";
    }else{
        strength.innerHTML = "Password strength is strong";
        strength.style.color = "#99CC33";
        password.style.borderColor = "#99CC33";
    }
})