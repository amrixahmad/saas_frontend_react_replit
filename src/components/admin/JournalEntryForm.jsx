import React, { useState } from 'react';
import { API_URL } from '../../auth/Config';
import axios from 'axios';
import { Image, Send } from 'react-feather';
import { useLogout } from '../../auth/Config';

const JournalEntryForm = ({ addNewEntry }) => {
  const [image, setImage] = useState(null);
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const logout = useLogout();

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!image) {
      setError('Image is required');
      setLoading(false);
      return;
    }

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        logout()
      }

      const formData = new FormData();
      formData.append('image', image);
      if (text) formData.append('text', text);

      const response = await axios.post(`${API_URL}/api/journal-entries/`, formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      });

      addNewEntry(response.data);
      setImage(null);
      setText('');
    } catch (error) {
      console.error('Error creating journal entry:', error);
      setError('Failed to create journal entry. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Add New Trade Journal Entry</h5>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="screenshot" className="form-label">
              MT4 Trade Screenshot
            </label>
            <div className="input-group">
              <label className="input-group-text" htmlFor="screenshot">
                <Image />
                <input
                  type="file"
                  className="form-control"
                  id="screenshot"
                  accept="image/*"
                  onChange={handleImageChange}
                  required
                />
              </label>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="journalText" className="form-label">
              Journal Entry (Optional)
            </label>
            <textarea
              className="form-control"
              id="journalText"
              rows="3"
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary" disabled={loading}>
            <Send />
            {loading ? 'Submitting...' : 'Submit Entry'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default JournalEntryForm;