# CLAUDE.md — @fxcode/ui Component Library

> **ALWAYS READ THIS FILE FIRST** in any new session.
> This is the single source of truth for the @fxcode project.
> Last updated: 2026-03-19

---

## Project Overview

**@fxcode/ui** is a reusable Angular component library published to npm under the `@fxcode` scope.
It provides 57+ UI components built on Bootstrap 4 for enterprise applications.

- **Primary consumer**: BizCore Suite (multi-portal ERP)
- **Also usable by**: Any Angular project that uses Bootstrap 4
- **Open-source**: MIT license, public npm packages
- **npm scope**: https://www.npmjs.com/settings/fxcode/packages

### npm Install Strategy (Hybrid)

```bash
# All-in-one (for BizCore and internal projects)
npm i @fxcode/ui

# Individual packages (for external developers who need 1-2 components)
npm i @fxcode/f-avatar
npm i @fxcode/f-input-text
npm i @fxcode/f-table-responsive
```

---

## Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| Angular | 19+ (latest stable) | Component framework |
| Nx | Latest | Monorepo management |
| Bootstrap | 4.6.x | CSS framework (old browser compat) |
| ng-packagr | Latest | Angular library packaging |
| Jest | Latest | Unit testing |
| TypeScript | 5.x | Type safety |

---

## Repository Structure

```
fxcode/                             # Nx monorepo root
├── CLAUDE.md                       # THIS FILE — read first!
├── MIGRATION_LOG.md                # Progress log: contractor → fxcode migration
├── nx.json                         # Nx workspace config
├── package.json                    # Root package.json (@fxcode/source)
├── tsconfig.base.json              # Shared TypeScript config
│
├── packages/                       # Publishable libraries (each → npm package)
│   ├── f-avatar/                   # @fxcode/f-avatar
│   │   ├── src/
│   │   │   ├── lib/
│   │   │   │   └── f-avatar/
│   │   │   │       ├── f-avatar.ts
│   │   │   │       ├── f-avatar.html
│   │   │   │       └── f-avatar.scss
│   │   │   └── index.ts            # Public API exports
│   │   ├── package.json            # @fxcode/f-avatar
│   │   ├── ng-package.json
│   │   ├── project.json            # Nx project config
│   │   └── tsconfig.*.json
│   │
│   ├── f-input-text/               # @fxcode/f-input-text
│   ├── f-table-responsive/         # @fxcode/f-table-responsive
│   ├── f-modal/                    # @fxcode/f-modal
│   ├── f-data-view/                # @fxcode/f-data-view
│   ├── ui/                         # @fxcode/ui (umbrella — re-exports ALL)
│   └── ... (57+ packages)
│
├── apps/                           # Demo/test apps
│   └── fxcode-e2e/                 # E2E tests
│
└── dist/                           # Build output
    └── packages/
        └── f-avatar/               # Built npm package
```

---

## Component Categories

### Form Inputs (23 components)
| Component | Selector | Package |
|-----------|----------|---------|
| f-input-text | `<f-input-text>` | @fxcode/f-input-text |
| f-input-password | `<f-input-password>` | @fxcode/f-input-password |
| f-input-email | `<f-input-email>` | @fxcode/f-input-email |
| f-input-number | `<f-input-number>` | @fxcode/f-input-number |
| f-input-tel | `<f-input-tel>` | @fxcode/f-input-tel |
| f-input-url | `<f-input-url>` | @fxcode/f-input-url |
| f-input-date | `<f-input-date>` | @fxcode/f-input-date |
| f-input-datetime | `<f-input-datetime>` | @fxcode/f-input-datetime |
| f-input-time | `<f-input-time>` | @fxcode/f-input-time |
| f-input-month | `<f-input-month>` | @fxcode/f-input-month |
| f-input-color | `<f-input-color>` | @fxcode/f-input-color |
| f-input-file | `<f-input-file>` | @fxcode/f-input-file |
| f-input-checkbox | `<f-input-checkbox>` | @fxcode/f-input-checkbox |
| f-input-radio | `<f-input-radio>` | @fxcode/f-input-radio |
| f-input-range | `<f-input-range>` | @fxcode/f-input-range |
| f-input-search | `<f-input-search>` | @fxcode/f-input-search |
| f-input-switch | `<f-input-switch>` | @fxcode/f-input-switch |
| f-input-spinner | `<f-input-spinner>` | @fxcode/f-input-spinner |
| f-input-money | `<f-input-money>` | @fxcode/f-input-money |
| f-select | `<f-select>` | @fxcode/f-select |
| f-textarea | `<f-textarea>` | @fxcode/f-textarea |
| f-password-strength | `<f-password-strength-meter>` | @fxcode/f-password-strength |
| f-input (base) | `<f-input>` | @fxcode/f-input |

