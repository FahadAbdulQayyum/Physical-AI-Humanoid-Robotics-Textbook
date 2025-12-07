# Implementation Plan: AI/Spec-Driven Book + Urdu Button

## 1. High-Level Architecture Sketch

### Docusaurus Site Structure
*   **Plugins**:
    *   `@docusaurus/plugin-content-docs`: For book chapters/sections.
    *   `@docusaurus/plugin-content-pages`: For custom pages (e.g., homepage).
    *   `@docusaurus/plugin-sitemap`: For SEO.
    *   `@docusaurus/plugin-client-redirects`: For old URL redirects.
    *   Custom plugin for `react-i18next` integration (if needed to bootstrap context).
*   **Theme**:
    *   `@docusaurus/theme-classic`: Base theme.
    *   Custom theme components to override default Docusaurus components for:
        *   Language switcher button (Urdu toggle).
        *   RTL layout adjustments.
        *   Font loading (Noto Nastaliq).
*   **i18n Setup**:
    *   `docusaurus.config.js`: Configure `i18n` with `locales: ['en', 'ur']` and `defaultLocale: 'en'`.
    *   `react-i18next` integration at the root component level (e.g., `src/theme/Root.js`).
    *   Translation files: `public/locales/en/*.json` and `public/locales/ur/*.json`.
*   **Custom Components**:
    *   `UrduToggleButton.js`: React component for the “اردو میں ترجمہ کریں” button.
    *   `RTLWrapper.js`: Component to conditionally apply RTL styles.
    *   `ChapterLayout.js`: Custom layout for chapters, potentially integrating the translation button.

## 2. Complete Section/Chapter Structure

*   **Introduction**
    *   `Preface`: Overview of AI/Spec-Driven Development.
    *   `Why SDD?`: Benefits and philosophy.
    *   `Tools & Setup`: Introduction to Spec-Kit Plus, Claude Code, Docusaurus.
*   **Part I: The SDD Workflow**
    *   `Specification`: Writing effective `spec.md`.
    *   `Planning`: Creating `plan.md` and architectural decisions.
    *   `Task Management`: Generating `tasks.md` and execution.
    *   `Prompt Engineering`: Crafting effective prompts for Claude Code.
*   **Part II: Docusaurus & Localization**
    *   `Docusaurus Fundamentals`: Installation, configuration, basic pages.
    *   `i18n with react-i18next`: Integrating the library, translation files, dynamic loading.
    *   `RTL Implementation`: CSS adjustments, Noto Nastaliq font.
    *   `The Urdu Toggle`: Component development and placement.
*   **Part III: Advanced Topics**
    *   `CI/CD for SDD`: GitHub Actions for build, test, deploy.
    *   `Lighthouse & Performance`: Optimizing for web vitals.
    *   `Advanced Claude Code Usage`: Custom agents, hooks.
*   **Appendices**
    *   `Glossary`
    *   `Resources`

## 3. Research Approach

*   **Lightweight & Concurrent**: Research only what is immediately needed for the current chapter or feature being implemented.
*   **Prioritize Official Docs**: Refer to Docusaurus, react-i18next, and GitHub Actions documentation first.
*   **Focused Searches**: Use specific queries for issues like RTL styling in Docusaurus or Noto Nastaliq integration.
*   **Claude Code for Research**: Utilize the `Task` tool with `subagent_type='general-purpose'` for broader research or `subagent_type='Explore'` for codebase-specific searches if needed.

## 4. Quality Validation Plan

*   **Linting**: ESLint for JavaScript/TypeScript, Stylelint for CSS, Markdownlint for Markdown.
*   **Type-checking**: TypeScript compiler (`tsc`) for all TypeScript files.
*   **Translation Completeness Check**: Custom script to compare `en.json` keys with `ur.json` keys, failing if Urdu coverage is below 80%.
*   **Lighthouse CI**: Integrate into GitHub Actions to run Lighthouse audits on both English and Urdu versions, with a minimum score of 90.

## 5. Key Decisions Documented

### i18n Strategy
*   **Option A**: `react-i18next` (Chosen)
*   **Option B**: `docusaurus-plugin-i18n-simple`
*   **Rationale**: `react-i18next` offers full RTL support, dynamic loading of translations, and greater flexibility for complex localization requirements, aligning with the project's bilingual goals.

### Urdu Font Delivery
*   **Option A**: Google Fonts Noto Nastaliq (Chosen)
*   **Option B**: Self-hosted WOFF2
*   **Rationale**: Google Fonts simplifies integration and ensures zero layout shift due to optimized font loading, providing a better user experience without self-hosting overhead.

### Translation Workflow
*   **Option A**: Manual JSON after English write
*   **Option B**: AI-assisted pre-fill with Claude (Chosen)
*   **Rationale**: AI-assisted pre-translation with Claude will significantly accelerate the translation process, enabling the project to quickly achieve the 80%+ Urdu coverage target. Manual review and refinement will follow.

### Button Placement
*   **Option A**: Floating FAB
*   **Option B**: Navbar item + Keyboard Shortcut (Chosen)
*   **Rationale**: Placing the language toggle in the Navbar ensures consistent accessibility and discoverability across all pages. A keyboard shortcut further enhances usability for diverse users, aligning with accessibility best practices.

## 6. Testing & Validation Strategy (from Constitution Success Criteria)

*   **GitHub Actions Workflow**:
    *   Automated build process.
    *   Lighthouse CI integration: `lighthouse-ci` to run audits on both English (`/en/`) and Urdu (`/ur/`) builds, enforcing `minScore: 0.90`.
*   **Automated RTL Layout Smoke Test**:
    *   Utilize visual regression testing tools like Percy or Chromatic to capture screenshots of key pages in both LTR (English) and RTL (Urdu) modes.
    *   Detect any layout shifts, misalignments, or rendering issues specific to RTL.
