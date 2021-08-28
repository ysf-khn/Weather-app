"use strict";

const getWeatherData = async function (cityName) {
  const res = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=136812dc2844f1d556156d4c807a8646`
  );
  const data = await res.json();
  console.log(data);
  console.log(
    `${data.name}, ${Math.round(data.main.temp - 273.15)}°C, ${
      data.weather[0].main
    }`
  );
};

// getWeatherData("mumbai");

// 136812dc2844f1d556156d4c807a8646

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const now = new Date();
// console.log(months[1]);
console.log(
  months[now.getMonth()],
  now.getDate().toString(),
  now.getFullYear().toString()
);
