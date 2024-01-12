import React from "react";
import "./Task.css";

const Task = (props) => {
  return (
    <>
      <div className="taskClass" id={props.id}>
        <button
          onClick={props.removeFunction}
          className="deleteTaskBtn"
          value={props.id}
        >
          X
        </button>
        <h1 className="taskDescription">{props.task}</h1>
      </div>
    </>
  );
};

export default Task;
