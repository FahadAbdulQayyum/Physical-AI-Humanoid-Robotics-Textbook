# Data Model for Feature: Chat Box UI

This document defines the data models for the "Chat Box UI" feature, primarily for client-side representation and persistence.

## Entities

### 1. Message

Represents a single message within a chat session.

| Field       | Type      | Description                                | Constraints / Validation |
| :---------- | :-------- | :----------------------------------------- | :----------------------- |
| `sender`    | string    | The sender of the message (`user` or `bot`). | Required, `user` or `bot` |
| `timestamp` | datetime  | The time when the message was sent/received. | Required, ISO 8601 format |
| `content`   | string    | The text content of the message.           | Required, non-empty      |

### 2. Chat Session

Represents an ongoing conversation with the bot, including its history and state. This entity is primarily stored and managed client-side.

| Field                 | Type            | Description                                | Constraints / Validation |
| :-------------------- | :-------------- | :----------------------------------------- | :----------------------- |
| `id`                  | string          | Unique identifier for the chat session.    | Generated UUID           |
| `messages`            | list of Message | A chronological list of messages in the session. | Can be empty             |
| `start_time`          | datetime        | Timestamp when the session was initiated.  | Required, ISO 8601 format |
| `last_activity_time`  | datetime        | Timestamp of the last message sent or received. | Updated on activity      |
| `is_open`             | boolean         | Indicates if the chat box is currently open. | Default `false`          |
