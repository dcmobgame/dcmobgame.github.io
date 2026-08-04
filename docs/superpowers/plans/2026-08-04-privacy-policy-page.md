# Standalone Privacy Policy Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a platform-consistent standalone Privacy Policy page and link it from the homepage without removing the existing in-page policy section.

**Architecture:** Add one static HTML page, extend the shared Terms stylesheet with a privacy theme, and make a focused semantic navigation change in `index.html`. Extend the existing Node site-contract suite before implementation.

**Tech Stack:** HTML5, CSS3, vanilla JavaScript, Node.js built-in `node:test`.

## Constraints

- Keep the existing homepage Privacy Policy content and anchor ID.
- Use the exact title and visible link text `Privacy Policy`.
- Reuse `css/terms.css`; do not add another page-specific stylesheet.
- Keep changes uncommitted.

### Task 1: Contract Test

- [ ] Require `privacy-policy.html`, the exact page title, Back to DoviGames, scope/data/rights/security sections, the homepage link, and the retained anchor ID.
- [ ] Run the test and confirm failure because the page and homepage link do not exist.

### Task 2: Standalone Page

- [ ] Add `privacy-theme` colors to `css/terms.css`.
- [ ] Create semantic `privacy-policy.html` with the shared legal-page shell and complete policy content.
- [ ] Run tests and confirm only homepage integration remains failing.

### Task 3: Homepage Link

- [ ] Replace the Privacy Policy scroll button with an anchor to `./privacy-policy.html` while preserving `.header-text` state styling.
- [ ] Remove only the obsolete Privacy Policy click-to-scroll handler; retain the section itself and Contact Us scrolling.
- [ ] Run tests and `git diff --check`.

### Task 4: Browser Verification

- [ ] Inspect the page at desktop and phone widths.
- [ ] Confirm the homepage link navigates to the standalone page and Back to DoviGames returns correctly.
- [ ] Confirm no horizontal overflow or console errors, then rerun the complete suite.
