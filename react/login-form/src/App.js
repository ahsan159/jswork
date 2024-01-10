import React, { useState, useSyncExternalStore } from "react";
import "./App.css";

function App() {
  let userDataFormat = ["username", "password", "email", "contact"];
  let [displayData, updateDisplayData] = useState("Hello");
  let [loginData, loginDataUpdate] = useState({
    uname: "",
    password: "",
    email: "",
    contact: "",
  });
  const submitForm = (event) => {
    event.preventDefault();
    updateDisplayData(`${loginData.uname} ${loginData.password} ${loginData.email} ${loginData.contact}`)
  };
  const inputTextChangeEvent = (event) => {
    const cname = event.target.name;
    const cvalue = event.target.value;
    //   // user object destructuring as per es6 format
    // const { cname, cvalue } = event.target;
    // console.log(cname);
    // console.log(cvalue);
    loginDataUpdate((preData) => {
      if (cname === userDataFormat[0]) {
        return {
          uname: cvalue,
          password: preData.password,
          email: preData.email,
          contact: preData.contact,
        };
      } else if (cname === userDataFormat[1]) {
        return {
          uname: preData.uname,
          password: cvalue,
          email: preData.email,
          contact: preData.contact,
        };
      } else if (cname === userDataFormat[2]) {
        return {
          uname: preData.uname,
          password: preData.password,
          email: cvalue,
          contact: preData.contact,
        };
      } else if (cname === userDataFormat[3]) {
        return {
          uname: preData.uname,
          password: preData.password,
          email: preData.email,
          contact: cvalue,
        };
      }
    });
  };

  return (
    <>
      <form onSubmit={submitForm}>
        <div className="mainBody">
          <h1 className="mainHeading">{displayData}</h1>
          <input
            className="inputText"
            type="text"
            name={userDataFormat[0]}
            placeholder="Enter your name"
            value={loginData.uname}
            onChange={inputTextChangeEvent}
          ></input>
          <input
            className="inputText"
            type="password"
            name={userDataFormat[1]}
            placeholder="Enter your password"
            value={loginData.password}
            onChange={inputTextChangeEvent}
          ></input>
          <input
            className="inputText"
            type="email"
            name={userDataFormat[2]}
            placeholder="Enter your E-mail"
            value={loginData.email}
            onChange={inputTextChangeEvent}
          ></input>
          <input
            className="inputText"
            type="tel"
            name={userDataFormat[3]}
            placeholder="Enter your contact No."
            value={loginData.contact}
            onChange={inputTextChangeEvent}
          ></input>

          <button type="submit" className="loginBtn">
            Login 👍
          </button>
        </div>
      </form>
    </>
  );
}

export default App;
