import React from 'react';
import { withPageLayout } from './SinglePage';
import { TradingCalendar } from '../../components/component-services';

const CalendarPage = () => {
  return (
    <TradingCalendar />
  );
};

export default withPageLayout(CalendarPage, "Keep track of your trades");