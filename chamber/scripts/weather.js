const apiKey = "103285aba1272d6481d7603f4a571d29";
const city = "Soroti,UG";
const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

async function getWeather() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    const container = document.querySelector("#weather-container");

    const current = data.list[0];
    const currentTemp = current.main.temp.toFixed(1);
    const currentDesc = current.weather[0].description;

    const forecast = [data.list[8], data.list[16], data.list[24]];

    container.innerHTML = `
      <p><strong>Current:</strong> ${currentTemp}°C, ${currentDesc}</p>
      <h3>3-Day Forecast</h3>
      <ul>
        ${forecast.map((day, i) => `
          <li>Day ${i + 1}: ${day.main.temp.toFixed(1)}°C, ${day.weather[0].description}</li>
        `).join("")}
      </ul>
    `;
  } catch (error) {
    console.error("Weather fetch error:", error);
    document.querySelector("#weather-container").textContent = "Unable to load weather data.";
  }
}

getWeather();
