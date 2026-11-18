# Weather App

A simple weather app built with vanilla JavaScript. Search for a city or use your current position to get the current weather and a 5-day forecast.

This project was built to earn the **JavaScript Certification (300 hours)** from [freeCodeCamp](https://www.freecodecamp.org/).

**Live demo:** [Weather-app](https://weather-app-two-chi-69.vercel.app/)

## Features

- Search weather by city name
- "Use my position" button (browser geolocation)
- Current weather: temperature, feels like, humidity, wind, pressure, visibility
- 5-day forecast
- Extra details: severe weather risk, sunrise, sunset, chance of rain
- Readable place name shown in the search bar (reverse geocoding)
- Responsive layout for mobile and desktop

## Tech stack

- Vanilla JavaScript (ES modules), HTML, CSS
- [Visual Crossing Weather API](https://www.visualcrossing.com/) for weather data
- [date-fns](https://date-fns.org/) for date formatting
- [Iconify](https://iconify.design/) for UI icons
- [Vitest](https://vitest.dev/) for tests

## Project structure

```
src/
├── components/   # UI updates and event handling (current weather, forecast, details, events)
├── mappers/      # Turns the raw API response into clean data for the UI
├── services/     # API calls (weather, geolocation, reverse geocoding)
├── utils/        # Helpers (dates, weather icons)
├── icons/        # Weather SVG icons
├── styles/       # CSS split by section (base, header, home, loader, main, responsive)
└── main.js       # App entry point
```

**How it works:** a user action in `components/events.js` calls `startFetching()` in `services/weather-service.js`. It fetches the data from Visual Crossing, `mappers/weather-mapper.js` formats it, and the `components/` files display it in the page.

## Getting started

1. Clone the repository
   ```bash
   git clone https://github.com/237Developer/Weather-App
   cd Weather-App
   ```
2. Install dependencies
   ```bash
   npm install
   ```
3. Get a free API key from [Visual Crossing](https://www.visualcrossing.com/) and add it in `src/mappers/weather-mapper.js`
4. Start the app
   ```bash
   npm run dev
   ```
5. Run the tests
   ```bash
   npm test
   ```

## What I learned

- Working with a REST API using `fetch` and `async/await`
- Organizing JavaScript code into modules
- Using the browser Geolocation API
- Building a responsive layout with CSS media queries
- Writing unit tests

## Author

**Junior DJIOGUE**
