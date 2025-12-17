// src/components/ChatBox/ChatBox.test.js

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ChatBox from './index';
import ChatIcon from './ChatIcon';
import ChatWindow from './ChatWindow';
import { loadChatState, saveChatState } from './utils/storage';

// Mock localStorage
const localStorageMock = (function() {
  let store = {};
  return {
    getItem: function(key) {
      return store[key] || null;
    },
    setItem: function(key, value) {
      store[key] = value.toString();
    },
    removeItem: function(key) {
      delete store[key];
    },
    clear: function() {
      store = {};
    }
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
});

describe('ChatIcon', () => {
  it('renders chat icon when closed', () => {
    render(<ChatIcon isOpen={false} onClick={() => {}} />);
    expect(screen.getByTitle('Open chat')).toBeInTheDocument();
    expect(screen.queryByTitle('Close chat')).not.toBeInTheDocument();
  });

  it('renders close icon when open', () => {
    render(<ChatIcon isOpen={true} onClick={() => {}} />);
    expect(screen.getByTitle('Close chat')).toBeInTheDocument();
    expect(screen.queryByTitle('Open chat')).not.toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<ChatIcon isOpen={false} onClick={handleClick} />);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

describe('ChatWindow', () => {
  it('does not render when closed', () => {
    render(<ChatWindow isOpen={false} onClose={() => {}} />);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('renders when open', () => {
    render(<ChatWindow isOpen={true} onClose={() => {}} />);
    expect(screen.getByRole('dialog', { name: 'chat-header' })).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    const handleClose = jest.fn();
    render(<ChatWindow isOpen={true} onClose={handleClose} />);
    fireEvent.click(screen.getByTitle('Close chat'));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('renders children when open', () => {
    render(<ChatWindow isOpen={true} onClose={() => {}}><div>Test Child</div></ChatWindow>);
    expect(screen.getByText('Test Child')).toBeInTheDocument();
  });
});

describe('ChatBox Integration', () => {
  beforeEach(() => {
    localStorageMock.clear(); // Clear localStorage before each test
    // Mock postQuestion API call
    jest.mock('./utils/api', () => ({
      postQuestion: jest.fn(() =>
        Promise.resolve({
          answer_text: 'Mocked bot response',
          source_urls: ['http://example.com/source'],
        })
      ),
    }));
  });

  afterEach(() => {
    jest.clearAllMocks(); // Clear mocks after each test
  });

  it('toggles chat window visibility on icon click', () => {
    render(<ChatBox />);
    const openChatButton = screen.getByTitle('Open chat');
    fireEvent.click(openChatButton);
    expect(screen.getByRole('dialog', { name: 'chat-header' })).toBeInTheDocument();

    const closeChatButton = screen.getByTitle('Close chat');
    fireEvent.click(closeChatButton);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('persists isOpen state in localStorage', () => {
    render(<ChatBox />);
    const openChatButton = screen.getByTitle('Open chat');
    fireEvent.click(openChatButton); // Open chat
    expect(loadChatState().isOpen).toBe(true);

    fireEvent.click(openChatButton); // Close chat
    expect(loadChatState().isOpen).toBe(false);
  });

  it('loads isOpen state from localStorage on mount', () => {
    saveChatState({ isOpen: true, messages: [], sessionId: 'test-session' }); // Pre-set state to open
    render(<ChatBox />);
    expect(screen.getByRole('dialog', { name: 'chat-header' })).toBeInTheDocument();
    expect(screen.getByTitle('Close chat')).toBeInTheDocument();
  });

  it('sends message and displays response', async () => {
    const { postQuestion } = require('./utils/api');
    render(<ChatBox />);
    fireEvent.click(screen.getByTitle('Open chat')); // Open chat

    const input = screen.getByPlaceholderText('Type your message...');
    const sendButton = screen.getByText('Send');

    fireEvent.change(input, { target: { value: 'Hello bot' } });
    fireEvent.click(sendButton);

    expect(screen.getByText('Hello bot')).toBeInTheDocument(); // User message
    expect(screen.getByText('Bot is typing...')).toBeInTheDocument(); // Loading indicator

    await screen.findByText('Mocked bot response'); // Wait for bot response
    expect(screen.getByText('Mocked bot response')).toBeInTheDocument(); // Bot message
    expect(screen.queryByText('Bot is typing...')).not.toBeInTheDocument(); // Loading indicator gone
    expect(postQuestion).toHaveBeenCalledWith('Hello bot', null, 'http://localhost:8000');
  });

  it('persists messages and sessionId in localStorage', async () => {
    const { postQuestion } = require('./utils/api');
    render(<ChatBox />);
    fireEvent.click(screen.getByTitle('Open chat'));

    const input = screen.getByPlaceholderText('Type your message...');
    const sendButton = screen.getByText('Send');

    fireEvent.change(input, { target: { value: 'Test message for persistence' } });
    fireEvent.click(sendButton);
    await screen.findByText('Mocked bot response');

    const storedState = loadChatState();
    expect(storedState.messages.length).toBe(2);
    expect(storedState.messages[0].content).toBe('Test message for persistence');
    expect(storedState.messages[1].content).toBe('Mocked bot response');
    expect(storedState.sessionId).toBeDefined();
  });
});

