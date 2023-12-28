import React from 'react';
import ReactDOM from 'react-dom'

// uisng JSX (Javascript Expressions for list)

const fname = 'Ahsan';
const lname = 'Saddique';

const nameArray = [
  'Dark',
  'Extra Curricular',
  'My Holo Love',
  'My First-2 Love',
  'Mr Robot'
];

ReactDOM.render(
  <>
    <h1>My Top 5 Netflix Pick</h1>
    {/* below line is using tempelate literal   */}
    <p>{`I am ${fname} ${lname} and this is my List of 5 Best Series`}</p>
    <ol>
      <li>{nameArray[0]}</li>
      <li>{nameArray[1]}</li>
      <li>{nameArray[2]}</li>
      <li>{nameArray[3]}</li>
      <li>{nameArray[4]}</li>
    </ol>
  </>,document.getElementById('root')
);

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
