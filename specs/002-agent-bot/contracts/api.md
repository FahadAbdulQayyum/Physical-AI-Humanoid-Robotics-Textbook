# API Contracts for Feature: Agent Bot

This document defines the API contracts for the "Agent Bot" feature, implemented using FastAPI.

## 1. Q&A Endpoint

**Functionality**: Allows users to ask a question against a single specified URL or against the aggregated knowledge base.

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

## 2. Source Management Endpoints

**Functionality**: Allows users to add, remove, and list knowledge sources for the bot.

### 2.1. Add Source

-   **Endpoint**: `/sources`
-   **Method**: `POST`
-   **Description**: Adds a new URL as a knowledge source.

### Request Body

**Type**: `application/json`

| Field | Type     | Description                               | Required | Example                     |
| :---- | :------- | :---------------------------------------- | :------- | :-------------------------- |
| `url` | `string` | The URL of the website to add as a source. | Yes      | `"https://example.com/blog"` |

**Example Request**:

```json
{
    "url": "https://example.com/blog"
}
```

### Response Body (200 OK)

**Type**: `application/json`

| Field        | Type       | Description                                  |
| :----------- | :--------- | :------------------------------------------- |
| `id`         | `string`   | Unique identifier for the added source.      |
| `url`        | `string`   | The URL of the added source.                 |
| `added_date` | `datetime` | Timestamp when the source was added.         |
| `status`     | `string`   | Current status of the source (e.g., `pending`, `indexed`). |

**Example Response**:

```json
{
    "id": "a1b2c3d4-e5f6-7890-1234-567890abcdef",
    "url": "https://example.com/blog",
    "added_date": "2025-12-15T10:00:00Z",
    "status": "pending"
}
```

### 2.2. Remove Source

-   **Endpoint**: `/sources/{source_id}`
-   **Method**: `DELETE`
-   **Description**: Removes a knowledge source by its unique ID.

### Path Parameters

| Parameter  | Type     | Description                                 | Required | Example                          |
| :--------- | :------- | :------------------------------------------ | :------- | :------------------------------- |
| `source_id`| `string` | The unique ID of the source to be removed.  | Yes      | `"a1b2c3d4-e5f6-7890-1234-567890abcdef"` |

### Response Body (200 OK)

**Type**: `application/json`

| Field    | Type     | Description                           |
| :------- | :------- | :------------------------------------ |
| `message`| `string` | Confirmation message.                 |

**Example Response**:

```json
{
    "message": "Source deleted successfully"
}
```

### 2.3. List Sources

-   **Endpoint**: `/sources`
-   **Method**: `GET`
-   **Description**: Retrieves a list of all currently managed knowledge sources.

### Response Body (200 OK)

**Type**: `application/json`

| Field         | Type            | Description                                  |
| :------------ | :-------------- | :------------------------------------------- |
| (Array of Source objects) | `array<object>` | A list of Source objects. Each object contains: `id`, `url`, `added_date`, `status`, `last_indexed` (optional). |

**Example Response**:

```json
[
    {
        "id": "a1b2c3d4-e5f6-7890-1234-567890abcdef",
        "url": "https://example.com/blog",
        "added_date": "2025-12-15T10:00:00Z",
        "status": "indexed",
        "last_indexed": "2025-12-15T11:00:00Z"
    },
    {
        "id": "b1c2d3e4-f5a6-7890-1234-567890abcdef",
        "url": "https://another-site.org/docs",
        "added_date": "2025-12-14T09:00:00Z",
        "status": "pending"
    }
]
```