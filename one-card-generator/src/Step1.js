import React from "react";
import "./Step.css"

const Step1 = () => {
  return (
    <>
      <div className="mainBox">
        <h2>Step1/3</h2>
        <h1>Enter your name?</h1>
        <input placeholder="Enter your name" type="text"></input>
        <button
          onClick={() => {
            alert("This is step1 ");
          }}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Step1;
