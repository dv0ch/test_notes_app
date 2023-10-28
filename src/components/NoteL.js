import React, { useState } from "react";
import Note from "./Note";
import EditNoteForm from "./EditNoteForm"; 

const NoteL = ({ notes, handleDeleteNote, handleEditNote }) => {
  const [editingNoteId, setEditingNoteId] = useState(null);

 

  return (
    <div className="notes-list">
      {notes.map((note) => (
        <div key={note.id}>
          <Note
            id={note.id}
            note_theme={note.note_theme}
            text={note.text}
            date={note.date}
            handleDeleteNote={handleDeleteNote}
            handleEditNote={handleEditNote}
            isEditing={editingNoteId === note.id}
          />
          {editingNoteId === note.id && (
            <EditNoteForm
              id={note.id}
              note_theme={note.note_theme}
              text={note.text}
              handleEditNote={handleEditNote}
              setEditingNoteId={setEditingNoteId}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default NoteL;
