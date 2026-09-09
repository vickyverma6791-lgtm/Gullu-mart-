import axios from "axios";

const Getloaction = async () => {
  if (!navigator.geolocation) {
    throw "Geolocation not supported";
  }

  const position = await new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });

  const { latitude, longitude } = position.coords;

  const response = await axios.get(
   `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
  );
  return response.data;
};

export default Getloaction;
