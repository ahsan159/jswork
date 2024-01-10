import React, { useState } from "react";
// import logo from './logo.svg';
import "./App.css";

function App() {
  let tasks = [];
  let [todoEntry, todoEntryUpdate] = useState("");

  const textOnChange = (event) => {
    todoEntryUpdate(event.target.value);
  };

  const addEntry = () => {
    tasks.push(todoEntry);
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
