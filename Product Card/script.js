let buttons = document.querySelectorAll(".btn");
let productImg = document.getElementById("productImg");

buttons[0].onclick = function(){
    productImg.src = "images/image1.png";
    for(bt of buttons){
        bt.classList.remove("active")
    }
    this.classList.add("active");
}
buttons[1].onclick = function(){
    productImg.src = "images/image2.png";
    for(bt of buttons){
        bt.classList.remove("active")
    }
    this.classList.add("active");

}
buttons[2].onclick = function(){
    productImg.src = "images/image3.png";
    for(bt of buttons){
        bt.classList.remove("active")
    }
    this.classList.add("active");

}
