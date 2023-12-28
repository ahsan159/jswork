import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const t = new Date();
const name = "Ahsan";
const root = ReactDOM.createRoot(document.getElementById("root"));
const imgLink1 = "https://picsum.photos/400/400";
const imgLink2 = "https://picsum.photos/300/400";
const imgLink3 = "https://picsum.photos/200/400";
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

root.render(
  <>
    <h1 className="heading">Today</h1>
    {/* <p>My name is {name}</p> */}
    <div className="datentime">
      <p>{`Current Time is ${t.toLocaleTimeString()}`}</p>
      <p>{`Current Date is ${t.toLocaleDateString()}`}</p>
    </div>
    <div className="images">
    <img src={imgLink1} alt="RandomImages"></img>
    <img src={imgLink2} alt="RandomImages"></img>
    <img src={imgLink3} alt="RandomImages"></img>
    </div>
    <a href="http://www.google.com/">This will direct you to another link</a>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
