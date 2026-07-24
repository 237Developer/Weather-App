import { expect } from "vitest";
import { fetchWeatherData } from "./weather-service.js";

test("is api run ", async () => {
  const data = await fetchWeatherData(
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Yaounde/?include=today&unitGroup=metric&elements=temp&key=DUQ77EGNA3XPSBXR52YHF5JEE",
  );
  expect(data.longitude).toBe(11.5167);
}, 15000);
