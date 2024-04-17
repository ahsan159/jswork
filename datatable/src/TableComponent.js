import { React, useState } from "react";
import Clock from "react-live-clock";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import dayjs from "dayjs";
import "./TableComponent.css";

let TableComponent = () => {
  let [kingname, updatekingname] = useState({});
  let [indexId, updateIndexId] = useState(0);

  const getrequest = () => {
    console.log(`requesting using axios at ${dayjs(Date.now())}`);
    axios
      .get(
        `http://localhost:8000/temp?index=${indexId}&name=panadol&id=0c23544`
      )
      .then((res) => {
        // save and log the result
        console.log(res.data);
        updatekingname(res.data);
        if (res.data.status === "incorrect") {
          console.log("error message");
          updatekingname({ name: "no data found", start: " ", end: " " });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="mainDiv">
        <h1>This is Data Table Example</h1>
        <div className="clockDiv">
          {/* <Clock ></Clock> */}
          <Clock interval={1000} format={"HH:mm:ss A"} ticking={true}></Clock>
        </div>
        <input
          type="text"
          value={indexId}
          onChange={(evt) => {
            updateIndexId(evt.target.value);
          }}
        ></input>
        <button onClick={getrequest}>Request</button>
        <h2>{kingname.name}</h2>
        <h2>{`${kingname.start} ~ ${kingname.end}`}</h2>
      </div>
    </>
  );
};

export default TableComponent;
