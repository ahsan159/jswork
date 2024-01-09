import React, { useState } from "react";
import "./App.css";

const App = () => {
  let [inputName, nameUpdate] = useState("");
  let [inputPassword, passwordUpdate] = useState("");
  let [messageToShow, updateMessageToShow] = useState("Hello");

  const inputTextPasswordChange = (event) => {
    passwordUpdate(event.target.value);
  };

  const inputTextNameChange = (event) => {
    nameUpdate(event.target.value);
  };

  const updateHeading = () => {
    updateMessageToShow(inputName + inputPassword);
  };

  return (
    <>
      <div className="mainBody">
        <h1 className="mainHeading"> {messageToShow} </h1>
        <input
          type="text"
          className="mainText"
          placeholder="Enter Your Name"
          value={inputName}
          onChange={inputTextNameChange}
        ></input>
        <input
          type="text"
          className="mainText"
          placeholder="Enter Your Password"
          value={inputPassword}
          onChange={inputTextPasswordChange}
        ></input>
        <button className="mainBtn" onClick={updateHeading}>
          Click Me 👍
        </button>
      </div>
    </>
  );
};

export default App;
