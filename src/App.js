import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NoteL from "./components/NoteL";
import Header from "./components/Header";
import CreateNoteButton from "./components/CreateNoteButton";
import NewNote from "./components/NewNote";

const App = () => {
  const now = new Date();
  const formattedDate = now.toISOString();
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      note_theme: "Это тема заметки",
      text: "Это тестовая заметка",
      date: formattedDate,
    },
  ]);

  const [createNote, setCreateNote] = useState(false);

  const [editingNoteId, setEditingNoteId] = useState(null); // Добавляем состояние для отслеживания редактирования заметок

  const handleCreate = () => {
    setCreateNote((prev) => !prev);
  };

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  const newNote = (theme, text) => {
    const newNote = {
      id: nanoid(),
      note_theme: theme,
      text: text,
      date: formattedDate,
    };

    setNotes([...notes, newNote]);
    setCreateNote(false);
  };

  const editNote = (id, editedTheme, editedText) => {
    const updatedNotes = notes.map((note) =>
      note.id === id
        ? { ...note, note_theme: editedTheme, text: editedText }
        : note
    );
    setNotes(updatedNotes);
    setEditingNoteId(null); // Завершаем редактирование
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className="container">
      <Header />
      <NoteL
        notes={notes}
        handleNewNote={newNote}
        handleDeleteNote={deleteNote}
        handleEditNote={editNote} // Передаем функцию editNote в NoteL
        editingNoteId={editingNoteId} // Передаем id заметки для редактирования
        setEditingNoteId={setEditingNoteId} // Передаем функцию для установки id заметки для редактирования
      />
      {createNote && (
        <div className="modal">
          <NewNote handleNewNote={newNote} />
        </div>
      )}
      <CreateNoteButton onClick={handleCreate} />
    </div>
  );
};

export default App;
