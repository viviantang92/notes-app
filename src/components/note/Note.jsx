import React from "react";
import "./Note.scss";

export const Note = (props) => {
  return (
    <div className="note">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <div className="note-footer">
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};
