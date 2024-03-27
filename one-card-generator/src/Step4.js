import React from "react";
import "./Step.css";
import TextField from '@mui/material/TextField';

const Step4 = (props) => {
  return (
    <>
      <div className="mainBox">
        <div className="userReview">          
          <TextField
            label="Username"        
            value={props.username}
            InputProps={{readOnly:true}}
          ></TextField>
        </div>
        <div className="dobReview">          
          <TextField
            label="Date of Birth"
            value={props.dob.format("DD-MMM-YYYY")}
            InputProps={{readOnly:true}}
          ></TextField>
        </div>
        <div className="passwordReview">
          
          <TextField
            label="Password"
            value={props.password}
            InputProps={{readOnly:true}}
            InputLabelProps={{size:"normal",}}
          ></TextField>
        </div>
        <p className="paraInfo">*To edit press Prev*</p>
      </div>
    </>
  );
};

export default Step4;
