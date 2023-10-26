import { useState, useEffect } from "react";
import { MdDeleteForever } from "react-icons/md";

const Note = ({ id, note_theme, text, date, handleDeleteNote }) => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const now = new Date(date);
    const formattedDate = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
    setTime(formattedDate);
  }, [date]);

  return (
    <div className="note">
      <span>{note_theme}</span>
      <span>{text}</span>
      <div className="note-footer">
        <small>{time}</small>
        <MdDeleteForever onClick={() => handleDeleteNote(id)} className="delete-icon" size="1.3em" />
      </div>
    </div>
  );
};

export default Note;
