# Quickstart Guide for Feature: Agent Bot

This guide provides a quick overview of how to set up, run, and interact with the "Agent Bot" feature.

## 1. Setup

### Prerequisites

-   Python 3.9+ installed on your system.
-   `pip` (Python package installer) for dependency management.

### Installation

1.  **Create a dedicated directory for the bot:**
    ```bash
    mkdir bot
    cd bot
    ```

2.  **Create a virtual environment (recommended):**
    ```bash
    python -m venv venv
    ```

3.  **Activate the virtual environment:**
    -   **Windows:**
        ```bash
        .\venv\Scripts\activate
        ```
    -   **macOS/Linux:**
        ```bash
        source venv/bin/activate
        ```

4.  **Install dependencies:**
    Create a `requirements.txt` file in your `bot/` directory with the following content:
    ```
    fastapi
    uvicorn
    langchain
    beautifulsoup4
    faiss-cpu
    sentence-transformers
    typer[all]
    ```
    Then install them:
    ```bash
    pip install -r requirements.txt
    ```

## 2. Running the API

The Agent Bot features a FastAPI backend.

1.  Ensure you are in the `bot/` directory and your virtual environment is active.
2.  Create a `main.py` file (as outlined in `tasks.md`).
3.  Run the API server:
    ```bash
    uvicorn main:app --reload
    ```
    The API will be available at `http://127.0.0.1:8000`. You can access the interactive API documentation at `http://127.0.0.1:8000/docs`.

## 3. Running the CLI

The Agent Bot also provides a command-line interface.

1.  Ensure you are in the `bot/` directory and your virtual environment is active.
2.  Create a `cli.py` file (as outlined in `tasks.md`).
3.  Execute CLI commands using:
    ```bash
    python -m cli [command] [options]
    ```

## 4. Basic Usage Example

Here's how to add a source and ask a question using the CLI:

1.  **Add a source:**
    ```bash
    python -m cli add-source "https://docusaurus.io/docs/introduction"
    ```
    (This will use the `/sources` API endpoint internally).

2.  **Ask a question:**
    ```bash
    python -m cli ask "What is Docusaurus?"
    ```
    (This will use the `/qa` API endpoint internally).
