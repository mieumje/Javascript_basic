const toDoForm = document.querySelector('#todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('#todo-list');

function paintToDo(newToDoValue) {
  const newLi = document.createElement('li');
  const newSpan = document.createElement('span');

  newLi.appendChild(newSpan);
  newSpan.innerText = newToDoValue;

  toDoList.appendChild(newLi);
}

function onToDoFormSubmtin(e) {
  e.preventDefault();
  const newToDoValue = toDoInput.value;
  toDoInput.value = '';
  paintToDo(newToDoValue);
}

toDoForm.addEventListener('submit', onToDoFormSubmtin);
