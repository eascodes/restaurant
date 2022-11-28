export function showMenu() {
    console.log("Here's the menu");

    const content = document.querySelector("#content");
    const title = document.createElement("h1");
    const logo = document.createElement("img");
    const intro = document.createElement("p");

    title.textContent = "MENU";
    logo.src = "../src/assets/hops-icon.png";
    intro.textContent = "Stop in and ask about our beers on tap"

    content.appendChild(title);
    content.appendChild(logo);
    content.appendChild(intro);

}