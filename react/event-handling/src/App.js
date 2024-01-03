import React, { useState } from "react";
import "./App.css";

// const bgc = "red";

function App() {
  let [textC, updateText] = useState("Click Me");
  let [bgc, updateBgc] = useState("red");
  const bgChange = () => {
    if (bgc === "red") {
      bgc = "purple";
      textC = "OUUHH 😎";
    } else {
      bgc = "red";
      textC = "Click Me!!!";
    }
    updateBgc(bgc);
    updateText(textC);
  };
  const textChange = () => {
    updateText("YESSS!!! 😁");
  };
  return (
    <>
      <div className="mainBody" style={{ backgroundColor: bgc }}>
        <button
          onClick={bgChange}
          onDoubleClick={textChange}
          className="mainBtn"
        >
          {textC}
        </button>
      </div>
    </>
  );
}

export default App;
