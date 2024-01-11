import React from "react";
import "./Task.css";

const deleteTask = (event) => {
  console.log("deleting task " + event.target.value);
};

const Task = (props) => {
  return (
    <>
      <div className="taskClass" id={props.id}>
        <button onClick={deleteTask} className="deleteTaskBtn" value={props.id}>
          -
        </button>
        <h1 className="taskDescription">{props.task}</h1>
      </div>
    </>
  );
};

export default Task;
