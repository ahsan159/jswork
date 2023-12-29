import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let greetStr = "Welcome";
let cssStyle = {color:'brown'};

let t = new Date();
t = t.getHours();

// t = 21;
if (t<12)
{
  greetStr = "Good Morning";
  cssStyle.color = 'green';
}
else if (t<14)
{
  greetStr = "Good AfterNoon";
  cssStyle.color = "orange";
}
else if (t<19)
{
  greetStr = "Good Evening";
  cssStyle.color = "red";
}
else
{
  greetStr = "Good Night";
  cssStyle.color = "blue";
}

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

root.render(
  <div>
    <h1 style={cssStyle} className='greet'>{greetStr}</h1>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
