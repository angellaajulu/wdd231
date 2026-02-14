const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    nav.classList.toggle("show");
    menuButton.classList.toggle("open");
});