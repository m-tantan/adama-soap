# Adama Soaps - Wix to Next.js Migration Plan

## Project Overview
Migrating from Wix hosted site to self-hosted Next.js application with e-commerce capabilities.

**Original Site:** https://yoavamerica1.wixsite.com/adama-soaps  
**Target:** Independent Next.js site with payment integration

---

## Technology Stack

### Core Framework
- **Next.js 14+** (App Router) - React framework with SSR/SSG
- **React 18+** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling framework

### E-Commerce & Payments
- **Stripe** - Payment processing
- **Stripe Checkout** - Hosted payment pages (Phase 1)
- **Shopping Cart** - Custom implementation with localStorage/state management

### Deployment & Hosting
- **Vercel** - Hosting platform (free tier to start)
- **GitHub** - Version control and CI/CD
- **Custom Domain** - When available

### Content Management
- **File-based** - Product data in JSON/TypeScript files (Phase 1)
- **Future:** Headless CMS option (Sanity/Strapi) if needed

---

## URL Structure (Option B - Clean & Modern)

```
/                          → Homepage
/about                     → About page
/shop                      → Product listing/gallery
/shop/[product-slug]       → Individual product pages
/cart                      → Shopping cart
/checkout                  → Checkout page (Stripe integration)
/contact                   → Contact form
/thank-you                 → Order confirmation
/policies/privacy          → Privacy policy
/policies/shipping         → Shipping info
/policies/returns          → Returns policy
```

---

## Migration Phases

### Phase 1: Foundation & Static Content (Current)
**Goal:** Recreate visual design with static content

#### Tasks:
1. ✅ Project analysis & planning
2. ⬜ Set up Next.js project structure
3. ⬜ Extract & organize assets (images, fonts, colors)
4. ⬜ Analyze site structure & components
5. ⬜ Create design system (colors, typography, spacing)
6. ⬜ Build layout components (Header, Footer, Navigation)
7. ⬜ Build homepage
8. ⬜ Build about page
9. ⬜ Build contact page with form (Formspree/EmailJS initially)

### Phase 2: Product Gallery & Display
**Goal:** Implement product browsing functionality

#### Tasks:
1. ⬜ Create product data structure
2. ⬜ Build product grid/gallery component
3. ⬜ Build individual product page template
4. ⬜ Implement image optimization
5. ⬜ Add product filtering/search (if needed)
6. ⬜ Create product data files

### Phase 3: Shopping Cart
**Goal:** Add cart functionality

#### Tasks:
1. ⬜ Design cart state management
2. ⬜ Build cart context/provider
3. ⬜ Create "Add to Cart" functionality
4. ⬜ Build cart page/drawer
5. ⬜ Implement quantity updates
6. ⬜ Add cart persistence (localStorage)
7. ⬜ Calculate totals, tax, shipping

### Phase 4: Payment Integration
**Goal:** Enable online purchases

#### Tasks:
1. ⬜ Set up Stripe account
2. ⬜ Create Stripe products
3. ⬜ Implement Stripe Checkout flow
4. ⬜ Build checkout page
5. ⬜ Create order confirmation page
6. ⬜ Set up webhook handlers for order processing
7. ⬜ Add order confirmation emails
8. ⬜ Test payment flows (test mode)

### Phase 5: Optimization & Launch
**Goal:** Production-ready deployment

#### Tasks:
1. ⬜ SEO optimization (metadata, sitemap, robots.txt)
2. ⬜ Performance optimization (images, code splitting)
3. ⬜ Accessibility audit & fixes
4. ⬜ Mobile responsiveness testing
5. ⬜ Browser compatibility testing
6. ⬜ Set up analytics (Google Analytics/Plausible)
7. ⬜ Configure custom domain
8. ⬜ Launch production site

### Phase 6: Post-Launch
**Goal:** Enhance and maintain

#### Tasks:
1. ⬜ Monitor performance & errors
2. ⬜ Gather user feedback
3. ⬜ Add customer reviews/testimonials
4. ⬜ Implement email marketing integration (Mailchimp/SendGrid)
5. ⬜ Add inventory management
6. ⬜ Consider CMS migration if needed

---

## Site Structure Analysis (From Original HTML)

### Identified Components to Build:
1. **Header/Navigation**
   - Logo
   - Menu (responsive)
   - Language selector (if needed)
   - Shopping cart icon

2. **Hero Section**
   - Full-width background
   - Call-to-action buttons

3. **Product Gallery**
   - Grid layout
   - Hover effects
   - Image optimization

4. **Footer**
   - Links
   - Social media
   - Copyright

5. **Forms**
   - Contact form
   - Newsletter signup

### Design Elements to Extract:
- Color palette (from CSS variables)
- Font families (Helvetica/Madefor alternatives)
- Spacing system
- Border radius values
- Shadow styles
- Animation transitions

---

## Asset Migration Strategy

### Images
- **Source:** Will be provided in separate folder
- **Format:** Convert to WebP for optimization
- **Strategy:** Use Next.js Image component for automatic optimization
- **Naming:** Use kebab-case, descriptive names

### Fonts
- Replace Wix proprietary fonts with Google Fonts or similar
- Options: Inter, Roboto, Open Sans, Montserrat

### Icons
- Extract any custom icons
- Use React Icons library for common icons

---

## Development Environment Setup

### Required Tools:
```bash
- Node.js 18+ (LTS)
- npm or yarn
- Git
- VS Code (recommended)
- VS Code Extensions:
  - ES7+ React/Redux/React-Native snippets
  - Tailwind CSS IntelliSense
  - Prettier
  - ESLint
```

### Project Initialization:
```bash
npx create-next-app@latest adama-soaps-site --typescript --tailwind --app --eslint
cd adama-soaps-site
```

---

## Testing Strategy

### Manual Testing Checklist:
- [ ] All pages load correctly
- [ ] Navigation works on all pages
- [ ] Forms submit successfully
- [ ] Cart add/remove/update works
- [ ] Checkout flow completes
- [ ] Payment processing works
- [ ] Mobile responsive on all pages
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Accessibility (keyboard navigation, screen readers)

### Automated Testing (Future):
- Jest for unit tests
- Playwright/Cypress for E2E tests

---

## Launch Checklist

- [ ] Custom domain configured
- [ ] SSL certificate active (automatic with Vercel)
- [ ] All forms tested
- [ ] Payment flows tested in production mode
- [ ] Analytics installed
- [ ] Sitemap submitted to Google
- [ ] Social media cards configured (OG tags)
- [ ] Favicon and app icons added
- [ ] 404 page created
- [ ] Loading states implemented
- [ ] Error boundaries added
- [ ] Privacy policy & terms published
- [ ] Contact information verified
- [ ] Backup/export strategy in place

---

## Current Status: Phase 1 - Planning Complete ✅

**Next Steps:**
1. Read and analyze original site structure
2. Extract design tokens (colors, fonts, spacing)
3. Set up Next.js project
4. Create component architecture plan

---

## Notes & Decisions

### Design Decisions:
- Using clean URL structure for better SEO
- Stripe Checkout for Phase 1 (easier, hosted)
- Can migrate to Stripe Payment Intents later for custom flow
- File-based content management initially (can migrate to CMS later)

### Technical Decisions:
- App Router (Next.js 14+) for better performance
- Tailwind CSS for rapid development
- TypeScript for type safety
- Server Components where possible for better performance

### Future Enhancements:
- Admin dashboard for product management
- Customer accounts & order history
- Wholesale/bulk pricing
- Gift cards
- Subscription boxes
- Multi-language support (if needed)

---

*Last Updated: December 22, 2024*
