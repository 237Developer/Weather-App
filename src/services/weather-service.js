import { weatherApi, formatData } from "../mappers/weather-mapper.js";
import { showCurrentWeather } from "../components/current-weather.js";
import { showForecastData } from "../components/forecast-list.js";
import { showWeatherDetails } from "../components/weather-details.js";

export async function fetchWeatherData(api) {
  const response = await fetch(api);
  if (!response.ok) {
    throw new Error("location not found");
  }

  const data = response.json();
  return data;
}

async function handleWeatherRequest(api) {
  const data = await fetchWeatherData(api);
  const cleanData = formatData(data);
  displayData(cleanData);
}

function displayData(cleanData) {
  showCurrentWeather(cleanData);
  showForecastData(cleanData);
  showWeatherDetails(cleanData);
}

export async function startFetching(location) {
  const api = weatherApi.associateLocation(location);
  await handleWeatherRequest(api);
}
