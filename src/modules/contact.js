import Bar from "../assets/bar.jpg";

export function showContact() {
    const content = document.querySelector("#content");
    const title = document.createElement("h1");
    const logo = document.createElement("img");
    const addressTitle = document.createElement("h2");
    const addressText = document.createElement("p");
    const phone = document.createElement("p");
    const email = document.createElement("p");

    addressText.classList.add("contact");

    title.textContent = "STUBBS BREWPUB";
    logo.src = Bar;
    addressTitle.textContent = "CONTACT";
    addressText.textContent = "123 Brewpub Lane, Ourtown, PA 12345"
    phone.textContent = "555-654-3211"
    email.textContent = "stubbsbrewpub@fakeemail.com"

    content.appendChild(title);
    content.appendChild(logo);
    content.appendChild(addressTitle);
    content.appendChild(addressText);
    content.appendChild(phone);
    content.appendChild(email);
}