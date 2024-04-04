import React, { useState } from "react";
import TextField from "@mui/material/TextField";

import "./Weather.css";

const Weather = () => {
  let [city, setCity] = useState("Lahore");
  return (
    <>
      <div className="mainBox">
        <TextField
          className="cityInput"          
          type="search"
          variant="outlined"
          placeholder="Search City"
          sx={{marginTop:"30px",backgroundColor:"white"}}
          onChange={(event) => {
            setCity(event.target.value);
          }}
        ></TextField>
        <h1 className="cityName">{city}</h1>
        <h2 className="temperatureCurrent">29.6︒C</h2>
        <div className="temperatureMaxMin">
          <h2>24.6︒C</h2>
          <h2>|</h2>
          <h2>33.1︒C</h2>
        </div>
      </div>
    </>
  );
};

export default Weather;
