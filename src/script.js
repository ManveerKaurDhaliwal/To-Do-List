
let inputBox = document.querySelector("#input");
let listContainer = document.querySelector("#list");

function addList(event) {
    //show alert if input box is empty
    if (inputBox.value === '') {
        alert("Please add your task"); 
    } 
    else {
        
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        inputBox.value = "";
        listContainer.appendChild(li);
      
    }
      saveData();
}
let addButton = document.querySelector("#addButton");
addButton.addEventListener("click", addList);
        // Add click event listener to li for marking as checked or removing the task
        listContainer.addEventListener("click", function (event) {
            if (event.target.tagName === "LI") {
                event.target.classList.toggle("checked");
                saveData();
            } else if (event.target.tagName === "SPAN") {
                event.target.parentElement.remove();
                saveData();
            }
        }, false);
       

//save list in the browser
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
