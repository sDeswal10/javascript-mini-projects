const toastBox = document.getElementById("toastBox");
let successMsg = `<i class="fa-regular fa-circle-check"></i> Successfully Submitted`
let errorMsg = `<i class="fa-regular fa-circle-xmark"></i> Error. Something went wrong`;
let invalidMsg = `<i class="fa-solid fa-triangle-exclamation"></i> Invalid! Please try something else`

function showToastNotification(msg){
    let toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML = `${msg}`
    toastBox.appendChild(toast);

    if(msg.includes("Error")){
        toast.classList.add("error");
    }else if(msg.includes("Invalid")){
        toast.classList.add("invalid");        
    }

    setTimeout(()=>{
        toast.remove();
    },6000)
};

