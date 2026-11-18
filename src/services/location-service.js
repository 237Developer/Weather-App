// Ask the browser for the user's position and return it as "lat,lon",
// the format Visual Crossing accepts in place of a city name.
export function getUserPosition() {
  return new Promise((resolve, reject) => {
    if (!("geolocation" in navigator)) {
      reject(new Error("Geolocation is not supported by your browser"));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        resolve(`${latitude.toFixed(4)},${longitude.toFixed(4)}`);
      },
      (error) => {
        const messages = {
          1: "Location permission denied. Please allow access or search for a city.",
          2: "Your position is unavailable. Please try again or search for a city.",
          3: "Location request timed out. Please try again.",
        };
        reject(
          new Error(messages[error.code] ?? "Could not get your position"),
        );
      },
      { enableHighAccuracy: false, timeout: 10000, maximumAge: 300000 },
    );
  });
}
