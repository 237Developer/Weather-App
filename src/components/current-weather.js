const currentWeatherIcon = document.querySelector(".current-weather-icon");
const weatherDescription = document.querySelector(".weather-description");
const feeling = document.querySelector(".feeling-metric");
const humidity = document.querySelector(".humidity-metric");
const windSpeed = document.querySelector(".wind-speed-metric");
const pressure = document.querySelector(".pressure-metric");
const visibility = document.querySelector(".visibility-metric");
const searchHome = document.querySelector(".search-main");

export function showCurrentWeather(data) {
  currentWeatherIcon.src = data.today.icon;
  feeling.textContent = `${data.today.feeling} °C`;
  weatherDescription.textContent = data.today.conditions;
  humidity.textContent = `${data.today.humidity} %`;
  windSpeed.textContent = `${data.today.wind} km/h`;
  pressure.textContent = `${data.today.pressure} hPa`;
  visibility.textContent = `${data.today.visibility} km`;
  searchHome.value = data.address;
}
