import React from 'react'
import ReactDOM from 'react-dom'
import './calc.css'

function add(a,b)
{
    var c = a + b;
    return (
        c
    );
}

function subtract(a,b)
{
    var c = a-b;
    return (
        c
    );
}

function divide (a,b)
{
    var c = a/b;
    return (
        c.toFixed(2)
    );
}

function multiply (a,b)
{
    var c = a*b;
    return (
        c
    );
}

export default add;
export {subtract};
export {divide};
export {multiply};