import React from "react";
import "./Step.css";

const Step2 = (props) => {
  return (
    <>
      <div className="mainBox">
        <h2>Step2/3</h2>
        <h1>Enter your Password?</h1>
        <input
          placeholder="Enter your password"
          type="Password"
          value={props.password[0]}
          onChange={(event) => {
            props.updateFunction([event.target.value, props.password[1]]);
          }}
        ></input>
        <input
          placeholder="Enter your password again"
          type="Password"
          value={props.password[1]}
          onChange={(event) => {
            props.updateFunction([props.password[0], event.target.value]);
          }}
        ></input>
      </div>
    </>
  );
};

export default Step2;
