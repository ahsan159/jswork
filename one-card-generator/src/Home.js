import React, { useState } from "react";
// import MultiStep from "react-multistep";
// import { multiStepStyles } from "./multistepStyles";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import "./Home.css";

import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

const stepperSize = {
  width: "60%",
  paddingTop: "15px",
};


const Home = () => {
  let [cStep, updateStep] = useState(1);
  let [username, updateuserName] = useState("");
  let [password, updatePassword] = useState([]);

  let stepperSteps = ["username", "password", "step3", "review", "final"];

  return (
    <>
      {/* <MultiStep styles={multiStepStyles} showTitles={true}
      prevButton={{title:'BackStep',style:{background:'red'}}}       
      nextButton={{title:'NextStep',style:{background:'green'}}}
      // stepCustomStyle={{color:'red',fontSize:'2rem'}}
      direction="row">      
        <Step1 title='step1'></Step1>
        <Step2 title='step2'></Step2>
        <Step3 title='step3'></Step3>
      </MultiStep> */}
      <div className="main">
        <Stepper sx={stepperSize} activeStep={cStep - 1} alternativeLabel>
          {stepperSteps.map((label, index) => {
            return (
              <Step label={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {/* <h1> This home Page</h1> */}
        {cStep === 1 && (
          <Step1
            key="a"
            username={username}
            updateFunction={updateuserName}
          ></Step1>
        )}
        {cStep === 2 && (
          <Step2
            key="b"
            password={password}
            updateFunction={updatePassword}
          ></Step2>
        )}
        {cStep === 3 && <Step3 key="c"></Step3>}
        <div className="buttonDiv">
          <Button
            startIcon={<ArrowLeftIcon />}
            onClick={() => {
              // alert(`This is Prev  ${cStep}`);
              updateStep(cStep - 1);
              if (cStep < 0) {
                updateStep(0);
              }
              console.log(cStep);
            }}
          >
            Prev
          </Button>
          <Button
            endIcon={<ArrowRightIcon />}
            onClick={() => {
              // alert(`This is Next  ${cStep}`);
              let valid = false;
              // Step 1 Processing
              if (cStep === 1) {
                console.log(`current User name is ${username}`);
                valid = true;
                if (username.length === 0) {
                  alert("Kindly Provide Valid Username");
                  valid = false;
                }
              }
              // Step 2 Processing
              if (cStep === 2) {
                console.log(
                  `current password is ${password[0]} and ${password[1]}`
                );
                if (password[0].length > 0 && password[0] === password[1]) {
                  valid = true;
                } else {
                  alert("invalid password");
                }
              }
              // Step 3 Processing
              if (valid) {
                updateStep(cStep + 1);
                if (cStep > 5) {
                  updateStep(5);
                }
                console.log(cStep);
              }
            }}
          >
            Next
          </Button>
        </div>
      </div>
    </>
  );
};

export default Home;