### Form Layout (6 components)
| Component | Selector | Package |
|-----------|----------|---------|
| f-form | `<f-form>` | @fxcode/f-form |
| f-form-row | `<f-form-row>` | @fxcode/f-form |
| f-form-group | `<f-form-group>` | @fxcode/f-form |
| f-form-row-divider | `<f-form-row-divider>` | @fxcode/f-form |
| f-label | `<f-label>` | @fxcode/f-form |
| f-button | `<f-button>` | @fxcode/f-button |

### Layout (8 components)
| Component | Selector | Package |
|-----------|----------|---------|
| f-row | `<f-row>` | @fxcode/f-layout |
| f-col | `<f-col>` | @fxcode/f-layout |
| f-header | `<f-header>` | @fxcode/f-layout |
| f-body | `<f-body>` | @fxcode/f-layout |
| f-container | `<f-container>` | @fxcode/f-layout |
| f-section | `<f-section>` | @fxcode/f-layout |
| f-footer | `<f-footer>` | @fxcode/f-layout |
| f-icon | `<f-icon>` | @fxcode/f-icon |

### Data Display (4 table + 1 data-view)
| Component | Selector | Package |
|-----------|----------|---------|
| f-table-responsive | `<f-table-responsive>` | @fxcode/f-table |
| f-table-default | `<f-table-default>` | @fxcode/f-table |
| f-table-dynamic | `<f-table-dynamic>` | @fxcode/f-table |
| f-table-scrollable | `<f-table-scrollable>` | @fxcode/f-table |
| f-data-view | `<f-data-view>` | @fxcode/f-data-view |

### List (7 components)
| Component | Selector | Package |
|-----------|----------|---------|
| f-list | `<f-list>` | @fxcode/f-list |
| f-list-item | `<f-list-item>` | @fxcode/f-list |
| f-list-title | `<f-list-title>` | @fxcode/f-list |
| f-list-subtitle | `<f-list-subtitle>` | @fxcode/f-list |
| f-list-body | `<f-list-body>` | @fxcode/f-list |
| f-list-thumbnail | `<f-list-thumbnail>` | @fxcode/f-list |
| f-list-button | `<f-list-button>` | @fxcode/f-list |

### Grid (4 components)
| Component | Selector | Package |
|-----------|----------|---------|
| f-grid | `<f-grid>` | @fxcode/f-grid |
| f-grid-body | `<f-grid-body>` | @fxcode/f-grid |
| f-grid-button | `<f-grid-button>` | @fxcode/f-grid |
| f-grid-thumbnail | `<f-grid-thumbnail>` | @fxcode/f-grid |

### Card (8 components)
| Component | Selector | Package |
|-----------|----------|---------|
| f-card | `<f-card>` | @fxcode/f-card |
| f-card-body | `<f-card-body>` | @fxcode/f-card |
| f-card-title | `<f-card-title>` | @fxcode/f-card |
| f-card-subtitle | `<f-card-subtitle>` | @fxcode/f-card |
| f-card-button | `<f-card-button>` | @fxcode/f-card |
| f-card-thumbnail | `<f-card-thumbnail>` | @fxcode/f-card |
| f-card-counter | `<f-card-counter>` | @fxcode/f-card |
| f-card-counter-slider | `<f-card-counter-slider>` | @fxcode/f-card |

### Modal (4 components)
| Component | Selector | Package |
|-----------|----------|---------|
| f-modal-header | `<f-modal-header>` | @fxcode/f-modal |
| f-modal-title | `<f-modal-title>` | @fxcode/f-modal |
| f-modal-body | `<f-modal-body>` | @fxcode/f-modal |
| f-modal-footer | `<f-modal-footer>` | @fxcode/f-modal |

### App Layout (5 components)
| Component | Selector | Package |
|-----------|----------|---------|
| f-app | `<f-app>` | @fxcode/f-app |
| f-title | `<f-title>` | @fxcode/f-app |
| f-breadcrumb | `<f-breadcrumb>` | @fxcode/f-app |
| f-breadcrumb-triangle | `<f-breadcrumb-triangle>` | @fxcode/f-app |

