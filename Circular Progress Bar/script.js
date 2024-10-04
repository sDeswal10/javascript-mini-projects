let percentage = document.getElementById("number");
let counter = 0;

setInterval(()=>{
    if(counter == 65){
        clearInterval();
    }else{
        counter += 1;
        percentage.innerHTML = `${counter}%`;
    }
},30)