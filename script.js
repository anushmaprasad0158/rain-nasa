// Dummy Weather Data (for hackathon demo)
const weatherData = {
  temperature: "26°C",
  condition: "Partly Cloudy",
  precipitation: "40%",
  windspeed: "12 km/h",
  airquality: "AQI 45"
};

// Update UI
document.getElementById("temperature").textContent = weatherData.temperature;
document.getElementById("condition").textContent = weatherData.condition;
document.getElementById("precipitation").textContent = weatherData.precipitation;
document.getElementById("windspeed").textContent = weatherData.windspeed;
document.getElementById("airquality").textContent = weatherData.airquality;

// Chart.js - 7 Days Forecast (Temp)
const ctx1 = document.getElementById('forecastChart').getContext('2d');
new Chart(ctx1, {
  type: 'line',
  data: {
    labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
    datasets: [{
      label: 'Temp °C',
      data: [24, 25, 26, 28, 27, 29, 26],
      borderColor: '#ffea00',
      backgroundColor: 'rgba(255,234,0,0.2)',
      fill: true,
      tension: 0.4
    }]
  },
  options: {
    plugins: { legend: { display: false } },
    scales: {
      x: { ticks: { color: '#fff' } },
      y: { ticks: { color: '#fff' } }
    }
  }
});

// Chart.js - Wind Speed
const ctx2 = document.getElementById('windChart').getContext('2d');
new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
    datasets: [{
      label: 'Wind (km/h)',
      data: [10, 12, 14, 8, 15, 10, 13],
      backgroundColor: '#00e0ff'
    }]
  },
  options: {
    plugins: { legend: { display: false } },
    scales: {
      x: { ticks: { color: '#fff' } },
      y: { ticks: { color: '#fff' } }
    }
  }
});
