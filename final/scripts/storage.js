// Visit counter
const visitsDisplay = document.querySelector("#visits");

let visitCount = Number(localStorage.getItem("visits")) || 0;
visitCount++;
localStorage.setItem("visits", visitCount);

if (visitsDisplay) {
    visitsDisplay.textContent = `Visits: ${visitCount}`;
}

// Store last visited page
const pageName = document.title;
localStorage.setItem("lastPage", pageName);