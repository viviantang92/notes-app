import React from "react";
import "./CreateNote.scss";

export const CreateNote = () => {
  return (
    <div className="create-note">
      <h2>Type title here...</h2>
      <p>Your note...</p>
      <div className="note-footer">
        <button>Save</button>
      </div>
    </div>
  );
};
