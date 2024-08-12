const api_key = import.meta.env.VITE_SOME_KEY;

async function getWeather(city) {
  try {
    const res = await fetch(
      "https://api.weatherapi.com/v1/current.json" +
        `?key=${api_key}&q=${city}&aqi=no`
    );
    console.log(res);
    if (!res.ok) {
      const error = await res.json();
      console.log(error);

      throw Error(error.error.message);
    }
    const data = await res.json();

    return data;
  } catch (e) {
    alert(e.message);
    return null;
  }
}

export default getWeather;
