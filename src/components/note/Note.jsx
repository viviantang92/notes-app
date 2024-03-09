import React from "react";
import "./Note.scss";

export const Note = ({ id, content }) => {
  return (
    <div key={id} className="note">
      <textarea placeholder="Type here">{content}</textarea>
      <div className="note-footer">
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};
