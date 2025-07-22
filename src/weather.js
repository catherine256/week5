import React from "react";
import "./weather.css";


export default function Weather() {
    return (
        <div className="weather">
            <form className="form p-3">
                <div className="row">
                    <div className="col-9">
                        <input type="search" className="form-control" placeholder="Enter a city..."/>
                    </div>

                    <div className="col-3">
                        <input type="submit" value="search" className="btn btn-primary"/>
                    </div>

                </div>     
            </form>
            <h1>Kampala, Uganda</h1>
            <ul>
                <li>Tuesday 07:00</li>
                <li>Mostly Rainny</li>
            </ul>

            <div className="row">
                <div className="col-6">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAdVJREFUaN7tmc1thDAQRimBElwCJVBCSvAxR5fgEiiBEiiBErhyIx24A2cc2WhiAf4ZA1rJkZ4UZZPN9/AwHrON1rr5ZJoqUAWqQBWoAlWgxJf++WaAAGZAAdpD2dfM7zDS/yopAGE6YDoIHMLIdK8KQIAWGIAtQ8Bh/r59bQWQjCBILCkSJIF1XVuAA9Jivm9ROd0ukS0AQTtgA7SH+Vn31EoEBSAMA2YUUAHiJDyWcCtBuidIArZEroJewVEpjQSJjiIgMsMbpHdjf53sCcEWSxEYCQKOyZQhkshZBZYkYEtHeLVPQSGJnHIS0QI2/FIo+L+VILTXOUVA3BD+D3Q/pAqoFIEebUxFQQLJN/Ojo0TEqDG/JgBv1hdgeVNAP4CKPSvkCKiCQc1KSMRs2+x902hO/Z4cYFhgWOQHY8zo9hOKgCCGH71BEXcqHjEBKDft5gowypVH4YeLgKE9ZSO10cxz7z7TFJqxOEUgZxyYbPi+0M4uSRuZPYCnCPBA6TwrYCWWyFbJImo/FTMpM6pAG5CYvDO0LDii7x2JNAtdSGxuQyp41Q87UqkHW8NJzYsbw+8d6Y5Hi+7qbw8IyOIPd9HRVD8qUD8fqAJVoApUgSrwqfwCJ6xaZshM+xMAAAAASUVORK5CYII=" alt="cloudy"/>
                    25°C
                </div>
                 <div className="col-6">
                    <ul>
                        <li>Precipitation: 20%</li>
                        <li>Humidity: 64%</li>
                        <li>Wind: 11 km/h</li>
                        <li><button className="btn btn-secondary">Temperature</button> <button className="btn btn-info">Temperature</button></li>
                    </ul>
                 </div>
            </div>
        </div>
    );
}