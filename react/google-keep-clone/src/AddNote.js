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
  };
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
        <div className="d-flex flex-column align-items-center">
          <div className="addNoteDiv d-flex flex-column">
            {
              <TextField
                className="addNoteCSS"
                label="Header"
                onClick={headerClicked}
                sx={{ strokeWidth: 0 }}
              ></TextField>
            }
            <TextField
              multiline
              className="addNoteCSS"
              onFocus={textFocusResponse} ,mmkjjjjjjjkkj 
              onBlur={textFocusLost}
            ></TextField>
            <button type="button" className="btn rounded-circle editBtn">
              <AddIcon
                sx={{
                  stroke: "yellow",
                  strokeWidth: 2,
                  fontSize: "2rem",
                }}
              ></AddIcon>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNote;