// src/components/ChatBox/utils/storage.js

const CHAT_STORAGE_KEY = 'chatBoxState';

/**
 * Loads the chat state from localStorage.
 * @returns {object|null} The parsed chat state or null if not found/invalid.
 */
export const loadChatState = () => {
  try {
    const serializedState = localStorage.getItem(CHAT_STORAGE_KEY);
    if (serializedState === null) {
      return null;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.error("Error loading chat state from localStorage:", error);
    return null;
  }
};

/**
 * Saves the chat state to localStorage.
 * @param {object} state The chat state object to save.
 */
export const saveChatState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(CHAT_STORAGE_KEY, serializedState);
  } catch (error) {
    console.error("Error saving chat state to localStorage:", error);
  }
};

/**
 * Clears the chat state from localStorage.
 */
export const clearChatState = () => {
  try {
    localStorage.removeItem(CHAT_STORAGE_KEY);
  } catch (error) {
    console.error("Error clearing chat state from localStorage:", error);
  }
};