### Charts (8 components)
| Component | Selector | Package |
|-----------|----------|---------|
| f-chart-bar | `<f-chart-bar>` | @fxcode/f-chart |
| f-chart-line | `<f-chart-line>` | @fxcode/f-chart |
| f-chart-pie | `<f-chart-pie>` | @fxcode/f-chart |
| f-chart-doughnut | `<f-chart-doughnut>` | @fxcode/f-chart |
| f-chart-radar | `<f-chart-radar>` | @fxcode/f-chart |
| f-chart-polar-area | `<f-chart-polar-area>` | @fxcode/f-chart |
| f-chart-bubble | `<f-chart-bubble>` | @fxcode/f-chart |
| f-chart-scatter | `<f-chart-scatter>` | @fxcode/f-chart |

### Utilities
| Component | Selector | Package |
|-----------|----------|---------|
| f-alert | `<f-alert>` | @fxcode/f-alert |
| f-loader | `<f-loader>` | @fxcode/f-loader |
| f-img | `<f-img>` | @fxcode/f-img |
| f-tooltip | `<f-tooltip>` | @fxcode/f-tooltip |
| f-tab-sliding | `<f-tab-sliding>` | @fxcode/f-tab |
| f-pull-to-refresh | `<f-pull-to-refresh>` | @fxcode/f-pull-to-refresh |

### Apps (Advanced — Phase 2)
| Component | Selector | Package |
|-----------|----------|---------|
| f-ai-assistant | `<f-ai-assistant>` | @fxcode/f-ai-assistant |
| f-chat | `<f-chat>` | @fxcode/f-chat |
| f-calendar | `<f-calendar>` | @fxcode/f-calendar |
| f-code-editor | `<f-code-editor>` | @fxcode/f-code-editor |
| f-document-viewer | `<f-document-viewer>` | @fxcode/f-document-viewer |
| f-screen-recorder | `<f-screen-recorder>` | @fxcode/f-screen-recorder |
| f-seo-tools | `<f-seo-tools>` | @fxcode/f-seo-tools |
| f-signature-pad | `<f-signature-pad>` | @fxcode/f-signature-pad |
| f-spreadsheet | `<f-spreadsheet>` | @fxcode/f-spreadsheet |

---

## Source Origin

Components are migrated from an existing production application:
```
Source: C:\Users\Lenovo\Documents\Fariz\FarizProjects\Kontraktor\contractor\web\src\app\shared\libraries\fxcode
Target: C:\Users\Lenovo\Documents\Fariz\fxcode\packages\
```

Migration progress is tracked in `MIGRATION_LOG.md`.

---

## Development Commands

```bash
# Build a specific package
nx build f-avatar

# Build all packages
nx run-many -t build

# Test a specific package
nx test f-avatar

# Lint
nx lint f-avatar

# Generate new package
nx g @nx/angular:library f-{name} --directory=packages/f-{name} --publishable --importPath=@fxcode/f-{name} --prefix=f

# Publish to npm
nx release
```

---

## Coding Standards

1. **Selector prefix**: Always `f-` (e.g., `f-input-text`, `f-table-responsive`)
2. **Standalone components**: Use Angular standalone components (no NgModules)
3. **Bootstrap 4**: All CSS uses Bootstrap 4 classes — no custom CSS framework
4. **Separate files**: Always `.ts`, `.html`, `.scss` — NEVER inline templates
5. **Inputs/Outputs**: Use Angular signals where appropriate, `@Input()` / `@Output()` for compatibility
6. **Content projection**: Use `<ng-content>` for composable components
7. **Accessibility**: All form inputs must have `aria-label` or linked `<label>`
8. **RTL support**: Use logical CSS properties where possible (`margin-inline-start` vs `margin-left`)

---

## Relationship to BizCore

```
BizCore Suite (ERP)
    ↓ npm install
@fxcode/ui (this library)
    ↓ provides
f-input-text, f-table, f-modal, f-data-view, f-card, etc.
    ↓ built on
Bootstrap 4 CSS
```

Every BizCore portal frontend uses `@fxcode/ui` components.
The library is independent — it does NOT import anything from BizCore.

---

## Key Contacts

- **Fariz** — Creator, maintainer
- **GitHub**: github.com/farizfadian/fxcode
- **npm**: @fxcode scope
