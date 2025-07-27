function WeatherData() {
  fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=24.4390&longitude=90.7821&current_weather=true"
  )
    .then((res) => res.json())
    .then((data) => {
      let forecast = data.current_weather;
      document.getElementById(
        "temperature"
      ).innerHTML = `${forecast.temperature}°C`;
      document.getElementById(
        "windSpeed"
      ).innerHTML = `${forecast.windspeed} km/h`;
      document.getElementById(
        "windDirection"
      ).innerHTML = `${forecast.winddirection}°`;
    });
}

WeatherData();
setInterval(WeatherData, 30000);

function updateLiveTime() {
  const now = new Date();

  const day = now.toLocaleDateString("en-US", { weekday: "long" });
  const date = now.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  document.getElementById(
    "liveTime"
  ).textContent = `| ${day}, ${date} | ${time}`;
}

updateLiveTime();
setInterval(updateLiveTime, 1000);