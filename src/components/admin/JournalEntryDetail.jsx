import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLogout } from '../../auth/Config';
import axios from 'axios';
import { API_URL } from '../../auth/Config';

const JournalEntryDetail = () => {
  const [entry, setEntry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const logout = useLogout();

  useEffect(() => {
    fetchEntryDetail();
  }, [id]);

  const fetchEntryDetail = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        logout()
      }
      const response = await axios.get(`${API_URL}/api/journal-entries/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setEntry(response.data);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        logout()
      }
      console.error('Error fetching journal entry:', error);
      setError('Failed to load journal entry');
      if (error.response && error.response.status === 401) {
        logout()
      }
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!entry) return <div>Entry not found</div>;

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Journal Entry Detail</h2>
      <div className="card">
        {entry.image_link && (
          <img src={entry.image_link} className="card-img-top" alt="Journal Entry" />
        )}
        <div className="card-body">
          <p className="card-text">{entry.text || 'No text provided'}</p>
          <p className="card-text">
            <small className="text-muted">
              Created: {new Date(entry.created_at).toLocaleString()}
            </small>
          </p>
        </div>
      </div>
      <button className="btn btn-primary mt-3" onClick={() => navigate('/admin/trading-journal')}>
        Back to Journal
      </button>
      <button className="btn btn-primary mt-3" onClick={() => navigate('/admin/trading-calendar')}>
        Back to Calendar
      </button>
    </div>
  );
};

export default JournalEntryDetail;