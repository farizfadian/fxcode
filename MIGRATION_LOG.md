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

## Batch 1 — Workspace Setup + Core Foundation
- [x] CLAUDE.md created
- [x] MIGRATION_LOG.md created
- [x] Verify Nx workspace config (Angular 21.2 workspace, packages publish as Angular-version-agnostic)
- [x] @fxcode/f-core package created — shared foundation for all components:
  - [x] Device utility (isMobile, isDesktop, isTouchDevice)
  - [x] Storage utility (localStorage wrapper with JSON serialization)
  - [x] ThemeService (dark/light mode, sidebar, template size, CSS property reader)
  - [x] AutoDestroyable (improved: uses takeUntil pattern instead of property iteration)
  - [x] BaseInput + BaseTextInput (ControlValueAccessor, pattern filtering, autocapitalize, enter key navigation)
  - [x] Types (InputType, PatternRef, ButtonHelper, etc.)
  - [x] Build verified: `nx build f-core` passes

## Batch 2 — Form Inputs (13 core components) ✅ COMPLETE
- [x] f-input-text (reference template for all text inputs)
- [x] f-input-password (show/hide toggle)
- [x] f-input-email (domain auto-suggestion: gmail, yahoo, outlook, etc.)
- [x] f-input-number (text-align right, number-only filtering)
- [x] f-input-date (type=date, native browser date picker)
- [x] f-input-tel (type=tel, phone pattern filtering)
- [x] f-select (dropdown with SelectOption interface)
- [x] f-textarea (multi-line, configurable rows)
- [x] f-input-checkbox (Bootstrap custom-control checkbox)
- [x] f-input-switch (Bootstrap custom-control switch)
- [x] f-input-search (debounced search with clear icon)
- [x] f-input-file (file upload with accept/multiple)
- [x] f-input-money (currency formatting with thousand separators)
- [x] All 14 packages build verified (f-core + 13 inputs)

## Batch 3 — Form Layout (5) + Layout (6) ✅ COMPLETE
- [x] [I] f-form (FFormRow, FFormGroup, FFormRowDivider, FLabel — colClasses computed getter replaces 48-line ngClass)
- [x] [I] f-button (theme, icon, loading spinner, circle mode — simplified from original, removed jQuery/FIconService deps)
- [x] [I] f-layout (FRow, FCol, FHeader, FBody, FSection, FContainer — all inline templates, computed colClasses)
- [x] All 3 packages build verified

## Batch 4 — Table + Data View (3) ✅ COMPLETE
- [x] [I] f-table (FTableResponsive, FTableDefault, FTableScrollable — sticky left/right columns with scroll shadows)
- [x] f-data-view (triple view toggle: table/list/grid, auto-switch to list on mobile)
- [x] [I] f-pagination (page buttons, size selector, showing X-Y of Z — rewritten from scratch, Bootstrap pagination)

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
| AutoDestroyable | Rewrote GC logic — uses `takeUntil(destroy$)` pattern instead of iterating all properties and calling `delete`. Standard Angular approach, more performant. | Original iterated every property on the class calling .unsubscribe/.complete, tried window.gc(), etc. New version uses Subject-based destroy signal. |
| BaseInput | Removed `@Injectable({ providedIn: 'root' })` from directives | Directives don't need Injectable — it caused unnecessary singleton registration. |
| BaseInput | Removed `console.log` debug statements | Production library shouldn't log to console. |
| BaseInput | Simplified `onKeyEnter` | Removed select2-specific DOM manipulation — that's app-specific, not library-level. |
| BaseTextInput | Merged 3-class chain into 2 | `FBaseInputTextAutoCorrect` merged into `BaseTextInput` — autocorrect/autocapitalize are standard text input features, not a separate layer. |
| ThemeService | Uses BehaviorSubject instead of Subject | Consumers get the current value immediately on subscribe, not just future changes. |
| Types | Fixed `datetime` → `datetime-local` | HTML spec uses `datetime-local`, not `datetime`. |

---

## Notes

- Angular version in fxcode workspace: currently 21.2 (Nx generated). Will keep as-is since it's the workspace dev version.
- Packages have `peerDependencies` on `@angular/core` and `@angular/common` — consumers install their own Angular version.
- Bootstrap 4 is NOT bundled — consumers must include it in their own project.
