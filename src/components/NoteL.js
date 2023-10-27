import Note from "./Note";


const NoteL = ({ notes, handleDeleteNote }) => {
  return (
    <div className="notes-list">
      {notes.map((note, index) => (
        <Note
          key={index}
          id={note.id}
          note_theme={note.note_theme}
          text={note.text}
          date={note.date}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
    </div>
  );
};
export default NoteL;
