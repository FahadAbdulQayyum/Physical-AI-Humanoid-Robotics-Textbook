# Research for Feature: Agent Bot

This document outlines the research conducted to resolve "NEEDS CLARIFICATION" points identified in the `plan.md`.

## Decision: Performance Goals

**Rationale**: The initial `plan.md` lacked specific performance metrics. This research aims to define realistic performance goals for the Agent Bot based on typical usage patterns for Q&A bots and web scraping.

**Alternatives Considered**:
-   **No explicit goals**: Rejected because performance is a critical non-functional requirement for user satisfaction and system stability.
-   **Overly ambitious goals**: Rejected to avoid premature optimization and focus on delivering core functionality first.

**Research Tasks**:
-   **Throughput (Q&A)**: For a single user, typical response time should be under 5 seconds for a Q&A query against a pre-indexed source. For multiple concurrent users (future scale), target 10 queries per second with p95 latency < 3 seconds.
-   **Latency (Web Scraping)**: Initial page fetching and parsing should complete within 1-5 seconds, depending on page complexity.
-   **Resource Utilization**: Keep CPU and memory usage reasonable for a local development/small server environment (e.g., <500MB RAM, <50% CPU during peak Q&A).

## Decision: Constraints

**Rationale**: The initial `plan.md` did not detail specific system constraints. This research identifies key constraints that will influence design and implementation.

**Alternatives Considered**:
-   **Ignoring constraints**: Rejected, as this could lead to unexpected behavior, stability issues, or poor user experience.
-   **Over-constraining**: Rejected to maintain flexibility in early development phases.

**Research Tasks**:
-   **Memory Usage**: Aim for under 1GB of RAM for the bot process, including the vector store for a reasonable number of sources (e.g., 10-20 medium-sized websites).
-   **Source Document Size**: Limit individual web pages to be processed to approximately 1-2MB of text content to prevent excessive processing time and memory consumption for very large documents.
-   **Number of Sources**: Support up to 50 active sources in the knowledge base, with the ability to scale further by optimizing vector store management.
-   **Rate Limiting**: Implement defensive mechanisms to avoid being blocked by websites during scraping (e.g., configurable delays, user-agent rotation).
-   **LLM API Limits**: Acknowledge potential rate limits and costs associated with external LLM APIs (e.g., OpenAI, Gemini API if used directly for text generation). The current plan uses local embeddings and Langchain for orchestration, but final text generation might use a cloud LLM.
