# GitHub Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish the portfolio automatically at `https://darya321.github.io/portfolio/`.

**Architecture:** Next.js produces a static `out` directory. A small path helper adds the repository prefix to public images only in the GitHub build, and GitHub Actions uploads that directory to Pages.

**Tech Stack:** Next.js 15, TypeScript, GitHub Actions, GitHub Pages

**Spec:** `docs/superpowers/specs/2026-10-30-github-pages-design.md`

## Global Constraints

- Local development stays at the root path.
- GitHub Pages uses `/portfolio`.
- Existing visuals and Notion links must not change.

## Review Focus

- Root page is emitted as `out/index.html`.
- Dynamic project routes are emitted as static HTML.
- Next.js chunks load from `/portfolio/_next/`.
- Public images load from `/portfolio/images/`.
- External Notion links are not prefixed.

---

### Task 1: Static GitHub Pages export

**Files:**
- Create: `lib/base-path.ts`
- Modify: `next.config.ts`
- Modify: image consumers in `app/` and `components/`

**Interfaces:**
- Produces: `withBasePath(path: string): string`

- [ ] Run a GitHub-mode build assertion and verify that it fails because `out/index.html` is absent.
- [ ] Add static export, conditional `/portfolio` base path, trailing slashes, and unoptimized images.
- [ ] Route every local public-image path through `withBasePath`.
- [ ] Run the GitHub-mode build and assert the root page, three case routes, prefixed chunks, prefixed images, and unchanged Notion links.

### Task 2: Automatic deployment workflow

**Files:**
- Create: `.github/workflows/deploy-pages.yml`

**Interfaces:**
- Consumes: the `out` directory from Task 1.
- Produces: a GitHub Pages deployment after pushes to `main`.

- [ ] Verify the workflow file is absent.
- [ ] Add checkout, Node setup, `npm ci`, build, Pages artifact upload, and deployment steps.
- [ ] Validate the workflow structure and run type checking, linting, and a fresh production build.

