import React, {useState} from "react";

export default function WeatherTemperature(props){
    const [unit, setUnit] = useState("celsius");

    function convertToFar(event){
        event.preventDefault();
        setUnit("Fahrenheit");
    }

    function convertToCelsius(event){
        event.preventDefault();
        setUnit("celsius");
    }

    function Fahrenheit(){
        return (props.celsius * 9) / 5 + 32;
    }

    if(unit === "celsius"){
        return (
        <div className="weatherTemperature">
            <span className="temperature">
              {Math.round(props.celsius)}
            </span>
            <span className="unit">°C | <a href="/" onClick={convertToFar}>°F</a></span>
        </div>
    );
    } else {
        return (
        <div className="weatherTemperature">
            <span className="temperature">
              {Math.round(Fahrenheit())}
            </span>
            <span className="unit"><a href="/" onClick={convertToCelsius}>°C</a> | °F </span>
        </div>
    );
    }
    
}