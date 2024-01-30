import react, { useState } from "react";
import "./App.css";
import ConvertData from "./ConvertData";

function App() {
  
  let [newText, newTextUpdate] = useState("");
  const newTextChange = (evt) => {
    newTextUpdate(evt.target.value);  
  };
  
  return (
    <>
      <div className="myClass">
        <h1>🇵🇰 Testing useEffect Hook 🇵🇰</h1>
        <textarea type="text" onChange={newTextChange} value={newText} rows={5} placeholder="enter your text here!!!"></textarea>
        <div className="words">          
          <ConvertData key={1} TextData={newText}></ConvertData>
        </div>
      </div>
    </>
  );
}

export default App;
