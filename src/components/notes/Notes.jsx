import React, { useState } from "react";
import "./Notes.scss";
import { CreateNote } from "../createNote/CreateNote";
import { Note } from "../note/Note";
import { v4 as uuid } from "uuid";

export const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [inputText, setInputText] = useState("");

  const textHandler = (e) => {
    setInputText(e.target.value);
  };

  const addNote = () => {
    setNotes((prev) => [...prev, { id: uuid(), text: inputText }]);
    setInputText("");
  };

  const deleteNote = (id) => {
    const filteredNoted = notes.filter((note) => note.id !== id);
    setNotes(filteredNoted);
  };

  return (
    <div className="notes-wrapper">
      <CreateNote
        inputText={inputText}
        textHandler={textHandler}
        addNote={addNote}
      />
      {notes.map((note) => (
        <Note id={note.id} text={note.text} deleteNote={deleteNote} />
      ))}
    </div>
  );
};
