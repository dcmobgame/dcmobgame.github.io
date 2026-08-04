# Terms of Use Pages Design

## Goal

Add clear, platform-specific Terms of Use entry points to the DoviGames website while preserving its lightweight static-site structure and purple, clean visual style.

## Pages

- `terms-ios.html` uses the browser title `Terms of Use`. It explains that iOS apps are governed by Apple's Standard EULA, summarizes the main terms in original language, and links prominently to Apple's official Standard EULA.
- `terms-google-play.html` uses the browser title `Terms of Use`. It provides original Google Play-oriented terms covering license, acceptable use, data, third-party services, termination, warranty, liability, export compliance, and governing law.
- Both pages identify their platform visibly, include a link back to the homepage, reuse the existing favicon and fonts, and share a focused stylesheet.

## Homepage Navigation

- Add a visually prominent `Terms of Use` control to the fixed header.
- The control exposes two links: `iOS` and `Google Play`, leading to the corresponding standalone pages.
- Add a `Terms of Use` link beneath each store badge so each platform has a direct and unambiguous entry point.
- Keep the existing Privacy Policy and Contact Us scrolling behavior intact.

## Visual Design

- Continue the site's purple background treatment and white foreground text.
- Use a restrained translucent surface, rounded borders, and clear spacing for legal content.
- Keep the legal text column narrow enough for comfortable reading.
- Make the header control more visually distinct than the other navigation labels without dominating the hero image.
- On small screens, retain access to all navigation items and stack the store badges and their terms links cleanly.

## Behavior and Accessibility

- Use semantic links and headings; all links must be keyboard accessible.
- The Terms of Use menu opens through a native `details` element so it works without JavaScript.
- External Apple links open safely with `rel="noopener noreferrer"`.
- Text and controls maintain readable contrast and visible focus states.

## Verification

- Automated checks confirm both HTML files exist, have the exact `Terms of Use` title, and contain the correct platform identity.
- Automated checks confirm the homepage has direct links to both pages and retains its existing section navigation.
- Validate local links and assets, then inspect desktop and mobile layouts in a local browser.

## Content Constraint

Apple's page will not be reproduced verbatim. The iOS page will provide an original summary and a direct link to the authoritative Apple Standard EULA. The Google Play page will use original, platform-appropriate language rather than presenting modified Apple text as Google terms.
