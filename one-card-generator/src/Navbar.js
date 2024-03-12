import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navigationBar">
        <nav>
          <NavLink className="navlink" to="/home">
            Home
          </NavLink>
          {/* <NavLink className="navlink" to="/about">
            About
          </NavLink> */}
          <NavLink className="navlink" to="/login">
            Login
          </NavLink>
        </nav>
      </div>
    </>
  );
};
export default Navbar;
