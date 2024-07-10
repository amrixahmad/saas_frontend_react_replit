import React, { useState, useEffect } from 'react';
import { Calendar, luxonLocalizer } from 'react-big-calendar';
import { DateTime } from 'luxon';
import { useLogout } from '../../auth/Config';
import { API_URL } from '../../auth/Config';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import 'react-big-calendar/lib/css/react-big-calendar.css';

// Setup the localizer
const localizer = luxonLocalizer(DateTime);

const TradingCalendar = () => {
  const [entries, setEntries] = useState([]);
  const logout = useLogout();
  const navigate = useNavigate();

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
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
      setEntries(response.data);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        logout()
      }
      console.error('Error fetching journal entries:', error);
    }
  };

  const formatEntries = entries.map(entry => {
    const startDateTime = DateTime.fromISO(entry.created_at);
    const endDateTime = startDateTime.plus({ hours: 1 }); // Set end time to 1 hour after start

    return {
      id: entry.id,
      title: entry.text.substring(0, 30) + '...', // Use first 30 characters of text as title
      start: startDateTime.toJSDate(),
      end: endDateTime.toJSDate(),
      allDay: false, // Set to false to show at specific times
      resource: entry,
    };
  });

  const EventComponent = ({ event }) => (
    <div>
      <strong>{event.title}</strong>
      {/* <img src={event.resource.image_link} alt="Trade" style={{ width: '50px', height: '50px' }} /> */}
    </div>
  );

  const handleSelectEvent = (event) => {
    navigate(`/admin/trading-journal/${event.id}`);
  };

  return (
    <div style={{ height: '500px' }}>
      <Calendar
        localizer={localizer}
        events={formatEntries}
        startAccessor="start"
        endAccessor="end"
        views={['month', 'week', 'day']}
        defaultView='month'
        components={{
          event: EventComponent,
        }}
        onSelectEvent={handleSelectEvent}
        formats={{
          timeGutterFormat: (date, culture, localizer) =>
            localizer.format(date, { hour: 'numeric', minute: '2-digit' }),
          eventTimeRangeFormat: ({ start, end }, culture, localizer) =>
            `${localizer.format(start, { hour: 'numeric', minute: '2-digit' })} - ${localizer.format(end, { hour: 'numeric', minute: '2-digit' })}`,
        }}
        step={60} // Show 1-hour slots in day/week view
        timeslots={1} // Show 1 timeslot per step
      />
    </div>
  );
};

export default TradingCalendar;