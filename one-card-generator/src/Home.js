import React, { useEffect, useState } from "react";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
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

import dayjs from "dayjs";
import Step5 from "./Step5";

const stepperSize = {
  width: "60%",
  paddingTop: "15px",
};

const Home = () => {
  let [cStep, updateStep] = useState(1);
  let [username, updateuserName] = useState("a");
  let [password, updatePassword] = useState(["a", "a"]);
  let [pickedDate, pickDate] = useState(dayjs(new Date()));
  let [nextButtonText, nextButtonTextUpdate] = useState("Next");
  let [tacChecked, tacCheckUpdate] = useState(false);

  useEffect(() => {
    document.title = "Form Submission";
    switch (cStep) {
      case 1:
        document.title = "Form Submission: username";
        break;
      case 2:
        document.title = "Form Submission: password";
        break;
      case 3:
        document.title = "Form Submission: Date of Birth";
        break;
      case 4:
        document.title = "Form Submission: Review";
        break;
      case 5:
        document.title = "Form Submission: Submit/Term & Condition";
        break;
      default:
        document.title = "Form Submission";
    }
  }, [cStep]);

  let stepperSteps = [
    "username",
    "password",
    "Date of Birth",
    "Review",
    "Submit",
  ];

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
        {cStep === 3 && (
          <Step3 key="c" pcikedDate={pickedDate} pickDate={pickDate}></Step3>
        )}
        {cStep === 4 && (
          <Step4
            key="d"
            dob={pickedDate}
            username={username}
            password={password[0]}
          ></Step4>
        )}
        {cStep === 5 && (
          <Step5
            key="e"
            tacChecked={tacChecked}
            tacCheckUpdate={tacCheckUpdate}
          ></Step5>
        )}
        <div className="buttonDiv">
          <Button
            startIcon={<ArrowLeftIcon />}
            onClick={() => {
              nextButtonTextUpdate("Next");
              updateStep(cStep - 1);
              if (cStep < 1) {
                updateStep(1);
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
              if (cStep === 3) {
                // alert(`${pickedDate.format("DD-MM-YYYY")}`);
                valid = true;
              }
              // Step 4 Processing
              if (cStep === 4) {
                valid = true;
                nextButtonTextUpdate("Submit");
              }
              if (cStep === 5) {
                valid = false;
                if (tacChecked) {
                  valid = true;
                }
              }
              if (valid) {
                updateStep(cStep + 1);
                if (cStep > 5) {
                  updateStep(5);
                }
                console.log(cStep);
                alert(cStep);
              }
            }}
          >
            {nextButtonText}
          </Button>
        </div>
      </div>
    </>
  );
};

export default Home;
