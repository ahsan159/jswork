import React from "react";
import { DatePicker } from 'react-date-picker';

const Step3 = (props) => {
  return (
    <>
      <h1>Step3/3</h1>
      <p>Step3</p>
      <DatePicker onChange={props.pickDate} value={props.pcikedDate}></DatePicker>
    </>
  );
};

export default Step3;
