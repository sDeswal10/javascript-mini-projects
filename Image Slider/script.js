const gallery = document.querySelector(".gallery");
const leftBtn = document.querySelector("#left-btn");
const rightBtn = document.querySelector("#right-btn");


gallery.addEventListener("wheel", (e)=>{
    e.preventDefault();
    gallery.style.scrollBehavior = "auto";
    gallery.scrollLeft += e.deltaY;
});

leftBtn.addEventListener("click",()=>{
    gallery.style.scrollBehavior = "smooth";
    gallery.scrollLeft += 900;
    
})
rightBtn.addEventListener("click",()=>{
    gallery.style.scrollBehavior = "smooth";
    gallery.scrollLeft -= 900;
    
})