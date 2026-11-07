# KIVO — Digital Solutions Studio

React + TypeScript + Vite portfolio, adapted from the supplied KIVO HTML design.
The connected repository initially contained only a README; this adds the app foundation without attempting to overwrite an existing deployed source tree.

## Local development

Use Node.js 24 and npm:

```sh
npm ci
cp .env.example .env.local
npm run dev
```

Set `VITE_WHATSAPP_NUMBER` to the studio's real international WhatsApp number, digits only, without `+` or spaces. This is a public contact number, not a secret. If blank, malformed, or the original example number, WhatsApp buttons stay disabled to prevent messages to a placeholder. Set the same variable in the deployment environment before rebuilding to enable WhatsApp links. No backend or credentials are needed.

```sh
npm test
npm run build
npm run preview
```

Vercel: Vite framework, repository root, build `npm run build`, output `dist`. No production deployment is performed by this change.

## Design and interactions

- `src/styles.css` preserves the supplied dark palette, orange accent, typography, responsive grids, and mockups; adds focus styles and reduced-motion support.
- `src/components/` contains Hero, Services, Portfolio, About, Process, Contact, Header, Footer, and a native dialog demo.
- Portfolio filters use React state. Both restaurant and coffee demos have their own categories, menu, and cart. Closing a demo resets its cart.
- The dialog supports keyboard focus containment/restoration, Escape, backdrop dismissal, and scroll locking. Mobile navigation supports Escape, focus containment, and background inertness.
- The contact builder encodes name, business, service, and notes in a WhatsApp link. Demo checkout is explicitly marked as a simulation and targets the studio, not a restaurant.
- `src/data.ts` owns menu data, public contact configuration, cart operations, and message formatting.
- Fonts are loaded from Google Fonts with system fallbacks; the page remains usable if external fonts cannot load.

Portfolio project names, “Live Client Work” labels, Instagram handle, and availability copy are retained from the supplied design; confirm they are accurate before publishing publicly.
