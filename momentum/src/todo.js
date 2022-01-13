const toDoForm = document.querySelector('#todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('#todo-list');

function deleteTodo(e) {
  const li = e.target.parentElement;
  li.remove();
}

function paintToDo(newToDoValue) {
  const newLi = document.createElement('li');
  const newSpan = document.createElement('span');
  const newButton = document.createElement('button');

  newSpan.innerText = newToDoValue;
  newButton.innerText = '❌';
  newButton.addEventListener('click', deleteTodo);

  newLi.appendChild(newSpan);
  newLi.appendChild(newButton);

  toDoList.appendChild(newLi);
}

function onToDoFormSubmtin(e) {
  e.preventDefault();
  const newToDoValue = toDoInput.value;
  toDoInput.value = '';
  paintToDo(newToDoValue);
}

toDoForm.addEventListener('submit', onToDoFormSubmtin);
