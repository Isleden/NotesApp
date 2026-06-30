import { useState, useEffect } from 'react';
import '../styles/NoteForm.css';

function NoteForm({ onSubmit, editingNote, onCancelEdit }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title);
      setContent(editingNote.content || '');
    } else {
      setTitle('');
      setContent('');
    }
  }, [editingNote]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    onSubmit({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder=""
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder=""
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={4}
      />
      <div className="note-form-actions">
        <button type="submit" className="btn btn-primary">
          {editingNote ? 'Update' : 'Add Note'}
        </button>
        {editingNote && (
          <button type="button" className="btn btn-secondary" onClick={onCancelEdit}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default NoteForm;