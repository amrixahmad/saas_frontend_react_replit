import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../auth/Config';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/light.css';

const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const [journalEntries, setJournalEntries] = useState([]);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [view, setView] = useState('month'); // 'month', 'week', or 'day'
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch journal entries
    fetchJournalEntries();
  }, []);

  const fetchJournalEntries = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
          navigate('/login', { replace: true });
      }

      const response = await axios.get(`${API_URL}/api/journal-entries/`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setJournalEntries(response.data);
    } catch (error) {
      console.error('Error fetching journal entries:', error);
      // Handle authentication errors here (e.g., redirect to login page)
      if (error.response && error.response.status === 401) {
        // Redirect to login page or show login modal
        console.log('User is not authenticated. Redirect to login page.');
      }
    }
  };

  const getJournalDates = () => {
    return journalEntries.map(entry => new Date(entry.created_at).toISOString().split('T')[0]);
  };

  const handleDateChange = (selectedDates) => {
    const selectedDate = selectedDates[0];
    setDate(selectedDate);
    const entry = journalEntries.find(entry => 
      new Date(entry.created_at).toISOString().split('T')[0] === selectedDate.toISOString().split('T')[0]
    );
    setSelectedEntry(entry || null);
  };

  const getFlatpickrOptions = () => {
    const baseOptions = {
      inline: true,
      prevArrow: "<span title=\"Previous\">&laquo;</span>",
      nextArrow: "<span title=\"Next\">&raquo;</span>",
      enable: getJournalDates(),
      onChange: handleDateChange,
    };

    switch (view) {
      case 'week':
        return {
          ...baseOptions,
          weekNumbers: true,
          dateFormat: "Y-m-d",
          mode: "range",
        };
      case 'day':
        return {
          ...baseOptions,
          dateFormat: "Y-m-d",
          enableTime: true,
        };
      default: // month view
        return {
          ...baseOptions,
          dateFormat: "Y-m-d",
        };
    }
  };

      const renderEntries = () => {
        if (view === 'month' || view === 'day') {
          return selectedEntry && (
            <div className="card-footer">
              <h6>Journal Entry for {new Date(selectedEntry.created_at).toLocaleDateString()}</h6>
              <p>{selectedEntry.text}</p>
              {selectedEntry.image_link && (
                <img src={selectedEntry.image_link} alt="Journal entry" style={{maxWidth: '100%', height: 'auto'}} />
              )}
            </div>
          );
        } else if (view === 'week') {
          const weekStart = new Date(date);
          weekStart.setDate(date.getDate() - date.getDay());
          const weekEnd = new Date(weekStart);
          weekEnd.setDate(weekStart.getDate() + 6);

          const weekEntries = journalEntries.filter(entry => {
            const entryDate = new Date(entry.created_at);
            return entryDate >= weekStart && entryDate <= weekEnd;
          });

          return (
            <div className="card-footer">
              <h6>Journal Entries for Week of {weekStart.toLocaleDateString()} - {weekEnd.toLocaleDateString()}</h6>
              {weekEntries.map(entry => (
                <div key={entry.id} className="mb-3">
                  <h6>{new Date(entry.created_at).toLocaleDateString()}</h6>
                  <p>{entry.text}</p>
                  {entry.image_link && (
                    <img src={entry.image_link} alt="Journal entry" style={{maxWidth: '100%', height: 'auto'}} />
                  )}
                </div>
              ))}
            </div>
          );
        }
      };

return (
    <div className="col-12 col-md-6 col-xxl-3 d-flex order-1 order-xxl-1">
      <div className="card flex-fill">
        <div className="card-header">
          <h5 className="card-title mb-0">Calendar</h5>
          <div className="btn-group mt-2" role="group">
            <button type="button" className={`btn btn-sm ${view === 'month' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setView('month')}>Month</button>
            <button type="button" className={`btn btn-sm ${view === 'week' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setView('week')}>Week</button>
            <button type="button" className={`btn btn-sm ${view === 'day' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setView('day')}>Day</button>
          </div>
        </div>
        <div className="card-body d-flex">
          <div className="align-self-center w-100">
            <Flatpickr
              value={date}
              options={getFlatpickrOptions()}
            />
          </div>
        </div>
        {renderEntries()}
      </div>
    </div>
  );
};

export default Calendar;