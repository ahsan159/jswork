import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Signin from "./Signin";
import Home from "./Home";
import NoPageFound from "./NoPageFound";
import Navbar from "./Navbar";

function App() {
  return (
    <div>
      {/* <h1>Welcome to react</h1> */}
      <Navbar></Navbar>
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/home" Component={Home}></Route>
        <Route path="/login" Component={Signin}></Route>
        <Route path="*" Component={NoPageFound}></Route>
      </Routes>
      {/* <Signin></Signin> */}
    </div>
  );
}

export default App;
