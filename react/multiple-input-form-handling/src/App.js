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

  const updateHeading = (event) => {
    event.preventDefault();
    updateMessageToShow(inputName + inputPassword);
  };

  return (
    <>
      <form onSubmit={updateHeading}>
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
            type="password"
            className="mainText"
            placeholder="Enter Your Password"
            value={inputPassword}
            onChange={inputTextPasswordChange}
          ></input>
          <button type="submit" className="mainBtn" >
            Click Me 👍
          </button>
        </div>
      </form>
    </>
  );
};

export default App;
