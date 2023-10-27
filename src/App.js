import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NoteL from "./components/NoteL";
import Header from "./components/Header";
import CreateNoteButton from "./components/CreateNoteButton";
import NewNote from "./components/NewNote";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      note_theme: "Это тема заметки",
      text: "Это тестовая заметка",
      date: "25.10.2023",
    },
  ]);

  const [createNote, setCreateNote] = useState(false);

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
    const now = new Date();
    const formattedDate = now.toISOString();
    const newNote = {
      id: Math.random().toString(),
      note_theme: theme,
      text: text,
      date: formattedDate,
    };

    setNotes([...notes, newNote]);
    setCreateNote(false); // Закрыть окно создания заметки после создания
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
