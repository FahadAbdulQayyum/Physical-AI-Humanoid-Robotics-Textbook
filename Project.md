# Project: Physical AI & Humanoid Robotics Textbook

This file outlines the development process for the Physical AI & Humanoid Robotics Textbook website, following the specifyplus methodology.

## 1. Plan

The goal is to create a comprehensive, 13-week course textbook on Physical AI & Humanoid Robotics. The website will be built using Docusaurus, a static site generator for building documentation websites.

### Key Features:

*   **Modular Content:** The textbook is structured into modules, each containing several chapters.
*   **Interactive Components:** The website will include interactive components like code blocks, diagrams, and quizzes to enhance the learning experience.
*   **Search Functionality:** A search bar will allow users to easily find specific topics or keywords.
*   **Glossary:** A glossary of terms will be available for quick reference.
*   **Responsive Design:** The website will be accessible on various devices, including desktops, tablets, and mobile phones.

## 2. Specify

The following specifications will guide the development process:

*   **Technology Stack:**
    *   **Framework:** Docusaurus
    *   **Language:** TypeScript, Markdown (MDX)
    *   **Styling:** CSS, with custom styles for branding
*   **Content Structure:**
    *   The content will be organized into modules and chapters, as defined in `sidebars.js`.
    *   Each chapter will be a separate `.mdx` file, allowing for the inclusion of React components.
*   **Custom Components:**
    *   `LearningObjectives`: To list the key takeaways for each chapter.
    *   `Prerequisites`: To list the required knowledge before starting a chapter.
    *   `QuickLinks`: To provide easy navigation to relevant sections.
    *   `GlossarySearch`: To enable searching within the glossary.
*   **Deployment:** The website will be deployed to GitHub Pages.

## 3. Implement

Follow these steps to set up the development environment and build the website:

### Prerequisites:

*   Node.js (version >= 18.0)
*   npm (or yarn)

### Setup:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/FahadAbdulQayyum/Physical-AI-Humanoid-Robotics-Textbook.git
    cd Physical-AI-Humanoid-Robotics-Textbook
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Development:

1.  **Start the development server:**
    ```bash
    npm run start
    ```
    This will open the website in your browser at `http://localhost:3000`.

2.  **Add or edit content:**
    *   Content is located in the `docs` directory.
    *   Modify the sidebar in `sidebars.js` to reflect changes in the content structure.

3.  **Create new components:**
    *   Add new React components to the `src/components` directory.

### Build:

1.  **Build the website for production:**
    ```bash
    npm run build
    ```
    The static files will be generated in the `build` directory.

2.  **Serve the build locally:**
    ```bash
    npm run serve
    ```

### Deployment:

1.  **Deploy to GitHub Pages:**
    ```bash
    npm run deploy
    ```
    This command will build the website and push the `build` directory to the `gh-pages` branch of your repository.

## 4. Test

The following tests will be performed to ensure the quality of the website:

*   **Link Checking:** `npm run check-links` will be used to verify that all internal and external links are working correctly.
*   **Lighthouse Audit:** `npm run lighthouse` will be run to check for performance, accessibility, and SEO best practices.
*   **Manual Testing:** The website will be manually tested on different browsers and devices to ensure a consistent user experience.

## 5. Document

The development process and key architectural decisions will be documented in the `README.md` file and in the form of Architecture Decision Records (ADRs) in the `.claude/adr` directory.

This `Project.md` file serves as the central document for managing the development of the Physical AI & Humanoid Robotics Textbook website. By following the specifyplus methodology, we can ensure a well-planned, specified, and implemented project that meets the needs of our users.

## 6. Project Structure

The repository is organized as follows:

