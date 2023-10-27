import React, { useState } from "react";

const EditNoteForm = ({ id, note_theme, text, handleEditNote, setEditingNoteId }) => {
  const [editedTheme, setEditedTheme] = useState(note_theme);
  const [editedText, setEditedText] = useState(text);

  const handleSaveEdit = () => {
    handleEditNote(id, editedTheme, editedText); // Вызываем функцию для сохранения изменений
    setEditingNoteId(null); // Завершаем редактирование
  };

  return (
    <div className="edit-note-form">
      <input
        type="text"
        value={editedTheme}
        onChange={(e) => setEditedTheme(e.target.value)}
      />
      <textarea
        value={editedText}
        onChange={(e) => setEditedText(e.target.value)}
      />
      <button onClick={handleSaveEdit}>Сохранить</button>
    </div>
  );
};

export default EditNoteForm;
