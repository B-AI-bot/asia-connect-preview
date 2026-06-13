# Website UI kit — Asia-Connect

An interactive, click-through recreation of the repositioned Asia-Connect marketing site, composing the design-system components on the "Meridian" (ink & brass) territory.

**Open `index.html`** and use the top nav to move between screens.

## Screens
- **HomeScreen.jsx** — hero (meridian grid + 1°N node), services, the "principals not a database" statement, sectors, chairman quote, CTA.
- **ServicesScreen.jsx** — the three mandates in depth, the engagement process (assessment → deployment → implementation → hand-over), and a structured FAQ.
- **PartnersScreen.jsx** — the principals roster (placeholder profiles), coverage markets.
- **InsightScreen.jsx** — a reference-grade article with sticky TOC, canonical definition callout, and key-facts box. This is the "become the reference / agent-ready" surface.
- **ContactScreen.jsx** — the brief-us form (Input / Select / Textarea / Button) with a sent state.
- **SiteChrome.jsx** — shared `SiteHeader` + `SiteFooter`.

## Notes
- Composes `window.AsiaConnectDesignSystem_f91cce` components (Button, Card, Kicker, Badge, Tag, Stat, Avatar, Input, Select, Textarea). Requires the compiled `_ds_bundle.js` at the project root.
- Partner names/portraits and metrics are **illustrative placeholders** — swap for real bios, photography and verified figures before production.
- `site.css` holds only structural layout; all brand visuals come from the tokens.
