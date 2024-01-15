import React from "react";
import "./Task.css";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const Task = (props) => {
  return (
    <>
      <div className="taskClass" id={props.id}>
        <Button
          variant="contained"
          color="error"
          onClick={props.removeFunction}
          className="deleteTaskBtn"
          value={props.id}
          style={{ padding: "0", borderRadius: "20px" , width:"40px", height:"40px"}}
        >
          <DeleteIcon></DeleteIcon>
        </Button>
        <h1 className="taskDescription">{props.task}</h1>
      </div>
    </>
  );
};

export default Task;
