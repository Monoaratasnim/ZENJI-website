# ZENJI // Cyberpunk Streetwear Storefront

ZENJI is a fully client-side e-commerce storefront for an anime-inspired Neo-Tokyo streetwear brand, engineered with **React 19**, **Vite**, and **Tailwind CSS v4**. The project demonstrates production-grade React architecture, dedicated state management via custom hooks, and a dark cyberpunk design system — neon acid green and cyber crimson over deep charcoal — wrapped in a 100% comment-free, responsive component library.

[![Live Demo](https://your-demo-link.vercel.app)](https://your-demo-link.vercel.app)
[![Repository](https://github.com/your-username/zenji)](https://github.com/your-username/zenji)

---

## Badges

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat-square&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Deployment](https://img.shields.io/badge/Deployment-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

---

## Key Features

- **Modular Component Architecture** — Every UI surface is isolated into a single-purpose component: `Navbar`, `Hero`, `Marquee` (ticker strip), `Drops`, `ProductGrid`, `ProductCard`, `CartDrawer`, `CheckoutModal`, `FilterTabs`, `Lookbook`, and more. Components accept explicitly typed props via `PropTypes` and compose through shared primitives such as `Container` and `Reveal`.

- **Dynamic Product Search & Categorization** — The catalog filters instantly in real time as the user types into the navigation search bar, while interactive category tabs (`All`, `Hoodies`, `Tees`, `Pants`, `Accessories`) drive a memoized grid with combined category + keyword matching.

- **Dedicated Release Sections** — Distinct release targets separate limited releases from the full catalog:
  - `#drops` — exclusive limited-edition drops with a live countdown timer (`useCountdown`), urgency banner, and limited-stock badges (`ONLY 50 PIECES MADE`).
  - `#collections` — the complete product catalog with category filtering and real-time search.

- **Real-Time Shopping Cart & State Syncing** — The cart is managed entirely by a dedicated `useCart` hook: repeated Quick Adds merge quantities, `+/−` controls and item removal recompute subtotals and the navbar badge live, and a deterministic `clearCart()` empties the cart the moment a purchase completes — regardless of how the confirmation screen is dismissed.

- **Fully Responsive Architecture** — Fluid type scaling (`text-3xl` → `xl:text-7xl`), edge-aware padding (`px-4 sm:px-6 lg:px-8`), targeted image framing (`object-cover object-top` prevents head-cropping), and responsive grids adapt from 320px mobile through 4-column desktop layouts with 44px+ touch targets throughout.

---

## Technical Stack & Architecture

| Layer          | Technology                                                       |
| -------------- | ---------------------------------------------------------------- |
| **Framework**  | React 19 (functional components, hooks, `PropTypes`)            |
| **Build Tool** | Vite 6 (`@vitejs/plugin-react`, ESBuild fast refresh)           |
| **Styling**    | Tailwind CSS v4 (`@theme` tokens + custom CSS design system)     |
| **State**      | Custom hooks (`useCart`, `useCountdown`, `useReveal`)           |
| **Icons**      | Hand-authored inline SVG icon set (stroke-based, Lucide style — zero external icon dependencies) |
| **Deployment** | Static build (`vite build`) — optimized for Vercel               |

### Project Structure

```text
zenji/
├── public/
│   ├── Outlook-ZENJI.png
│   └── Outlook-ZENJI mono.png
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Marquee.jsx
│   │   ├── Drops.jsx
│   │   ├── CountdownTimer.jsx
│   │   ├── FilterTabs.jsx
│   │   ├── ProductGrid.jsx
│   │   ├── ProductCard.jsx
│   │   ├── Lookbook.jsx
│   │   ├── About.jsx
│   │   ├── Footer.jsx
│   │   ├── CartDrawer.jsx
│   │   ├── CheckoutModal.jsx
│   │   ├── Toast.jsx
│   │   ├── ToTop.jsx
│   │   ├── Reveal.jsx
│   │   └── Container.jsx
│   ├── hooks/
│   │   ├── useCart.js
│   │   ├── useCountdown.js
│   │   └── useReveal.js
│   ├── data/
│   │   ├── products.js
│   │   ├── drops.js
│   │   └── looks.js
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── vite.config.js
└── package.json
```

### Design System

| Token         | Value      | Usage                              |
| ------------- | ---------- | ---------------------------------- |
| `--charcoal` | `#0F0F12`  | Primary dark background            |
| `--acid`     | `#CCFF00`  | Neon accent, CTAs, active states   |
| `--crimson`  | `#FF2A5F`  | Alerts, sold-out/limited urgency   |
| `--ink`      | `#F4F4F6`  | Foreground text & icons            |

Tokens are declared once as CSS variables and mirrored into Tailwind's `@theme` namespace for consistent, single-source-of-truth theming.

---

## Getting Started

### Prerequisites

- Node.js 20.x or later
- npm 10.x or later

### Local Setup

```bash
# 1. Clone the repository
git clone https://github.com/your-username/zenji.git
cd zenji

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open `http://localhost:5173` — Vite serves the app with hot module replacement.

### Production Build

```bash
# Generate an optimized production bundle in /dist
npm run build

# Preview the production build locally
npm run preview
```

---

## Code Quality & Standards

- **Manually authored, comment-free** — Every file is written by hand with zero `//` or `/* */` comments; intent is expressed through naming, structure, and self-documenting code.
- **Reusable component contracts** — Props are validated with `PropTypes`; presentational components stay pure and receive data via props, keeping concerns separated from business logic.
- **Clean state handling** — Cart, countdown, and scroll-reveal logic live in isolated custom hooks, keeping `App.jsx` declarative and side-effect free.
- **Modern ES6+ idioms** — Functional components, hooks, destructuring, `useCallback`/`useMemo`, optional chaining, and template-safe class composition.
- **Accessibility & UX fundamentals** — Semantic landmarks, `aria-label` on icon-only controls, `scroll-mt` anchor offsets for the fixed header, and minimum 44px touch targets.

---

## License

Distributed under the MIT License. See `LICENSE` for more information.