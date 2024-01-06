import React, { useState } from "react";
import "./Home.css";
import { BsCloudHaze2Fill } from "react-icons/bs";
import { WiWindy } from "react-icons/wi";
import { TiWeatherCloudy } from "react-icons/ti";
import { FaTemperatureLow } from "react-icons/fa";
import { CgAdidas } from "react-icons/cg";
import { WiHumidity } from "react-icons/wi";

const Home = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_KEY = "0690ae01ec1b273040f920ef3e259528";

  const getWeatherData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=${API_KEY}`
      );

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();
      console.log(data);
      console.log("new");
      setWeather(data);

      setError(null);
    } catch (error) {
      setWeather(null);
      setError("Error fetching weather data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="box">
      <h2>Weather App</h2>
      <img
        src="data:image/jpeg;base64,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"
        alt=""
      />
      <label>
        Enter City:
        <input
          type="text"
          placeholder="Enter City Name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </label>
      <button onClick={getWeatherData}>Get Weather</button>

      {loading && <p>Loading...</p>}

      {weather && (
        <div>
          <h3>
            Weather in <TiWeatherCloudy /> {weather.name}, {weather.sys.country}
          </h3>
          <p>
            Temperature: <FaTemperatureLow /> {weather.main.temp}°C
          </p>
          <p>
            Humidity: <WiHumidity /> {weather.main.humidity}%
          </p>
          <p>
            Pressure: <CgAdidas /> {weather.main.pressure} mbar
          </p>
          <p>
            Wind:
            <WiWindy /> {weather.wind.speed} km/h
          </p>

          <p>
            Description: <BsCloudHaze2Fill /> {weather.weather[0].description}
          </p>
        </div>
      )}

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Home;
