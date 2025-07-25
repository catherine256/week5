import React, { useState } from "react";
import axios from "axios";
import "./weather.css";
import WeatherInfo from "./weatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready: false});
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      city: response.data.name,
      wind: response.data.wind.speed,
      precipitation: 23,
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon

    });
  }

   function search(){
    const apiKey = "082d3d02ffdb12f2fd9b259e2ced1d0d";
    const units = "metric";
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    axios.get(apiurl).then(handleResponse);
  }


  function handleSubmit(event){
    event.preventDefault();
    search();

  }

  function handleCityChange(event){
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                className="form-control"
                placeholder="Enter a city..."
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>

            <div className="col-3">
              <input
                type="submit"
                value="search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} city={weatherData.city} />
      </div>
    );
  } else {
    search();
    return('Loading......');
  }
}
