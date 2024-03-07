import React from "react";
import "./NotesWrapper.scss";
import { Note } from "../note/Note";
import { CreateNote } from "../createNote/CreateNote";

export const NotesWrapper = () => {
  return (
    <div className="notes-wrapper">
      <CreateNote />
      <Note title={"Titke"} content={"hfksnb"} />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
    </div>
  );
};
