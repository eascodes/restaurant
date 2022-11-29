export function showMenu() {
    const content = document.querySelector("#content");
    const title = document.createElement("h1");
    const intro = document.createElement("p");
    const pizza = document.createElement("img");
    const burger = document.createElement("img");
    const fish = document.createElement("img");
    const salad = document.createElement("img");


    title.textContent = "FOOD MENU";
    intro.textContent = "Ask about our daily specials & beers on tap"

    pizza.src = "../src/assets/pizza.jpg";
    burger.src = "../src/assets/burger.jpg";
    fish.src = "../src/assets/fish.jpg";
    salad.src = "../src/assets/salad.jpg";

    pizza.classList.add("menu");
    burger.classList.add("menu");
    fish.classList.add("menu");
    salad.classList.add("menu");

    const pizzaTitle = document.createElement("h3");
    const pizzaText = document.createElement("p");
    const burgerTitle = document.createElement("h3");
    const burgerText = document.createElement("p");
    const fishTitle = document.createElement("h3");
    const fishText = document.createElement("p");
    const saladTitle = document.createElement("h3");
    const saladText = document.createElement("p");

    pizzaTitle.textContent = "Fire-Roasted Pizza";
    pizzaText.textContent = "Sourdough pizza crust, tomato sauce, fresh mozzerella, jalapenos, fire-roasted corn, & a balsamic glaze."

    burgerTitle.textContent = "Double Stacked Burger"
    burgerText.textContent = "Two quarter-pound patties topped with cheddar, lettuce, tomatoes, pickled onions, & our special brewpub sauce. Served on a toasted harvest bun."

    saladTitle.textContent = "Salmon Salad"
    saladText.textContent = "Fresh, wild-caught, grilled salmon served with a bed greens topped with locally grown veggies & a lemon vinaigrette"

    fishTitle.textContent = "Fish & Chips"
    fishText.textContent = "Beer-battered cod served with hand-cut fries."

    content.appendChild(title);
    content.appendChild(intro);
    content.appendChild(pizza);
    content.appendChild(pizzaTitle);
    content.appendChild(pizzaText);
    content.appendChild(burger);
    content.appendChild(burgerTitle);
    content.appendChild(burgerText);
    content.appendChild(salad);
    content.appendChild(saladTitle);
    content.appendChild(saladText);
    content.appendChild(fish);
    content.appendChild(fishTitle);
    content.appendChild(fishText);
}