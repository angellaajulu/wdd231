// open modals
const openButtons = document.querySelectorAll(".open-modal");
const closeButtons = document.querySelectorAll(".close-modal");

openButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modalId = button.dataset.modal;
        document.getElementById(modalId).showModal();
    });
});


// close modals
closeButtons.forEach(button => {
    button.addEventListener("click", () => {
        button.closest("dialog").close();
    });
});