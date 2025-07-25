import React, { useState, useEffect } from "react";
import WeatherIcon from "./weatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    const apiKey = "082d3d02ffdb12f2fd9b259e2ced1d0d";
    const units = "metric";
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then((response) => {
      const daily = aggregateDailyForecast(response.data.list);
      setForecast(daily);
    });
  }, [props.city]);

  function aggregateDailyForecast(list) {
    const dailyData = {};

    list.forEach((item) => {
      const date = item.dt_txt.split(" ")[0];
      if (!dailyData[date]) {
        dailyData[date] = {
          minTemp: item.main.temp_min,
          maxTemp: item.main.temp_max,
          icon: item.weather[0].icon,
        };
      } else {
        dailyData[date].minTemp = Math.min(dailyData[date].minTemp, item.main.temp_min);
        dailyData[date].maxTemp = Math.max(dailyData[date].maxTemp, item.main.temp_max);
        // Prefer icon from midday forecast
        if (item.dt_txt.includes("12:00:00")) {
          dailyData[date].icon = item.weather[0].icon;
        }
      }
    });

    // Convert object to array and limit to 5 days
    return Object.entries(dailyData)
      .slice(0, 5)
      .map(([date, data]) => {
        return {
          date,
          day: new Date(date).toLocaleDateString("en-US", { weekday: "short" }),
          minTemp: Math.round(data.minTemp),
          maxTemp: Math.round(data.maxTemp),
          icon: data.icon,
        };
      });
  }

  if (!forecast) return null;

  return (
    <div className="WeatherForecast">
      <div className="row">
        {forecast.map((day, index) => (
          <div className="col" key={index}>
            <div className="WeatherForecast-day">{day.day}</div>
            <WeatherIcon code={day.icon} size={30} />
            <div className="WeatherForecast-temps">
              <span className="WeatherForecast-temps-max">{day.maxTemp}°</span>
              <span className="WeatherForecast-temps-min">{day.minTemp}°</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
