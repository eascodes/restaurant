import Icon from "../assets/hops-icon.png"; 
 
 export function loadPage() {
     const content = document.querySelector("#content");
     const title = document.createElement("h1");
     const logo = document.createElement("img");
     const intro = document.createElement("p");

     title.textContent = "STUBBS BREWPUB";
     logo.src = Icon;
     intro.textContent = "Brewed from locally grown hops, our beer is ready to knock your socks off. Pair it with one of our warm, crusty pizzas and you'll never wear socks again."

     content.appendChild(title);
     content.appendChild(logo);
     content.appendChild(intro);
 }