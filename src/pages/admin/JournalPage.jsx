import React from 'react';
import { withPageLayout } from './SinglePage';
import { TradingJournal } from '../../components/component-services';

const JournalPage = () => {
  return (
    <TradingJournal />
  );
};

export default withPageLayout(JournalPage, "AI Powered Trading Journal");