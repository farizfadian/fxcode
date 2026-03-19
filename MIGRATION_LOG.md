# @fxcode/ui Migration Log

> Tracks progress of migrating components from contractor project to fxcode Nx monorepo.
> Source: C:\Users\Lenovo\Documents\Fariz\FarizProjects\Kontraktor\contractor\web\src\app\shared\libraries\fxcode
> Target: C:\Users\Lenovo\Documents\Fariz\fxcode\packages\

---

## Status Legend
- [ ] Not started
- [~] In progress (partially migrated)
- [x] Completed & committed
- [S] Skipped (will do in Phase 2)
- [I] Improved from original (logic fixed/enhanced)

---

## Batch 1 — Workspace Setup
- [x] CLAUDE.md created
- [x] MIGRATION_LOG.md created
- [ ] Verify Nx workspace config
- [ ] Update Angular peer deps to 19+
- [ ] Create @fxcode/ui umbrella package scaffold

## Batch 2 — Form Inputs (13 core components)
- [ ] f-input-text
- [ ] f-input-password
- [ ] f-input-email
- [ ] f-input-number
- [ ] f-input-date
- [ ] f-input-tel
- [ ] f-select
- [ ] f-textarea
- [ ] f-input-checkbox
- [ ] f-input-switch
- [ ] f-input-search
- [ ] f-input-file
- [ ] f-input-money

## Batch 3 — Form Layout (5) + Layout (6)
- [ ] f-form (includes f-form-row, f-form-group, f-form-row-divider, f-label)
- [ ] f-button
- [ ] f-layout (includes f-row, f-col, f-header, f-body, f-container, f-section)

## Batch 4 — Table + Data View (3)
- [ ] f-table (includes f-table-responsive, f-table-default, f-table-dynamic)
- [ ] f-data-view (triple view: table/list/grid toggle)
- [ ] table-pagination

## Batch 5 — List + Grid + Card (17)
- [ ] f-list (includes f-list-item, f-list-title, etc.)
- [ ] f-grid (includes f-grid-body, f-grid-button, etc.)
- [ ] f-card (includes f-card-body, f-card-title, etc.)

## Batch 6 — Modal (4) + App Layout (5)
- [ ] f-modal (includes f-modal-header, f-modal-body, f-modal-footer)
- [ ] f-app (includes f-app, f-title, f-breadcrumb)
- [ ] f-icon

## Batch 7 — Utilities
- [ ] f-alert
- [ ] f-loader
- [ ] f-avatar (already exists — enhance with real logic)
- [ ] f-img
- [ ] f-tooltip
- [ ] f-tab-sliding
- [ ] skeleton-loader / page-loader
- [ ] data-not-found

## Batch 8 — @fxcode/ui Umbrella + npm Config
- [ ] @fxcode/ui package (re-exports all components)
- [ ] npm publish config
- [ ] README with usage examples

## Phase 2 (later) — Advanced Components
- [S] f-chart-* (8 chart components — needs chart.js dependency)
- [S] f-ai-assistant
- [S] f-chat
- [S] f-calendar
- [S] f-code-editor
- [S] f-screen-recorder
- [S] f-signature-pad
- [S] f-spreadsheet
- [S] f-document-viewer
- [S] f-seo-tools
- [S] f-google-maps-viewer
- [S] f-pull-to-refresh
- [S] qrcode-scanner
- [S] image-editor
- [S] kanban-board
- [S] table-tree

---

## Improvements Made (vs. original contractor code)

| Component | Change | Reason |
|-----------|--------|--------|
| (will be filled as migration progresses) | | |

---

## Notes

- Angular version in fxcode workspace: currently 21.2 (Nx generated). Will keep as-is since it's the workspace dev version.
- Packages have `peerDependencies` on `@angular/core` and `@angular/common` — consumers install their own Angular version.
- Bootstrap 4 is NOT bundled — consumers must include it in their own project.
