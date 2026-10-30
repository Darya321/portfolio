# GitHub Pages publishing design

## Intent

Publish the existing portfolio from `Darya321/portfolio` at `https://darya321.github.io/portfolio/` without changing its design or its local development URL.

## Chosen approach

Use Next.js static export and a GitHub Actions workflow. GitHub Pages will receive the generated `out` directory after every push to `main`.

Alternatives considered:

- Vercel: rejected because the user cannot complete registration.
- Serving the repository root directly with GitHub Pages: rejected because Next.js source does not contain a deployable root `index.html`.

## Requirements

- Keep `npm run dev` available at `http://localhost:3000/`.
- Build the public version under `/portfolio` only in GitHub Actions.
- Preserve all existing pages, styles, animations, images, and Notion links.
- Prefix public image paths on GitHub Pages while leaving external URLs unchanged.
- Automatically rebuild and deploy after every push to `main`.

## Verification

- A GitHub-mode production build creates `out/index.html` and the three project routes.
- Exported HTML and image URLs use `/portfolio`.
- Type checking and linting pass.

