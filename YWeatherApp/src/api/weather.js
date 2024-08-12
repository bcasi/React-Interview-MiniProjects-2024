const api_key = import.meta.env.VITE_SOME_KEY;

async function getWeather(city) {
  try {
    const res = await fetch(
      "https://api.weatherapi.com/v1/current.json" +
        `?key=${api_key}&q=${city}&aqi=no`
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.error(e);
  }
}

export default getWeather;
