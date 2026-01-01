

const searchBtn = document.querySelector('.search-btn');
searchBtn.addEventListener('click', () => {
    const cityInput = document.getElementById('cityInput').value;
     console.log(cityInput);
     fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityInput+'&appid=bb86b2418e3f8cace7b3cc73c58835f8')
     .then(response => response.json())
     .then(data => {
         const cityName = data.name;
        const country = data.sys.country;
         const tempK = data.main.temp;
         const tempC = (tempK - 273.15).toFixed(2);
         const weatherDesc = data.weather[0].description;
         document.getElementById('country').innerText = country;
         document.getElementById('city').innerText = cityName;
         document.getElementById('temperature').innerText = tempC + ' °C';
         document.getElementById('condition').innerText = weatherDesc;
         })
        .catch(error => {
            alert('City not found. Please try again.');
            // console.log('Error fetching weather data:', error);
        });
});


// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}