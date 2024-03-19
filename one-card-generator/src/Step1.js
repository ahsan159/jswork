import React from "react";
import "./Step.css"

const Step1 = () => {
  return (
    <>
      <div className="mainBox">
        <h2>Step1/3</h2>
        <h1>Enter your name?</h1>
        <input placeholder="Enter your name" type="text"></input>
      </div>
    </>
  );
};

export default Step1;
