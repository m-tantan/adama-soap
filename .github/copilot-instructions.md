# Adama Soaps - AI Assistant Priming Document

## Project Overview
**Adama Soaps** is an eco-friendly soap e-commerce website built with Next.js, migrated from a Wix site. The business creates handcrafted natural soaps from recycled coffee grounds in Munich, Germany.

**Business Model:**
- B2C: Direct online sales (primary)
- B2B: Distribution through partner cafés in Munich
- Sustainability focus: Recycling coffee grounds from local cafés

**Current Status:** Phase 1-2 Development (Static content & product gallery implemented)

---

## Tech Stack

### Core Framework
- **Next.js 16.1.1** (App Router)
- **React 19.2.3**
- **TypeScript 5**
- **Node.js 20+**

### Styling & UI
- **Tailwind CSS 4** (with PostCSS)
- **Custom Design Tokens** (`design-tokens.json`)
- Inline styles used extensively for precise design matching

### Features
- **next-intl 4.7.0** - Internationalization (prepared but not fully implemented)
- **React Compiler** - Enabled in Next.js config
- **Static Export** - Configured for GitHub Pages deployment

### Development Tools
- **ESLint 9** with Next.js config
- **Babel React Compiler Plugin 1.0.0**

---

## Project Structure

```
adama-soaps/
├── .github/
│   └── copilot-instructions.md          ← YOU ARE HERE
├── app/
│   ├── globals.css                      → Global styles, Tailwind imports
│   ├── layout.tsx                       → Root layout (Header, Footer wrapper)
│   ├── page.tsx                         → Homepage (hero, best sellers, story, cafés)
│   ├── [locale]/                        → Locale routing (prepared, not active)
│   │   └── layout.tsx
│   ├── about/
│   │   └── page.tsx                     → About page with humor/storytelling
│   └── shop/
│       ├── page.tsx                     → Product grid/gallery
│       └── [slug]/
│           └── page.tsx                 → Individual product detail page
├── components/
│   ├── BestSellersCarousel.tsx          → Product carousel for homepage
│   ├── Footer.tsx                       → Site footer (3-column, newsletter, policies)
│   ├── Header.tsx                       → Navigation header (sticky, responsive)
│   ├── ProductCard.tsx                  → Product card with hover effects
│   └── ProductDetails.tsx               → Product page details component
├── data/
│   └── products.ts                      → Product catalog (6 soaps)
├── lib/
│   └── utils.ts                         → Utility functions (basePath helpers)
├── public/
│   └── images/
│       ├── about/                       → About page images
│       │   ├── yoav-denis.jpg
│       │   ├── soap-making.jpg
│       │   └── instagram-[1-4].jpg
│       └── products/                    → Product images by folder
│           ├── Calm/
│           ├── SunnySage/
│           └── ...
├── types/
│   └── index.ts                         → TypeScript interfaces
├── SPECS/
│   └── LOCALIZATION_PLAN.md             → German localization roadmap
├── design-tokens.json                   → Design system tokens
├── SITE_STRUCTURE.md                    → Original Wix analysis
├── MIGRATION_PLAN.md                    → Migration phases & checklist
├── HOMEPAGE_GAPS_ANALYSIS.md            → Implementation gaps
├── next.config.ts                       → Next.js configuration
├── tailwind.config.ts                   → Tailwind customization
└── package.json                         → Dependencies & scripts
```

---

## Key File Locations

### Core Application Files
| What | Where | Purpose |
|------|-------|---------|
| **Homepage** | [app/page.tsx](../app/page.tsx) | Hero, best sellers, story, café partners, Instagram |
| **Shop Page** | [app/shop/page.tsx](../app/shop/page.tsx) | Product grid (all products) |
| **Product Detail** | [app/shop/[slug]/page.tsx](../app/shop/[slug]/page.tsx) | Individual product pages |
| **About Page** | [app/about/page.tsx](../app/about/page.tsx) | Brand story with humor |
| **Root Layout** | [app/layout.tsx](../app/layout.tsx) | Header + Footer wrapper, metadata |
| **Global Styles** | [app/globals.css](../app/globals.css) | Tailwind directives, CSS variables |

### Component Files
| Component | Location | Responsibility |
|-----------|----------|----------------|
| **Header** | [components/Header.tsx](../components/Header.tsx) | Navigation, logo, cart icon, mobile menu |
| **Footer** | [components/Footer.tsx](../components/Footer.tsx) | Contact, policies, social, newsletter |
| **ProductCard** | [components/ProductCard.tsx](../components/ProductCard.tsx) | Grid item with hover, ribbon badges |
| **BestSellersCarousel** | [components/BestSellersCarousel.tsx](../components/BestSellersCarousel.tsx) | Homepage product slider |
| **ProductDetails** | [components/ProductDetails.tsx](../components/ProductDetails.tsx) | Product page layout |

