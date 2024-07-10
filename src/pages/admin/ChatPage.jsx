// src/components/BlankPage.js

import React from 'react';
import { withPageLayout } from './SinglePage';
import { ChatInterface } from '../../components/component-services';

const ChatPage = () => {
  return (
    <ChatInterface />
  );
};

export default withPageLayout(ChatPage, "Chat with Forex Expert");