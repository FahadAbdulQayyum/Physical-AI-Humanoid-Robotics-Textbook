# API Contracts for Feature: Chat Box UI

This document outlines the API contracts that the Chat Box UI will interact with. These endpoints are expected to be provided by a separate backend service (e.g., the "Agent Bot" API).

## 1. Q&A Endpoint

**Functionality**: Used to send user questions to the bot and receive answers.

-   **Endpoint**: `/qa`
-   **Method**: `POST`
-   **Description**: Submits a question and an optional URL for an answer.

### Request Body

**Type**: `application/json`

| Field      | Type     | Description                                     | Required | Example                      |
| :--------- | :------- | :---------------------------------------------- | :------- | :--------------------------- |
| `question` | `string` | The question to ask the bot.                    | Yes      | `"What is Docusaurus?"`      |
| `url`      | `string` | Optional. If provided, the question is answered only from this URL. | No       | `"https://docusaurus.io"`    |

**Example Request**:

```json
{
    "question": "What is Docusaurus?",
    "url": "https://docusaurus.io"
}
```

### Response Body (200 OK)

**Type**: `application/json`

| Field         | Type            | Description                                  |
| :------------ | :-------------- | :------------------------------------------- |
| `answer_text` | `string`        | The bot's generated answer to the question.  |
| `source_urls` | `array<string>` | A list of URLs from which the answer was derived. |

**Example Response**:

```json
{
    "answer_text": "Docusaurus is a static site generator for building documentation websites.",
    "source_urls": ["https://docusaurus.io/docs/introduction"]
}
```

## 2. Source Management Endpoints (Optional for UI, but available)

**Functionality**: These endpoints allow for managing the bot's knowledge sources. The Chat Box UI might not directly expose all of these, but they are part of the backend capabilities it leverages.

### 2.1. Add Source

-   **Endpoint**: `/sources`
-   **Method**: `POST`

### 2.2. Remove Source

-   **Endpoint**: `/sources/{source_id}`
-   **Method**: `DELETE`

### 2.3. List Sources

-   **Endpoint**: `/sources`
-   **Method**: `GET`
