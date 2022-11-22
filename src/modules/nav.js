const nav = (() => {
    const content = document.querySelector("#content");
    const header = document.createElement("div");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");

    header.classList.add("header");

    content.appendChild(header);
    header.appendChild(ul);
    ul.appendChild(li1);
    li1.textContent = "Home";
    ul.appendChild(li2);
    li2.textContent = "Menu";
    ul.appendChild(li3);
    li3.textContent = "Contact";
})();