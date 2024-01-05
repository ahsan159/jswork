import React, { useState } from "react";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="mainBody">
        <h1 className="mainHeading"> Hello </h1>
        <input
          type="text"
          className="mainText"
          placeholder="Enter Your Name"
        ></input>
        <button className="mainBtn">Click Me 👍</button>
      </div>
    </>
  );
};

export default App;
