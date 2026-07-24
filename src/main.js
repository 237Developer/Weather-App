// eslint-disable-next-line import-x/no-unassigned-import
import "iconify-icon";
import { format } from "./utils/dates.js";
import { getWeather } from "./components/events.js";

document.addEventListener("DOMContentLoaded", () => {
  const todayDate = document.querySelector(".today-date");
  todayDate.textContent = format(new Date(), "'Today, 'd MMMM' at 'HH:mm");
});

getWeather();
