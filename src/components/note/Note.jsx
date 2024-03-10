import React from "react";
import "./Note.scss";
import { Button } from "../button/Button";

export const Note = ({ id, text, deleteNote }) => {
  return (
    <div key={id} className="note">
      <div className="note__body">
        <p>{text}</p>
      </div>
      <div className="note__footer">
        <Button onClick={() => deleteNote(id)} text={"Delete"} />
      </div>
    </div>
  );
};
