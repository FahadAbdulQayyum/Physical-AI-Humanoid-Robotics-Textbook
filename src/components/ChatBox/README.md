# ChatBox UI Component

This is a reusable React component that provides a floating chat box UI, typically positioned at the bottom-right of a web application. It allows users to interact with a backend bot via a conversational interface, sending messages and receiving responses. The component manages its state (open/closed, chat history) client-side using `localStorage`.

## Features

-   Floating chat icon to toggle chat window visibility.
-   Chat window overlay that doesn't disrupt main page content.
-   User message input and display.
-   Bot response display.
-   Persistence of chat state (open/closed, history) across page navigations using `localStorage`.
-   Integration with a backend API for Q&A.
-   Visual indicator for bot "typing" status.

## Installation

Assuming this component is part of a larger project and dependencies are managed at the root level `package.json`.

1.  **Ensure dependencies are installed**:
    Make sure the following packages are installed in your project:
    -   `react`
    -   `react-dom`
    -   `tailwindcss`
    -   `axios`
    -   `uuid`
    If not, install them:
    ```bash
    npm install react react-dom tailwindcss axios uuid
    ```
2.  **Tailwind CSS Configuration**:
    Ensure `tailwind.config.js` is set up to scan this component's files for classes:
    ```javascript
    // tailwind.config.js
    module.exports = {
      content: [
        // ... other paths
        "./src/components/ChatBox/**/*.{js,jsx,ts,tsx}",
      ],
      // ...
    };
    ```
    And that your main CSS file (e.g., `src/css/custom.css` in Docusaurus) includes the Tailwind directives:
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

## Usage

### Embedding the `ChatBox` Component

The `ChatBox` component is designed to be easily embedded into any React application.

```jsx
// Your main application entry point (e.g., src/App.js or src/pages/index.js)
import React from 'react';
import { ChatBox } from '../components/ChatBox'; // Adjust path as needed

function App() {
  return (
    <div className="App">
      {/* Your main application content */}
      <h1>Welcome to My Website</h1>
      <p>This is some content.</p>

      {/* Embed the ChatBox component */}
      <ChatBox backendApiUrl="http://localhost:8000" />
    </div>
  );
}

export default App; // Or render directly to ReactDOM.createRoot
```

### Props

The `ChatBox` component accepts the following props:

-   `backendApiUrl`: (Required, string) The base URL of the chat backend API (e.g., `http://localhost:8000`). All API requests (e.g., `POST /qa`) will be made relative to this URL.

## Component Structure

```
src/components/ChatBox/
├── index.js              # Main ChatBox component (entry point for embedding)
├── ChatIcon.js           # Floating chat icon component
├── ChatWindow.js         # Chat box container and header with close button
├── ChatMessage.js        # Displays a single chat message (user or bot)
├── ChatInput.js          # Input field and send button for typing messages
├── ChatHistory.js        # Renders the scrollable list of ChatMessage components
├── utils/                # Utility functions
│   ├── api.js            # Functions for interacting with the backend chat API
│   └── storage.js        # Functions for managing chat state in localStorage
└── ChatBox.test.js       # Unit/component tests for the ChatBox and sub-components
```
