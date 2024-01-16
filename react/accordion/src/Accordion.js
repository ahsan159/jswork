import React, { useState } from "react";
import "./Accordion.css";

const Accordion = ({ question, answer }) => {
  let [cState, stateUpdate] = useState(false);
  let [sState, signUpdate] = useState("➕");
  const hide_show = () => {
    stateUpdate(!cState);
    if (cState) {
      sState = "➕";
      signUpdate(sState);
    } else {
      sState = "➖";
      signUpdate(sState);
    }
  };
  return (
    <>
      <div className="accordion">
        <div className="accordionHeader">
          <button type="button" className="accordionBtn" onClick={hide_show}>
            {sState}
          </button>
          <h1 className="accordionHeaderText">{question}</h1>
        </div>
        {cState && <p className="accordionData">{answer}</p>}
      </div>
    </>
  );
};

export default Accordion;
