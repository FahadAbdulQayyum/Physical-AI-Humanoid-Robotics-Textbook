// src/components/ChatBox/ChatMessage.js

import React from 'react';

const ChatMessage = ({ message }) => {
  const isUser = message.sender === 'user';
  const messageClasses = isUser
    ? 'bg-blue-500 text-white self-end rounded-bl-lg'
    : 'bg-gray-300 text-gray-800 self-start rounded-br-lg';

  const time = new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className={`flex flex-col mb-2 max-w-[80%] ${isUser ? 'items-end' : 'items-start'}`}>
      <div className={`p-2 rounded-xl ${messageClasses}`}>
        <p className="text-sm">{message.content}</p>
      </div>
      <span className="text-xs text-gray-500 mt-1">{time}</span>
    </div>
  );
};

export default ChatMessage;