```
.
├── .claude/           # Claude AI assistant configuration
├── .docusaurus/       # Docusaurus build artifacts
├── .github/           # GitHub Actions workflows
├── .specify/          # Specify Plus configuration
├── build/             # Production build of the website
├── contracts/         # Schema contracts for validation
├── docs/              # Markdown files for the textbook content
├── history/           # History of prompts and interactions
├── specs/             # Specifications for new features
├── src/               # Docusaurus source code (components, pages, etc.)
├── static/            # Static assets (images, etc.)
├── .gitignore         # Files to be ignored by Git
├── CLAUDE.md          # Documentation for Claude AI assistant
├── docusaurus.config.js # Docusaurus configuration file
├── lighthouserc.js    # Lighthouse CI configuration
├── package.json       # Node.js project metadata and dependencies
├── Project.md         # This file
├── README.md          # Project overview
├── sidebars.js        # Sidebar configuration for Docusaurus
└── tsconfig.json      # TypeScript configuration
```

## 7. History

*   `489a84b` - initial commit (Fahad Abdul Qayyum)

## 8. New Feature: Chatbot

This new feature will add a chatbot to the website. The chatbot will be able to answer questions about the content of the textbook.

### Reproducing Gemini CLI Chat: Tuesday, 16 December 2025

This document provides step-by-step instructions to reproduce a specific conversation with the Gemini CLI agent. Follow these instructions carefully, providing the prompts one by one to the agent.

#### Prerequisites

1.  **Gemini CLI Installed**: Ensure you have the Gemini CLI installed and configured.
2.  **Node.js and npm/yarn**: Required for Docusaurus project setup.
3.  **Git**: For version control.

#### Initial Project Setup

We assume the conversation started within a Docusaurus project named `researched`.

