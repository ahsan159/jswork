import React from "react";
import "./AddNote.css";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
// import { IconButton } from "@mui/material";

const AddNote = () => {
  return (
    <>
      <div className="container-fluid d-flex flex-column p-0 m-0 justify-content-center">
        <div className="row m-5">
          <h1 className="text-dark text-center">Data</h1>
        </div>
        <div className="row m-5 d-flex justify-content-center">
            <TextField multiline label="input" className="col-3"></TextField>
            <Button variant="contained" className="buttonAdd">➕</Button>
        </div>
      </div>
    </>
  );
};

export default AddNote;
