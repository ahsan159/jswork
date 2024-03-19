import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import "./Home.css";

const Home = () => {
  let [cStep, updateStep] = useState(1);
  return (
    <>
      <div className="main">
        <h1> This home Page</h1>
        { (cStep==1) && <Step1></Step1> }
        { (cStep==2) && <Step2></Step2> }
        {/* <Step1></Step1> */}
        <div className="buttonDiv">
          <button
            onClick={() => {
              alert(`This is Prev  ${cStep}`);
              updateStep(cStep - 1);
            }}
          >
            Prev
          </button>
          <button
            onClick={() => {
              alert(`This is Next  ${cStep}`);
              updateStep(cStep + 1);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