### Data & Configuration
| File | Purpose |
|------|---------|
| [data/products.ts](../data/products.ts) | Product catalog (hardcoded) |
| [types/index.ts](../types/index.ts) | TypeScript interfaces |
| [design-tokens.json](../design-tokens.json) | Colors, fonts, spacing, shadows |
| [lib/utils.ts](../lib/utils.ts) | Helper functions (basePath) |
| [next.config.ts](../next.config.ts) | Next.js settings (export, compiler) |
| [tailwind.config.ts](../tailwind.config.ts) | Tailwind theme extension |

### Documentation
| Document | Purpose |
|----------|---------|
| [SITE_STRUCTURE.md](../SITE_STRUCTURE.md) | Original Wix site analysis |
| [MIGRATION_PLAN.md](../MIGRATION_PLAN.md) | 7-phase migration roadmap |
| [SPECS/LOCALIZATION_PLAN.md](../SPECS/LOCALIZATION_PLAN.md) | German i18n implementation plan |
| [HOMEPAGE_GAPS_ANALYSIS.md](../HOMEPAGE_GAPS_ANALYSIS.md) | Current gaps vs. original design |
| [README.md](../README.md) | Standard Next.js readme |

---

## Design System

### Color Palette
Defined in [design-tokens.json](../design-tokens.json):

**Primary Colors:**
- `primary.DEFAULT`: `rgb(64, 63, 43)` - Olive green (main brand color)
- `primary.light`: `rgb(77, 75, 54)`
- `primary.lighter`: `rgb(159, 157, 142)`
- `primary.lightest`: `rgb(207, 203, 192)`

**Secondary Colors:**
- `secondary.DEFAULT`: `rgb(243, 241, 196)` - Cream
- `secondary.light`: `rgb(254, 250, 241)`
- `secondary.dark`: `rgb(191, 191, 126)`

**Accent Colors:**
- Peach, Purple, Green, Blue, Brown palettes
- Error: `rgb(237, 28, 36)`
- Warning: `rgb(255, 203, 5)`

**Neutral Colors:**
- White, Black, Gray variants
- Dark: `rgb(41, 41, 31)` - Used for dark sections

### Typography Scale
```typescript
title:       106px / fraunces_120pt-light (serif)
pageTitle:   79px  / fraunces_120pt-light (serif)
headingXl:   55px  / fraunces_120pt-light (serif)
headingL:    37px  / fraunces_120pt-light (serif)
headingM:    25px  / avenir-lt-w01_35-light (sans-serif)
headingS:    17px  / avenir-lt-w01_35-light (sans-serif)
body:        15px  / madefor-text (sans-serif)
menu:        16px  / din-next-w01-light (sans-serif)
button:      16px  / avenir-lt-w01_35-light (sans-serif)
```

**Font Families in Tailwind:**
- `font-title` - Large headings
- `font-heading` - Subheadings
- `font-body` - Body text
- `font-menu` - Navigation
- `font-button` - Buttons, labels

### Spacing System
```
xs:  4px    sm:  8px    md:  16px
lg:  24px   xl:  32px   2xl: 48px   3xl: 64px
```

### Breakpoints
```
mobile:  max-width 749px
tablet:  max-width 980px
desktop: min-width 1280px
```

### Common Shadows
```css
sm: 0 1px 3px rgba(0, 0, 0, 0.5)
md: 0 1px 4px rgba(0, 0, 0, 0.6)
lg: 0 0 5px rgba(0, 0, 0, 0.7)
```

### Border Radius
```
sm:  5px      (cards, buttons)
md:  50%      (circles)
lg:  300px    (pill buttons)
```

---

## Data Models

### Product Interface
```typescript
interface Product {
  id: string;              // Unique identifier
  name: string;            // Display name
  slug: string;            // URL slug (/shop/[slug])
  price: number;           // Regular price (€)
  salePrice?: number;      // Optional sale price
  images: string[];        // Array of image paths
  description: string;     // Product description
  ribbon?: 'Best Seller' | 'New' | 'Sale';  // Badge
  inStock: boolean;        // Availability
  ingredients?: string[];  // Optional ingredients list
}
```

