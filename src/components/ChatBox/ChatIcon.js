// src/components/ChatBox/ChatIcon.js

import React from 'react';

const ChatIcon = ({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      aria-expanded={isOpen}
      aria-controls="chat-window"
      title={isOpen ? "Close chat" : "Open chat"}
      style={{
        position: 'absolute',
        right: 0,
        bottom: 0,
        width: 48,
        height: 48,
        background: '#1f6feb',
        color: '#fff',
        borderRadius: 24,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 6px 18px rgba(0,0,0,0.15)',
        border: 'none',
        cursor: 'pointer',
        padding: 0,
        zIndex: 100000
      }}
    >
      {isOpen ? (
        // Close icon (e.g., X)
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      ) : (
        // Chat icon
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{display: 'block'}}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      )}
    </button>
  );
};

export default ChatIcon;
