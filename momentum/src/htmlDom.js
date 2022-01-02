import { HIDDEN_CLASSNAME } from './className.js';
import { paintGreeting, USERNAME_KEY } from './user.js';

export const loginForm = document.querySelector('#login-form');
export const loginInput = document.querySelector('#login-form input');
export const greeting = document.querySelector('#greeting');

export const onLoginSubmit = (e) => {
  e.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreeting(username);
  localStorage.setItem(USERNAME_KEY, username);
};
