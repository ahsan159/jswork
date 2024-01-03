import React from "react";
import ReactDom from "react-dom/client";
// import logo from './logo.svg';
import "./App.css";
import SData from "./SData";

var r1 = Math.random() * (SData.length - 1);
r1 = r1.toFixed(0);
var r2 = Math.random() * (SData.length - 1);
r2 = r2.toFixed(0);
var r3 = Math.random() * (SData.length - 1);
r3 = r3.toFixed(0);

const SlotM = (props) => {
  let { x, y, z } = props;
  // console.log(`${SData.length} ${r1} ${r2} ${r3}`);
  if (x === y && z === x) {
    return (
      <>
        <div className="singleSlot">
          <h1 className="Jackpot">
            {x} {y} {z}{" "}
          </h1>
          <h1 className="Jackpot">🎁 Jackpot 🎁</h1>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="singleSlot">
          <h1 className="TryAgain">
            {x} {y} {z}{" "}
          </h1>
          <h1 className="TryAgain">💔 better luck next time 💔</h1>
        </div>
      </>
    );
  }
};

function App() {
  return (
    <>
      <h1 className="heading_style">
        {" "}
        🎰 <span style={{ fontWeight: "bold" }}>
          Welcome to slot machine
        </span>{" "}
        🎰{" "}
      </h1>
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
