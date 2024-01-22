import React from "react";
import AddIcon from "@mui/icons-material/Add";
import "./SavedNotes.css";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import Note from "./Note";

const SavedNotes = (props) => {
  const removeNote = (event) => {
    console.log(" I am Clicked");
  };
  return (
    <>
      <div className="container-fluid d-flex flex-wrap p-0 m-0 bg-light justify-content-start">
        <Note
          title="Header 1"
          note="This is the note and it should wrap I am not seeing any wrapping till now but i hope it will wrap"
          removeNote={removeNote}
        ></Note>
        <Note
          title="Header 2"
          note="This is the note and it should wrap"
          removeNote={removeNote}
        ></Note>
        <Note
          title="Header 3"
          note="This is the note and it should wrap"
          removeNote={removeNote}
        ></Note>
        <Note
          title="Header 4"
          note="This is the note and it should wrap. Yes this is wrapping front end is working pretty much flawless but main functionality using javascript and react is remaining to be added. I think these notes are taking area in the delete button this part of text will confirm this."
          removeNote={removeNote}
        ></Note>
        {props.taskArray.map((cItem, index) => {
          return (
            <Note
              key={cItem.id}
              title={cItem.title}
              note={cItem.task}
              removeNote={removeNote}
            ></Note>
          );
        })}
      </div>
    </>
  );
};

export default SavedNotes;
