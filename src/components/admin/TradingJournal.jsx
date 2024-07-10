import React, { useEffect,useState } from 'react';
import { API_URL } from '../../auth/Config';
import { useLogout } from '../../auth/Config';
import { Link } from 'react-router-dom';
import JournalEntryForm from './JournalEntryForm';
import EditJournalEntryForm from './EditJournalEntryForm';
import axios from 'axios';
import { Edit2, Trash2 } from 'react-feather';

const TradingJournal = () => {
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [entries, setEntries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [editingEntry, setEditingEntry] = useState(null);
  const [entriesPerPage] = useState(6);
  const logout = useLogout();

  useEffect(() => {
    fetchJournalEntries();
  }, []);

  const fetchJournalEntries = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        logout()
      }

      const response = await axios.get(`${API_URL}/api/journal-entries/`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      // Sort entries by created_at in descending order
      const sortedEntries = response.data.sort((a, b) => 
        new Date(b.created_at) - new Date(a.created_at)
      );
      setEntries(sortedEntries);
    } catch (error) {
      logout()
      console.error('Error fetching journal entries:', error);
      if (error.response && error.response.status === 401) {
        // Handle unauthorized access (e.g., redirect to login page)
        logout()
        console.log('User is not authenticated. Redirect to login page.');
      }
    } finally {
        setLoading(false);
    }
  };

  const addNewEntry = (newEntry) => {
    setEntries([newEntry, ...entries]);
  };

  const editEntry = (entry) => {
    setEditingEntry(entry);
  };

  const handleSaveEdit = (updatedEntry) => {
    setEntries(entries.map(entry => 
      entry.id === updatedEntry.id ? updatedEntry : entry
    ));
    setEditingEntry(null);
  };

  const handleCancelEdit = () => {
    setEditingEntry(null);
  };

  const deleteEntry = async (entryId) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('No authentication token found');

      await axios.delete(`${API_URL}/api/journal-entries/${entryId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      setEntries(entries.filter(entry => entry.id !== entryId));
    } catch (error) {
      console.error('Error deleting journal entry:', error);
      // Handle error (e.g., show an error message to the user)
    }
  };

  // Get current entries
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = entries.slice(indexOfFirstEntry, indexOfLastEntry);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      
      <JournalEntryForm addNewEntry={addNewEntry} />      

      <div className="container mt-4">
        <h2 className="mb-4">Journal Entries</h2>
        {entries.length === 0 ? (
          <p>No journal entries found.</p>
        ) : (
          <>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {currentEntries.map((entry) => (
                <div className="col" key={entry.id}>
                  <Link to={`/admin/trading-journal/${entry.id}`} className="text-decoration-none">
                  <div className="card h-100">
                    {editingEntry && editingEntry.id === entry.id ? (
                      <EditJournalEntryForm 
                        entry={entry} 
                        onSave={handleSaveEdit} 
                        onCancel={handleCancelEdit} 
                      />
                    ) : (
                      <>
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
                          <div className="d-flex justify-content-end">
                            <button 
                              className="btn btn-sm btn-outline-primary me-2" 
                              onClick={() => editEntry(entry)}
                            >
                              <Edit2 size={16} />
                            </button>
                            <button 
                              className="btn btn-sm btn-outline-danger" 
                              onClick={() => deleteEntry(entry.id)}
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                  </Link>
                </div>
              ))}
            </div>
            {entries.length > entriesPerPage && (
              <nav className="mt-4">
                <ul className="pagination justify-content-center">
                  {Array.from({ length: Math.ceil(entries.length / entriesPerPage) }).map((_, index) => (
                    <li className={`page-item ${currentPage === index + 1 ? 'active' : ''}`} key={index}>
                      <button className="page-link" onClick={() => paginate(index + 1)}>
                        {index + 1}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default TradingJournal;