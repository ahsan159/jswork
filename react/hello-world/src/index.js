// import React from 'react';
// import ReactDOM  from 'react-dom';

// ReactDOM.render(<h1>Hello World</h1>,document.getElementById('root'));


// below code is automatically generator by create-react-app but above code by thappa technical is also doing the same thing.

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

root.render(
  // commentated can be and should be replaced by React.Fragment
  // [<h1>Hello World!!!</h1>,<p> This is copying thappa technical and array is the method to render multiple elements in react</p>]

  <React.Fragment>
    <h1>Hello World!!!</h1>
    <p>This is copying thappa technical and array is the method to render multiple elements in react.</p>
    <p> However, we can also use React.Fragment to do the same.</p>
  </React.Fragment>
  )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
