let leftBox = document.getElementById("left");
let rightBox = document.getElementById("right");
let lists = document.getElementsByClassName("list-item");
console.log(lists)

for (const list of lists) {
    list.addEventListener("dragstart", (e)=>{
        let selectedList = e.target;

        rightBox.addEventListener("dragover", (e)=>{
            e.preventDefault();
        });
        rightBox.addEventListener("drop", (e)=>{
            rightBox.appendChild(selectedList);
            selectedList = null;            
        });


        leftBox.addEventListener("dragover", (e)=>{
            e.preventDefault();
        });
        leftBox.addEventListener("drop", (e)=>{
            leftBox.appendChild(selectedList);
            selectedList = null;
            
        })
    })    
}
