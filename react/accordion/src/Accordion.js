import React from "react";

const Accordion = ({ question, answer }) => {
  return (
    <>
      <h1>{question}</h1>
      <p>{answer}</p>
    </>
  );
};

export default Accordion;
