// src/components/ChatBox/ChatHistory.js

import React, { useEffect, useRef } from 'react';
import ChatMessage from './ChatMessage';

const ChatHistory = ({ messages }) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex-grow overflow-y-auto p-4 space-y-2">
      {messages.map((msg, index) => (
        <ChatMessage key={index} message={msg} />
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatHistory;
