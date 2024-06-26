import React, { useState } from "react";
import "./AddNote.css";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
// import Button from "@mui/material/Button";
// import { IconButton } from "@mui/material";

const AddNote = (props) => {
  let [headerText, headerTextUpdated] = useState("");
  let [taskText, taskTextUpdated] = useState("");

  let [state, updateState] = useState(false);

  const addTaskToArray = () => {
    console.log(`${headerText} Data is ${taskText}`);
    let t = { id: 20, title: headerText, task: taskText };
    headerTextUpdated("");
    taskTextUpdated("");
    props.updatedTasks([...props.taskArray, t]);
  };

  const headerFocused = () => {
    updateState(true);

  };
  const textFocusLost = () => {
    console.log("I have lost focused");
  };

  const textFocusIn = () => {
    updateState(true);
    console.log("I am focused");
  };

  return (
    <>
      <div className="container-fluid d-flex flex-column p-0 m-0 justify-content-center">
        <div className="d-flex flex-column align-items-center">
          <div className="addNoteDiv d-flex flex-column">
            {state && (
              <input
                type="text"
                className="addNoteHeader"
                label="Header"
                // onClick={headerClicked}
                onFocus={headerFocused}
                onClick={headerFocused}
                value={headerText}
                onChange={(event) => {
                  headerTextUpdated(event.target.value);
                }}
              ></input>
            )}
            <textarea
              type="text"
              className="addNoteText"
              onFocus={textFocusIn}
              onBlur={textFocusLost}
              value={taskText}
              onChange={(event) => {
                taskTextUpdated(event.target.value);
              }}
            ></textarea>
            <button
              type="button"
              className="btn rounded-circle editBtn"
              onClick={addTaskToArray}
            >
              <AddIcon
                sx={{
                  stroke: "black",
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
