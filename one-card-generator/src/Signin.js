import react, { useState, useSyncExternalStore } from "react";
import "./Signin.css";

const Signin = () => {
  let [username, updateUserName] = useState("");
  let [password, updatePassword] = useState("");

  const submitloginData = () => {
    console.log("submitting username and password");
  };
  const gotosignup = () => {
    console.log("sign up");
  };
  return (
    <>
      <div className="signInClass">
        <h1>One Card Generator</h1>
        <input
          type="text"
          value={username}
          placeholder="Username"
          onChange={(event) => {
            updateUserName(event.value);
          }}
        ></input>
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(event) => {
            updatePassword(event.value);
          }}
        ></input>
        <div className="buttonClass">
          <button onClick={submitloginData}>Login</button>
          <button onClick={gotosignup}>Signup</button>
        </div>
      </div>
    </>
  );
};

export default Signin;
