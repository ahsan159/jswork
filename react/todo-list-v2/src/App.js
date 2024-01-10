import React, { useState } from "react";
// import logo from './logo.svg';
import "./App.css";

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
        </div>
      </div>
    </>
  );
}

export default App;
