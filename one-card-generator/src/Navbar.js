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
        {/* <div className="loginPanel">
          <input type="text" placeholder="username"></input>
          <input type="password" placeholder="password"></input>
          <button
            onClick={() => {
              console.log("i am clicked");
            }}
          >
            Login
          </button>
          <button
            onClick={() => {
              console.log("i am clicked to signup");
            }}
          >
            SignUp
          </button>
        </div> */}
      </div>
    </>
  );
};
export default Navbar;
