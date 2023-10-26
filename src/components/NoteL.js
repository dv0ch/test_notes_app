import Note from "./Note";
import NewNote from "./NewNote";

const NoteL = ({ notes, handleNewNote, handleDeleteNote }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note
          id={note.id}
          note_theme={note.note_theme}
          text={note.text}
          date={note.date}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
      <NewNote handleNewNote={handleNewNote} />
    </div>
  );
};
export default NoteL;
