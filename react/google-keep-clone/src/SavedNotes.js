import React from "react";
import AddIcon from "@mui/icons-material/Add";
import "./SavedNotes.css";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import Note from "./Note";

const SavedNotes = (props) => {
  return (
    <>
      <div className="container-fluid d-flex flex-wrap p-0 m-0 bg-light justify-content-start">
        {props.taskArray.map((cItem, index) => {
          return (
            <Note
              key={cItem.id}
              title={cItem.title}
              note={cItem.task}
              removeNote={props.removeTask}
            ></Note>
          );
        })}
      </div>
    </>
  );
};

export default SavedNotes;
