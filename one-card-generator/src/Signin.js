import react, { useState, useSyncExternalStore } from "react";
import "./Signin.css";

const Signin = () => {
  let [username, updateUserName] = useState("");
  let [password, updatePassword] = useState("");

  const submitloginData = () => {
    console.log("submitting username and password");
    console.log(`${username} and ${password}`);
    if (username === "ahsan" && password === "ahsan") {
      alert("success");
    }
  };
  const gotosignup = () => {
    console.log("sign up");
    console.log(username);
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
            updateUserName(event.target.value);
          }}
        ></input>
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(event) => {
            updatePassword(event.target.value);
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
