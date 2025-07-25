import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./weatherIcon";
import  WeatherTemperature from "./weatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <FormattedDate date={props.data.date} />
        <li className="text-capitalize">{props.data.description}</li>
      </ul>

      <div className="row mt-3">
        <div className="col-6 d-flex align-items-center">
          <WeatherIcon code={props.data.icon} size={64} />
          <div>
            <WeatherTemperature celsius = {props.data.temperature} />
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: {props.data.precipitation}%</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
