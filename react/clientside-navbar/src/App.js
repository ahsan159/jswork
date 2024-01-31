import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import About from "./About";
import "./App.css";
import Home from "./Home";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      {/* <h1>Creating Client Side rendered Navigation Bar</h1> */}
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
    </>
  );
}

export default App;

// must understand that this react router has been significantly updated since the thappa has made his tutorial and now it is working but withour use of Switch state ment and components props.