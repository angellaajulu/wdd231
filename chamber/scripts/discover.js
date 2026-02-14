// IMPORT DATA
import { discoverItems } from "../data/discover.mjs";

const grid = document.querySelector("#discoverGrid");

discoverItems.forEach((item, index) => {
    const card = document.createElement("article");

    card.classList.add("discover-card", `card${index + 1}`);

    card.innerHTML = `
        <h2>${item.title}</h2>

        <figure>
            <img 
                src="${item.image}" 
                alt="${item.title}" 
                loading="lazy"
                width="300"
                height="200">
        </figure>

        <address>${item.address}</address>

        <p>${item.description}</p>

        <button 
            type="button"
            aria-label="Learn more about ${item.title}">
            Learn More
        </button>
    `;

    grid.appendChild(card);
});


const visitMessage = document.querySelector("#visitMessage");
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
    visitMessage.textContent =
        "Welcome! Let us know if you have any questions.";
} else {
    const daysBetween =
        Math.floor((now - Number(lastVisit)) / (1000 * 60 * 60 * 24));

    if (daysBetween < 1) {
        visitMessage.textContent = "Back so soon! Awesome!";
    } else if (daysBetween === 1) {
        visitMessage.textContent = "You last visited 1 day ago.";
    } else {
        visitMessage.textContent =
            `You last visited ${daysBetween} days ago.`;
    }
}

localStorage.setItem("lastVisit", now);