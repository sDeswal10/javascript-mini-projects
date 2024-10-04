const passwordInput = document.querySelector("#password-input");
const copyPassword = document.querySelector("#copy-icon");
const genPassButton = document.querySelector("#generate-button");
const passwordLength = 12;

genPassButton.addEventListener("click", generatePassword);

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890"
const symbols = `,./<>?;':"{}|[]+=-_)(*&^%$#@!`;
const allNumbers = upperCase + lowerCase + numbers + symbols;

function generatePassword(){
    let password = ""
    while(password.length < passwordLength){
        password += allNumbers[(Math.floor(Math.random() * (allNumbers.length)))]
    }
    passwordInput.value = password
}
copyPassword.addEventListener("click", ()=>{
    passwordInput.select();
    document.execCommand("copy");
})