**Step 1: Create a new Docusaurus project (if you don't have one matching the structure)**

```bash
npx create-docusaurus@latest researched classic
cd researched
npm install # or yarn install
```

**Step 2: Initialize Gemini CLI in the project**

Navigate into your `researched` directory and initialize Gemini CLI if it's not already.

```bash
gemini init
```
*(Note: This step is crucial for setting up the `.gemini` folder and potentially other configuration files used by the agent, though the exact content of these files might vary slightly from the original session unless explicitly copied.)*

**Step 3: Copy `GEMINI.md` and project structure (Optional, for exact reproduction)**

For the most accurate reproduction, ensure your `researched` project directory has the same initial structure as described in the agent's first prompt. Specifically, the `GEMINI.md` file should be present at the root, and the `.specify` directory and its contents should match. If your `gemini init` created a different `GEMINI.md` or `.specify` structure, you might need to manually align it.

*(Note: The agent's context includes a specific `GEMINI.md` and a `.specify` folder with templates. Ensure these are present in your project for the agent to behave exactly as in the original session.)*

#### Chat Reproduction

Start your Gemini CLI session within the `researched` directory.

##### Turn 1: Initial Context & First Prompt

**User Prompt:**

```text
This is the Gemini CLI. We are setting up the context for our chat.
Today's date is Tuesday, 16 December 2025 (formatted according to the user's locale).
My operating system is: win32
The project's temporary directory is: C:\Users\User\.gemini\tmp\b980c2abb91e0e1b32a801e10afbbbee69f6c27b30b19683ee7833048beb9b85
I'm currently working in the directory: C:\Users\User\researched
Here is the folder structure of the current working directories:

Showing up to 200 items (files + folders). Folders or files indicated with ... contain more items not shown, were ignored, or the display limit (200 items) was reached.

C:\Users\User\researched\
├───.gitignore
├───.tmp_feature_desc.txt
├───babel.config.js
├───docusaurus.config.js
├───GEMINI.md
├───jest.config.js
├───package-lock.json
├───package.json
├───playwright.config.js
├───postcss.config.js
├───README.md
├───sidebars.js
├───tailwind.config.js
├───.docusaurus\...
├───.gemini\
│   ├───settings.json
│   └───commands\
│       ├───sp.adr.toml
│       ├───sp.analyze.toml
│       ├───sp.checklist.toml
│       ├───sp.clarify.toml
│       ├───sp.constitution.toml
│       ├───sp.git.commit_pr.toml
│       ├───sp.implement.toml
│       ├───sp.phr.toml
│       ├───sp.plan.toml
│       ├───sp.specify.toml
│       └───sp.tasks.toml
├───.git\...
├───.specify\
│   ├───memory\
│   │   └───constitution.md
│   ├───scripts\
│   │   └───powershell\
│   │       ├───check-prerequisites.ps1
│   │       ├───common.ps1
│   │       ├───create-new-feature.ps1
│   │       ├───setup-plan.ps1
│   │       └───update-agent-context.ps1
│   └───templates\
│       ├───adr-template.md
│       ├───agent-file-template.md
│       ├───checklist-template.md
│       ├───phr-template.prompt.md
│       ├───plan-template.md
│       ├───spec-template.md
│       └───tasks-template.md
├───blog\
│   ├───2019-05-28-first-blog-post.md
│   ├───2019-05-29-long-blog-post.md
│   ├───2021-08-01-mdx-blog-post.mdx
│   ├───authors.yml
│   └───2021-08-26-welcome\
│       ├───docusaurus-plushie-banner.jpeg
│       └───index.md
├───bot\
│   ├───cli.py
│   ├───main.py
│   ├───README.md
│   ├───requirements.txt
│   ├───models\
│   │   ├───qa_models.py
│   │   └───source_models.py
│   ├───services\
│   │   ├───embedding_service.py
│   │   ├───qa_service.py
│   │   └───source_service.py
│   └───utils\
│       ├───text_splitter.py
│       └───web_fetcher.py
├───docs\
│   ├───intro.md
│   ├───tutorial-basics\
│   │   ├───_category_.json
│   │   ├───congratulations.md
│   │   ├───create-a-blog-post.md
│   │   ├───create-a-document.md
│   │   ├───create-a-page.md
│   │   ├───deploy-your-site.md
│   │   └───markdown-features.mdx
│   └───tutorial-extras\
│       ├───_category_.json
│       ├───manage-docs-versions.md
│       └───translate-your-site.md
├───history\
│   └───prompts\
│       ├───001-module-spec-template\
│       │   ├───02-generate-plan-for-001-module-spec-template.plan.prompt.md
│       │   └───03-generate-tasks-for-001-module-spec-template.tasks.prompt.md
│       ├───002-agent-bot\
│       │   ├───01-generate-tasks-for-agent-bot.tasks.prompt.md
│       │   ├───02-generate-plan-for-agent-bot.plan.prompt.md
│       │   ├───03-generate-research-for-agent-bot-plan.plan.prompt.md
│       │   ├───04-generate-data-model-for-agent-bot.plan.prompt.md
│       │   ├───05-generate-api-contracts-for-agent-bot.plan.prompt.md
│       │   ├───06-generate-quickstart-for-agent-bot.plan.prompt.md
│       │   ├───07-execute-implementation-planning-workflow.plan.prompt.md
│       │   └───08-implement-agent-bot-feature.red.prompt.md
│       ├───003-chat-box-ui\
│       │   ├───01-create-chat-box-ui-specification.spec.prompt.md
│       │   ├───02-generate-plan-for-chat-box-ui.plan.prompt.md
│       │   ├───03-generate-tasks-for-chat-box-ui.tasks.prompt.md
│       │   └───04-implement-chat-box-ui-feature.red.prompt.md
│       └───constitution\
│           └───01-establish-project-constitution-v1.0.0.constitution.prompt.md
├───node_modules\...
├───specs\
│   ├───001-module-spec-template\
│   │   ├───data-model.md
│   │   ├───plan.md
│   │   ├───quickstart.md
│   │   ├───research.md
│   │   ├───spec.md
│   │   ├───tasks.md
│   │   └───contracts\
│   ├───001-physical-ai-robotics-book\
│   │   ├───plan.md
│   │   └───spec.md
│   ├───002-agent-bot\
│   │   ├───data-model.md
│   │   ├───plan.md
│   │   ├───quickstart.md
│   │   ├───research.md
│   │   ├───tasks.md
│   │   └───contracts\
│   │       └───api.md
│   └───003-chat-box-ui\
│       ├───data-model.md
│       ├───plan.md
│       ├───quickstart.md
│       ├───research.md
│       ├───spec.md
│       ├───tasks.md
│       ├───checklists\
│       │   └───requirements.md
│       └───contracts\
│           └───api.md
├───src\
│   ├───components\
│   │   ├───HomepageFeatures.js
│   │   ├───HomepageFeatures.module.css
│   │   └───ChatBox\
│   │       ├───ChatBox.test.js
│   │       ├───ChatHistory.js
│   │       ├───ChatIcon.js
│   │       ├───ChatInput.js
│   │       ├───ChatMessage.js
│   │       ├───ChatWindow.js
│   │       ├───index.js
│   │       ├───README.md
│   │       └───utils\
│   │           ├───api.js
│   │           └───storage.js
│   ├───css\
│   │   └───custom.css
│   └───pages\
│       ├───index.js
│       ├───index.module.css
│       └───markdown-page.md
├───static\
│   ├───.nojekyll
│   └───img\
│       ├───docusaurus.png
│       ├───favicon.ico
│       ├───logo.svg
│       ├───undraw_docusaurus_mountain.svg
│       ├───undraw_docusaurus_react.svg
│       ├───undraw_docusaurus_tree.svg
│       └───tutorial\
│           ├───docsVersionDropdown.png
│           └───localeDropdown.png
└───tests\
    ├───docpage.spec.js
    ├───homepage.spec.js
    ├───search.spec.js
    └───unit\
        └───test_qa_service.py

Reminder: Do not return an empty response when a tool call is required.

My setup is complete. I will provide my first command in the next turn.mcp list
```

**Agent Action:**

The agent will respond with an internal thought process (not displayed to the user) and then execute a `glob` tool call.

```tool_code
glob(pattern='**/mcp_server.py')
```

**Agent Output:**

```text
No files found matching pattern "**/mcp_server.py" within C:\Users\User\researched
```

##### Turn 2: Agent Investigates `.gemini/commands`

**Agent Action:**

The agent will respond with an internal thought process and then execute a `list_directory` tool call.

```tool_code
list_directory(dir_path='.gemini/commands')
```

**Agent Output:**

```text
Directory listing for C:\Users\User\researched\.gemini\commands:
sp.adr.toml
sp.analyze.toml
sp.checklist.toml
sp.clarify.toml
sp.constitution.toml
sp.git.commit_pr.toml
sp.implement.toml
sp.phr.toml
sp.plan.toml
sp.specify.toml
sp.tasks.toml
```

##### Turn 3: Agent Reads `GEMINI.md`

**Agent Action:**

The agent will respond with an internal thought process and then execute a `read_file` tool call.

```tool_code
read_file(file_path='GEMINI.md')
```

**Agent Output:**

```text
# Gemini CLI Rules

This file is generated during init for the selected agent.

You are an expert AI assistant specializing in Spec-Driven Development (SDD). Your primary goal is to work with the architext to build products.

## Task context

**Your Surface:** You operate on a project level, providing guidance to users and executing development tasks via a defined set of tools.

**Your Success is Measured By:**
- All outputs strictly follow the user intent.
- Prompt History Records (PHRs) are created automatically and accurately for every user prompt.
- Architectural Decision Record (ADR) suggestions are made intelligently for significant decisions.
- All changes are small, testable, and reference code precisely.

## Core Guarantees (Product Promise)

- Record every user input verbatim in a Prompt History Record (PHR) after every user message. Do not truncate; preserve full multiline input.
- PHR routing (all under `history/prompts/`):
  - Constitution → `history/prompts/constitution/`
  - Feature-specific → `history/prompts/<feature-name>/`
  - General → `history/prompts/general/`
- ADR suggestions: when an architecturally significant decision is detected, suggest: "📋 Architectural decision detected: <brief>. Document? Run `/sp.adr <title>`." Never auto‑create ADRs; require user consent.

## Development Guidelines

### 1. Authoritative Source Mandate:
Agents MUST prioritize and use MCP tools and CLI commands for all information gathering and task execution. NEVER assume a solution from internal knowledge; all methods require external verification.

### 2. Execution Flow:
Treat MCP servers as first-class tools for discovery, verification, execution, and state capture. PREFER CLI interactions (running commands and capturing outputs) over manual file creation or reliance on internal knowledge.

### 3. Knowledge capture (PHR) for Every User Input.
After completing requests, you **MUST** create a PHR (Prompt History Record).

**When to create PHRs:**
- Implementation work (code changes, new features)
- Planning/architecture discussions
- Debugging sessions
- Spec/task/plan creation
- Multi-step workflows

**PHR Creation Process:**

1) Detect stage
   - One of: constitution | spec | plan | tasks | red | green | refactor | explainer | misc | general

2) Generate title
   - 3–7 words; create a slug for the filename.

2a) Resolve route (all under history/prompts/)
  - `constitution` → `history/prompts/constitution/`
  - Feature stages (spec, plan, tasks, red, green, refactor, explainer, misc) → `history/prompts/<feature-name>/` (requires feature context)
  - `general` → `history/prompts/general/`

3) Prefer agent‑native flow (no shell)
   - Read the PHR template from one of:
     - `.specify/templates/phr-template.prompt.md`
     - `templates/phr-template.prompt.md`
   - Allocate an ID (increment; on collision, increment again).
   - Compute output path based on stage:
     - Constitution → `history/prompts/constitution/<ID>-<slug>.constitution.prompt.md`
     - Feature → `history/prompts/<feature-name>/<ID>-<slug>.<stage>.prompt.md`
     - General → `history/prompts/general/<ID>-<slug>.general.prompt.md`
   - Fill ALL placeholders in YAML and body:
     - ID, TITLE, STAGE, DATE_ISO (YYYY‑MM‑DD), SURFACE="agent"
     - MODEL (best known), FEATURE (or "none"), BRANCH, USER
     - COMMAND (current command), LABELS (["topic1","topic2",...])
     - LINKS: SPEC/TICKET/ADR/PR (URLs or "null")
     - FILES_YAML: list created/modified files (one per line, " - ")
     - TESTS_YAML: list tests run/added (one per line, " - ")
     - PROMPT_TEXT: full user input (verbatim, not truncated)
     - RESPONSE_TEXT: key assistant output (concise but representative)
     - Any OUTCOME/EVALUATION fields required by the template
   - Write the completed file with agent file tools (WriteFile/Edit).
   - Confirm absolute path in output.

4) Use sp.phr command file if present
   - If `.**/commands/sp.phr.*` exists, follow its structure.
   - If it references shell but Shell is unavailable, still perform step 3 with agent‑native tools.

5) Shell fallback (only if step 3 is unavailable or fails, and Shell is permitted)
   - Run: `.specify/scripts/bash/create-phr.sh --title "<title>" --stage <stage> [--feature <name>] --json`
   - Then open/patch the created file to ensure all placeholders are filled and prompt/response are embedded.

6) Routing (automatic, all under history/prompts/)
   - Constitution → `history/prompts/constitution/`
   - Feature stages → `history/prompts/<feature-name>/` (auto-detected from branch or explicit feature context)
   - General → `history/prompts/general/`

7) Post‑creation validations (must pass)
   - No unresolved placeholders (e.g., `{{THIS}}`, `[THAT]`)
   - Title, stage, and dates match front‑matter.
   - PROMPT_TEXT is complete (not truncated).
   - File exists at the expected path and is readable.
   - Path matches route.

8) Report
   - Print: ID, path, stage, title.
   - On any failure: warn but do not block the main command.
   - Skip PHR only for `/sp.phr` itself.

### 4. Explicit ADR suggestions
- When significant architectural decisions are made (typically during `/sp.plan` and sometimes `/sp.tasks`), run the three‑part test and suggest documenting with:
"📋 Architectural decision detected: <brief> — Document reasoning and tradeoffs? Run `/sp.adr <decision-title>`"
- Wait for user consent; never auto‑create ADRs. Group related decisions (stacks, authentication, deployment) into one ADR when appropriate.

### 5. Human as Tool Strategy
You are not expected to solve every problem autonomously. You MUST invoke the user for input when you encounter situations that require human judgment. Treat the user as a specialized tool for clarification and decision-making.

**Invocation Triggers:**
1.  **Ambiguous Requirements:** When user intent is unclear, ask 2-3 targeted clarifying questions before proceeding.
2.  **Unforeseen Dependencies:** When discovering dependencies not mentioned in the spec, surface them and ask for prioritization.
3.  **Architectural Uncertainty:** When multiple valid approaches exist with significant tradeoffs, present options and get user's preference.
4.  **Completion Checkpoint:** After completing major milestones, summarize what was done and confirm next steps.

## Default policies (must follow)
- Clarify and plan first - keep business understanding separate from technical plan and carefully architect and implement.
- Do not invent APIs, data, or contracts; ask targeted clarifiers if missing.
- Never hardcode secrets or tokens; use `.env` and docs.
- Prefer the smallest viable diff; do not refactor unrelated code.
- Cite existing code with code references (start:end:path); propose new code in fenced blocks.
- Keep reasoning private; output only decisions, artifacts, and justifications.

### Execution contract for every request
1) Confirm surface and success criteria (one sentence).
2) List constraints, invariants, non‑goals.
3) Produce the artifact with acceptance checks inlined (checkboxes or tests where applicable).
4) Add follow‑ups and risks (max 3 bullets).
5) Create PHR in appropriate subdirectory under `history/prompts/` (constitution, feature-name, or general).
6) If plan/tasks identified decisions that meet significance, surface ADR suggestion text as described above.

### Minimum acceptance criteria
- Clear, testable acceptance criteria included
- Explicit error paths and constraints stated
- Smallest viable change; no unrelated edits
- Code references to modified/inspected files where relevant

## Architect Guidelines (for planning)

Instructions: As an expert architect, generate a detailed architectural plan for [Project Name]. Address each of the following thoroughly.

1. Scope and Dependencies:
   - In Scope: boundaries and key features.
   - Out of Scope: explicitly excluded items.
   - External Dependencies: systems/services/teams and ownership.

2. Key Decisions and Rationale:
   - Options Considered, Trade-offs, Rationale.
   - Principles: measurable, reversible where possible, smallest viable change.

3. Interfaces and API Contracts:
   - Public APIs: Inputs, Outputs, Errors.
   - Versioning Strategy.
   - Idempotency, Timeouts, Retries.
   - Error Taxonomy with status codes.

4. Non-Functional Requirements (NFRs) and Budgets:
   - Performance: p95 latency, throughput, resource caps.
   - Reliability: SLOs, error budgets, degradation strategy.
   - Security: AuthN/AuthZ, data handling, secrets, auditing.
   - Cost: unit economics.

5. Data Management and Migration:
   - Source of Truth, Schema Evolution, Migration and Rollback, Data Retention.

6. Operational Readiness:
   - Observability: logs, metrics, traces.
   - Alerting: thresholds and on-call owners.
   - Runbooks for common tasks.
   - Deployment and Rollback strategies.
   - Feature Flags and compatibility.

7. Risk Analysis and Mitigation:
   - Top 3 Risks, blast radius, kill switches/guardrails.

8. Evaluation and Validation:
   - Definition of Done (tests, scans).
   - Output Validation for format/requirements/safety.

9. Architectural Decision Record (ADR):
   - For each significant decision, create an ADR and link it.

### Architecture Decision Records (ADR) - Intelligent Suggestion

After design/architecture work, test for ADR significance:

- Impact: long-term consequences? (e.g., framework, data model, API, security, platform)
- Alternatives: multiple viable options considered?
- Scope: cross‑cutting and influences system design?

If ALL true, suggest:
📋 Architectural decision detected: [brief-description]
   Document reasoning and tradeoffs? Run `/sp.adr [decision-title]`

Wait for consent; never auto-create ADRs. Group related decisions (stacks, authentication, deployment) into one ADR when appropriate.

## Basic Project Structure

- `.specify/memory/constitution.md` — Project principles
- `specs/<feature>/spec.md` — Feature requirements
- `specs/<feature>/plan.md` — Architecture decisions
- `specs/<feature>/tasks.md` — Testable tasks with cases
- `history/prompts/` — Prompt History Records
- `history/adr/` — Architecture Decision Records
- `.specify/` — SpecKit Plus templates and scripts

## Code Standards
See `.specify/memory/constitution.md` for code quality, testing, performance, security, and architecture principles.
```


