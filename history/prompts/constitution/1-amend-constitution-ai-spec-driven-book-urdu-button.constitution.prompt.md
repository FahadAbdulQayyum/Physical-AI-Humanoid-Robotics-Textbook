---
id: 1
title: Amend Constitution: AI/Spec-Driven Book + Urdu Button
stage: constitution
date: 2025-12-07
surface: agent
model: claude-sonnet-4-5-20250929
feature: AI/Spec-Driven Book + Urdu Button
branch: master
user: user
command: /sp.constitution
labels: ["constitution", "project-setup"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
- .specify/memory/constitution.md
tests:
null
---

## Prompt

```text
Project: AI/Spec-Driven Book + Urdu Button
Core principles:

Spec-Kit Plus driven
Claude code assisted
Bilingual EN + UR (80%+ translated)

Standards:

English source, Docusaurus Markdown
One-click “اردو میں ترجمہ کریں” button on every page
react-i18next, locale "ur", full RTL + Noto Nastaliq
Fallback to English if missing

Constraints:

Only Spec-Kit Plus, Claude code, Docusaurus, GitHub Pages

Success:

Live on GitHub Pages
Instant EN ↔ UR toggle, perfect RTL
Lighthouse ≥90+, zero spec errors
```

## Response snapshot

The project constitution has been updated to reflect the new core principles, standards, constraints, and success criteria for the "AI/Spec-Driven Book + Urdu Button" project. The updated constitution is located at `.specify/memory/constitution.md`.

## Outcome

- ✅ Impact: Constitution updated with new principles, standards, and constraints.
- 🧪 Tests: N/A
- 📁 Files: One file modified: `.specify/memory/constitution.md`.
- 🔁 Next prompts: None
- 🧠 Reflection: Constitution successfully updated and reflects user's project definition.

## Evaluation notes (flywheel)

- Failure modes observed: PowerShell script execution failed, reverted to agent-native PHR creation.
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment: Ensure `powershell.exe` is used for `.ps1` scripts or update CLAUDE.md to reflect proper execution.
