import React, { useState, useEffect } from "react";
import { MdDeleteForever, MdEdit } from "react-icons/md";

const Note = ({
  id,
  note_theme,
  text,
  date,
  handleDeleteNote,
  handleEditNote,
}) => {
  const [time, setTime] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const now = new Date(date);
    const formattedDate = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
    setTime(formattedDate);
  }, [date]);

  const [isEditing, setIsEditing] = useState(false);
  const [editedTheme, setEditedTheme] = useState(note_theme);
  const [editedText, setEditedText] = useState(text);

  const handleSaveEdit = () => {
    handleEditNote(id, editedTheme, editedText);
    setIsEditing(false);
  };

  const handleDelete = () => {
    handleDeleteNote(id);
  };

  return (
    <div
      className="note"
      
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="textblock"
        style={{
          display: "grid",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        {isEditing ? (
          <>
            <textarea
              type="text"
              value={editedTheme}
              onChange={(e) => setEditedTheme(e.target.value)}
            />
            <textarea
              rows="6"
              cols="10"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
              style={{marginBottom:'20px',marginTop:'20px'}}
            />
          </>
        ) : (
          <>
            <span className="underblock note-theme">{note_theme}</span>
            <span className="underblock">{text}</span>
          </>
        )}
      </div>
      <div className="note-footer">
        <small>{time}</small>
        <div
          className="icons"
          style={{ display: "flex", alignItems: "center" }}
        >
          {isHovered && !isEditing && (
            <MdEdit
              onClick={() => setIsEditing(true)}
              className="edit-icon"
              size="1.3em"
              style={{ marginLeft: "5px", cursor: "pointer" }}
            />
          )}
          {isHovered && !isEditing && (
            <MdDeleteForever
              onClick={handleDelete}
              className="delete-icon"
              size="1.3em"
              style={{ marginLeft: "5px", cursor: "pointer" }}
            />
          )}
        </div>
        {isEditing && (
          <button className="save-button" onClick={handleSaveEdit}>
            Save
          </button>
        )}
      </div>
    </div>
  );
};

export default Note;
