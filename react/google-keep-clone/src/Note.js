import React from "react";
import AddIcon from "@mui/icons-material/Add";
import "./Note.css";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";

const Note = (props) => {
  const removeNote = ()=>
  {
    props.removeNote(props.note);
  }
  return (
    <>      
        <div className="d-flex flex-column notes p-2">
          <h2>{props.title}</h2>
          <p>{props.note}</p>
          <button type="button" className="btn bg-light mybtn">
            <DeleteIcon variant="outlined" onClick={removeNote}></DeleteIcon>
          </button>
        </div>      
    </>
  );
};

export default Note;
