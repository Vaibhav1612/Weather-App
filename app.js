const options = {
	method: 'GET',
	headers: {
	  'X-RapidAPI-Key': '5350f3f4c2mshc18fa3f8aa52b88p1096b4jsne120b21bb479',
	  'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
  };
  
  document.getElementById('weatherForm').addEventListener('submit', function(event) {
	event.preventDefault();
	
	const cityInput = document.getElementById('cityInput');
	const cityName = document.getElementById('cityName');
	const weatherInfo = document.getElementById('weatherInfo');
	
	getWeather(cityInput.value)
	  .then(data => {
		// Display weather information
		cityName.textContent = cityInput.value;
		displayWeatherData(data);
		weatherInfo.classList.remove('d-none');
	  })
	  .catch(error => {
		console.error('Error fetching weather data:', error);
		// Handle error (e.g., display error message to the user)
	  });
  });
  
  function getWeather(city) {
	const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;
	return fetch(url, options)
	  .then(response => response.json());
  }
  
  function displayWeatherData(data) {
	document.getElementById('temp').textContent = data.temp;
	document.getElementById('feels_like').textContent = data.feels_like;
	document.getElementById('humidity').textContent = data.humidity;
	document.getElementById('min_temp').textContent = data.min_temp;
	document.getElementById('max_temp').textContent = data.max_temp;
	document.getElementById('wind_speed').textContent = data.wind_speed;
	document.getElementById('wind_degrees').textContent = data.wind_degrees;
	document.getElementById('sunrise').textContent = data.sunrise;
	document.getElementById('sunset').textContent = data.sunset;
  
	// Display static weather icon or logo
	document.querySelector('.weather-icon1').setAttribute("src", "sun.png");
	document.querySelector('.weather-icon2').setAttribute("src", "weather.png");
	document.querySelector('.weather-icon3').setAttribute("src", "weather-2.png");
	document.querySelector('.weather-icon4').setAttribute("src", "weather-3.png");
	document.querySelector('.weather-icon5').setAttribute("src", "weather-4.png");
  }
  