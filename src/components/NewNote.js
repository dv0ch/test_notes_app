import { useState } from "react";

const NewNote = ({ handleNewNote }) => {
  const [noteText, setNoteText] = useState("");
  const characterLimit = 300;

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleNewNote(noteText);
      setNoteText("");
    }
  };

  return (
    <div className="note new">
      <textarea
        rows="6"
        cols="10"
        placeholder="..."
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>Осталось {characterLimit - noteText.length} символов</small>
        <button className="save" onClick={handleSaveClick}>
          Сохранить
        </button>
      </div>
    </div>
  );
};

export default NewNote;
