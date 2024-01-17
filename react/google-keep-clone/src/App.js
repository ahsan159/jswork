import React from "react";
import Navbar from "./Navbar.js";
import "./App.css";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AddNote from "./AddNote.js";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <AddNote></AddNote>
    </>
  );
}

export default App;
