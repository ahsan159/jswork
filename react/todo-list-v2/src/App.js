import React, { useState } from "react";
import "./App.css";
import Task from "./Task";
// import logo from './logo.svg';
// import TaskData from "./TaskData";

function App() {
  let [todoEntry, todoEntryUpdate] = useState("");
  let [updatedToDoList, toupdateMethod] = useState([]);

  const textOnChange = (event) => {
    // console.log(todoEntry);
    todoEntryUpdate(event.target.value);
    // console.log(todoEntry);
  };

  const addEntry = () => {
    updatedToDoList = [...updatedToDoList, todoEntry];
    // TaskData = [...TaskData,todoEntry];
    // TaskData = updatedToDoList;
    todoEntryUpdate("");
    toupdateMethod(updatedToDoList);
  };

  const removeTaskEntry = (event) => {
    // console.log(event.target.value);
    // updatedToDoList.splice(event.target.value, 1);
    const first = updatedToDoList.slice(0, Number(event.target.value));
    const second = updatedToDoList.slice(Number(event.target.value) + 1);
    toupdateMethod([...first, ...second]);
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
          {updatedToDoList.map((val, index, array) => {
            return (
              <Task
                key={index}
                task={val}
                id={index}
                removeFunction={removeTaskEntry}
              ></Task>
            );
          })}
          {/* <Task id="1" task="todolist"></Task>
          <Task id="2" task="todolist"></Task>
          <Task id="3" task="todolist"></Task> */}
        </div>
      </div>
    </>
  );
}

export default App;
