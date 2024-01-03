import React, { useState } from "react";
import ReactDom from "react-dom/client";
// import logo from './logo.svg';
import SlotM from "./SlotM";
import "./App.css";
import SData from "./SData";

let ct = new Date();
// let cTime = ct.toLocaleTimeString();

var r1 = Math.random() * (SData.length - 1);
r1 = r1.toFixed(0);
var r2 = Math.random() * (SData.length - 1);
r2 = r2.toFixed(0);
var r3 = Math.random() * (SData.length - 1);
r3 = r3.toFixed(0);

function App() {
  const [cTime, setTime] = useState(ct.toLocaleTimeString());  
  const updateTime = () => {
    setTime(ct.toLocaleTimeString());
    ct = new Date();
  };
  return (
    <>
      <h1 className="heading_style">
        {" "}
        🎰 <span style={{ fontWeight: "bold" }}>
          Welcome to slot machine
        </span>{" "}
        🎰{" "}
      </h1>
      <div className="clockProj">
        <h1 className="clockHeader">{cTime}</h1>
        <button className="clockBtn" onClick={updateTime}>
          Update Time
        </button>
      </div>
      <div className="slotBody">
        <SlotM key={1} x={SData[r1]} y={SData[r2]} z={SData[r3]} />
        <SlotM key={2} x={"😀"} y={"😀"} z={"😀"} />
        <SlotM key={3} x={"😀"} y={"😀"} z={"🎅"} />
        <div className="bottomLine"></div>
      </div>
    </>
  );
}

export default App;
