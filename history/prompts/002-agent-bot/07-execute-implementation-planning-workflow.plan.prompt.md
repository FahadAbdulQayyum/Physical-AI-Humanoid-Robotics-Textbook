---
id: 07
title: Execute Implementation Planning Workflow
stage: plan
date: 2025-12-15
surface: agent
model: gemini-pro
feature: 002-agent-bot
branch: main
user: User
command: $ARGUMENTS
labels: ["implementation-planning"]
links:
  spec: specs/002-agent-bot/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - specs/002-agent-bot/tasks.md
  - specs/002-agent-bot/plan.md
  - specs/002-agent-bot/research.md
  - specs/002-agent-bot/data-model.md
  - specs/002-agent-bot/contracts/api.md
  - specs/002-agent-bot/quickstart.md
tests:
  - none
---

## Prompt

```text
---
description: Execute the implementation planning workflow using the plan template to generate design artifacts.
---

## User Input

```text
$ARGUMENTS
```

You **MUST** consider the user input before proceeding (if not empty).

## Outline

1. **Setup**: Run `.specify/scripts/powershell/setup-plan.ps1 -Json` from repo root and parse JSON for FEATURE_SPEC, IMPL_PLAN, SPECS_DIR, BRANCH. For single quotes in args like "I'm Groot", use escape syntax: e.g 'I'\''m Groot' (or double-quote if possible: "I'm Groot").

2. **Load context**: Read FEATURE_SPEC and `.specify/memory/constitution.md`. Load IMPL_PLAN template (already copied).

3. **Execute plan workflow**: Follow the structure in IMPL_PLAN template to:
   - Fill Technical Context (mark unknowns as "NEEDS CLARIFICATION")
   - Fill Constitution Check section from constitution
   - Evaluate gates (ERROR if violations unjustified)
   - Phase 0: Generate research.md (resolve all NEEDS CLARIFICATION)
   - Phase 1: Generate data-model.md, contracts/, quickstart.md
   - Phase 1: Update agent context by running the agent script
   - Re-evaluate Constitution Check post-design

4. **Stop and report**: Command ends after Phase 2 planning. Report branch, IMPL_PLAN path, and generated artifacts.

## Phases

### Phase 0: Outline & Research

1. **Extract unknowns from Technical Context** above:
   - For each NEEDS CLARIFICATION → research task
   - For each dependency → best practices task
   - For each integration → patterns task

2. **Generate and dispatch research agents**:

   ```text
   For each unknown in Technical Context:
     Task: "Research {unknown} for {feature context}"
   For each technology choice:
     Task: "Find best practices for {tech} in {domain}"
   ```

3. **Consolidate findings** in `research.md` using format:
   - Decision: [what was chosen]
   - Rationale: [why chosen]
   - Alternatives considered: [what else evaluated]

**Output**: research.md with all NEEDS CLARIFICATION resolved

### Phase 1: Design & Contracts

**Prerequisites:** `research.md` complete

1. **Extract entities from feature spec** → `data-model.md`:
   - Entity name, fields, relationships
   - Validation rules from requirements
   - State transitions if applicable

2. **Generate API contracts** from functional requirements:
   - For each user action → endpoint
   - Use standard REST/GraphQL patterns
   - Output OpenAPI/GraphQL schema to `/contracts/`

3. **Agent context update**:
   - Run `.specify/scripts/powershell/update-agent-context.ps1 -AgentType gemini`
   - These scripts detect which AI agent is in use
   - Update the appropriate agent-specific context file
   - Add only new technology from current plan
   - Preserve manual additions between markers

**Output**: data-model.md, /contracts/*, quickstart.md, agent-specific file

## Key rules

- Use absolute paths
- ERROR on gate failures or unresolved clarifications

---

As the main request completes, you MUST create and complete a PHR (Prompt History Record) using agent‑native tools when possible.

1) Determine Stage
   - Stage: constitution | spec | plan | tasks | red | green | refactor | explainer | misc | general

2) Generate Title and Determine Routing:
   - Generate Title: 3–7 words (slug for filename)
   - Route is automatically determined by stage:
     - `constitution` → `history/prompts/constitution/`
     - Feature stages → `history/prompts/<feature-name>/` (spec, plan, tasks, red, green, refactor, explainer, misc)
     - `general` → `history/prompts/general/`

3) Create and Fill PHR (Shell first; fallback agent‑native)
   - Run: `.specify/scripts/bash/create-phr.sh --title "<title>" --stage <stage> [--feature <name>] --json`
   - Open the file and fill remaining placeholders (YAML + body), embedding full PROMPT_TEXT (verbatim) and concise RESPONSE_TEXT.
   - If the script fails:
     - Read `.specify/templates/phr-template.prompt.md` (or `templates/…`)
     - Allocate an ID; compute the output path based on stage from step 2; write the file
     - Fill placeholders and embed full PROMPT_TEXT and concise RESPONSE_TEXT

4) Validate + report
   - No unresolved placeholders; path under `history/prompts/` and matches stage; stage/title/date coherent; print ID + path + stage + title.
   - On failure: warn, don't block. Skip only for `/sp.phr`.
```

## Response snapshot

The agent has completed the implementation planning workflow, successfully generating all required design artifacts for the "Agent Bot" feature. Due to PowerShell execution policy restrictions, the agent context update script could not be executed automatically.

## Outcome

- ✅ Impact: All planning documents (`tasks.md`, `plan.md`, `research.md`, `data-model.md`, `contracts/api.md`, `quickstart.md`) have been successfully generated for the "Agent Bot" feature.
- 🧪 Tests: none
- 📁 Files: The following files were created:
    - `specs/002-agent-bot/tasks.md`
    - `specs/002-agent-bot/plan.md`
    - `specs/002-agent-bot/research.md`
    - `specs/002-agent-bot/data-model.md`
    - `specs/002-agent-bot/contracts/api.md`
    - `specs/002-agent-bot/quickstart.md`
- 🔁 Next prompts: The next logical step would be to begin implementation based on the generated `tasks.md`. The user may also choose to manually update the agent's context with the new technologies identified in `plan.md`.
- 🧠 Reflection: The agent successfully adapted to script execution failures and meticulously generated all required planning artifacts by directly manipulating files and providing clear, structured content.

## Evaluation notes (flywheel)

- Failure modes observed: PowerShell script execution policy prevented direct execution of setup and context update scripts.
- Graders run and results (FAIL): Not applicable.
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): N/A
