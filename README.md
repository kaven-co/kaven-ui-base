# kaven-ui-base

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/version-0.1.0--alpha.1-orange.svg)](https://semver.org)
[![Node](https://img.shields.io/badge/node-%3E%3D18-brightgreen.svg)](https://nodejs.org)

The **Kaven Design System** base component library.
97 React + Tailwind components built on atomic design principles,
powered by the **Frost** design theme.

> **Alpha**: Component APIs may change before v1.0.0.

---

## Installation

```bash
npm install kaven-ui-base@alpha
# or
pnpm add kaven-ui-base@alpha
```

**Peer dependencies:** React >= 18, Tailwind CSS >= 3

---

## Quick Start

```tsx
// 1. Import the Tailwind preset in your tailwind.config.ts
import kavenPreset from 'kaven-ui-base/tailwind-preset';

export default {
  presets: [kavenPreset],
  content: [
    './src/**/*.{ts,tsx}',
    './node_modules/kaven-ui-base/dist/**/*.mjs',
  ],
};

// 2. Import tokens in your global CSS
// @import 'kaven-ui-base/tokens.css';

// 3. Use components
import { Button, Input, Card, Badge } from 'kaven-ui-base';

export function App() {
  return (
    <Card>
      <Input placeholder="Email" />
      <Button>Sign Up</Button>
      <Badge>New</Badge>
    </Card>
  );
}
```

---

## Entry Points

| Import | Contents | Use case |
|--------|----------|----------|
| `kaven-ui-base` | All 97 components | Full applications |
| `kaven-ui-base/lite` | Atoms + molecules + tokens (27 components) | Landing pages, small apps |
| `kaven-ui-base/tailwind-preset` | Tailwind config preset (no React) | Tailwind configuration |
| `kaven-ui-base/tokens.css` | CSS custom properties | Tailwind v4 or vanilla CSS |

### Lite Build

The `/lite` entry point ships only atoms, molecules, and tokens — roughly 40% of the full bundle. Use it when you don't need the full admin/tenant component suite:

```tsx
import { Button, Input, Badge, Card } from 'kaven-ui-base/lite';
import 'kaven-ui-base/tokens.css';
```

---

## Architecture

The component library follows Brad Frost's **Atomic Design** methodology:

```
src/
  tokens/       Design tokens (brand colors, sizing, component contracts)
  atoms/        Button, Input, Label, Icon, Avatar, Badge, Card, Spinner, Typography
  molecules/    SearchInput, IconButtonWithTooltip, PaginationControl, FormField
  organisms/    AppHeader, SidebarNav, DataTable, SettingsPanel, PricingGrid
  templates/    DashboardTemplate, AuthTemplate, SettingsTemplate, MarketingTemplate
  compat/       70 bridge components (Shadcn/Radix wrappers: Dialog, Table, Tabs, etc.)
  brand/        BrandLogo, KaiIcon
  patterns/     Utility functions (cn, cva helpers)
  themes/       Glassmorphism theme (optional CSS)
  styles/       tokens.css (CSS custom properties)
```

### Component Layers

| Layer | Count | Description |
|-------|-------|-------------|
| **Atoms** | 10 | Smallest building blocks (Button, Input, Badge) |
| **Molecules** | 7 | Composed atoms (SearchInput, FormField, PaginationControl) |
| **Organisms** | 6 | Complex UI sections (DataTable, SidebarNav, PricingGrid) |
| **Templates** | 4 | Page-level layouts (DashboardTemplate, AuthTemplate) |
| **Compat** | 70 | Bridge components wrapping Radix/Shadcn primitives |

### Bridge Pattern

The `compat/` layer provides familiar component APIs (Dialog, Table, Tabs, Select, etc.) built on top of Radix UI primitives with Frost styling applied. This gives you Shadcn-style components that follow the Frost design language out of the box.

---

## Frost Design Theme

**Frost** is the default visual language of kaven-ui-base:

- **Primary**: Amber (#F59E0B) — warm, approachable brand color
- **Secondary**: Blue (#3B82F6) — trust, action
- **Surfaces**: Slate palette — dark-first design (slate-900 base)
- **Typography**: Geist Sans (display), DM Sans (body), Geist Mono (code)
- **Border radius**: Conservative (2px–10px), no excessive rounding
- **No glass effects** in base — glassmorphism available as optional theme

### Dark Mode

Dark mode activates automatically via:

```html
<html class="dark">
<!-- or -->
<div data-theme="dark">
```

Tokens switch via CSS custom properties — no JS runtime needed.

### CSS Tokens

Import `kaven-ui-base/tokens.css` for the full token set:

```css
:root {
  --surface-base, --surface-elevated, --surface-border
  --text-primary, --text-secondary, --text-muted
  --accent-primary (#F59E0B), --accent-secondary (#3B82F6)
  --success, --warning, --error, --info
  --background, --foreground, --card, --border, --ring
  --sidebar, --sidebar-border, --sidebar-foreground
}
```

### Tailwind Preset

The preset configures colors, fonts, border-radius, and animations:

```ts
import kavenPreset from 'kaven-ui-base/tailwind-preset';

export default {
  presets: [kavenPreset],
  content: ['./src/**/*.{ts,tsx}'],
};
```

For **Tailwind v4** (CSS-first), import tokens directly:

```css
@import 'kaven-ui-base/tokens.css';
```

---

## Themes

### Glassmorphism (Optional)

```css
@import 'kaven-ui-base/themes/glassmorphism/glass-tokens.css';
@import 'kaven-ui-base/themes/glassmorphism/glass-panel.css';
```

Adds frosted glass effects for overlay panels. Not included in the default build.

---

## Development

```bash
git clone https://github.com/kaven-co/kaven-ui-base
cd kaven-ui-base
pnpm install
pnpm run build       # Build with tsup
pnpm run typecheck   # TypeScript check
pnpm run dev         # Watch mode
```

### Build Output

tsup produces ESM bundles with `"use client"` directives for Next.js compatibility:

```
dist/
  index.mjs          Full build (all 97 components)
  index.d.ts         Type declarations
  lite.mjs           Lite build (atoms + molecules)
  lite.d.ts          Lite type declarations
  tailwind-preset.mjs  Tailwind config (no React dependency)
```

---

## Part of the Kaven Ecosystem

kaven-ui-base is the foundational design system for the [Kaven](https://github.com/kaven-co) SaaS boilerplate.
It works standalone with any React + Tailwind project — no Kaven backend required.

| Package | Purpose |
|---------|---------|
| **kaven-ui-base** | Design system components (this package) |
| [kaven-cli](https://github.com/kaven-co/kaven-cli) | CLI for project scaffolding and module management |
| [kaven-framework](https://github.com/kaven-co/kaven-framework) | Full SaaS boilerplate (Fastify + Next.js + Prisma) |

---

## License

MIT — see [LICENSE](LICENSE)

---

GitHub: https://github.com/kaven-co/kaven-ui-base