### Current Products
6 products defined in [data/products.ts](../data/products.ts):
1. **Calm** - €9.50 (ribbon: "New")
2. **Forest** - €9.50
3. **CLC Soap (Coffee-Lemon-Cedar)** - €6.00 (ribbon: "Best Seller")
4. **Lavender Bliss** - €6.00
5. **Mint Refresh** - €6.00
6. **Citrus Burst** - €5.50 / €4.50 sale (ribbon: "Sale")

### CartItem Interface
```typescript
interface CartItem {
  product: Product;
  quantity: number;
}
```

### ContactInfo Interface
```typescript
interface ContactInfo {
  phone: string;
  email: string;
  address: string;
}
```

---

## Routing Structure

### Current Pages
```
/                                → Homepage
/about                          → About page (with humor)
/shop                           → Product listing
/shop/calm                      → Product detail
/shop/forest-soap               → Product detail
/shop/clc-soap                  → Product detail
/shop/lavender-bliss-soap       → Product detail
/shop/mint-refresh-soap         → Product detail
/shop/citrus-burst-soap         → Product detail
/cart                           → Cart page (placeholder)
/policies/privacy               → Privacy policy (placeholder)
/policies/accessibility         → Accessibility (placeholder)
/policies/shipping              → Shipping info (placeholder)
/policies/terms                 → Terms & Conditions (placeholder)
/policies/returns               → Returns policy (placeholder)
```

### Prepared (Not Active)
```
/[locale]/...                   → Locale routing for i18n
  /en/...                       → English routes
  /de/...                       → German routes
```

---

## Component Patterns

### Layout Components
**Header:**
- Sticky positioning (`position: sticky; top: 0`)
- Background: `#403F2B` (olive green)
- Desktop: Horizontal nav with centered logo
- Mobile: Hamburger menu, stacked layout
- Cart icon with count display

**Footer:**
- 3-column grid layout
- Column 1: Brand name + social icons
- Column 2: Contact information
- Column 3: Policy links
- Newsletter signup form below
- Copyright bar at bottom

### Product Components
**ProductCard:**
- Square aspect ratio (1:1)
- Image hover effect (second image on hover, scale 1.05)
- Ribbon badge (top-left: New/Best Seller/Sale)
- "Add to Cart" button overlay on hover
- Price display (regular + sale price support)

**BestSellersCarousel:**
- Horizontal scroll/slider
- Displays ProductCard components
- Used on homepage for featured products

**ProductDetails:**
- Large product image(s)
- Product name, price, description
- Ingredients list (if available)
- Add to cart functionality
- Responsive grid layout

---

## Styling Approach

### Hybrid Styling Strategy
The project uses **both Tailwind classes AND inline styles**:

**Tailwind Classes:**
- Layout utilities: `grid`, `flex`, `max-w-[980px]`, `mx-auto`
- Responsive: `md:grid-cols-2`, `lg:px-8`
- States: `hover:opacity-70`, `group-hover:opacity-100`

**Inline Styles:**
- Precise color matching: `style={{ backgroundColor: '#403F2B' }}`
- Exact typography: `fontSize: '55px', lineHeight: '1.2em'`
- Custom spacing: `padding: '16px 32px'`
- Shadows, transitions, complex values

**Why This Approach:**
- Matching original Wix design precisely
- Design tokens mapped but not always used via Tailwind
- Flexibility for one-off values

---

## Important Patterns & Conventions

### Image Handling
```typescript
import { withBasePath } from '@/lib/utils';

// Always use withBasePath for images
<Image src={withBasePath('/images/logo.png')} ... />
```
**Why:** Handles GitHub Pages deployment with `/adama-soap` basePath

### Links & Navigation
```typescript
import Link from 'next/link';

// Internal navigation
<Link href="/shop">Shop</Link>

// External links
<a href="https://..." target="_blank" rel="noopener noreferrer">
```

### Client Components
Components with interactivity require `'use client';` directive:
- Header (mobile menu state)
- ProductCard (hover state)
- Forms with state

### Server Components
Default for pages and static components:
- All page.tsx files
- Footer
- BestSellersCarousel (currently)

---

## Configuration Details

### Next.js Config ([next.config.ts](../next.config.ts))
```typescript
{
  reactCompiler: true,          // React 19 compiler enabled
  images: {
    unoptimized: true,         // For static export
  }
}
```

### Environment Modes
**Development:**
- `npm run dev` on port 3000
- basePath: `/`

**Production (GitHub Pages):**
- `npm run build` + `npm run export`
- basePath: `/adama-soap`
- Static HTML export

---

## Content & Copy

### Brand Voice
- **Tone:** Friendly, punny, approachable
- **Humor:** Heavy use of soap/cleaning puns
- **Example:** "grounds for divorce", "soap up", "lye-ing"
- **Balance:** Professional eco-friendly mission + playful personality

