import React from "react";
import "./FooterBar.css";

const FooterBar = () => {
  let dYear = new Date();
  let year = dYear.getFullYear();

  return (
    <>
      <div className="footer">
        <p> Copyright ©️ {year}</p>
      </div>
    </>
  );
};

export default FooterBar;
