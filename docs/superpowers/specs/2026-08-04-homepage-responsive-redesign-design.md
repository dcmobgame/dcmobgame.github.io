# Homepage Responsive Redesign

## Goal

Make the DoviGames homepage feel intentional and polished from small phones through large desktop displays without replacing the existing artwork or changing the Privacy Policy content.

## Chosen Direction

Use the existing 1920×1080 artwork as a real responsive image that always preserves the complete 16:9 composition. The image scales to the viewport without centered cropping. On phones, the fixed navigation receives its own space above the image and the store panel moves below the artwork so neither the logo nor the game tiles are obscured.

Visual inspection shows that the artwork ends in a blue-violet range while `bgImg.webp` moves from bright violet toward cyan. Continue those hues beneath the image with a blue-violet → bright-violet → cyan gradient rather than introducing hard section backgrounds.

## Navigation

- Add a DoviGames wordmark link and wrap navigation controls in a semantic navigation region.
- Use a centered, translucent navigation surface on the hero.
- After scrolling, transition to an opaque white header with restrained shadow.
- On phones, use a two-row layout: brand on the first row and three compact actions on the second row.
- Keep the platform Terms of Use dropdown and existing Privacy Policy / Contact Us behavior.

## Hero

- Render the hero artwork at `width: 100%` and `height: auto` so the full image always remains visible.
- Continue the artwork's bottom violet into a CSS gradient beneath the image.
- Present the two store badges in a translucent rounded panel with the label “Choose your platform.”
- Keep Terms of Use directly beneath each store badge.
- Make store badges clear interactive controls with hover/focus feedback.
- Anchor the store panel against the first viewport rather than the full hero height so the complete panel remains visible on short desktop and phone screens.

## Privacy and Contact Sections

- Place the long Privacy Policy inside a constrained translucent reading panel with improved line length, spacing, headings, and list rhythm, while keeping the surrounding continuous gradient transparent.
- Reduce oversized mobile headings and keep consistent responsive gutters.
- Turn Contact Us into a compact closing section with an accessible email link while continuing the same gradient family instead of switching to a white background.

## Responsive Targets

- Small phone: 360–430px, no horizontal overflow, logo remains readable, all navigation actions fit without clipping.
- Tablet: 768–1024px, hero and store panel remain balanced.
- Desktop: 1280–1920px, retain the complete visual composition and avoid excessive hero height.

## Verification

- Automated static checks cover semantic navigation, the responsive homepage stylesheet, hero structure, direct Terms links, and existing section labels.
- Browser verification covers 390×844, 768×1024, 1440×900, and 1920×1080 viewports.
- Verify both scroll controls, the Terms dropdown, store navigation targets, horizontal overflow, and console errors.
