import React, { useState } from "react";
import "./App.css";

// const bgc = "red";

function App() {
  let [textC,updateText] = useState("Click Me");
  let [bgc, updateBgc] = useState("red");
  const bgChange = () => {
    if (bgc === "red") {
      bgc = "purple";
    } else {
      bgc = "red";
    }
    updateBgc(bgc);
  };
  const textChange = ()=>
  {    
    updateText("doubleClick");
  }
  return (
    <>
      <div className="mainBody" style={{ backgroundColor: bgc }}>
        <button onClick={bgChange} onDoubleClick={textChange} className="mainBtn">
          {textC}
        </button>
      </div>
    </>
  );
}

export default App;
