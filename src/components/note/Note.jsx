import React from "react";
import "./Note.scss";
import { Button } from "../button/Button";

export const Note = ({ id, text, deleteNote }) => {
  return (
    <div key={id} className="note">
      <div className="note_body">
        <p>{text}</p>
      </div>
      <div className="note_footer">
        <Button onClick={() => deleteNote(id)} text={"Delete"} />
      </div>
    </div>
  );
};
