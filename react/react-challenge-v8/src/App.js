import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "./App.css";
import { colors } from "@mui/material";
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
              <AddIcon style={{ backgroundColor: (117, 110, 218) }}></AddIcon>
            </button>
            <button className="Btn" onClick={decrement}>
              <RemoveIcon
                style={{ backgroundColor: (117, 110, 218) }}
              ></RemoveIcon>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
