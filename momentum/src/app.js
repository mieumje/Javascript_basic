const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden"; // String으로만 이루어진 경우 Uppercase로 변수명 지정
const USERNAME_KEY = "username";

const onLoginSubmit = (e) => {
    e.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreeting(username);
    localStorage.setItem(USERNAME_KEY, username);
}



const getUserName = localStorage.getItem(USERNAME_KEY);
const paintGreeting = (username) => {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`;
}

if (getUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit)
}
else {
    paintGreeting(getUserName);
}