### Key Messaging
1. **Sustainability:** Recycled coffee grounds, eco-friendly
2. **Quality:** Handcrafted, natural ingredients
3. **Local:** Made in Munich, Germany
4. **Partnership:** Collaborate with local cafés

### Contact Information
- **Phone:** 015730104878
- **Email:** info@mysite.com
- **Address:** Holzstr.11 2/a, 80469 Munich, Germany

### Partner Cafés
1. **Online Shop** - Holzstraße 11, 80469 München
2. **Wagners Juicery** - Fraunhoferstraße 43, 80469 München
3. **Marita Cafe** - Schulstraße 34, 80634 München

### Social Media (Placeholders)
- Instagram: @wix (needs update)
- Facebook: wix (needs update)
- Twitter/X: wix (needs update)
- TikTok: @wix (needs update)

---

## Development Workflow

### Available Scripts
```bash
npm run dev        # Start development server (port 3000)
npm run build      # Build for production
npm run export     # Build + static export (same as build)
npm run start      # Start production server (requires build)
npm run lint       # Run ESLint
```

### Current Build Status
⚠️ **Note:** `npm run start` currently fails (Exit Code: 1)
- Likely due to static export configuration
- Use `npm run dev` for development
- Use `npm run build` for production builds

### Adding New Pages
1. Create file in `app/[route]/page.tsx`
2. Use Server Component by default
3. Add `'use client';` only if needed
4. Import layout from parent or create new layout.tsx

### Adding New Products
1. Open [data/products.ts](../data/products.ts)
2. Add new product object to array
3. Add product images to `public/images/products/`
4. Product page auto-generated via [slug] route

---

## Migration Status

### Completed ✅
- [x] Next.js setup with TypeScript
- [x] Design system extraction (design-tokens.json)
- [x] Header component (responsive)
- [x] Footer component (complete)
- [x] Homepage (hero, best sellers, story, cafés)
- [x] About page (with humor)
- [x] Shop page (product grid)
- [x] Product detail pages (dynamic routes)
- [x] ProductCard component (with hover effects)
- [x] Product data structure
- [x] Image optimization setup
- [x] Responsive layouts

### In Progress 🚧
- [ ] Shopping cart functionality
- [ ] Internationalization (prepared, not active)
- [ ] Policy pages (placeholders exist)
- [ ] Contact form

### Not Started ⬜
- [ ] Payment integration (Stripe)
- [ ] Checkout flow
- [ ] Order confirmation
- [ ] Customer accounts
- [ ] Email notifications
- [ ] Admin dashboard
- [ ] CMS integration
- [ ] Analytics

---

## Known Issues & Gaps

### Technical Issues
1. **Start Script Fails:** `npm run start` exits with code 1
   - Not critical for development
   - May need investigation for production deployment

2. **Localization Prepared but Inactive:**
   - next-intl installed
   - `app/[locale]/` folder exists
   - Not currently in use
   - See [SPECS/LOCALIZATION_PLAN.md](../SPECS/LOCALIZATION_PLAN.md)

### Content Gaps
1. **Policy Pages:** All policy routes exist but show placeholder content
2. **Social Media:** Links point to Wix placeholders
3. **Product Catalog:** Only 6 products (needs real product data)
4. **Instagram Images:** Placeholder images, need real content

### Feature Gaps
1. **Shopping Cart:** No cart state management
2. **Checkout:** No payment integration
3. **User Accounts:** No authentication
4. **Inventory Management:** No stock tracking
5. **Email Marketing:** No newsletter integration

---

## API Routes & Integrations

### Planned Integrations
- **Stripe:** Payment processing (not implemented)
- **Email Service:** Newsletter signup (not implemented)
- **Form Handler:** Contact form submission (not implemented)
- **Analytics:** Google Analytics or Plausible (not implemented)

### Future API Routes
```
/api/cart              → Cart management
/api/checkout          → Stripe checkout session
/api/webhooks/stripe   → Order processing
/api/contact           → Contact form handler
/api/subscribe         → Newsletter subscription
```

---

## Testing Guidelines

### Manual Testing Checklist
- [ ] Homepage loads and displays correctly
- [ ] Navigation works (desktop + mobile)
- [ ] Mobile menu toggles
- [ ] Product grid displays all products
- [ ] Product detail pages load via slug
- [ ] Images load correctly (with basePath)
- [ ] Hover effects work on ProductCard
- [ ] Responsive layouts on mobile/tablet/desktop
- [ ] Links navigate correctly
- [ ] External links open in new tab

