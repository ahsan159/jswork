import React, { useState } from "react";
import "./App.css";
// import logo from './logo.svg';

function App() {
  let [count, updateCount] = useState(0);
  const increment = () => {
    updateCount(count + 1);
  };
  const decrement = () => {
    count = count - 1;
    if (count < 0) {
      count = 0;
      alert("Sorry, Zero limit reached");
    }
    updateCount(count);
  };
  return (
    <>
      <div className="main">
        <div className="mainBody">
          <h1 className="mainHeader">Increment/Decrement</h1>
          <input type="text" className="inputNumber" value={count}></input>
          <div className="buttonDiv">
            <button className="Btn" onClick={increment}>
              Increment
            </button>
            <button className="Btn" onClick={decrement}>
              Decrement
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
