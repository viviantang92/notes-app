import React from "react";
import "./CreateNote.scss";

export const CreateNote = () => {
  return (
    <div className="create-note">
      <textarea placeholder="Type here..."></textarea>
      <div className="note-footer">
        <button>Save</button>
      </div>
    </div>
  );
};
