import React from "react";
import "./CreateNote.scss";
import { Button } from "../button/Button";

export const CreateNote = ({ inputText, textHandler, addNote }) => {
  return (
    <div className="create-note">
      <textarea
        onChange={textHandler}
        value={inputText}
        placeholder="Type here..."
      ></textarea>
      <div className="note-footer">
        <Button onClick={addNote} text={"Save"} />
      </div>
    </div>
  );
};
