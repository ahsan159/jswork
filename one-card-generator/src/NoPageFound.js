import React from "react";
import { useLocation } from "react-router-dom";
import "./NoPageFound.css";

const NoPageFound = () => {
  let loc = useLocation();
  return (
    <>
      <div className="noPage">
        <h1>404</h1>
        <h2>Page not found</h2>
        <p>Cannot find resource "{loc.pathname}"</p>
      </div>
    </>
  );
};

export default NoPageFound;
