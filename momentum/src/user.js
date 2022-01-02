import { greeting, loginForm, onLoginSubmit } from './htmlDom.js';
import { HIDDEN_CLASSNAME } from './className.js';

export const USERNAME_KEY = 'username';

export const getUserName = localStorage.getItem(USERNAME_KEY);

export const paintGreeting = (username) => {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${username}`;
};
const paintForm = () => {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onLoginSubmit);
};

export const paintMain = (username) => {
  if (getUserName === null) {
    paintForm();
  } else {
    paintGreeting(username);
  }
};
