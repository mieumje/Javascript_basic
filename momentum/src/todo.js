const toDoForm = document.querySelector('#todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('#todo-list');

function onToDoFormSubmtin(e) {
    e.preventDefault();
    const newToDoValue = toDoInput.value;
    toDoInput.value = ""
}

toDoForm.addEventListener('submit', onToDoFormSubmtin);