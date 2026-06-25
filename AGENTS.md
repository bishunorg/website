# Bishun Website — Agent Instructions

Bishun is a **Nuxt v4 SSR** website for learning Chinese character stroke order. It is multilingual (en / zh-CN), styled with Tailwind CSS v4, and deployed as a static site.

## Commands

| Task | Command |
|------|---------|
| Dev server | `pnpm dev` (port **18088**, not 3000) |
| Build | `pnpm build` |
| Static generate | `pnpm generate` |
| Lint + format | `pnpm format` (runs `eslint . --fix`) |
| Lint check only | `pnpm lint` |

Always run `pnpm format` after editing `.ts`, `.vue`, or `.mjs` files.

## Project Structure

```
app/
  app.vue          # Root layout (AppHeader + NuxtPage + AppFooter)
  components/      # Auto-imported Vue components
  pages/           # File-based routing
  assets/css/
    main.css       # Tailwind entry (@import "tailwindcss")
    app.css        # CSS variables: --font-sans, --footer-link-color (#16a085)
i18n/
  i18n.config.ts
  locales/
    en.json        # English (default locale)
    zh-CN.json     # Simplified Chinese
nuxt.config.ts
```

## Key Conventions

### Styling
- **Tailwind CSS v4 only** — no `<style>` blocks, no inline `style` attributes.
- Theme color is `#16a085` (teal). Use `text-[#16a085]`, `bg-[#16a085]`, `border-[#16a085]` etc.
- CSS variable `--footer-link-color` is defined in `app.css`; use it for footer link hover states.

### i18n
- All user-visible text **must** use `$t('key')` (template) or `t('key')` (script).
- When adding a new UI string, update **both** `en.json` and `zh-CN.json` simultaneously.
- Locale files are flat-nested JSON — group related keys under a shared namespace (e.g., `landing.features.*`).

### Vue / Nuxt
- Components in `app/components/` are **auto-imported** — no manual imports needed.
- Nuxt composables (`useI18n`, `useSeoMeta`, `useRuntimeConfig`, etc.) are auto-imported too.
- `<script setup lang="ts">` is the standard for all SFCs.
- No `<style>` blocks. Scoped styles are not used.

### Code Style (enforced by ESLint stylistic)
- **Double quotes** for strings.
- **Semicolons** required.
- **Trailing commas** in multi-line arrays/objects (`commaDangle: "always-multiline"`).

### SEO
- Page-level SEO meta is set in `app/app.vue` via `useSeoMeta`.
- Global site config (OG image, robots, etc.) lives in `nuxt.config.ts` under `seo.meta`.
- `@nuxtjs/seo` module handles schema.org and canonical URLs automatically.

## Dependencies of Note

| Package | Purpose |
|---------|---------|
| `@takumi-rs/core` | Chinese character stroke order data/rendering |
| `@nuxtjs/i18n` v10 | Multilingual routing and translation |
| `@nuxtjs/seo` v5 | SEO meta, OG, schema.org |
| `@tailwindcss/vite` v4 | Tailwind CSS v4 Vite plugin (no `tailwind.config.js` needed) |
| `oxlint` | Fast JS/TS linter (runs alongside ESLint) |

## Common Pitfalls

- Dev server runs on **port 18088**, not the default 3000.
- Component folder is `app/components` — a typo like `app/compontents` causes silent `Failed to resolve component` warnings.
- Tailwind v4 has no `tailwind.config.js`; configuration is done via CSS `@theme` in `main.css` if needed.
- `fallbackLocale: false` in `i18n.config.ts` — missing translation keys will show the raw key, not a fallback.
