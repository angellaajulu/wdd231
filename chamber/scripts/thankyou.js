const params = new URLSearchParams(window.location.search);

document.getElementById("firstName").textContent = params.get("fname");
document.getElementById("lastName").textContent = params.get("lname");
document.getElementById("email").textContent = params.get("email");
document.getElementById("phone").textContent = params.get("phone");
document.getElementById("business").textContent = params.get("business");
document.getElementById("date").textContent = params.get("timestamp");