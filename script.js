// const classNames = {
//     TODO_ITEM: 'todo-container',
//     TODO_CHECKBOX: 'todo-checkbox',
//     TODO_TEXT: 'todo-text',
//     TODO_DELETE: 'todo-delete',
// }

const list = document.getElementById('todo-list');
const inputBox = document.getElementById("todo-inputBox");
const checkboxes = document.querySelectorAll(".todo-checkbox");


const itemCountSpan = document.getElementById('item-count');
// const uncheckedCountSpan = document.getElementById('unchecked-count');

updateCount();
inputBox.focus();

inputBox.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        newTodo();
    }
});

function newTodo() {
    // alert('New TODO button clicked!');
    if (inputBox.value.trim() === "") {
        alert("Please type something first :)");
    } else {
        const todoItem = document.createElement("div");
        todoItem.classList.add("todo-container");

        // const todoCheckboxContainer = document.createElement("span");
        // todoCheckboxContainer.classList.add("todo-checkbox")

        const todoCheckbox = document.createElement("input");
        todoCheckbox.type = "checkbox";
        todoCheckbox.classList.add("todo-checkbox");
        // todoCheckboxContainer.appendChild(todoCheckbox);
        todoItem.appendChild(todoCheckbox);

        const todoText = document.createElement("span");
        todoText.textContent = inputBox.value.trim();
        todoItem.appendChild(todoText);


        list.appendChild(todoItem);

        updateCount();
    }

    inputBox.value = "";
    inputBox.focus();
}

function updateCount () {
    itemCountSpan.textContent = list.childElementCount;

    let checked = 0;
    const checkboxes = document.querySelectorAll(".todo-checkbox");
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked === true) {
            checked++
        }
    }

    // uncheckedCountSpan.textContent = list.childElementCount -
}
