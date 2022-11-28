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

  const nav = Array.from(document.querySelectorAll(".header ul li"));
    for (let i=0; i < nav.length; i++) {
    nav[i].addEventListener("click",clearPg);
    }