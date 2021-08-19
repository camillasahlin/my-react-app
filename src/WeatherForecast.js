import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";


export default function WeatherForecast(props) {
function handleResponse(response) {

}

    let apiKey = "f91c99b3703247e78d935ba99f21c950";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return (
    <div className="WeatherForecast">
        <div className="row">
            <div className="col">
            <div className="WeatherForecast-day mt-4">Thu</div>
            <WeatherIcon code="01d" size={36} />
            <div className="WeatherForecast-temperature">
                <span className="WeatherForecast-temperature-max">19°</span>
                <span className="WeatherForecast-temperature-min">10°</span>
                </div>
            </div>
        </div>
    </div>
    );
}
