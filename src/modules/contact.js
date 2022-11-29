export function showContact() {
    console.log("Here's the contact info");

    const content = document.querySelector("#content");
    const title = document.createElement("h1");
    const logo = document.createElement("img");
    const intro = document.createElement("p");

    title.textContent = "CONTACT";
    logo.src = "../src/assets/hops-icon.png";
    intro.textContent = "Brewed from locally grown hops, our beer is ready to knock your socks off. Pair it with one of our warm, crusty pizzas and you'll never wear socks again."

    content.appendChild(title);
    content.appendChild(logo);
    content.appendChild(intro);

}