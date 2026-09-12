# ZENJI // Anime-Inspired Streetwear Storefront

ZENJI is a modern frontend e-commerce storefront created for an anime-inspired streetwear brand, built with **React 19**, **Vite 6** and **Tailwind CSS v4**. It combines a bold, immersive visual identity with a responsive component-based architecture, interactive product search and filtering, dynamic cart management, live drop countdowns and a seamless shopping experience across desktop and mobile.

**Live Demo:** [zenji-website-v9it.vercel.app](https://zenji-website-v9it.vercel.app)  
**GitHub Repository:** [github.com/Monoaratasnim/ZENJI-website](https://github.com/Monoaratasnim/ZENJI-website)

---

## Badges

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat-square&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Deployment](https://img.shields.io/badge/Deployment-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

---

## Key Features

- **Interactive Navigation** — Smooth-scrolling anchor navigation routes to dedicated release targets: `#drops` for limited-edition releases backed by a live countdown timer, and `#collections` for the full browsable catalog.
- **Dynamic Filtering & Search** — Instant keyword search over product titles, tags, and categories combines with real-time category tab filtering (`All`, `Hoodies`, `Tees`, `Pants`, `Accessories`) through memoized derived state.
- **Shopping Cart State** — A dedicated `useCart` hook powers quantity `+/−` controls, live subtotal recalculation, navbar badge syncing, and an automatic cart reset via `clearCart()` the moment checkout completes.
- **Responsive UI** — Adaptive grid layouts, fluid headline typography (`text-3xl` → `xl:text-7xl`), and tailored hero framing (`object-cover object-top`) scale cleanly across mobile, tablet, and desktop breakpoints with 44px+ touch targets.

---

## Technical Stack

| Layer          | Technology                                                                     |
| -------------- | ------------------------------------------------------------------------------ |
| **Framework**  | React 19 (functional components, hooks, `PropTypes`)                           |
| **Build Tool** | Vite 6 (`@vitejs/plugin-react`)                                                |
| **Styling**    | Tailwind CSS v4 (`@theme` design tokens + custom CSS)                          |
| **Icons**      | Lucide-style inline SVG icon set — hand-authored in-component, zero external icon dependencies |
| **Deployment** | Vercel / Netlify (static output from `vite build`)                             |

---

## Project Architecture

```text
zenji/
├── public/
│   ├── Outlook-ZENJI.png
│   └── Outlook-ZENJI mono.png
└── src/
    ├── components/
    │   ├── Navbar.jsx         # Navigation, search, cart badge, mobile menu
    │   ├── Hero.jsx           # Above-the-fold editorial hero
    │   ├── Marquee.jsx        # Brand ticker strip
    │   ├── Drops.jsx          # #drops — limited releases + countdown
    │   ├── CountdownTimer.jsx # Live drop countdown UI
    │   ├── FilterTabs.jsx     # Category tab filters
    │   ├── ProductGrid.jsx    # Responsive product grid
    │   ├── ProductCard.jsx    # Single product card with Quick Add
    │   ├── Lookbook.jsx       # Editorial look reel
    │   ├── About.jsx          # Brand manifesto
    │   ├── Footer.jsx
    │   ├── CartDrawer.jsx     # Slide-out cart with qty controls
    │   ├── CheckoutModal.jsx  # Checkout flow + order confirmation
    │   ├── Toast.jsx
    │   ├── ToTop.jsx
    │   ├── Reveal.jsx         # Scroll-reveal wrapper
    │   └── Container.jsx      # Centered max-width layout primitive
    ├── hooks/
    │   ├── useCart.js         # Cart state: add/remove/qty/clear + subtotal
    │   ├── useCountdown.js    # Countdown ticker logic
    │   └── useReveal.js       # IntersectionObserver scroll reveal
    ├── data/
    │   ├── products.js        # Full catalog seed data
    │   ├── drops.js           # Limited-releases seed data
    │   └── looks.js           # Lookbook editorial seed data
    ├── App.jsx                # Root composition + global state orchestration
    ├── main.jsx               # React entry point
    └── styles.css             # Tailwind entry + design tokens
```

---

## Local Setup & Installation

### Prerequisites

- Node.js 20.x or later
- npm 10.x or later

### Install & Run

```bash
# 1. Clone the repository
git clone https://github.com/your-username/zenji.git
cd zenji

# 2. Install dependencies
npm install

# 3. Start the local development server
npm run dev
```

Open `http://localhost:5173` in your browser — Vite provides hot module replacement for instant feedback during development.

### Production Build

```bash
npm run build    
npm run preview 
```
