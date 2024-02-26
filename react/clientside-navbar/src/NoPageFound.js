import React from "react";
import { useLocation } from "react-router-dom";

const NoPageFound = () => {
  let loc = useLocation();
  return (<h1> Page Not Found {loc.pathname} </h1>);
};

export default NoPageFound;
