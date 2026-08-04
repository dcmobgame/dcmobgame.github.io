# Terms of Use Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add prominent iOS and Google Play Terms of Use entry points and two responsive standalone legal pages to the DoviGames static website.

**Architecture:** Keep the site dependency-free. A Node built-in test suite will validate the public HTML contracts, a shared `css/terms.css` file will own both legal-page layouts, and `index.html` will retain its existing scroll navigation while adding semantic links and a no-JavaScript platform menu.

**Tech Stack:** HTML5, CSS3, existing vanilla JavaScript, Node.js built-in `node:test`.

## Global Constraints

- Both browser tab titles must be exactly `Terms of Use`.
- The homepage must expose direct links to `terms-ios.html` and `terms-google-play.html`.
- Apple text must be summarized in original language and link to the authoritative Apple Standard EULA rather than being copied verbatim.
- The Google Play page must use original platform-appropriate language.
- Preserve the homepage's purple, clean visual style and existing Privacy Policy and Contact Us scrolling behavior.
- All navigation and legal-page layouts must remain usable on small screens and with a keyboard.
- The iOS page uses a deep-purple/violet/rose layered gradient; the Google Play page uses a deep-purple/indigo/cyan layered gradient, both without animation.

---

### Task 1: Public HTML Contract Tests

**Files:**
- Create: `tests/site.test.mjs`
- Test: `tests/site.test.mjs`

**Interfaces:**
- Consumes: `index.html`, `terms-ios.html`, and `terms-google-play.html` from the repository root.
- Produces: a repeatable `node --test tests/site.test.mjs` verification command for the site contract.

- [ ] **Step 1: Write the failing tests**

Create tests using `node:test`, `node:assert/strict`, and `readFileSync`. Assert that both Terms files can be read, each contains `<title>Terms of Use</title>`, the iOS page names Apple Standard EULA and its official URL, the Google Play page identifies Google Play without presenting itself as Apple terms, and the homepage contains semantic links to both local pages plus the existing Privacy Policy and Contact Us labels.

```js
test('terms pages expose the required platform contracts', () => {
  assert.match(ios, /<title>Terms of Use<\/title>/);
  assert.match(ios, /Apple Standard EULA/i);
  assert.match(ios, /https:\/\/www\.apple\.com\/legal\/internet-services\/itunes\/dev\/stdeula\//);
  assert.match(google, /<title>Terms of Use<\/title>/);
  assert.match(google, /Google Play/i);
});

test('homepage exposes both terms destinations and keeps section navigation', () => {
  assert.match(home, /href="\.\/terms-ios\.html"/);
  assert.match(home, /href="\.\/terms-google-play\.html"/);
  assert.match(home, />Privacy Policy</);
  assert.match(home, />Contact Us</);
});
```

- [ ] **Step 2: Run the test to verify RED**

Run: `node --test tests/site.test.mjs`

Expected: FAIL because `terms-ios.html` and `terms-google-play.html` do not exist and the homepage has no Terms links.

- [ ] **Step 3: Commit the failing contract**

```powershell
git add -- tests/site.test.mjs
git commit -m "test: define terms of use site contract"
```

### Task 2: Shared Legal Page Presentation

**Files:**
- Create: `css/terms.css`
- Create: `terms-ios.html`
- Create: `terms-google-play.html`
- Test: `tests/site.test.mjs`

**Interfaces:**
- Consumes: `/image/favicon.ico`, Google Fonts already used by the homepage, and the public contracts from Task 1.
- Produces: standalone Terms documents at `./terms-ios.html` and `./terms-google-play.html`, both styled by `./css/terms.css`.

- [ ] **Step 1: Add the minimal shared stylesheet**

Implement a purple full-page background, a translucent fixed top bar, an `860px` maximum-width reading column, a white legal-content surface, readable `1.75` body line-height, responsive padding, and visible `:focus-visible` outlines. Use only existing fonts and local assets.

```css
:root { color-scheme: light; --purple: #7600b5; --ink: #24212a; }
.legal-page { min-height: 100vh; background: linear-gradient(145deg, #65009b, #9d23cc); }
.legal-card { max-width: 860px; margin: 0 auto; background: rgba(255,255,255,.97); border-radius: 24px; }
a:focus-visible { outline: 3px solid #ffd86b; outline-offset: 4px; }
```

- [ ] **Step 2: Implement the iOS page**

