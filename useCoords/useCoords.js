const useCoords = async (address) => {
  const url =
    "https://nominatim.openstreetmap.org/search?format=json&limit=3&q=" +
    address;
  const response = await fetch(url);
  const data = await response.json();
  return data[0];
};
