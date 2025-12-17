// src/components/ChatBox/index.js

import React, { useState, useEffect, useCallback } from 'react';
import ChatIcon from './ChatIcon';
import ChatWindow from './ChatWindow';
import ChatHistory from './ChatHistory'; // New import
import ChatInput from './ChatInput';     // New import
import { loadChatState, saveChatState } from './utils/storage';
import { postQuestion } from './utils/api'; // New import
import { v4 as uuidv4 } from 'uuid'; // For generating session IDs

const ChatBox = ({ backendApiUrl = 'http://localhost:8000', initialUrl = null }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [sessionId, setSessionId] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // For typing indicator

  // Load chat state from localStorage on initial render
  useEffect(() => {
    const storedState = loadChatState();
    if (storedState) {
      if (typeof storedState.isOpen === 'boolean') {
        setIsOpen(storedState.isOpen);
      }
      if (Array.isArray(storedState.messages)) {
        setMessages(storedState.messages);
      }
      if (storedState.sessionId) {
        setSessionId(storedState.sessionId);
      } else {
        setSessionId(uuidv4()); // Generate new session ID if not found
      }
    } else {
      setSessionId(uuidv4()); // Generate new session ID if no stored state
    }
  }, []);

  // Save chat state to localStorage whenever isOpen, messages, or sessionId changes
  useEffect(() => {
    saveChatState({ isOpen, messages, sessionId });
  }, [isOpen, messages, sessionId]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = useCallback(async (text) => {
    const newUserMessage = {
      sender: 'user',
      content: text,
      timestamp: new Date().toISOString(),
    };
    setMessages((prevMessages) => [...prevMessages, newUserMessage]);
    setIsLoading(true); // Show typing indicator

    try {
      const response = await postQuestion(text, initialUrl, backendApiUrl);
      const botMessage = {
        sender: 'bot',
        content: response.answer_text,
        timestamp: new Date().toISOString(),
        source_urls: response.source_urls,
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      const errorMessage = {
        sender: 'bot',
        content: 'Sorry, I am unable to respond at the moment. Please try again later.',
        timestamp: new Date().toISOString(),
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
      console.error("Error sending message to backend:", error);
    } finally {
      setIsLoading(false); // Hide typing indicator
    }
  }, [backendApiUrl, initialUrl]);


  return (
    <div style={{position: 'fixed', bottom: 16, right: 16, zIndex: 100000}}>
      {/* Container is fixed bottom-right; children use absolute positioning inside */}
      {isOpen && (
        <ChatWindow isOpen={isOpen} onClose={toggleChat} messages={messages} isLoading={isLoading} onSendMessage={handleSendMessage} />
      )}
      <ChatIcon isOpen={isOpen} onClick={toggleChat} />
    </div>
  );
};

export default ChatBox;
