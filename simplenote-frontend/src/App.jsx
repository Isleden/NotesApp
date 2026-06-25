import { useState, useEffect } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import { getAllNotes, createNote, updateNote, deleteNote } from './api/noteApi';

function App() {
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);

  const fetchNotes = async () => {
    try {
      const res = await getAllNotes();
      setNotes(res.data);
    } catch (err) {
      console.error('Failed to fetch notes:', err);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleSubmit = async (noteData) => {
    try {
      if (editingNote) {
        await updateNote(editingNote.id, noteData);
        setEditingNote(null);
      } else {
        await createNote(noteData);
      }
      fetchNotes();
    } catch (err) {
      console.error('Failed to save note:', err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteNote(id);
      fetchNotes();
    } catch (err) {
      console.error('Failed to delete note:', err);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>SimpleNote</h1>
      <NoteForm
        onSubmit={handleSubmit}
        editingNote={editingNote}
        onCancelEdit={() => setEditingNote(null)}
      />
      <NoteList
        notes={notes}
        onEdit={setEditingNote}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;