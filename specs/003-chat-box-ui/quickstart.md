# Quickstart Guide for Feature: Chat Box UI

This guide provides instructions on how to integrate the Chat Box UI component into an existing web application.

## 1. Prerequisites

-   An existing web project (e.g., React, Angular, Vue, or a static HTML site).
-   Node.js and npm/yarn installed if you are using a JavaScript framework.

## 2. Installation (Example for React)

Assuming the Chat Box UI component is packaged as a reusable React component:

1.  **Install the component via npm/yarn**:
    ```bash
    npm install @your-org/chat-box-ui
    # or
    yarn add @your-org/chat-box-ui
    ```
    (Note: Replace `@your-org/chat-box-ui` with the actual package name.)

## 3. Usage

### Basic Embedding (React Example)

Import the `ChatBox` component into your main application file (e.g., `App.js` or `index.js`) and render it.

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChatBox } from '@your-org/chat-box-ui'; // Adjust import path as needed
import './index.css'; // For general application styling

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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### Configuration Options

The `ChatBox` component can accept various props for customization:

-   `backendApiUrl`: (Required, string) The base URL of the chat backend API (e.g., `http://localhost:8000`).
-   `initialOpen`: (Optional, boolean) If `true`, the chat box will be open by default on page load. Default is `false`.
-   `iconPosition`: (Optional, string) Controls the position of the chat icon. Default is `"bottom-right"`.
-   `primaryColor`: (Optional, string) Custom primary color for the chat UI.
-   ... (other potential customization options like initial message, welcome text, etc.)

### Direct Script Include (for Static HTML Sites)

If the component is compiled into a standalone JavaScript bundle, you can include it directly in your HTML:

1.  **Include the CSS (if separate) and JavaScript bundle in your HTML file**:
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Static Site</title>
        <!-- Optional: include custom styles for the chat box -->
        <link rel="stylesheet" href="path/to/chat-box-ui.css">
    </head>
    <body>
        <h1>Welcome!</h1>
        <p>This is my static content.</p>

        <!-- Placeholder for the chat box component (if needed) -->
        <div id="chat-box-root"></div>

        <!-- Include the compiled Chat Box UI JavaScript bundle -->
        <script src="path/to/chat-box-ui.min.js"></script>
        <script>
            // Initialize the chat box (example, actual initialization might vary)
            ChatBoxUI.init({
                targetElementId: 'chat-box-root', // If component renders into a div
                backendApiUrl: 'http://localhost:8000'
            });
        </script>
    </body>
    </html>
    ```
    (Note: The exact `ChatBoxUI.init` method and options depend on how the standalone bundle is exposed.)

## Development

See the `src/components/ChatBox` directory for component source code. Run local development server as per your project's setup (e.g., `npm start` for Create React App).
