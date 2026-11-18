import { startFetching } from "../services/weather-service.js";
import { getUserPosition } from "../services/location-service.js";

const useMyPositionBtn = document.querySelector(".home button");
const loader = document.querySelector(".loader");
const mainContent = document.querySelector("main");
const searchBarHome = document.querySelector(".search-home");
const home = document.querySelector(".home");
const searchBarMain = document.querySelector(".search-main");
const getWeatherBtn = document.querySelector(".get-weather");
const searchIconMain = document.querySelector(".search-icon-main");

export function getWeather() {
  searchBarHome.addEventListener("keydown", async (event) => {
    if (event.key !== "Enter" || !event.target.value.trim()) {
      return;
    }

    home.classList.add("hidden");
    loader.classList.remove("hidden");

    try {
      await startFetching(event.target.value);
    } catch (error) {
      alert(error.message);
      loader.classList.add("hidden");
      home.classList.remove("hidden");
      return;
    }

    loader.classList.add("hidden");
    mainContent.classList.remove("hidden");
  });

  searchBarHome.addEventListener("change", async (event) => {
    if (!event.target.value.trim()) {
      return;
    }

    home.classList.add("hidden");
    loader.classList.remove("hidden");

    try {
      await startFetching(event.target.value);
    } catch (error) {
      alert(error.message);
      loader.classList.add("hidden");
      home.classList.remove("hidden");
      return;
    }

    loader.classList.add("hidden");
    mainContent.classList.remove("hidden");
  });

  searchBarMain.addEventListener("keydown", async (event) => {
    if (event.key !== "Enter" || !event.target.value.trim()) {
      return;
    }

    mainContent.classList.add("hidden");
    loader.classList.remove("hidden");

    try {
      await startFetching(event.target.value);
    } catch (error) {
      alert(error.message);
    } finally {
      loader.classList.add("hidden");
      mainContent.classList.remove("hidden");
    }
  });

  [searchIconMain, getWeatherBtn].forEach((elt) => {
    elt.addEventListener("click", async () => {
      if (!searchBarMain.value) {
        return;
      }

      mainContent.classList.add("hidden");
      loader.classList.remove("hidden");

      try {
        await startFetching(searchBarMain.value);
      } catch (error) {
        alert(error.message);
      } finally {
        loader.classList.add("hidden");
        mainContent.classList.remove("hidden");
      }
    });
  });
  useMyPositionBtn.addEventListener("click", async () => {
    home.classList.add("hidden");
    loader.classList.remove("hidden");

    try {
      const coordinates = await getUserPosition();
      await startFetching(coordinates);
    } catch (error) {
      alert(error.message);
      loader.classList.add("hidden");
      home.classList.remove("hidden");
      return;
    }

    loader.classList.add("hidden");
    mainContent.classList.remove("hidden");
  });
}
