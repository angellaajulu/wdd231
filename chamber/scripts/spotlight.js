async function loadSpotlights() {
    try {
        const response = await fetch("data/members.json");
        const data = await response.json();
        const members = data.members;


        const membershipLevels = {
            1: "Gold",
            2: "Silver",
            3: "Bronze"
        };


        const filtered = members.filter(m => m.membership === 1 || m.membership === 2);


        const shuffled = filtered.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, Math.floor(Math.random() * 2) + 2);

        const container = document.querySelector("#spotlight-container");
        container.innerHTML = "";

        selected.forEach(member => {
            const card = document.createElement("section");
            card.classList.add("card");

            card.innerHTML = `
        <img src="images/${member.image}" alt="${member.name} logo">
        <h3>${member.name}</h3>
        <p><strong>Phone:</strong> ${member.phone}</p>
        <p><strong>Address:</strong> ${member.address}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
        <p class="level">${membershipLevels[member.membership]} Member</p>
      `;

            container.appendChild(card);
        });
    } catch (error) {
        console.error("Spotlights fetch error:", error);
        document.querySelector("#spotlight-container").textContent = "Unable to load member spotlights.";
    }
}

loadSpotlights();
