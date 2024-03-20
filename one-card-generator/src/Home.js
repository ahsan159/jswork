import React, { useState } from "react";
import MultiStep from 'react-multistep';
import { multiStepStyles } from "./multistepStyles";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import "./Home.css";

const Home = () => {
  // let [cStep, updateStep] = useState(1);
  return (
    <>
      <div className="main">
      <MultiStep styles={multiStepStyles} showTitles={true}
      prevButton={{title:'BackStep',style:{background:'red'}}}       
      nextButton={{title:'NextStep',style:{background:'green'}}}
      direction="row">      
        <Step1 title='step1'></Step1>
        <Step2 title='step2'></Step2>
        <Step3 title='step3'></Step3>
      </MultiStep>
        {/* <h1> This home Page</h1>
        { (cStep==1) && <Step1></Step1> }
        { (cStep==2) && <Step2></Step2> }        
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
        </div> */}
      </div>
    </>
  );
};

export default Home;
