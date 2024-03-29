import react, { useEffect, useState } from "react";
import "./App.css";
import ConvertData from "./ConvertData";
import Clock from "react-live-clock";

function App() {
  let [newText, newTextUpdate] = useState("");  
  let [state,updateState] = useState(0);
  let [reset,resetState] = useState(1);

  const newTextChange = (evt) => {
    newTextUpdate(evt.target.value);
  };

  useEffect(()=>
  {
    console.log('I am useEffect')
    document.title = `ID: ${state}`;
    // resetState(reset+1);
    if (reset==0)
    {
      console.log('Reset')
      updateState(0);
      resetState(1);
    }
  },[state,reset]);

  return (
    <>
      <div className="myClass">
        <Clock format={"HH:mm:ss A"} ticking={true} interval={1000}></Clock>
        {/* <Clock></Clock> */}
        <h1>🇵🇰 Testing useEffect Hook 🇵🇰</h1>
        <textarea
          type="text"
          onChange={newTextChange}
          value={newText}
          rows={5}
          placeholder="enter your text here!!!"
        ></textarea>
        <div className="words">
          <ConvertData key={1} TextData={newText}></ConvertData>
        </div>
        <button type="button" onClick={()=>{updateState(state+1)}}>Click Me!!!</button>
        <button type="button" onClick={()=>{resetState(0)}}>Reset</button>
      </div>      
    </>
  );
}

export default App;
