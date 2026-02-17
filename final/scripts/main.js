// Responsive navigation toggle
const menuButton = document.querySelector("#menu");
const nav = document.querySelector(".navigation");

menuButton?.addEventListener("click", () => {
    nav.classList.toggle("show");
    menuButton.classList.toggle("open");
});

menuButton?.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
        nav.classList.toggle("show");
        menuButton.classList.toggle("open");
    }
});

nav?.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("show");
        menuButton.classList.remove("open");
    });
});

// Set current year
const yearSpan = document.querySelector("#currentyear");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// Show last modified date
const lastModified = document.querySelector("#lastModified");
if (lastModified) {
    lastModified.textContent = `Last Modified: ${document.lastModified}`;
}