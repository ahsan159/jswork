import React, { useState } from "react";
// import logo from './logo.svg';
import "./App.css";
import Task from "./Task";

let tasks = [];
function App() {
  let [todoEntry, todoEntryUpdate] = useState("");

  const textOnChange = (event) => {
    todoEntryUpdate(event.target.value);
  };

  const addEntry = () => {
    tasks.push(todoEntry);
    console.log(todoEntry);
    console.log(tasks);
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
          <Task id='1' task='todolist'></Task>          
          <Task id='2' task='todolist'></Task>
          <Task id='3' task='todolist'></Task>
        </div>
      </div>
    </>
  );
}

export default App;
