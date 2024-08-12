import React from "react";
import "./WeatherCard.css";

const WeatherCard = ({ title, value, suffix }) => {
  return (
    <div className="weather-card">
      <h3>{title === "wind_kph" ? "Wind Speed" : title}</h3>
      <p>
        {value}
        {suffix}
      </p>
    </div>
  );
};

export default WeatherCard;
