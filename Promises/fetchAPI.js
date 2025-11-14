function whereAmI(lat, lng) {
  return fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`No known location (${response.status})`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(`You're currently in ${data.city}, ${data.countryName}`);
    })
    .catch((error) => `Error fetching City ${error.message}`);
}

console.log(whereAmI(52.508, 13.381));
console.log(whereAmI(-33.933, 18.474));
console.log(whereAmI(19.037, 72.873));

// Latitude: 52.508, Longitude: 13.381 (Berlin, Germany)
// Latitude: -33.933, Longitude: 18.474 (Cape Town, South Africa)
// Latitude: 19.037, Longitude: 72.873 (Mumbai, India)
