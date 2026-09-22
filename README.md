# Samia Rivera — Engineering Portfolio

A static HTML, CSS, and JavaScript portfolio for GitHub Pages. No build step or framework is required.

## Preview

From this folder, run `python -m http.server 8000`, then open http://localhost:8000. You can also open index.html directly.

## Files

- `index.html`: introduction, PRIMERGY experience, featured projects, upcoming work, about, and contact.
- `portfolio.html`: filterable projects and VEX overview.
- `slightly-dangerous.html`: C++ project case study, current source download, and controls.
- `archive.html` / `archive.css`: existing earlier-work gallery and its styling.
- `style.css` / `script.js`: current site styling and progressive enhancements.
- `assets/Samia-Rivera-Resume.pdf`: supplied résumé, unchanged.
- `assets/Slightly-Dangerous-LLC-source.zip`: supplied LLC3 source, unchanged.

## Apply to the existing GitHub Pages repository

1. Extract this ZIP and copy the CONTENTS of `portfolio-update` into a local checkout of `srive26-design/srive26-design.github.io` on a new branch. Merge the assets folders, allowing the updated root files to replace their older versions. This upload-only package omits unchanged media already in the repository; do not delete the existing assets folder. Do not upload an extra parent folder as the site root.
2. Preview and review the changes. The archive retains the original media, so existing media paths continue to work.
3. Commit and merge the reviewed changes into the branch already used by GitHub Pages. If the repository uses the existing branch/root Pages configuration, no configuration change is needed.

These files have not been pushed or deployed by this update.

## Content notes

- Website role dates use the confirmed May 22, 2026 start date and the supplied LinkedIn URL.
- The supplied résumé still lists June 2026 and a different LinkedIn URL. Its PDF has not been edited.
- The 3DS case study is deferred. Senior Design and an embedded lab are clearly labeled placeholders.
- The source game is unchanged. The website describes systems found in the supplied code; it does not claim a new gameplay test or release.
- Main pages use lightweight WebP derivatives. Original archive media is retained, with video preload disabled.

## Verification for this update

- Checked 100 local links, asset references, and section anchors; none were missing.
- Checked JavaScript syntax with Node.
- Confirmed the game and résumé downloads are byte-for-byte copies of the supplied uploads.
- Browser rendering and interaction checks could not run in this environment because the browser executable was unavailable and its download failed. Desktop and mobile layouts should receive a visual review before publishing.
- External links and legacy third-party embeds were preserved but not live-verified.
