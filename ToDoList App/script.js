const userInput = document.querySelector("#user-input");
const addTask = document.querySelector("#add-task");
const listContainer = document.querySelector("#list-container");

addTask.addEventListener("click", ()=>{
    if(userInput.value == ""){
        alert("Please write something")
    }else{
        let li = document.createElement("li");
        let span = document.createElement("span");
        span.innerHTML = "&#10008;"
        li.innerHTML = userInput.value;
        li.appendChild(span)
        listContainer.appendChild(li);
    }
    userInput.value = ""
    saveData();
}, false)

listContainer.addEventListener("click", (e)=>{
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
})

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}
function showTaskData(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTaskData();