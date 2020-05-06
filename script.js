const list = document.getElementById('todo-list');
const inputBox = document.getElementById("todo-inputBox");


const itemCountSpan = document.getElementById('item-count');
const uncheckedCountSpan = document.getElementById('unchecked-count');

inputBox.focus();

// test();

// function test(){
// document.querySelectorAll("input[type=checkbox]").forEach(i=>{
//     i.onclick = function(){
//         updateCount();
//  }
// });

// document.querySelectorAll(".todo-container").forEach(i=>{
//     i.onclick = function(){
//         this.querySelector("input[type=checkbox").click();
//  }
// });

// console.log("test");
// }

inputBox.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        newTodo();
    }
});

function newTodo() {
    if (inputBox.value.trim() === "") {
        alert("Please type something first :)");
    } else {
        const todoItem = document.createElement("div");
        todoItem.classList.add("todo-container");

        const todoCheckbox = document.createElement("input");
        todoCheckbox.type = "checkbox";
        todoCheckbox.classList.add("todo-checkbox");
        todoItem.appendChild(todoCheckbox);

        const todoText = document.createElement("span");
        todoText.textContent = inputBox.value.trim();
        todoItem.appendChild(todoText);

        list.appendChild(todoItem);

        todoItem.onclick = function () { this.querySelector("input[type=checkbox").click(); }
        todoCheckbox.onclick = function () { updateCount(); };


        updateCount();
    }

    inputBox.value = "";
    inputBox.focus();
}

function updateCount () {
    itemCountSpan.textContent = list.childElementCount;

    uncheckedCountSpan.textContent = itemCountSpan.textContent - document.querySelectorAll('input:checked').length;
}
