'use strict';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const searchText = document.querySelector('.search-text');
const searchBtn = document.querySelector('.search-btn');
const place = document.querySelector('.place-name');
const img = document.querySelector('.weather-img');
const weatherType = document.querySelector('.weather-type');
const weatherContainer = document.querySelector('.container');
const temp = document.querySelector('.temp');
const maxMin = document.querySelector('.max-min');

// searchText.value = 'Mumbai';

const getWeatherData = async function () {
  const res = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${searchText.value}&appid=xyz`
  );
  const data = await res.json();
  // console.log(data);
  // console.log(
  //   `${data.name}, ${Math.round(data.main.temp - 273.15)}°C, ${
  //     data.weather[0].main
  //   }, ${Math.round(data.main.temp_max - 273.15)}°C, ${Math.round(
  //     data.main.temp_min - 273.15
  //   )}°C`
  // );
  return data;
};

const renderWeather = async function () {
  const data = await getWeatherData();
  const now = new Date();

  const html = `
  
      <div class="left">
        <h1 class="place-name">${data.name}</h1>
        <h3 class="date">${
          months[now.getMonth()]
        } ${now.getDate()}, ${now.getFullYear()}</h3>
        <img src="./suncloud.png" class="weather-img">
        <h2 class="weather-type">${data.weather[0].main}</h2>
      </div>
      <div class="right">
        <div class="temp">${Math.round(data.main.temp - 273.15)}°</div>
        <div class="max-min">${Math.round(
          data.main.temp_max - 273.15
        )}°C / ${Math.round(data.main.temp_min - 273.15)}°C</div>
      </div>
      
    `;
  // console.log(weatherContainer);
  weatherContainer.innerHTML = '';
  searchText.innerHTML = '';
  weatherContainer.innerHTML = '';
  weatherContainer.insertAdjacentHTML('afterbegin', html);
};

renderWeather();
// console.log(searchText.value);

searchBtn.addEventListener('click', renderWeather);
// getWeatherData("New york");

//haze, clouds, clear sky,
