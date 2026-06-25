function NoteList({ notes, onEdit, onDelete }) {
  if (notes.length === 0) {
    return <p>No notes yet. Add one above!</p>;
  }

  return (
    <div>
      {notes.map((note) => (
        <div key={note.id} style={{ border: '1px solid #ccc', margin: '10px 0', padding: '10px' }}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <small>Last updated: {new Date(note.updatedAt).toLocaleString()}</small>
          <div>
            <button onClick={() => onEdit(note)}>Edit</button>
            <button onClick={() => onDelete(note.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NoteList;