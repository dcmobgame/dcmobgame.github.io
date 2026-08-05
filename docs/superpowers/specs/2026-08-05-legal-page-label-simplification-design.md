# Legal Page Label Simplification

## Goal

Reduce visual noise above the main headings on the standalone legal pages.

## Design

- Remove the `DoviGames Privacy` label entirely from the Privacy Policy page.
- Keep the `iOS` and `Google Play` platform labels on their respective Terms of Use pages for context.
- Render the Terms platform labels as small, subdued text without background, border, padding, or pill-shaped corners.
- Preserve the existing gradients, main headings, descriptions, navigation, and legal content.
- Version the shared stylesheet URL so published pages load the updated presentation instead of a cached pill style.

## Verification

- Confirm the Privacy Policy heading has no label above it.
- Confirm both Terms pages retain their platform name without a capsule.
- Check desktop and mobile layouts for spacing, overflow, and console errors.
