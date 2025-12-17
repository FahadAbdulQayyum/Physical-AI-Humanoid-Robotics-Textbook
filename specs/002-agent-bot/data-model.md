# Data Model for Feature: Agent Bot

This document defines the data models for the "Agent Bot" feature, based on the requirements outlined in the `tasks.md` and `plan.md`.

## Entities

### 1. Q&A Request

Represents a user's question, potentially with a specific URL to query against.

| Field       | Type   | Description                                   | Constraints / Validation |
| :---------- | :----- | :-------------------------------------------- | :----------------------- |
| `question`  | string | The user's question.                          | Required, non-empty      |
| `url`       | string | Optional URL to query against (for single-source queries). | Optional, valid URL format |

### 2. Source

Represents a website URL that the agent bot uses as a knowledge source. These sources are managed by the user and persist across sessions.

| Field        | Type      | Description                                | Constraints / Validation       |
| :----------- | :-------- | :----------------------------------------- | :----------------------------- |
| `id`         | string    | Unique identifier for the source (e.g., hash of URL, UUID). | Auto-generated, unique           |
| `url`        | string    | The URL of the knowledge source.           | Required, valid URL format, unique |
| `added_date` | datetime  | Timestamp when the source was added.       | Auto-generated                 |
| `status`     | enum      | Current status of the source (e.g., `pending`, `indexed`, `failed`). | `pending`, `indexed`, `failed`   |
| `last_indexed`| datetime  | Timestamp of the last successful indexing of this source. | Optional, updated on index       |

### 3. Answer

Represents the bot's generated response to a user's question.

| Field          | Type           | Description                                | Constraints / Validation |
| :------------- | :------------- | :----------------------------------------- | :----------------------- |
| `answer_text`  | string         | The generated textual answer.              | Non-empty                |
| `source_urls`  | list of strings| URLs from which the answer was synthesized. | List of valid URLs       |
