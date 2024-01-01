import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import add, { divide, subtract, multiply } from "./calc";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <>
    <h1>Calculator App</h1>
    <li>Addition is {add(2, 4)}</li>
    <li>Subtraction is {subtract(2, 4)}</li>
    <li>Division is {divide(4, 3)}</li>
    <li>Multiplication is {multiply(2, 4)}</li>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
