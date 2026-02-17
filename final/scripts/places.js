const container = document.querySelector("#places");
const modal = document.querySelector("#modal");
const modalContent = document.querySelector("#modalContent");
const closeModal = document.querySelector("#closeModal");

async function loadPlaces() {
    try {
        const response = await fetch("data/places.json");
        if (!response.ok) throw new Error("Network error");
        const places = await response.json();
        displayPlaces(places);
    } catch (error) {
        container.innerHTML = "<p>Unable to load places at this time.</p>";
        console.error(error);
    }
}

function displayPlaces(places) {
    container.innerHTML = "";
    places.forEach(place => {
        const card = document.createElement("section");

        card.innerHTML = `
      <img src="${place.image}" alt="${place.alt}" loading="lazy">
      <h3>${place.name}</h3>
      <p><strong>Category:</strong> ${place.category}</p>
      <p><strong>Location:</strong> ${place.location}</p>
      <button aria-label="View details about ${place.name}">
        View Details
      </button>
    `;

        card.querySelector("button").addEventListener("click", () => {
            modalContent.innerHTML = `
        <h2 id="modalTitle">${place.name}</h2>
        <img src="${place.image}" alt="${place.alt}">
        <p>${place.description}</p>
        <p><strong>Location:</strong> ${place.location}</p>
      `;
            modal.showModal();
        });

        container.appendChild(card);
    });
}

closeModal.addEventListener("click", () => modal.close());

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.close();
    }
});

loadPlaces();