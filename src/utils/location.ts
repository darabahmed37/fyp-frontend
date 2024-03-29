import { toast } from "react-toastify";

export interface Location {
  latitude: number;
  longitude: number;
}

export function getCurrentLocation(): Promise<Location> {

  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          console.log(position)},
        function () {},
        {},
      );
      navigator.geolocation.getCurrentPosition(
        function (position) {
          toast("Fetching Location...");
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          const location: Location = {
            latitude,
            longitude,
          };
          resolve(location);
        },
        function (error) {
          if (error.code === error.PERMISSION_DENIED) {
            // User denied access to their location
            reject("Location access denied.");
            toast.error("Error with Location Permission");
          } else if (error.code === error.TIMEOUT) {
            reject("Error getting location: " + error.message);
            toast.error("ERROR with Device GPS");
          }
        },
      );
    } else {
      reject("Geolocation is not supported by this browser.");
      toast.error("Device is not able to return location");
    }
  });
}

function degreesToRadians(degrees: number): number {
  return degrees * (Math.PI / 180);
}

export function calculateDistance(point1: Location, point2: Location): number {
  const earthRadiusKm = 6371; // Earth's radius in kilometers

  const dLat = degreesToRadians(+point2.latitude - point1.latitude);
  const dLon = degreesToRadians(+point2.longitude - point1.longitude);

  const lat1Rad = degreesToRadians(point1.latitude);
  const lat2Rad = degreesToRadians(point2.latitude);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) *
      Math.sin(dLon / 2) *
      Math.cos(lat1Rad) *
      Math.cos(lat2Rad);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return Number((earthRadiusKm * c).toFixed(2));
}
