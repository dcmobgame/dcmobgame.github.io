# Homepage Responsive Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the homepage presentation around a fully visible scalable hero, adaptive navigation, continuous gradient page flow, readable Privacy Policy panel, and polished contact section.

**Architecture:** Preserve the existing static HTML and JavaScript behavior. Add a late-loaded `css/home.css` stylesheet to isolate the redesign, make small semantic HTML changes in `index.html`, and extend the existing Node contract tests before implementation.

**Tech Stack:** HTML5, CSS3, vanilla JavaScript, Node.js built-in `node:test`.

## Global Constraints

- Reuse `image/mainImg.jpg` and the existing store badge assets.
- Preserve Privacy Policy text, store destinations, Terms destinations, and contact email.
- Do not add dependencies, generated assets, animation libraries, or JavaScript navigation frameworks.
- Support 360px through 1920px viewport widths without horizontal overflow.
- Keep all changes uncommitted as requested.

### Task 1: Extend the Site Contract

**Files:** Modify `tests/site.test.mjs`.

- [ ] Add a test requiring `css/home.css`, semantic `<nav>`, a linked DoviGames brand, a hero kicker, and the responsive hero/store panel structure.
- [ ] Run `node --test tests/site.test.mjs` and confirm the new test fails because the redesign markup and stylesheet do not exist.

### Task 2: Add Responsive Structure

**Files:** Modify `index.html`.

- [ ] Load `css/home.css` after the legacy inline styles so focused overrides win without destabilizing the Privacy Policy markup.
- [ ] Wrap header content in `.header-inner`, add the brand, and place existing actions inside a semantic `.primary-nav`.
- [ ] Render the hero through a responsive `<img>` that preserves the complete 16:9 artwork and keep `.store-panel` separate from the image on phones.
- [ ] Convert the email image interaction into a semantic `mailto:` link while keeping the existing class hook.
- [ ] Preserve the existing scroll and store navigation behavior.

### Task 3: Implement the Responsive Visual System

**Files:** Create `css/home.css`.

- [ ] Implement desktop header, full-image scaling, store panel, continuous violet-to-cyan flow, glass privacy reading panel, and contact card.
- [ ] Position the store panel with viewport-aware CSS so download badges and Terms links remain fully visible in the first screen on short devices.
- [ ] Add tablet adjustments at 1024px and phone adjustments at 699px and 430px.
- [ ] Add hover, active, and focus-visible states while respecting `prefers-reduced-motion`.
- [ ] Run `node --test tests/site.test.mjs` and `git diff --check` until both pass.

### Task 4: Browser Validation

**Files:** Modify `index.html` or `css/home.css` only when inspection finds a defect.

- [ ] Serve the repository locally and inspect 390×844, 768×1024, 1440×900, and 1920×1080.
- [ ] Confirm no horizontal overflow, hero/store actions are visible, menus remain in bounds, and Privacy Policy line length is comfortable.
- [ ] Test Privacy Policy and Contact Us scroll controls plus the Terms dropdown.
- [ ] Confirm zero browser console errors and rerun the automated suite after any correction.
