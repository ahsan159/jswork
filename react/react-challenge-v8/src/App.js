import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Button } from "@mui/material";
import "./App.css";
// import { colors } from "@mui/material";
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
            <Button
              variant="outlined"
              color="success"
              className="incBtn"
              onClick={increment}
              style={{padding:"0"}}
            >
              <AddIcon
                style={{
                  backgroundColor: "green",
                  color: "white",                  
                  width: "100%",
                  height: "100%",                  
                }}
              ></AddIcon>
            </Button>
            <Button
              variant="outlined"
              color="error"
              className="decBtn"
              onClick={decrement}
              style={{ padding: 0 }}
            >
              <RemoveIcon
                style={{
                  backgroundColor: "red",
                  color: "white",                  
                  width: "100%",
                  height: "100%",
                }}
              ></RemoveIcon>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
