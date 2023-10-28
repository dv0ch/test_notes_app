import { useState } from "react";

const NewNote = ({ handleNewNote }) => {
  const [noteText, setNoteText] = useState("");
  const [noteTheme, setNoteTheme] = useState("");

  const [textCharacterCount, setTextCharacterCount] = useState(0);
  const [themeCharacterCount, setThemeCharacterCount] = useState(0);

  const textCharacterLimit = 300;
  const themeCharacterLimit = 100;

  const handleTextChange = (event) => {
    const newText = event.target.value;
    if (newText.length <= textCharacterLimit) {
      setNoteText(newText);
      setTextCharacterCount(newText.length);
    }
  };

  const handleThemeChange = (event) => {
    const newTheme = event.target.value;
    if (newTheme.length <= themeCharacterLimit) {
      setNoteTheme(newTheme);
      setThemeCharacterCount(newTheme.length);
    }
  };

  const handleSaveClick = () => {
    if (noteTheme.trim().length > 0 && noteText.trim().length > 0) {
      handleNewNote(noteTheme, noteText); // Передаем отдельные значения для темы и текста
      setNoteText("");
      setNoteTheme("");
    }
  };
  return (
    <div className="note new">
      <textarea
        rows="6"
        cols="10"
        placeholder="Тема..."
        value={noteTheme}
        onChange={handleThemeChange}
      ></textarea>
      <textarea
        rows="6"
        cols="10"
        placeholder="Текст заметки..."
        value={noteText}
        onChange={handleTextChange}
      ></textarea>
      <div className="note-footer">
      <div className="character-count">
        Тема: {themeCharacterCount}/{themeCharacterLimit} / Текст: {textCharacterCount}/{textCharacterLimit}
      </div>
        <button className="save" onClick={handleSaveClick}>
          Сохранить
        </button>
      </div>
    </div>
  );
};

export default NewNote;