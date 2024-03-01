import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import About from "./About";
import "./App.css";
import Home from "./Home";
import Navbar from "./Navbar";
import NoPageFound from "./NoPageFound";
import Officers from "./Officers";

function App() {
  return (
    <>
      {/* <h1>Creating Client Side rendered Navigation Bar</h1> */}
      <Navbar></Navbar>
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/about" Component={About}></Route>
        <Route
          path="/about/Persons"
          Component={() => <Officers name="Ahsan"></Officers>}
        ></Route>
        <Route path="*" Component={NoPageFound}></Route>
      </Routes>
    </>
  );
}

export default App;

// must understand that this react router has been significantly updated since the thappa has made his tutorial and now it is working but withour use of Switch state ment and components props.
