import React, { useState } from "react";
import "./App.css";

const App = () => {
  let [inputMessage, messageUpdate] = useState("");
  let [messageToShow, updateMessageToShow] = useState("Hello");

  const inputTextChange = (event) => {
    messageUpdate(event.target.value);
  };

  const updateHeading = () => {
    updateMessageToShow(inputMessage);
  };

  const updateHeadingLower = () => {
    updateMessageToShow(inputMessage.toLowerCase());
  };
  const updateHeadingUpper = () => {
    updateMessageToShow(inputMessage.toUpperCase());
  };

  return (
    <>
      <div className="mainBody">
        <h1 className="mainHeading"> {messageToShow} </h1>
        <input
          type="text"
          className="mainText"
          placeholder="Enter Your Name"
          value={inputMessage}
          onChange={inputTextChange}
        ></input>
        <button className="mainBtn" onClick={updateHeading}>
          Click Me 👍
        </button>
        <button className="mainBtn" onClick={updateHeadingUpper}>
          UPPERCASE ⬆️
        </button>
        <button className="mainBtn" onClick={updateHeadingLower}>
          lowercase ⬇️
        </button>
      </div>
    </>
  );
};

export default App;
