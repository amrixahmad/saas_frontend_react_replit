import React, { useState } from 'react';
import { useLogout } from '../../auth/Config';
import { API_URL } from '../../auth/Config';
import axios from 'axios';
import { Save } from 'react-feather';

const EditJournalEntryForm = ({ entry, onSave, onCancel }) => {
  const [text, setText] = useState(entry.text || '');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const logout = useLogout();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem('token');
      if (!token) logout();

      const response = await axios.put(`${API_URL}/api/journal-entries/${entry.id}`, 
        { text },
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );

      onSave(response.data);
    } catch (error) {
      console.error('Error updating journal entry:', error);
      setError('Failed to update journal entry. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="mb-3">
        <label htmlFor="editJournalText" className="form-label">
          Journal Entry
        </label>
        <textarea
          className="form-control"
          id="editJournalText"
          rows="3"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      </div>
      <div className="d-flex justify-content-end">
        <button type="button" className="btn btn-secondary me-2" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          <Save size={16} className="me-1" />
          {loading ? 'Saving...' : 'Save Changes'}
        </button>
      </div>
    </form>
  );
};

export default EditJournalEntryForm;