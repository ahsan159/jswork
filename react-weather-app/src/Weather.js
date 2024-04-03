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
          sx={{marginTop:"30px"}}
          onChange={(event) => {
            setCity(event.target.value);
          }}
        ></TextField>
        <h1 className="cityName">{city}</h1>
        <h2 className="temperatureCurrent">29.6♨️</h2>

      </div>
    </>
  );
};

export default Weather;
