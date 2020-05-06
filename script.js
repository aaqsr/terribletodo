// grabs some elements from the page
const list = document.getElementById('todo-list');
const inputBox = document.getElementById("todo-inputBox");

// so that the page loads in with the textbox selected
inputBox.focus();

// to make return/enter in the inputbox add a new todo
inputBox.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        newTodo();
    }
});

function newTodo() {
    // check if inputBox is empty
    if (inputBox.value.trim() === "") {
        alert("Please type something first :)");
    } else {
        // create a todo container
        const todoItem = document.createElement("div");
        todoItem.classList.add("todo-container");

        // create a checkbox in container
        const todoCheckbox = document.createElement("input");
        todoCheckbox.type = "checkbox";
        todoCheckbox.classList.add("todo-checkbox");
        todoItem.appendChild(todoCheckbox);

        // create the span for the todo text in container
        const todoText = document.createElement("span");
        todoText.textContent = inputBox.value.trim();
        todoItem.appendChild(todoText);

        // add container to the list
        list.appendChild(todoItem);

        // make clicking container check the box
        todoItem.onclick = function () { this.querySelector("input[type=checkbox").click(); }
        // make checking the box update the count
        todoCheckbox.onclick = function () { updateCount(); };

        updateCount();
    }

    // clear input box and focus it
    inputBox.value = "";
    inputBox.focus();
}

function updateCount () {
    const itemCountSpan = document.getElementById('item-count');
    const uncheckedCountSpan = document.getElementById('unchecked-count');

    // for item count (takes amount of todo containers in list)
    itemCountSpan.textContent = list.childElementCount;

    // for unchecked item count (takes item count and subtracts amount of checked checkboxes)
    uncheckedCountSpan.textContent = itemCountSpan.textContent - document.querySelectorAll('input:checked').length;
}
