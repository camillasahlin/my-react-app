import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
    <h1>{props.data.city}</h1>
      <ul>
          <li><FormattedDate date={props.data.date} /></li>
          <li className="text-capitalize mb-5">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
          <div className="col-6">
              <div className="clearfix">
                    <img src={`${props.data.iconUrl}`} alt="{props.data.description}" className="float-lxeft"/>
                    <div className="float-left">
                        <span className="temperature">{Math.round(props.data.temperature)}</span>
                        <span className="unit">°C</span>
                    </div>
              </div>
        </div>
          <div className="col-6">
              <ul>
                  <li>Precipitation: 15%</li>
                  <li>Humidity: 72%</li>
                  <li>Wind: {props.data.wind} km/h</li>
              </ul>
          </div>
        </div>
        </div>
    );
}