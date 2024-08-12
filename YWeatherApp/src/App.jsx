import { useEffect, useState } from "react";

import "./App.css";
import getWeather from "./api/weather";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [searchCity, setSearchCity] = useState("");
  const [loading, setLoading] = useState(false);

  function onSearch() {
    setLoading(true);

    getWeather(searchCity)
      .then((res) => {
        if (res) {
          const { current } = res;
          const {
            wind_kph,
            humidity: Humidity,
            temp_c: Temperature,
            condition,
          } = current;
          const { text: Condition } = condition;
          setWeatherData({ Temperature, Humidity, Condition, wind_kph });
          setLoading(false);
        }
        setLoading(false);
      })
      .catch((e) => {
        console.error;
        setLoading(false);
      });
  }

  return (
    <div className="main-container">
      <SearchBar
        search={searchCity}
        onSearch={onSearch}
        handleSearch={setSearchCity}
      />
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <div className="weather-cards">
          {Object.entries(weatherData).map(([key, value]) => {
            const isSuffix =
              key === "wind_kph"
                ? "kph"
                : key === "Humidity"
                ? "%"
                : key === "Temperature"
                ? "°C"
                : "";
            return (
              <WeatherCard
                key={key}
                title={key}
                value={value}
                suffix={isSuffix}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default App;
