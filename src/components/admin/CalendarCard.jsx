import React from 'react';
import TradingCalendar from './TradingCalendar';
import { Link } from 'react-router-dom';

const CalendarCard = () => {
  return (
    <div className="col-12 col-md-12 col-xxl-6 d-flex order-3 order-xxl-2">
      <div className="card flex-fill w-100">
        <div className="card-header">
          <Link to='/admin/trading-calendar'><h5 className="card-title mb-0">Trading Calendar</h5></Link>
        </div>
        <div className="card-body px-4">
          <div id="world_map" style={{ height: '500px' }}>
            <TradingCalendar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarCard;