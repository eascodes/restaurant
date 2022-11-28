import './style.css';
import './modules/nav.js';
import { loadPage } from './modules/pgload.js';
import { showMenu } from './modules/menu.js';
import { showContact } from './modules/contact.js';


loadPage();

function clearPg(e) {
    const content = document.querySelector("#content");
    while (content.lastElementChild.classList.value != "header") {
        content.removeChild(content.lastElementChild);
    }
    if (e.target.textContent === "Menu") {
        showMenu();
    } else if (e.target.textContent === "Contact") {
        showContact();
    } else if (e.target.textContent === "Home") {
        loadPage();
    }
}

 const home = document.querySelector("li:nth-child(1)");
 const menu = document.querySelector("li:nth-child(2)");
 const contact = document.querySelector("li:nth-child(3)");
 menu.addEventListener("click",clearPg);
 home.addEventListener("click", clearPg);
 contact.addEventListener("click",clearPg);
