import snow from "../icons/snow.svg";
import rain from "../icons/rain.svg";
import fog from "../icons/fog.svg";
import wind from "../icons/wind.svg";
import cloudy from "../icons/cloudy.svg";
import partlyCloudyDay from "../icons/partly-cloudy-day.svg";
import partlyCloudyNight from "../icons/partly-cloudy-night.svg";
import clearDay from "../icons/clear-day.svg";
import clearNight from "../icons/clear-night.svg";
import thunderRain from "../icons/thunder-rain.svg";
import thunderShowersDay from "../icons/thunder-showers-day.svg";
import thunderShowersNight from "../icons/thunder-showers-night.svg";
import showersDay from "../icons/showers-day.svg";
import showersNight from "../icons/showers-night.svg";

const icons = {
  snow,
  rain,
  fog,
  wind,
  cloudy,
  "partly-cloudy-day": partlyCloudyDay,
  "partly-cloudy-night": partlyCloudyNight,
  "clear-day": clearDay,
  "clear-night": clearNight,
  "thunder-rain": thunderRain,
  "thunder-showers-day": thunderShowersDay,
  "thunder-showers-night": thunderShowersNight,
  "showers-day": showersDay,
  "showers-night": showersNight,
};

console.log(partlyCloudyDay);

//match the corresponding icon with the current weather conditions
export function matchCorrespondingIcon(name) {
  return icons[name] ?? clearDay;
}

// Exported for use in test
export { partlyCloudyDay };
