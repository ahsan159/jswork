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
  return (
    <>
      <Navbar></Navbar>
      <AddNote taskArray={tasks} updatedTasks={updatetasks}></AddNote>
      <SavedNotes taskArray={tasks}></SavedNotes>
      <FooterBar></FooterBar>
    </>
  );
}

export default App;
