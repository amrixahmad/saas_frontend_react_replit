import React from 'react';
import { withPageLayout } from './SinglePage';
import { JournalEntryDetail } from '../../components/component-services';

const JournalDetailPage = () => {
  return (
    <JournalEntryDetail />
  );
};

export default withPageLayout(JournalDetailPage, "Trading Journal Entry");
