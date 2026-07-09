# Portfolio — Samantha Masara

A personal portfolio site built with plain HTML, CSS, and JavaScript — no frameworks, no build tools, no dependencies.

## About

A single-page portfolio designed with editorial precision — large serif display type, a refined crimson-and-raisin-black palette, and scroll-driven animations that make the page feel like one continuous canvas rather than a series of static screens.

Live sections: About · Skills · Projects · Contact

## Why

Most portfolio templates feel generic or over-engineered. This one is hand-crafted from scratch, driven by editorial design references (think Vogue layouts, premium agency sites, film poster typography) to reflect a considered aesthetic — not just a skills checklist.

No framework overhead means instant load, zero build steps, and complete control over every pixel.

## Design System

- **Palette:** Raisin black `#1C1920` (dark) / warm off-white `#F2EDE6` (light) · Crimson accent `#9E2A2B`
- **Type:** Cormorant Garamond italic for display headings · Inter for body text
- **Motifs:** Eyebrow section labels · hairline dividers · marquee skill ticker · parallax watermark
- **Theme:** Dark/light toggle persisted via `localStorage`

## Features

- Float-in scroll animations via `IntersectionObserver`
- Fixed scroll-rail with progress fill and clickable section dots
- Parallax watermark text in the hero section
- Full-screen mobile nav overlay with staggered link transitions
- Responsive layout from 380px mobile to wide desktop
- CV download link under Contact

## Tech Stack

- HTML5, CSS3 (custom properties, `clamp()`, Grid, Flexbox)
- Vanilla JavaScript (no libraries)
- Google Fonts — Cormorant Garamond + Inter
- Font Awesome icons

## Running Locally

No build step required. Open `index.html` directly in a browser, or serve the folder to avoid CDN CORS issues:

```bash
npx serve .
```

## License

MIT
