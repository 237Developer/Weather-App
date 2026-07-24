const weatherDetailsArray = [...document.querySelectorAll(".details-metric")];

export function showWeatherDetails(data) {
  const { severeRisk, sunrise, sunset, rainRisk } = data.moreDetails;
  const [severeRiskElt, sunriseElt, sunsetElt, rainRiskElt] =
    weatherDetailsArray;
  severeRiskElt.textContent = severeRisk + "%";
  sunriseElt.textContent = sunrise;
  sunsetElt.textContent = sunset;
  rainRiskElt.textContent = rainRisk + "%";
}
