import React, { useState } from "react";

let ct = new Date();
const ClockU = () => {
  const [cTime, setTime] = useState(ct.toLocaleTimeString());
  const updateTime = () => {
    ct = new Date();
    setTime(ct.toLocaleTimeString());
  };
  setInterval(() => {
    updateTime();
  }, 1000);
  return (
    <>
      <div className="clockProj">
        <h1 className="clockHeader">{cTime}</h1>
        <button className="clockBtn" onClick={updateTime}>
          Update Time
        </button>
      </div>
    </>
  );
};

export default ClockU;
