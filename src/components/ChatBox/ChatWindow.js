// src/components/ChatBox/ChatWindow.js

import React from 'react';
import ChatHistory from './ChatHistory';
import ChatInput from './ChatInput';

const ChatWindow = ({ isOpen, onClose, messages = [], isLoading = false, onSendMessage = () => {} }) => {
  const style = {
    position: 'absolute',
    // position the window to the left of the circular icon to avoid scrollbar overlap
    right: 72,
    bottom: 64,
    width: 360,
    maxWidth: 'calc(100% - 32px)',
    height: 420,
    minHeight: 300,
    background: '#ffffff',
    border: '1px solid #d1d5db',
    borderRadius: 8,
    boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
    overflow: 'hidden',
    zIndex: 9998,
    transform: isOpen ? 'translateY(0)' : 'translateY(8px)',
    opacity: isOpen ? 1 : 0,
    pointerEvents: isOpen ? 'auto' : 'none',
    transition: 'transform 240ms ease, opacity 240ms ease',
    display: 'flex',
    flexDirection: 'column'
  };

  const headerStyle = {
    background: '#1f6feb',
    color: '#fff',
    padding: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  };

  const messagesStyle = {
    padding: '12px',
    overflowY: 'auto',
    background: '#f9fafb',
    flex: '1 1 auto',
    maxHeight: 'calc(100% - 64px)'
  };

  const footerStyle = {
    borderTop: '1px solid #e5e7eb',
    padding: 8,
    background: '#fff'
  };

  return (
    <div id="chat-window" style={style} role="dialog" aria-labelledby="chat-header" aria-modal="true" aria-hidden={!isOpen}>
      <div id="chat-header" style={headerStyle}>
        <h3 style={{margin:0, fontSize: '1rem', fontWeight: 600}}>Chat with Bot</h3>
        <button onClick={onClose} title="Close chat" style={{background:'transparent', border:'none', color:'#fff', padding:4, cursor:'pointer'}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div style={{display:'flex', flexDirection:'column', flex: '1 1 auto'}}>
        <div style={messagesStyle}>
          <ChatHistory messages={messages} />
          {isLoading && (
            <div style={{padding: '12px', fontSize: '0.875rem', color: '#6b7280', fontStyle: 'italic'}}>Bot is typing...</div>
          )}
        </div>
        <div style={footerStyle}>
          <ChatInput onSendMessage={onSendMessage} />
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
