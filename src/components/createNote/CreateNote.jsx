import React from "react";
import "./CreateNote.scss";
import { Button } from "../button/Button";

export const CreateNote = ({ inputText, textHandler, addNote }) => {

  const charLimit = 100;
  const charLeft = charLimit - inputText.length;

  return (
    <div className="create-note">
      <textarea
        onChange={textHandler}
        value={inputText}
        placeholder="Type here..."
        maxLength={charLimit}
      ></textarea>
      <div className="create-note__footer">
        <span>{charLeft} left</span>
        <Button onClick={addNote} text={"Save"} />
      </div>
  
    </div>
  );
};
