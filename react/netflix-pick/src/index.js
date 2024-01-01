import React from "react";
// import ReactDOM from 'react-dom'
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Card from "./Card";
import SData from "./Data";

// uisng JSX (Javascript Expressions for list)

const fname = "Ahsan";
const lname = "Saddique";

const nameArray = [
  "Dark",
  "Extra Curricular",
  "My Holo Love",
  "My First-2 Love",
  "Mr Robot",
];

let root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <>
//     <h1>My Top 5 Netflix Pick</h1>
//     {/* below line is using tempelate literal   */}
//     <p>{`I am ${fname} ${lname} and this is my List of 5 Best Series`}</p>
//     <ol>
//       <li>{nameArray[0]}</li>
//       <li>{nameArray[1]}</li>
//       <li>{nameArray[2]}</li>
//       <li>{nameArray[3]}</li>
//       <li>{nameArray[4]}</li>
//     </ol>
//   </>,document.getElementById('root')
// );

root.render(
  // below code will develop card from scratch without using bootstrap
  <>
    <h1 className="heading_style">List of Top5 Netflix Series 2020</h1>
    <Card
      imgsrc={SData[0].imgsrc}
      title={SData[0].title}
      sname={SData[0].sname}
      link={SData[0].link}
    ></Card>
    <Card
      imgsrc={SData[1].imgsrc}
      title={SData[1].title}
      sname={SData[1].sname}
      link={SData[1].link}
    ></Card>
    <Card
      imgsrc={SData[2].imgsrc}
      title={SData[2].title}
      sname={SData[2].sname}
      link={SData[2].link}
    ></Card>
    <Card
      imgsrc={SData[3].imgsrc}
      title={SData[3].title}
      sname={SData[3].sname}
      link={SData[3].link}
    ></Card>
    <Card
      imgsrc={SData[4].imgsrc}
      title={SData[4].title}
      sname={SData[4].sname}
      link={SData[4].link}
    ></Card>
  </>
);

reportWebVitals();

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
