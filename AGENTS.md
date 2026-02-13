# AGENTS.md

> Context and instructions for AI coding agents working on **@wrap.ngo/evergreen** — WRAP's web component design system library.

## Project overview

Evergreen is a framework-agnostic web component library built with **Lit** and **TypeScript**, distributed as an NPM package (`@wrap.ngo/evergreen`). It provides UI primitives for consistent, accessible digital experiences across WRAP's ecosystem.

Components are organised into four Diamond UI groups:

- **Composition** — Layout and structure (Grid, Wrapper, Modal)
- **Canvas** — Containers and surfaces (Box, Card, Section, Header)
- **Content** — Information display (Icon, Badge, List, Stat)
- **Control** — Interactive elements (Button, Input, Link, Chip)

## Setup

**Requirements:** Node ^20 || ^22 (see `.nvmrc`), NPM ^10 || ^11

```sh
npm install           # Install dependencies
npm run storybook     # Start Storybook dev server on port 6006
npm run build         # Build the library (ESM, CJS, types, styles)
```

## Build

The build pipeline uses **esbuild** with custom plugins:

```sh
npm run build         # Full build: clean → export-components → esbuild → tsc declarations
npm run build:storybook  # Build static Storybook site
```

Build steps:
1. `build:clean` — removes `dist/`
2. `scripts/export-components.js` — auto-generates `src/index.ts` (do NOT edit manually)
3. `scripts/build.js` — esbuild bundles ESM + CJS, processes SCSS via PostCSS + Autoprefixer
4. `build:types` — generates `.d.ts` files into `dist/types/`

Output: `dist/esm/`, `dist/cjs/`, `dist/types/`, `dist/styles/`, `dist/assets/`

## Testing

There are no unit tests. All testing is done through **Storybook stories** with **axe-playwright** accessibility validation.

```sh
npm run build:storybook                # Build Storybook first
npm run test:storybook                 # Serve built Storybook and run a11y tests with Playwright
```

Every story is tested for WCAG 2.1 AA compliance automatically. Stories can opt out with `a11y: { disable: true }` in parameters.

## Code style

### Formatting and linting

- **Prettier** — single quotes (`singleQuote: true`)
- **ESLint** — extends `@etchteam` config
- **Stylelint** — extends `@etchteam/stylelint-config`
- **EditorConfig** — 2 spaces, LF line endings, UTF-8, final newline, trim trailing whitespace

Pre-commit hooks (Husky + lint-staged) auto-fix staged files:
- `*.{ts,tsx,js,jsx,yml,yaml}` → `eslint --fix`
- `*.{css,scss}` → `stylelint --fix`

### TypeScript

- Target: ES2020, module: ESNext, JSX: react
- Path alias: `@/*` → `src/*`
- Decorators enabled (for Lit)
- Strict mode with `noImplicitAny` disabled

### Naming conventions

- All components and CSS classes prefixed with `evg-`
- Custom elements use kebab-case (`evg-button`, `evg-card`)
- TypeScript files use PascalCase for component classes
- Story files: `ComponentName.stories.tsx`

## Component architecture

There are three types of components:

### 1. Utilities (CSS-only)

Plain CSS classes with no custom element registration. Use when adding behaviour to semantic HTML without extra DOM or JS overhead.

### 2. CSS web components (no JS runtime)

Custom element syntax with TypeScript types for DX, but **not registered** in the `CustomElementRegistry`. No JS required at runtime — maximum performance. This is the most common component type.

### 3. Full/Lit web components

Registered with `CustomElementRegistry` via Lit. Use only when shadow DOM subtrees, named slots, or JS-driven interactions are required.

### Principles

- Expose semantic HTML — never hide content in shadow DOM
- Use CEA (Component, Element, Attribute) styling methodology
- Style in light DOM CSS for performance; use `::part()` for shadow DOM
- Components don't control their own width
- Use native HTML elements before JS solutions
- CSS values must use design tokens from `@wrap.ngo/tokens` — no magic values
- Never reference another component in a component's CSS
- Prefer primitive props (string, number, boolean)
- Unidirectional margins (bottom only) when margins are necessary
- All interactive elements must have visible hover and focus states

## Storybook stories

- One story file per component, colocated with the component
- First story matches the component name with all props connected to args
- Subsequent stories show common configurations
- Component combinations go in the `src/docs/recipes/` section
- Include accessibility and usage guidelines in the docs description field

## Commit messages

Uses **conventional commits** enforced by commitlint. Commit messages are added to the public changelog, so write clear, user-facing descriptions.

```
feat: add new card variant        # Minor version bump
fix: correct button focus style   # Patch version bump
feat!: remove deprecated badge    # Major version bump (breaking)
```

Releases are automated via **semantic-release** when PRs merge to `main`.

## Project structure

```
src/
├── components/
│   ├── canvas/        # Box, Card, Section, Header, Drawer, etc.
│   ├── composition/   # Grid, Wrapper, Modal, Collapse, etc.
│   ├── content/       # Icon, Badge, List, Stat, etc.
│   └── control/       # Button, Input, Link, Chip, etc.
├── docs/              # Storybook documentation pages
│   ├── foundations/   # Design foundations
│   ├── guides/        # Usage guides
│   ├── recipes/       # Component combinations
│   └── showroom/      # Examples
├── lib/               # Shared utilities
├── styles/            # Global SCSS (base, utilities, variables)
├── types/             # TypeScript type definitions
├── assets/            # Fonts, icons, static files
└── index.ts           # Auto-generated exports (DO NOT EDIT)
scripts/
├── build.js           # esbuild configuration
├── export-components.js  # Generates src/index.ts
└── esbuild-plugin-glob-svg.js  # Custom SVG handling
```

## Key files

- `src/index.ts` — auto-generated, do not edit manually
- `scripts/build.js` — esbuild config for ESM/CJS output
- `.storybook/test-runner.ts` — a11y test configuration
- `dist/` — build output, not committed

## Security

- Never commit secrets, tokens, or credentials
- Design tokens come from `@wrap.ngo/tokens`, not hardcoded values
- The library runs in consumer browsers — treat all component inputs as potentially untrusted
