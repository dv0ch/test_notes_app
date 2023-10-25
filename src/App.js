import { useState } from "react";
import { nanoid } from "nanoid";
import NoteL from "./components/NoteL";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "First note",
      date: "00/00/0000",
    },
  ]);

  const newNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className="container">
      <NoteL
        notes={notes}
        handleNewNote={newNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
};

export default App;
