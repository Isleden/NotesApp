import '../styles/NoteList.css';

function NoteList({ notes, onEdit, onDelete }) {
  if (notes.length === 0) {
    return <p className="note-list-empty">Add Notes.</p>;
  }

  return (
    <div className="note-list">
      {notes.map((note) => (
        <div key={note.id} className="note-card">
          <h3 className="note-card-title">{note.title}</h3>
          <p className="note-card-content">{note.content}</p>
          <div className="note-card-meta">
            Updated {new Date(note.updatedAt).toLocaleString()}
          </div>
          <div className="note-card-actions">
            <button className="btn-small btn-edit" onClick={() => onEdit(note)}>
              Edit
            </button>
            <button className="btn-small btn-delete" onClick={() => onDelete(note.id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NoteList;