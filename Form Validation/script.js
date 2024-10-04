
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const phoneError = document.getElementById("phone-error");
const passwordError = document.getElementById("password-error");
const messageError = document.getElementById("message-error");
const submitError = document.querySelector(".submit-error");

const submitBtn = document.getElementById("submit-btn");
const form = document.querySelector("form");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
})

const userName = document.getElementById("contact-name");
userName.addEventListener("keyup", validateUserName);

function validateUserName(){
    let fullName = userName.value;
    if(fullName.length == 0){
        nameError.innerHTML = "Please enter full name";
        return false;
    }else if(!fullName.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "Name is required"
        return false;
    }else{
        nameError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
        return true;
    }
}

const userEmail = document.getElementById("contact-email");
userEmail.addEventListener("keyup", validateEmail);
function validateEmail(){
    const mail = userEmail.value;
    if(mail.length == 0){
        emailError.innerHTML = "Email is required";
        return false;
    }else if(!mail.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)){
        emailError.innerHTML = "Enter complete email";
        return false;
    }else{
        emailError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
        return true;
    }
};

const userNumber = document.getElementById("contact-phone");
userNumber.addEventListener("keyup", validateNumber);
function validateNumber(){
    const mobile = userNumber.value;
    if(mobile.length == 0){
        phoneError.innerHTML = "Enter mobile number";
        return false;
    }else if(mobile.length !== 10){
        phoneError.innerHTML = "Phone no should be 10 digits";
        return false;
    }else if(!mobile.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = "Enter valid number";
        return false;
    }else{
        phoneError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
        return true;
    }
}

const userPassword = document.getElementById("contact-password");
userPassword.addEventListener("keyup", validatePassword);
function validatePassword(){
    const password = userPassword.value;
    if(password == 0){
        passwordError.innerHTML = "Create a new password"
        return false;
    }else if(!password.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)){
        passwordError.innerHTML = "Create a strong password"
        return false;
    }else if(password.length <=6){
        passwordError.innerHTML = "Must be greater than 6 characters"
        return false;
    }else{
        passwordError.innerHTML = '<i class="fa-solid fa-eye"></i>';
        let showPassword = document.querySelector(".fa-eye");
        showPassword.addEventListener("click", ()=>{
            userPassword.type = "text";
        });
        return true;
    }
}

const userMessage = document.getElementById("contact-message");
let messageLength = 20;
userMessage.addEventListener("keyup", validateMessage);
function validateMessage(){
    let message = userMessage.value;
    if(message == 0){
        messageError.innerHTML = "Enter a 20 word message";
        return false;
    }else if(message.length <= 20){
        messageError.innerHTML = `Enter ${messageLength - message.length} more characters`
    }else{
        messageError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
        return true;
    }
};

submitBtn.addEventListener("click", validateForm)
function validateForm(){
    if(!validateUserName() || !validateEmail() || !validateNumber() || !validatePassword() || !validateMessage()){
        submitError.style.display = "block"
        submitError.innerHTML = "Please clear all the fields";
        setTimeout(()=>{
            submitError.style.display = "none"            
        },3000);
        return false;
    }    
}
