import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import dayjs from 'dayjs';

import "./Weather.css";

const Weather = () => {
  let [city, setCity] = useState("Lahore");
  let [foundName, setFoundName] = useState(""); // if some city name is found
  let [loc, setLocation] = useState([]); // lattitude and longitude of the city found
  let [temperature, settemperature] = useState({});
  let [daytimes, setdaytimes] = useState({});
  let [lastUpdated, setlastUpdated] = useState(Date.now());

  useEffect(() => {
    // const fetchWeatherData = async () => {
    //   const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${loc[0]}&lon=${loc[1]}&appid=b9755f07d828933964ee8892c8565450`;
    //   const response = await fetch(url);
    //   const jsonResponse = await response.json();
    //   // while (jsonResponse.city.name === foundName) {
    //   console.log(jsonResponse);
    //   console.log(jsonResponse.city.name);
    //   console.log(city);
    //   if (jsonResponse.city.name === city) {
    //     console.log("city is found");
    //   } else {
    //     console.log("city not found");
    //   }
    //   // }
    // };

    const fetchGeoData = async () => {
      // const url = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=b9755f07d828933964ee8892c8565450`;
      // const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${loc[0]}&lon=${loc[1]}&appid=b9755f07d828933964ee8892c8565450`;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b9755f07d828933964ee8892c8565450`;
      const response = await fetch(url);
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      try {
        setFoundName([jsonResponse.name, jsonResponse.sys.country]);
        setLocation([jsonResponse.coord.lat, jsonResponse.coord.lon]);
        settemperature(jsonResponse.main);
        setdaytimes(jsonResponse.sys);
        setlastUpdated(jsonResponse.dt);
        console.log(foundName);
        // if (jsonResponse[0].name === city) {
        //   console.log("Lat:" + jsonResponse[0].lat);
        //   console.log("Lon:" + jsonResponse[0].lon);
        //   setLocation([jsonResponse[0].lat, jsonResponse[0].lon]);
        // fetchWeatherData();
        //}
        // else if (jsonResponse.message === "city not found") {
        //   console.log("City not found");
        // }
      } catch (e) {
        console.log(jsonResponse.message);
        setFoundName(jsonResponse.message);
      }
    };

    fetchGeoData();
    // fetchWeatherData();
  }, [city]);

  return (
    <>
      <div className="mainBox">
        <TextField
          className="cityInput"
          type="search"
          variant="outlined"
          placeholder="Search City"
          sx={{ marginTop: "30px", backgroundColor: "white" }}
          onChange={(event) => {
            setCity(event.target.value);
          }}
        ></TextField>
        <h1 className="cityName">
          {foundName[0]} {foundName[1]}
        </h1>
        <h2 className="temperatureCurrent">
          {Number(temperature.temp - 273).toFixed()}︒C
        </h2>
        <div className="temperatureMaxMin">
          <h2>{Number(temperature.temp_min - 273).toFixed(1)}︒C</h2>
          <h2>|</h2>
          <h2>{Number(temperature.temp_max - 273).toFixed(1)}︒C</h2>
        </div>
        <div className="temperatureMaxMin">
          <h2>{Number(temperature.feels_like - 273).toFixed(1)}︒C</h2>
          <h2>|</h2>
          <h2>{Number(temperature.humidity).toFixed(0)}%</h2>
        </div>
        {/* <div className="temperatureMaxMin">
          <h2>{Number(temperature.feels_like - 273).toFixed(1)}︒C</h2>
          <h2>|</h2>
          <h2>{Number(temperature.humidity).toFixed(0)}%</h2>
        </div> */}
        <div className="temperatureMaxMin">
          <h2>🌅{dayjs(daytimes.sunrise).format('HH:mm')}</h2>
          <h2>|</h2>
          <h2>🌥️{dayjs(daytimes.sunset).format('HH:mm')}</h2>
        </div>
      </div>
    </>
  );
};

export default Weather;
