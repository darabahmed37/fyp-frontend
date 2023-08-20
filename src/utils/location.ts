export interface Location {
  latitude: number;
  longitude: number;
}

export function getCurrentLocation(): Promise<Location> {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          const location: Location = {
            latitude,
            longitude,
          };
          resolve(location);
        },
        function (error) {
          if (error.code === 1) {
            // User denied access to their location
            reject("Location access denied.");
          } else {
            reject("Error getting location: " + error.message);
          }
        },
      );
    } else {
      reject("Geolocation is not supported by this browser.");
    }
  });
}

// Call the function and handle the promise result
getCurrentLocation()
  .then((location) => {
    console.log("Location:", location);
  })
  .catch((error) => {
    console.error(error);
  });
