const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const loginInput = document.querySelector('.loginForm input');
const loginForm = document.querySelector('.loginForm');
const hiUser = document.querySelector('#hi');

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintUserName();
    showUI();
}

function showUI(){
    const todoList = document.querySelector('#todo-list');
    const todoForm = document.querySelector('#todo-form');
    const clock = document.querySelector('h2#clock');
    const weather = document.querySelector('#weather');

    todoList.classList.remove(HIDDEN_CLASSNAME);
    todoForm.classList.remove(HIDDEN_CLASSNAME);
    clock.classList.remove(HIDDEN_CLASSNAME);
    weather.classList.remove(HIDDEN_CLASSNAME);
}

function paintUserName(){
    const username = localStorage.getItem(USERNAME_KEY); 
    hiUser.innerText = `Hi, ${username}`;
    hiUser.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', onLoginSubmit);
}else{
    paintUserName();
    showUI();
} 