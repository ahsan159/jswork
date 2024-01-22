import React, { useState } from "react";
import Navbar from "./Navbar.js";
import "./App.css";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AddNote from "./AddNote.js";
import FooterBar from "./FooterBar.js";
import SavedNotes from "./SavedNotes.js";
import DataAdaptor from "./DataAdaptor.js";

function App() {    
  let [tasks,updatetasks] = useState(DataAdaptor);
  const removeTask = (task,header,id)=>
  {
    console.log("I am called");
    // console.log(tasks);
    console.log(task);
    updatetasks(tasks.filter(taskItem=> taskItem.task!=task));
    // console.log(tasks);
  }
  return (
    <>
      <Navbar></Navbar>
      <AddNote taskArray={tasks} updatedTasks={updatetasks}></AddNote>
      <SavedNotes taskArray={tasks} removeTask={removeTask}></SavedNotes>
      <FooterBar></FooterBar>
    </>
  );
}

export default App;
