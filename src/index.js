import './style.css';
import './modules/nav.js';
import { loadPage } from './modules/pgload.js';
import { showMenu } from './modules/menu.js';


loadPage();

function clearPg(e) {
    const content = document.querySelector("#content");
    while (content.lastElementChild.classList.value != "header") {
        content.removeChild(content.lastElementChild);
    }
    if (e.target.textContent === "Menu") {
        showMenu();
    }
}

const menu = document.querySelector("li:nth-child(2)");
menu.addEventListener("click",clearPg);
