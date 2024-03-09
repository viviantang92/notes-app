import React, { useState } from "react";
import "./Notes.scss";
import { CreateNote } from "../createNote/CreateNote";
import { Note } from "../note/Note";

export const Notes = () => {
  const [notes, setNotes] = useState([
    { id: 1, content: "Content1" },
    { id: 2, content: "Content2" },
    { id: 3, content: "Content3" },
  ]);

  return (
    <div className="notes-wrapper">
      <CreateNote />
      {notes.map((note) => (
        <Note id={note.id} content={note.content} />
      ))}
    </div>
  );
};
