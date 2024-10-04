const notesContainer = document.querySelector(".notes-container");
const notesButton = document.querySelector("#create-notes-button");

notesButton.addEventListener("click", function(){
    let inputBox = document.createElement("p");
    let deleteIcon = document.createElement("img");
    deleteIcon.src = "/images/delete.png"
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    notesContainer.appendChild(inputBox).appendChild(deleteIcon);
});

notesContainer.addEventListener("click", (e)=>{
    if(e.target.tagName == "IMG"){
        e.target.parentElement.remove();
        saveNotes()
    }else if(e.target.tagName == "P"){
        let notes = document.querySelectorAll(".input-box");
        notes.forEach((note)=>{
            note.onkeyup = function (){
                saveNotes();
            }
        })
    }
});

function saveNotes(){
    localStorage.setItem("notes", notesContainer.innerHTML)
}
function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes")
}
document.addEventListener("keydown", (e)=>{
    if(e.key == "Enter"){
        document.execCommand("insertLineBreak");
        e.preventDefault();
    }
})
showNotes();