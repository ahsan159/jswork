import React from "react";
import ReactDom from "react-dom/client";
// import logo from './logo.svg';
import "./App.css";

const SlotM = (props) => {
  let { x, y, z } = props;

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
        <SlotM key={1} x={"😀"} y={"😀"} z={"😆"} />
        <SlotM key={2} x={"😀"} y={"😀"} z={"😀"} />
        <SlotM key={3} x={"😀"} y={"😀"} z={"😀"} />
        <div className="bottomLine"></div>
      </div>
    </>
  );
}

export default App;