*   **Translation Coverage Script**:
    *   A custom Node.js/Python script to parse `public/locales/en/*.json` and `public/locales/ur/*.json` files.
    *   Compare the set of translation keys.
    *   Fail the CI build if the percentage of translated keys in Urdu falls below 80%.
*   **Zero Unresolved Spec Violations**:
    *   Integrate `spec-kit-plus validate` into the CI pipeline.
    *   Ensure all specifications (`spec.md`, `plan.md`, `tasks.md`) are valid and consistent, preventing formal errors in the SDD artifacts.
*   **End-to-End Manual Test**:
    *   **Scenario**: User navigates the site on both mobile and desktop.
    *   **Steps**:
        1.  Start on an English page.
        2.  Click the “اردو میں ترجمہ کریں” button.
        3.  Verify the page content switches to Urdu, and the layout correctly adjusts to RTL.
        4.  Navigate to several other pages, ensuring consistent Urdu content and RTL.
        5.  Click the language toggle again to switch back to English.
        6.  Verify the page content reverts to English and layout to LTR.

## 7. Technical Execution Phases

*   **Phase 1: Research (Concurrent, Chapter-by-Chapter)**
    *   Goal: Gather information for each upcoming chapter, Docusaurus features, `react-i18next` usage, RTL best practices.
    *   Activities: Focused web searches, Docusaurus documentation review, `react-i18next` API exploration, Noto Nastaliq integration examples.
    *   Deliverables: `research.md` artifacts for specific topics.
*   **Phase 2: Foundation Setup**
    *   Goal: Establish the core Docusaurus project, i18n, CI/CD, and custom theme for Urdu.
    *   Activities:
        *   Docusaurus project initialization.
        *   `docusaurus.config.js` setup for `i18n` and plugins.
        *   `react-i18next` integration.
        *   GitHub Actions workflow for build, deploy to GitHub Pages.
        *   Custom theme overrides for RTL, Noto Nastaliq, and the language toggle.
        *   Implement the “اردو میں ترجمہ کریں” button (Navbar + keyboard shortcut).
    *   Deliverables: Functional Docusaurus site with EN/UR locales, CI/CD, basic language toggle.
*   **Phase 3: Writing & AI Pre-translation**
    *   Goal: Write English content and generate initial Urdu translations.
    *   Activities:
        *   Author English chapters (`docs/en/*.md`).
        *   Develop a script/workflow for AI-assisted pre-translation using Claude to generate `public/locales/ur/*.json` from English source.
        *   Manual spot-checking of AI-generated translations for accuracy and fluency.
    *   Deliverables: Comprehensive English content, 80%+ AI-pre-translated Urdu content.
*   **Phase 4: Synthesis & Refinement**
    *   Goal: Finalize translations, perform extensive testing, optimize performance, and ensure compliance.
    *   Activities:
        *   In-depth manual review and refinement of all Urdu translations by a human expert.
        *   Execute all testing & validation strategies (Lighthouse CI, RTL smoke tests, translation coverage, spec validation, E2E manual tests).
        *   Performance optimization based on Lighthouse reports.
        *   Address any remaining `spec-kit-plus` violations.
        *   Final proofreading of both English and Urdu content.
    *   Deliverables: Fully functional, high-quality bilingual book meeting all success criteria, deployed to GitHub Pages.

## Constitution Check

Based on `.specify/memory/constitution.md`:

### Core Principles Compliance:
*   **I. Spec-Kit Plus Driven**: ✅ The plan adheres to Spec-Kit Plus by outlining detailed specifications for architecture, decisions, and quality validation.
*   **II. Claude Code Assisted**: ✅ The plan explicitly leverages Claude Code for AI-assisted pre-translation and general development tasks.
*   **III. Bilingual EN + UR (80%+ Translated)**: ✅ The plan prioritizes bilingual content, specifies 80%+ Urdu translation coverage, and details RTL support.

### Standards and Constraints Compliance:
*   **Source Language (English)**: ✅ Plan dictates English first writing.
*   **Documentation Format (Docusaurus Markdown)**: ✅ Plan is based on Docusaurus.
*   **Urdu Toggle (One-click)**: ✅ Explicitly planned as a Navbar item with keyboard shortcut.
*   **Internationalization Library (`react-i18next`)**: ✅ Chosen i18n strategy.
*   **Language Fallback (English if missing)**: ✅ Implied in translation coverage and fallback logic.
*   **Tooling (Spec-Kit Plus, Claude Code, Docusaurus, GitHub Pages)**: ✅ All chosen tools align with this constraint.

### Success Criteria Compliance:
*   **Deployment (Live on GitHub Pages)**: ✅ Explicitly a milestone in Technical Execution Phases.
*   **Bilingual Functionality (Instant EN ↔ UR toggle, perfect RTL)**: ✅ Detailed in Button Placement, RTL Implementation, and E2E Manual Test.
*   **Lighthouse ≥90+**: ✅ Included in Quality Validation Plan and GitHub Actions workflow.
*   **Zero Spec Errors**: ✅ Included in Testing & Validation Strategy.

## Gates

*   **Gate 1: Initial Plan Review**: Pass after this `plan.md` is approved by the user.
*   **Gate 2: Foundation Setup Complete**: Pass after Phase 2 (Foundation Setup) is implemented and verified.
*   **Gate 3: English Content Complete & Pre-translated**: Pass after Phase 3 (Writing & AI Pre-translation) delivers 80%+ Urdu coverage.
*   **Gate 4: Final Synthesis & Deployment**: Pass after Phase 4 (Synthesis & Refinement) successfully completes all testing and deployment to GitHub Pages.

---
