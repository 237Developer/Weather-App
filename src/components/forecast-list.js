const daysForecastArray = [...document.querySelectorAll(".forecast div")];

export function showForecastData(data) {
  for (const [index, dayData] of data.forecast.entries()) {
    const { date, icon, temperatureMin, temperatureMax } = dayData;
    const dayElement = daysForecastArray[index];
    const [dateElt, iconElt, temperatureElt] = [...dayElement.children];
    dateElt.textContent = date;
    iconElt.src = icon;
    temperatureElt.textContent = `${temperatureMax}°C / ${temperatureMin}°C`;
  }
}
