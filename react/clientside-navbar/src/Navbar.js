import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navigationBar">
        <nav>
          <NavLink className="navlink" to="/">
            Home
          </NavLink>
          <NavLink className="navlink" to="/about">
            About
          </NavLink>
        </nav>
        {/* <h1>Data</h1> */}
      </div>
    </>
  );
};
export default Navbar;