Create semantic `header`, `main`, `article`, `section`, and `footer` regions. Use the heading `Terms of Use`, the platform eyebrow `iOS`, an effective-date line, a prominent link labeled `Read the official Apple Standard EULA`, and original summaries for license, data, termination, external services, warranty, liability, export compliance, and governing terms. Include a visible `Back to DoviGames` link.

- [ ] **Step 3: Implement the Google Play page**

Use the same structure and styles with the platform eyebrow `Google Play`. Provide original sections for acceptance, license, acceptable use, purchases, privacy/data, third-party services, termination, disclaimers, liability, changes, governing law, and contact. Include `dcmobgame@gmail.com` and a visible `Back to DoviGames` link.

- [ ] **Step 4: Run the contract tests**

Run: `node --test tests/site.test.mjs`

Expected: still FAIL only on the homepage link assertions; both standalone-page assertions pass.

- [ ] **Step 5: Commit the standalone pages**

```powershell
git add -- css/terms.css terms-ios.html terms-google-play.html
git commit -m "feat: add platform terms of use pages"
```

### Task 3: Prominent Homepage Entry Points

**Files:**
- Modify: `index.html:20-260`
- Test: `tests/site.test.mjs`

**Interfaces:**
- Consumes: the standalone routes from Task 2.
- Produces: a fixed-header platform menu and direct per-store Terms links without changing the existing scroll destinations.

- [ ] **Step 1: Add the semantic header menu**

Replace only the header markup with a native `<details class="terms-menu">` containing a `<summary>Terms of Use</summary>` and two links. Keep Privacy Policy and Contact Us as the first two `.header-text` elements so the existing JavaScript indices remain valid.

```html
<details class="terms-menu">
  <summary>Terms of Use</summary>
  <div class="terms-menu-panel">
    <a href="./terms-ios.html">iOS</a>
    <a href="./terms-google-play.html">Google Play</a>
  </div>
</details>
```

- [ ] **Step 2: Add direct links below the store badges**

Wrap each badge in `.store-option`, preserve its existing image class, and add a local link whose visible text is `Terms of Use` and whose accessible label includes the platform.

```html
<div class="store-option">
  <img class="google-img download-img" src="./image/icon_google_play@2x.png" alt="Google Play" />
  <a class="store-terms-link" href="./terms-google-play.html" aria-label="Google Play Terms of Use">Terms of Use</a>
</div>
```

- [ ] **Step 3: Add responsive and focus styles**

Extend the existing inline styles for `.terms-menu`, `.terms-menu-panel`, `.store-option`, and `.store-terms-link`. At widths below `699px`, reduce the header gap and margins and keep the dropdown within the viewport. Preserve all existing hero badge width breakpoints.

- [ ] **Step 4: Run the full contract suite to verify GREEN**

Run: `node --test tests/site.test.mjs`

Expected: PASS with two tests and zero failures.

- [ ] **Step 5: Commit the homepage integration**

```powershell
git add -- index.html
git commit -m "feat: surface terms links on homepage"
```

### Task 4: Final Validation

**Files:**
- Modify only if validation finds an issue: `index.html`, `css/terms.css`, `terms-ios.html`, `terms-google-play.html`, `tests/site.test.mjs`

**Interfaces:**
- Consumes: all files produced by Tasks 1-3.
- Produces: verified static pages with no broken local asset or navigation references.

- [ ] **Step 1: Run automated verification**

Run `node --test tests/site.test.mjs` and `git diff --check`. Both commands must exit `0`.

- [ ] **Step 2: Serve the site locally**

Use an available local static HTTP server rooted at the repository. Open `index.html`, `terms-ios.html`, and `terms-google-play.html` through HTTP rather than `file://`.

- [ ] **Step 3: Inspect desktop and mobile layouts**

At approximately `1440px` and `390px` widths, confirm the header menu is visible, each store Terms link is readable and clickable, the platform menu stays on screen, legal text does not overflow horizontally, and Back to DoviGames returns to the homepage.

- [ ] **Step 4: Re-run verification after any correction**

Run `node --test tests/site.test.mjs` and `git diff --check` again. Expected: all tests pass and no whitespace errors.

- [ ] **Step 5: Commit validation corrections only if needed**

```powershell
git add -- index.html css/terms.css terms-ios.html terms-google-play.html tests/site.test.mjs
git commit -m "fix: polish terms page responsiveness"
```
