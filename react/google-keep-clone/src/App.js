import React from "react";
import Navbar from "./Navbar.js";
import "./App.css";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AddNote from "./AddNote.js";
import FooterBar from "./FooterBar.js";
import SavedNotes from "./SavedNotes.js";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <AddNote></AddNote>
      <SavedNotes></SavedNotes>
      <FooterBar></FooterBar>
    </>
  );
}

export default App;
