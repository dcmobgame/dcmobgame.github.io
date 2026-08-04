# Standalone Privacy Policy Page Design

## Goal

Add a standalone, readable Privacy Policy page that matches the Terms of Use pages while retaining the existing Privacy Policy section and anchor on the homepage.

## Page

- Create `privacy-policy.html` with the exact browser title `Privacy Policy`.
- Reuse `css/terms.css`, the existing favicon, fonts, navigation bar, white legal card, and Back to DoviGames link.
- Add a dedicated violet/blue/cyan privacy gradient through a `privacy-theme` body class.
- Present the existing policy's meaning in clean semantic sections: scope, collected data, partners, purposes, consent, retention, recipients, transfers, children, user rights, security, updates, and contact.

## Homepage Integration

- Keep the existing Privacy Policy section and its current anchor ID unchanged.
- Provide the short `#privacy` compatibility anchor and correct its position after page assets load, accounting for the fixed header.
- Change the fixed-header Privacy Policy control from an in-page scroll button to a semantic link targeting `./privacy-policy.html`.
- Keep Contact Us as the existing smooth-scroll control.
- Preserve active header coloring as the user scrolls across the retained homepage sections.

## Verification

- Automated checks confirm the standalone page exists, has the exact title, identifies itself as Privacy Policy, links back to the homepage, and contains the core policy sections.
- Automated checks confirm the homepage Privacy Policy link targets the standalone page while the original anchor ID remains present.
- Browser checks cover desktop and phone layouts, navigation, overflow, and console errors.
