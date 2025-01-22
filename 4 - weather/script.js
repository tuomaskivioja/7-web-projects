async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'YOUR_API_KEY';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.main) {
            document.getElementById('weatherInfo').innerHTML = `Temperature in ${city}: ${data.main.temp}°C, Weather: ${data.weather[0].description}`;
        } else {
            document.getElementById('weatherInfo').textContent = 'Weather data not found. Please try another city.';
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.getElementById('weatherInfo').textContent = 'Failed to retrieve weather data.';
    }
}
