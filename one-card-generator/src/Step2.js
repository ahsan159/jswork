import React from "react";
import "./Step.css"

const Step2 = () => {
  return (
    <>
      <div className="mainBox">
        <h2>Step2/3</h2>
        <h1>Enter your Password?</h1>
        <input placeholder="Enter your password" type="Password"></input>
        <input placeholder="Enter your password again" type="Password"></input>
      </div>
    </>
  );
};

export default Step2;
