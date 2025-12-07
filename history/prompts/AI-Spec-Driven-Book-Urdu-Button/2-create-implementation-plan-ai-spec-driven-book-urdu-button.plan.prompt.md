---
id: 2
title: Create Implementation Plan: AI/Spec-Driven Book + Urdu Button
stage: plan
date: 2025-12-07
surface: agent
model: claude-sonnet-4-5-20251101
feature: AI-Spec-Driven-Book-Urdu-Button
branch: master
user: user
command: /sp.plan
labels: ["plan", "architecture"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
- specs/AI-Spec-Driven-Book-Urdu-Button/plan.md
tests:
null
---

## Prompt

```text
Create:

High-level architecture sketch of the final Docusaurus site (plugins, theme, i18n setup, custom components)
Complete section/chapter structure (table of contents with short description for each chapter/page)
Research approach: lightweight, concurrent (research only what is needed for the current chapter being written)
Quality validation plan (linting, type-checking, translation completeness check, Lighthouse CI)

Key decisions to document:

i18n strategy
→ Option A: react-i18next (chosen) vs Option B: docusaurus-plugin-i18n-simple → chosen for full RTL + dynamic loading
Urdu font delivery
→ Option A: Google Fonts Noto Nastaliq (chosen) vs Option B: self-hosted WOFF2 → chosen for zero layout shift
Translation workflow
→ Option A: manual JSON after English write vs Option B: AI-assisted pre-fill with Claude → chosen B to hit 80%+ coverage fast
Button placement
→ Floating FAB vs Navbar item → chosen Navbar + keyboard shortcut for accessibility

Testing & validation strategy (directly from Constitution success criteria):

GitHub Actions workflow: build + Lighthouse CI (≥90 in en & ur)
Automated RTL layout smoke test (Percy or Chromatic)
Translation coverage script (fail if <80% keys present in /i18n/ur)
Zero unresolved spec violations (spec-kit-plus validate)
End-to-end manual test: English → Urdu → English toggle on mobile & desktop

Technical execution phases:

Research phase – concurrent, chapter-by-chapter
Foundation phase – Docusaurus + i18n + Spec-Kit Plus setup, CI/CD, custom Urdu theme
Writing phase – English first, immediate AI pre-translation to Urdu JSON
Synthesis phase – final proofreading, missing t
```

## Response snapshot

The implementation plan for the "AI/Spec-Driven Book + Urdu Button" project has been created at `specs/AI-Spec-Driven-Book-Urdu-Button/plan.md`. It includes a high-level architecture sketch, chapter structure, research and quality validation plans, key architectural decisions, testing strategy, and technical execution phases, all aligned with the project's constitution.

## Outcome

- ✅ Impact: Detailed implementation plan created and stored.
- 🧪 Tests: N/A
- 📁 Files: One file created: `specs/AI-Spec-Driven-Book-Urdu-Button/plan.md`.
- 🔁 Next prompts: N/A
- 🧠 Reflection: The plan successfully incorporates all user requirements and constitutional principles. The PowerShell script failure for `setup-plan.ps1` and `create-phr.ps1` indicates a need to either ensure `pwsh` is available or to update the `CLAUDE.md` instructions for handling PowerShell scripts in this environment.

## Evaluation notes (flywheel)

- Failure modes observed: PowerShell scripts `setup-plan.ps1` and `create-phr.ps1` failed due to `pwsh` not being found. This required manual derivation of paths and direct `Write` tool usage for the `plan.md` and PHR files.
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment: Investigate `pwsh` availability in the environment and update `CLAUDE.md` if necessary to provide fallback instructions or specify prerequisites for PowerShell execution.
