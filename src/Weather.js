import React from "react";
import "./Weather.css";

export default function Weather() {
    return ( 
    <div className="Weather">
        <form>
        <div className="row">
            <div className="col-9">
            <input type="search" 
                placeholder="Type a city.." 
                class="form-control shadow-sm" 
                id="city-input"
                autocomplete="off" />
            </div>
            <div className="col-3">
            <input type="submit" value="Search" class="form-control btn btn-white shadow-sm w-100" />
            </div>
            </div>
        </form>
      <h1>New York</h1>
      <ul>
          <li>Wednesday 07:00</li>
          <li>Mostly cloudy</li>
      </ul>
      <div className="row mt-3">
          <div class="col-6">
                    <div class="clearfix weather-temperature">
                    <img src="" alt="Cloudy" id="icon" class="float-left"/>
                    <strong id="temperature"></strong><span class="units">°C</span>
                    </div>
        </div>
          <div className="col-6">
              <ul>
                  <li>Precipitation: 15%</li>
                  <li>Humidity: 72%</li>
                  <li>Wind: 13 km/h</li>
              </ul>
          </div>
        </div>
        
        </div>
        
    );
}