import { format } from "../utils/dates.js";
import { matchCorrespondingIcon } from "../utils/weather-icons.js";

const weatherApi = {
  name: `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/yaounde/next5days?include=current&unitGroup=metric&key=<Your key>`,
  key: "DUQ77EGNA3XPSBXR52YHF5JEE",
  getUrl() {
    return "https://visualcrossing.com";
  },
  associateLocation(location) {
    return `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/next5days?include=current&unitGroup=metric&key=${this.key}`;
  },
};

// Format data fetched by API
function formatData(weatherData) {
  return {
    address: weatherData.resolvedAddress,
    today: {
      date: format(new Date(weatherData.days[0].datetime), "EEE. d MMM."),
      icon: matchCorrespondingIcon(weatherData.currentConditions.icon),
      temperature: weatherData.currentConditions.temp,
      conditions: weatherData.currentConditions.conditions,
      feeling: weatherData.currentConditions.feelslike,
      humidity: weatherData.currentConditions.humidity,
      wind: weatherData.currentConditions.windspeed,
      pressure: weatherData.currentConditions.pressure,
      visibility: weatherData.currentConditions.visibility,
    },
    forecast: [
      {
        date: format(new Date(weatherData.days[1].datetime), "EEE. d MMM."),
        icon: matchCorrespondingIcon(weatherData.days[1].icon),
        temperatureMin: weatherData.days[1].tempmin,
        temperatureMax: weatherData.days[1].tempmax,
      },
      {
        date: format(new Date(weatherData.days[2].datetime), "EEE. d MMM."),
        icon: matchCorrespondingIcon(weatherData.days[2].icon),
        temperatureMin: weatherData.days[2].tempmin,
        temperatureMax: weatherData.days[2].tempmax,
      },
      {
        date: format(new Date(weatherData.days[3].datetime), "EEE. d MMM."),
        icon: matchCorrespondingIcon(weatherData.days[3].icon),
        temperatureMin: weatherData.days[3].tempmin,
        temperatureMax: weatherData.days[3].tempmax,
      },
      {
        date: format(new Date(weatherData.days[4].datetime), "EEE. d MMM."),
        icon: matchCorrespondingIcon(weatherData.days[4].icon),
        temperatureMin: weatherData.days[4].tempmin,
        temperatureMax: weatherData.days[4].tempmax,
      },
      {
        date: format(new Date(weatherData.days[5].datetime), "EEE. d MMM."),
        icon: matchCorrespondingIcon(weatherData.days[5].icon),
        temperatureMin: weatherData.days[5].tempmin,
        temperatureMax: weatherData.days[4].tempmax,
      },
    ],
    moreDetails: {
      severeRisk: weatherData.days[0].severerisk,
      // Formatting time correctly for display. just want hours an minutes
      sunrise: weatherData.currentConditions.sunrise.slice(0, 5),
      sunset: weatherData.currentConditions.sunset.slice(0, 5),
      rainRisk: weatherData.currentConditions.precipprob,
    },
  };
}

export { weatherApi, formatData };
