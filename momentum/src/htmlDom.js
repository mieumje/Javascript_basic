import { HIDDEN_CLASSNAME } from './className.js';
import { paintGreeting, USERNAME_KEY } from './user.js';
import { paintingQuote } from './utils.js';

export const loginForm = document.querySelector('#login-form');
export const loginInput = document.querySelector('#login-form input');
export const greeting = document.querySelector('#greeting');
export const clock = document.querySelector('#clock');
export const quote = document.querySelector('#quote span:first-child');
export const author = document.querySelector('#quote span:last-child');

export const onLoginSubmit = (e) => {
  e.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreeting(username);
  localStorage.setItem(USERNAME_KEY, username);
};

quote.innerText = `"${paintingQuote.quote}"`;
author.innerText = paintingQuote.author;
