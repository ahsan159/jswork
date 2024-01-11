import React, { useState } from "react";
// import logo from './logo.svg';
import "./App.css";
import Task from "./Task";
import TaskData from "./TaskData";

function App() {
  let [todoEntry, todoEntryUpdate] = useState("");
  let [updatedToDoList,toupdateMethod] = useState(TaskData);

  const textOnChange = (event) => {
    console.log(todoEntry);
    todoEntryUpdate(event.target.value);
    console.log(todoEntry);
  };
  
  const addEntry = () => {
    updatedToDoList = [...updatedToDoList,todoEntry];
    // todoEntryUpdate(todoEntry);
    console.log(todoEntry);
    console.log(TaskData);
    toupdateMethod(updatedToDoList);
  };

  return (
    <>
      <div className="body">
        <div className="mainBody">
          <h1 className="todoHeading">TODO List App</h1>
          <div className="todoEntry">
            <input
              className="todoInput"
              type="text"
              name="task"
              value={todoEntry}
              onChange={textOnChange}
              placeholder="Enter Task"
            ></input>
            <button className="todoBtn" onClick={addEntry}>
              +
            </button>
          </div>
          {updatedToDoList.map((val,index)=> {
            return (
              <Task key={index} task={val}></Task>
            ); }
          )}
          {/* <Task id="1" task="todolist"></Task>
          <Task id="2" task="todolist"></Task>
          <Task id="3" task="todolist"></Task> */}
        </div>
      </div>
    </>
  );
}

export default App;
