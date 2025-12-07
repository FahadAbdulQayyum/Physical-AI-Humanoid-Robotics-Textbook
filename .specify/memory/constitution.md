<!-- Sync Impact Report:
Version change: 0.0.0 -> 1.0.0
Modified principles: None (initial population)
Added sections: Core Principles, Standards and Constraints, Success Criteria, Governance
Removed sections: None
Templates requiring updates:
  - .specify/templates/plan-template.md: ✅ updated (implicit in new principles)
  - .specify/templates/spec-template.md: ✅ updated (implicit in new principles)
  - .specify/templates/tasks-template.md: ✅ updated (implicit in new principles)
  - .specify/templates/adr-template.md: ✅ updated (implicit in new principles)
  - .specify/templates/checklist-template.md: ✅ updated (implicit in new principles)
  - .specify/templates/phr-template.prompt.md: ✅ updated (implicit in new principles)
  - .specify/templates/agent-file-template.md: ✅ updated (implicit in new principles)
Follow-up TODOs:
  - RATIFICATION_DATE: Original adoption date unknown
-->
# AI/Spec-Driven Book + Urdu Button Constitution

## Core Principles

### I. Spec-Kit Plus Driven
All development and project management must adhere to the Spec-Kit Plus methodology. This includes using its defined templates, workflows, and guidelines for specification, planning, task management, and documentation.

### II. Claude Code Assisted
Leverage Claude Code for all possible development tasks, including code generation, debugging, testing, and documentation assistance. Maximize the use of Claude Code's capabilities to enhance efficiency and quality.

### III. Bilingual EN + UR (80%+ Translated)
The project aims for a fully bilingual experience, supporting both English and Urdu. A minimum of 80% of all content must be translated into Urdu.

## Standards and Constraints

### Development Standards
*   **Source Language:** English is the primary source language for all content.
*   **Documentation Format:** Docusaurus Markdown is the standard for all project documentation.
*   **Urdu Toggle:** Every page must include a prominent one-click “اردو میں ترجمہ کریں” button for instant language switching.
*   **Internationalization Library:** `react-i18next` with `locale "ur"` must be used for all localization efforts, ensuring full Right-To-Left (RTL) support and proper rendering with Noto Nastaliq font.
*   **Language Fallback:** In cases where Urdu translations are missing, the system must gracefully fall back to the English content.

### Project Constraints
*   **Tooling:** Exclusively use Spec-Kit Plus, Claude Code, Docusaurus, and GitHub Pages. No other frameworks, libraries, or deployment platforms are permitted without explicit architectural review and approval.

## Success Criteria

### Project Milestones
*   **Deployment:** The project must be live and accessible on GitHub Pages.
*   **Bilingual Functionality:** Achieve instant English ↔ Urdu toggling with perfect Right-To-Left (RTL) rendering.
*   **Performance:** Attain a Lighthouse score of 90 or above.
*   **Specification Compliance:** Ensure zero specification errors, indicating full adherence to documented requirements.

## Governance

All development and operational activities must comply with the principles, standards, and constraints outlined in this constitution. Amendments to this constitution require a formal review process. Adherence to these guidelines will be verified through regular audits and code reviews.

**Version**: 1.0.0 | **Ratified**: TODO(RATIFICATION_DATE): Original adoption date unknown | **Last Amended**: 2025-12-07
