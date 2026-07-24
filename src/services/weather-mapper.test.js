import { expect } from "vitest";
import { formatData } from "../mappers/weather-mapper.js";
import { partlyCloudyDay } from "../utils/weather-icons.js";
import { testData } from "./test-fixtures.js";

test("is data formatted correctly", () => {
  const formattedData = formatData(testData);
  expect(formattedData.today.date).toBe("Sun. 19 Jul.");
  expect(formattedData.today.icon).toBe(partlyCloudyDay);
  expect(formattedData.today.temperature).toBe(25);
  expect(formattedData.forecast[0].date).toBe("Mon. 20 Jul.");
  expect(formattedData.moreDetails.sunrise).toBe("06:10");
});
