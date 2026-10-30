# Notion Case Links Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the five placeholder project cards with the three real Notion cases and make every card open its matching Notion page directly.

**Architecture:** Keep project content and destinations in `data/projects.ts`; `ProjectGrid` renders the same filtered layout from that data. Absolute Notion URLs are passed directly to Next.js `Link`, which keeps the current-tab navigation requested in the spec.

**Tech Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS

**Spec:** `docs/superpowers/specs/2026-10-30-notion-case-links-design.md`

## Global Constraints

- Show exactly three projects: Thailand real estate, ownerless animals, and Stellar Passage.
- Use the three exact Notion page URLs from the spec.
- Keep the existing grid, filters, animations, and current-tab navigation.
- Reuse local archive preview images; do not add a Notion API integration or remote image dependency.
- Preserve the existing local case routes even though the home cards no longer target them.

## Review Focus

- An absolute Notion URL must not be rewritten as a local Next.js route; verify the rendered `href` value.
- Every title must map to its own page ID; verify all three title-to-URL pairs.
- Removed placeholder projects must not remain in the rendered archive; verify the card count and titles.
- Filters with matching categories must still reveal their projects; verify commercial, government, and educational categories in the data.
- Existing generic project consumers must use `project.projectLink`; verify both card components compile against the updated data.

---

### Task 1: Connect the project archive to direct Notion case pages

**Files:**
- Modify: `data/projects.ts`
- Modify: `components/project-grid.tsx`
- Modify: `components/project-card.tsx`

**Interfaces:**
- Consumes: existing `Project` type and `ProjectGrid` rendering flow.
- Produces: a three-item `projects: Project[]` collection whose `projectLink` values are direct Notion URLs.

- [x] **Step 1: Record the current failing behavior**

Inspect the rendered home-page anchors or current source and confirm that the archive has five local `/projects/...` destinations and none of the three direct Notion page URLs.

- [x] **Step 2: Replace the project data with the three Notion cases**

Keep the `Project` shape unchanged. Add exact titles, descriptions, suitable categories (`commercial`, `government`, `educational`), stable slugs, and the exact Notion URLs from the spec. Reuse existing local cover and gallery assets so no remote asset can expire.

- [x] **Step 3: Align archive-only mappings with the new slugs**

Update `projectTools` and `archivePreviewImages` in `components/project-grid.tsx` so every remaining project has intentional labels and a local preview.

- [x] **Step 4: Make the reusable project card honor `projectLink`**

Change `components/project-card.tsx` from its reconstructed `/projects/${project.slug}` destination to `project.projectLink`, keeping the component consistent with the archive card.

- [x] **Step 5: Run static verification**

Run: `npm run typecheck`

Expected: exit code 0 with no TypeScript errors.

Run: `npm run lint`

Expected: exit code 0 with no ESLint errors or warnings.

- [x] **Step 6: Verify the rendered behavior**

With the development server running, inspect the home-page anchors and confirm exactly these title-to-destination pairs:

- `NF GROUP — недвижимость в Таиланде` → `https://outrageous-akubra-2bc.notion.site/NF-GROUP-3f1cc87c45db8172a8c4ec68d2fb1f1e`
- `Животные без владельцев` → `https://outrageous-akubra-2bc.notion.site/3f1cc87c45db8172a2d5c8373aa036a5`
- `Stellar Passage` → `https://outrageous-akubra-2bc.notion.site/Stellar-Passage-3f1cc87c45db81718ec8f2e9ed67bf15`

Confirm that the three links do not set `target="_blank"` and the home page renders without console errors.

- [x] **Step 7: Record repository limitation**

The workspace has no `.git` metadata, so do not create a commit. Report the modified files and completed verification commands instead.