### Browser Compatibility
- Chrome/Edge (Chromium) ✅
- Firefox ✅
- Safari (needs testing)
- Mobile Safari (needs testing)
- Chrome Mobile (needs testing)

---

## Deployment

### Current Setup
- **Platform:** Prepared for GitHub Pages
- **Base Path:** `/adama-soap` (production)
- **Build Output:** Static HTML export
- **Images:** Unoptimized (required for static export)

### Deployment Process
```bash
npm run build           # Creates `out/` directory
# Push to GitHub Pages or deploy `out/` folder
```

### Environment Variables
Currently none required. Future needs:
- `STRIPE_PUBLIC_KEY`
- `STRIPE_SECRET_KEY`
- `NEXT_PUBLIC_BASE_URL`

---

## Future Roadmap

### Phase 3: Shopping Cart (Next)
- Implement cart context/state management
- localStorage persistence
- Cart page UI
- Quantity management
- Totals calculation

### Phase 4: Payment Integration
- Stripe account setup
- Checkout flow
- Order confirmation
- Webhook handling
- Email notifications

### Phase 5: Optimization & Launch
- SEO metadata
- Performance optimization
- Analytics integration
- Custom domain
- Production deployment

### Phase 6: Enhancements
- Customer reviews
- Product recommendations
- Blog/content section
- Multi-language (German)
- Admin dashboard

---

## Quick Reference

### Most Common Files to Edit
1. **Homepage:** [app/page.tsx](../app/page.tsx)
2. **Products:** [data/products.ts](../data/products.ts)
3. **Styles:** [design-tokens.json](../design-tokens.json)
4. **Header:** [components/Header.tsx](../components/Header.tsx)
5. **Footer:** [components/Footer.tsx](../components/Footer.tsx)

### Adding a New Page
```typescript
// app/new-page/page.tsx
export default function NewPage() {
  return (
    <div className="max-w-[980px] mx-auto px-6 lg:px-8">
      <h1 className="font-title">New Page</h1>
    </div>
  );
}
```

### Adding a New Component
```typescript
// components/NewComponent.tsx
'use client'; // Only if interactive

export default function NewComponent() {
  return <div>Component content</div>;
}
```

### Using Design Tokens
```typescript
// In Tailwind classes
<div className="bg-primary text-neutral-white">

// In inline styles (for precision)
<div style={{ backgroundColor: 'rgb(64, 63, 43)' }}>
```

---

## Emergency Contacts & Resources

### Documentation
- [Next.js App Router](https://nextjs.org/docs/app)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [next-intl](https://next-intl-docs.vercel.app/)
- [TypeScript](https://www.typescriptlang.org/docs/)

### Project Documentation
- [MIGRATION_PLAN.md](../MIGRATION_PLAN.md) - Full migration roadmap
- [SITE_STRUCTURE.md](../SITE_STRUCTURE.md) - Original site analysis
- [LOCALIZATION_PLAN.md](../SPECS/LOCALIZATION_PLAN.md) - i18n guide

### Key Decision Makers
- **Design Authority:** Original Wix site
- **Content Authority:** About page storytelling
- **Technical Authority:** Next.js best practices

---

## Notes for AI Assistants

### When Editing Code
1. ✅ **DO:** Preserve inline style patterns for color/typography precision
2. ✅ **DO:** Use `withBasePath()` for ALL image paths
3. ✅ **DO:** Check design-tokens.json for color/font values
4. ✅ **DO:** Maintain responsive patterns (md:, lg: breakpoints)
5. ✅ **DO:** Keep Server Components by default
6. ⚠️ **DON'T:** Remove inline styles in favor of pure Tailwind
7. ⚠️ **DON'T:** Change font sizes without consulting design-tokens.json
8. ⚠️ **DON'T:** Add `'use client'` unless absolutely necessary

### When Suggesting Features
1. Check MIGRATION_PLAN.md for planned features
2. Respect the phased approach (currently Phase 2)
3. Cart/checkout features are Phase 3-4 (future)
4. Consider static export limitations (no server-side APIs)

### When Debugging
1. Check basePath handling (`withBasePath` utility)
2. Verify image paths in `public/images/`
3. Check for 'use client' directive if hooks used
4. Confirm TypeScript types match interfaces

### Project Philosophy
- **Eco-friendly focus:** Always emphasize sustainability
- **Humor:** Maintain punny, playful tone in copy
- **Quality:** Match original design precisely
- **Simplicity:** Keep architecture simple and maintainable

---

**Last Updated:** January 17, 2026  
**Document Version:** 1.0  
**Maintained By:** AI Assistant + Development Team
