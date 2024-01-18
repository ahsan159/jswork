import React, { useState } from "react";
import "./AddNote.css";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
// import Button from "@mui/material/Button";
// import { IconButton } from "@mui/material";

const AddNote = () => {
  let [state, updateState] = useState(false);

  const headerClicked = () => {
    updateState(false);
  }
  const textFocusLost = () => {
    // updateState(false);
    console.log("I have lost focused");
  };

  const textFocusResponse = () => {
    updateState(true);
    console.log("I am focused");
  };

  return (
    <>
      <div className="container-fluid d-flex flex-column p-0 m-0 justify-content-center">
        <div className="row m-5">
          <h1 className="text-dark text-center">Data</h1>
        </div>
        <div className="m-5 d-flex flex-column justify-content-center align-items-center">
          {state && <TextField className="col-3" label="Header" onClick={headerClicked}></TextField>}
          <TextField
            multiline
            className="col-3"
            onFocus={textFocusResponse}
            onBlur={textFocusLost}
          ></TextField>
          {/* onClick={textClickResponse} */}
          <button type="button" className="btn rounded-circle editBtn">
            <AddIcon
              sx={{
                stroke: "white",
                strokeWidth: 7,
                fontSize: "2rem",
              }}
            ></AddIcon>
          </button>
        </div>
      </div>
    </>
  );
};

export default AddNote;
