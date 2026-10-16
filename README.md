# NEBRA School Dashboard

Independent institution/school dashboard built with Vite + React + TypeScript, following `nebra-super-admin` feature-oriented structure and the same vendored `@nebra/ui` design-system snapshot.

## Getting started

```bash
npm install
npm run dev
npm run check
```

Default API: `https://nebra.abdulrahman-hares.com/api/v1`. Override using `VITE_API_URL` in `.env.local`.

## Structure

- `src/app`: routes, navigation, locale, theme
- `src/components`: reusable app layout and future UI components
- `src/features`: feature-owned screens and eventually queries, API functions and types
- `src/lib/api`: shared Axios instance
- `src/config`: environment configuration
- `vendor/nebra-ui`: snapshot of NEBRA shared design components (same as super admin)

## Scope

Foundation only: dashboard shell, Arabic/English RTL/LTR, light/dark, school navigation and empty feature scaffolds. Auth, tenant selection, institution permissions and live data integration are intentionally deferred; routes are **not** authorization checks. No production data is mutated.
