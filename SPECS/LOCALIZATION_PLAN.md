# Localization Plan: German Language Support

**Project:** Adama Soaps  
**Target Language:** German (de)  
**Framework:** Next.js 15 (App Router)  
**Recommended Library:** next-intl  
**Date Created:** January 3, 2026  
**Status:** Planning Phase

---

## Executive Summary

This document outlines the comprehensive plan to add German localization to the Adama Soaps e-commerce website. The project currently has all text hardcoded in English and requires translation of approximately **219 strings** across 15+ files.

---

## Current State Analysis

### Localization Gaps Identified

- ❌ No i18n library implemented
- ❌ All text is hardcoded in English
- ❌ No locale routing structure
- ❌ Product data not structured for translations
- ❌ No language switcher in UI
- ❌ Metadata not localized

### Files Containing Hardcoded Text

| File | String Count | Complexity |
|------|--------------|------------|
| [app/page.tsx](../app/page.tsx) | ~78 | High (hero, sections, CTAs) |
| [app/about/page.tsx](../app/about/page.tsx) | ~19 | Medium (storytelling, humor) |
| [components/Header.tsx](../components/Header.tsx) | ~11 | Low (navigation) |
| [components/Footer.tsx](../components/Footer.tsx) | ~25 | Medium (forms, policies) |
| [data/products.ts](../data/products.ts) | ~60 | High (product catalog) |
| [components/ProductCard.tsx](../components/ProductCard.tsx) | ~2 | Low |
| [components/BestSellersCarousel.tsx](../components/BestSellersCarousel.tsx) | ~2 | Low |
| [app/shop/page.tsx](../app/shop/page.tsx) | ~1 | Low |
| [app/shop/[slug]/page.tsx](../app/shop/[slug]/page.tsx) | ~6 | Low |
| [app/layout.tsx](../app/layout.tsx) | ~3 | Low (metadata) |

**Total:** ~219 strings requiring translation

---

## Implementation Strategy

### Phase 1: Setup & Configuration

#### Step 1.1: Install Dependencies
```bash
npm install next-intl
```

**Estimated Time:** 5 minutes

---

#### Step 1.2: Create Folder Structure

Create the following directories and files:

```
adama-soaps/
├── i18n/
│   └── request.ts          # i18n configuration
├── messages/
│   ├── en.json            # English translations
│   └── de.json            # German translations
├── middleware.ts          # Locale routing middleware
└── app/
    └── [locale]/          # Locale-based routing
        ├── layout.tsx
        ├── page.tsx
        ├── about/
        │   └── page.tsx
        └── shop/
            ├── page.tsx
            └── [slug]/
                └── page.tsx
```

**Files to Create:**
- `middleware.ts` (root)
- `i18n/request.ts`
- `messages/en.json`
- `messages/de.json`
- `app/[locale]/layout.tsx`

**Files to Move:**
- `app/page.tsx` → `app/[locale]/page.tsx`
- `app/about/page.tsx` → `app/[locale]/about/page.tsx`
- `app/shop/page.tsx` → `app/[locale]/shop/page.tsx`
- `app/shop/[slug]/page.tsx` → `app/[locale]/shop/[slug]/page.tsx`

**Files to Modify:**
- `app/layout.tsx` (update for locale parameter)
- `next.config.ts` (add locale configuration)

**Estimated Time:** 30 minutes

---

#### Step 1.3: Configure Middleware

Create `middleware.ts` in the root directory:

```typescript
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // List of supported locales
  locales: ['en', 'de'],
  
  // Default locale
  defaultLocale: 'en',
  
  // Locale prefix strategy
  localePrefix: 'always' // Always show locale in URL
});

export const config = {
  // Match all pathnames except API routes, Next.js internals, and static files
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
```

**Estimated Time:** 15 minutes

---

#### Step 1.4: Create i18n Configuration

Create `i18n/request.ts`:

```typescript
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`../messages/${locale}.json`)).default
}));
```

**Estimated Time:** 10 minutes

---

#### Step 1.5: Update Next.js Configuration

Modify [next.config.ts](../next.config.ts):

```typescript
import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: 'export',
  basePath: isProd ? '/adama-soap' : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true, // Recommended for static export with locales
};

export default nextConfig;
```

**Estimated Time:** 10 minutes

---

### Phase 2: Translation Files

#### Step 2.1: Extract English Strings

Create `messages/en.json` with all current English text organized by section:

```json
{
  "navigation": {
    "home": "Home",
    "bestSellers": "Best Sellers",
    "about": "About",
    "instagram": "Instagram",
    "more": "More",
    "cart": "Cart"
  },
  "hero": {
    "title": "Crafted from Used Coffee Grounds",
    "description": "Explore our range of eco-friendly soaps...",
    "cta": "Shop Now"
  },
  "products": {
    "calm": {
      "name": "Calm",
      "description": "A soothing soap crafted with calming essential oils...",
      "ingredients": [
        "Recycled Coffee Grounds",
        "Coconut Oil",
        "Olive Oil",
        "Lavender Essential Oil",
        "Chamomile",
        "Shea Butter"
      ]
    }
    // ... additional products
  },
  "footer": {
    "contact": "Contact",
    "policies": "Policies",
    "stayInTouch": "Stay in Touch"
    // ... additional footer strings
  }
  // ... additional sections
}
```

**Estimated Time:** 2 hours (careful extraction and organization)

---

#### Step 2.2: Create German Translations

Create `messages/de.json` with German translations:

```json
{
  "navigation": {
    "home": "Startseite",
    "bestSellers": "Bestseller",
    "about": "Über uns",
    "instagram": "Instagram",
    "more": "Mehr",
    "cart": "Warenkorb"
  },
  "hero": {
    "title": "Hergestellt aus gebrauchtem Kaffeesatz",
    "description": "Entdecken Sie unsere Auswahl an umweltfreundlichen Seifen...",
    "cta": "Jetzt einkaufen"
  },
  "products": {
    "calm": {
      "name": "Ruhe",
      "description": "Eine beruhigende Seife mit beruhigenden ätherischen Ölen...",
      "ingredients": [
        "Recycelter Kaffeesatz",
        "Kokosöl",
        "Olivenöl",
        "Lavendel ätherisches Öl",
        "Kamille",
        "Sheabutter"
      ]
    }
    // ... additional products
  }
  // ... additional sections
}
```

**Estimated Time:** 4-6 hours (translation + review)

**Recommendations:**
- Use professional translator or native German speaker
- Pay special attention to the "About" page humor/puns
- Keep brand name "Adama Soaps" untranslated
- Consider cultural nuances in marketing copy

---

### Phase 3: Update Application Structure

#### Step 3.1: Update Root Layout

Modify [app/layout.tsx](../app/layout.tsx):

```typescript
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children; // Just pass through to locale-specific layout
}
```

**Estimated Time:** 15 minutes

---

#### Step 3.2: Create Locale Layout

Create `app/[locale]/layout.tsx`:

```typescript
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'de' }];
}

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const messages = await getMessages({ locale });
  
  return {
    title: messages.metadata?.title || 'Adama Soaps',
    description: messages.metadata?.description || 'Natural handcrafted soaps',
  };
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locales = ['en', 'de'];
  
  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
```

**Estimated Time:** 30 minutes

---

#### Step 3.3: Move and Update Page Files

Move pages to locale folder and update with translation hooks:

**Example for `app/[locale]/page.tsx`:**

```typescript
import { useTranslations } from 'next-intl';
import BestSellersCarousel from '@/components/BestSellersCarousel';

export default function HomePage() {
  const t = useTranslations();

  return (
    <div>
      <section className="hero">
        <h1>{t('hero.title')}</h1>
        <p>{t('hero.description')}</p>
        <button>{t('hero.cta')}</button>
      </section>
      
      <section className="best-sellers">
        <h2>{t('sections.bestSellers')}</h2>
        <BestSellersCarousel />
      </section>
      
      {/* Additional sections */}
    </div>
  );
}
```

**Files to Update:**
1. `app/[locale]/page.tsx` (homepage)
2. `app/[locale]/about/page.tsx`
3. `app/[locale]/shop/page.tsx`
4. `app/[locale]/shop/[slug]/page.tsx`

**Estimated Time:** 2-3 hours

---

### Phase 4: Update Components

#### Step 4.1: Update Header Component

Modify [components/Header.tsx](../components/Header.tsx):

```typescript
'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Header() {
  const t = useTranslations('navigation');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    // Remove current locale from pathname and add new one
    const pathWithoutLocale = pathname.replace(`/${locale}`, '');
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  return (
    <header>
      <nav>
        <Link href={`/${locale}`}>{t('home')}</Link>
        <Link href={`/${locale}/shop`}>{t('bestSellers')}</Link>
        <Link href={`/${locale}/about`}>{t('about')}</Link>
        
        {/* Language Switcher */}
        <select 
          value={locale} 
          onChange={(e) => switchLocale(e.target.value)}
          aria-label={t('selectLanguage')}
        >
          <option value="en">English</option>
          <option value="de">Deutsch</option>
        </select>
        
        <Link href={`/${locale}/cart`}>
          {t('cart')} (0)
        </Link>
      </nav>
    </header>
  );
}
```

**Estimated Time:** 1 hour

---

#### Step 4.2: Update Footer Component

Modify [components/Footer.tsx](../components/Footer.tsx) to use `useTranslations()` hook.

**Estimated Time:** 45 minutes

---

#### Step 4.3: Update Product Components

Modify the following components:
- [components/ProductCard.tsx](../components/ProductCard.tsx)
- [components/BestSellersCarousel.tsx](../components/BestSellersCarousel.tsx)

**Estimated Time:** 1 hour

---

### Phase 5: Restructure Product Data

#### Step 5.1: Update Products Data Structure

Modify [data/products.ts](../data/products.ts):

**Current Structure:**
```typescript
export const products = [
  {
    id: '1',
    name: 'Calm',
    slug: 'calm',
    description: 'A soothing soap...',
    // ...
  }
];
```

**New Structure (Remove translatable content):**
```typescript
export const products = [
  {
    id: '1',
    slug: 'calm',
    price: 9.50,
    currency: '€',
    images: [
      '/images/products/calm/calm1.jpg',
      '/images/products/calm/calm2.jpg',
    ],
    mainImage: '/images/products/calm/calm1.jpg',
    ribbon: 'new', // Translation key reference
    category: 'soaps',
  },
  // ... other products
];
```

**Move translations to `messages/en.json` and `messages/de.json`:**

```json
{
  "products": {
    "calm": {
      "name": "Calm",
      "description": "A soothing soap crafted with calming essential oils and coffee grounds for gentle exfoliation.",
      "ingredients": [
        "Recycled Coffee Grounds",
        "Coconut Oil",
        "Olive Oil",
        "Lavender Essential Oil",
        "Chamomile",
        "Shea Butter"
      ]
    },
    "forest": {
      "name": "Forest",
      "description": "Earthy forest-inspired soap...",
      "ingredients": [...]
    }
    // ... all products
  },
  "ribbons": {
    "new": "New",
    "bestSeller": "Best Seller",
    "sale": "Sale"
  }
}
```

**Estimated Time:** 1.5 hours

---

#### Step 5.2: Update Product Display Components

Update components to fetch product translations:

```typescript
'use client';

import { useTranslations, useLocale } from 'next-intl';
import { products } from '@/data/products';

export default function ProductDetail({ params }: { params: { slug: string } }) {
  const t = useTranslations('products');
  const locale = useLocale();
  
  const product = products.find(p => p.slug === params.slug);
  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <h1>{t(`${product.slug}.name`)}</h1>
      <p>{t(`${product.slug}.description`)}</p>
      <ul>
        {t.raw(`${product.slug}.ingredients`).map((ingredient: string, i: number) => (
          <li key={i}>{ingredient}</li>
        ))}
      </ul>
      <p>{product.price} {product.currency}</p>
    </div>
  );
}
```

**Estimated Time:** 1 hour

---

### Phase 6: Testing & Quality Assurance

#### Step 6.1: Functionality Testing

**Test Checklist:**
- [ ] All pages render correctly in English
- [ ] All pages render correctly in German
- [ ] Language switcher works on all pages
- [ ] URLs are properly formatted (`/en/...`, `/de/...`)
- [ ] Navigation links maintain locale
- [ ] Product data displays correctly in both languages
- [ ] Forms work in both languages
- [ ] Metadata is localized correctly
- [ ] No console errors or warnings

**Estimated Time:** 2 hours

---

#### Step 6.2: Translation Quality Review

- [ ] All strings are translated (no English in German pages)
- [ ] Grammar and spelling are correct
- [ ] Cultural appropriateness verified
- [ ] Brand voice maintained
- [ ] Humor/puns adapted appropriately (About page)
- [ ] Technical terms translated correctly

**Recommendation:** Have a native German speaker review all translations

**Estimated Time:** 2-3 hours

---

#### Step 6.3: SEO & Accessibility

- [ ] `lang` attribute set correctly on `<html>` tag
- [ ] `hreflang` tags added if needed (for multi-domain setup)
- [ ] Alt texts translated
- [ ] ARIA labels translated
- [ ] Form labels and placeholders translated
- [ ] Screen reader testing in both languages

**Estimated Time:** 1 hour

---

### Phase 7: Build & Deployment

#### Step 7.1: Static Export Configuration

Verify static export works with locales:

```bash
npm run build
```

Expected output structure:
```
out/
├── en/
│   ├── index.html
│   ├── about/
│   ├── shop/
│   └── ...
└── de/
    ├── index.html
    ├── about/
    ├── shop/
    └── ...
```

**Estimated Time:** 30 minutes

---

#### Step 7.2: Deployment

Update deployment configuration to handle locale routing:

- Configure base path redirects
- Set up default locale redirect (e.g., `/` → `/en`)
- Test on production environment

**Estimated Time:** 1 hour

---

## URL Structure

### Current URLs
```
/
/about
/shop
/shop/calm
```

### New Localized URLs
```
/en              (or / with redirect)
/en/about
/en/shop
/en/shop/calm

/de
/de/about        (or /de/uber-uns if translating slugs)
/de/shop
/de/shop/calm    (or /de/shop/ruhe if translating slugs)
```

**Recommendation:** Keep product slugs the same across languages for simpler management. Translate only page route segments if desired.

---

## Product Slugs Translation Strategy

### Option 1: Keep English Slugs (Recommended)
- **Pros:** Simpler, consistent, easier to manage
- **Cons:** URLs not fully localized
- **Example:** `/de/shop/calm`

### Option 2: Translate Slugs
- **Pros:** Fully localized URLs
- **Cons:** More complex, requires slug mapping
- **Example:** `/de/shop/ruhe`

**Recommendation:** Use Option 1 (keep English slugs) for initial implementation. Product names are often international, and mixing languages in URLs is acceptable.

---

## Translation Resources Needed

### Professional Translation
- **Estimated cost:** €0.10-0.15 per word
- **Total words:** ~1,500-2,000 words
- **Cost estimate:** €150-300

### Native Speaker Review
- **Hours needed:** 3-5 hours
- **Focus areas:**
  - Marketing copy
  - About page storytelling
  - Product descriptions
  - Cultural appropriateness

---

## Timeline Estimate

| Phase | Task | Time | Dependencies |
|-------|------|------|--------------|
| **1** | Setup & Configuration | 1.5 hours | None |
| **2** | Translation Files | 6-8 hours | Phase 1 |
| **3** | Update App Structure | 3-4 hours | Phase 2 |
| **4** | Update Components | 3 hours | Phase 3 |
| **5** | Restructure Product Data | 2.5 hours | Phase 3 |
| **6** | Testing & QA | 5-6 hours | Phase 5 |
| **7** | Build & Deployment | 1.5 hours | Phase 6 |

**Total Development Time:** 22-26 hours  
**Translation Time:** 6-8 hours (can be parallel)  
**Total Project Time:** ~3-4 days (with breaks and reviews)

---

## Risk Assessment

### High Risk
- ❗ **Translation Quality:** Poor translations damage brand credibility
  - **Mitigation:** Use professional translator + native speaker review

### Medium Risk
- ⚠️ **SEO Impact:** URL structure changes may affect search rankings
  - **Mitigation:** Implement proper redirects, use canonical tags
  
- ⚠️ **Build Complexity:** Static export with locales can increase build time
  - **Mitigation:** Monitor build performance, optimize if needed

### Low Risk
- ℹ️ **Code Complexity:** next-intl is well-documented and stable
  - **Mitigation:** Follow official documentation

---

## Success Criteria

✅ **Functionality**
- All pages accessible in both English and German
- Language switcher works on all pages
- No broken links or missing translations

✅ **Quality**
- Translations reviewed by native German speaker
- All UI elements properly localized
- Consistent tone and brand voice

✅ **Performance**
- Build completes successfully
- No significant performance degradation
- Static export works as expected

✅ **User Experience**
- Seamless language switching
- Locale preference remembered (if implementing cookies)
- Clear visual indicator of selected language

---

## Post-Implementation Tasks

1. **Analytics Setup**
   - Track language preference
   - Monitor page views by locale
   - Analyze user behavior patterns

2. **Content Management**
   - Establish process for keeping translations in sync
   - Create guidelines for adding new translatable content
   - Set up review cycle for translation updates

3. **SEO Optimization**
   - Submit sitemap with `hreflang` annotations
   - Verify Google Search Console for both locales
   - Monitor search rankings in German market

4. **Future Considerations**
   - Add more languages (French, Spanish, etc.)
   - Implement locale detection based on browser settings
   - Consider locale-specific content variations

---

## Key Files Reference

### New Files to Create
- `middleware.ts` - Locale routing
- `i18n/request.ts` - i18n configuration
- `messages/en.json` - English translations
- `messages/de.json` - German translations
- `app/[locale]/layout.tsx` - Localized layout

### Files to Modify
- [next.config.ts](../next.config.ts) - Add locale config
- [app/layout.tsx](../app/layout.tsx) - Update for locale parameter
- [components/Header.tsx](../components/Header.tsx) - Add language switcher
- [components/Footer.tsx](../components/Footer.tsx) - Use translations
- [components/ProductCard.tsx](../components/ProductCard.tsx) - Use translations
- [components/BestSellersCarousel.tsx](../components/BestSellersCarousel.tsx) - Use translations
- [data/products.ts](../data/products.ts) - Remove translatable content

### Files to Move
- `app/page.tsx` → `app/[locale]/page.tsx`
- `app/about/page.tsx` → `app/[locale]/about/page.tsx`
- `app/shop/page.tsx` → `app/[locale]/shop/page.tsx`
- `app/shop/[slug]/page.tsx` → `app/[locale]/shop/[slug]/page.tsx`

---

## Additional Resources

### Documentation
- [next-intl Documentation](https://next-intl-docs.vercel.app/)
- [Next.js Internationalization](https://nextjs.org/docs/app/building-your-application/routing/internationalization)
- [Static Export with i18n](https://next-intl-docs.vercel.app/docs/getting-started/app-router/with-i18n-routing)

### Translation Services
- DeepL (for initial drafts)
- Fiverr (for professional translation)
- Local German language meetups (for review)

---

## Appendix A: Special Translation Considerations

### About Page Humor
The About page contains English wordplay that may not translate directly:

**English:**
> "Armed with nothing but recycled coffee grounds (because apparently throwing them away is a grounds for divorce)..."

**Translation Challenges:**
- "grounds for divorce" - pun on coffee grounds
- May need creative adaptation in German

**Recommendation:** Work with translator to find equivalent German wordplay or adapt humor culturally.

---

## Appendix B: Sample Translation Structure

### Navigation Section
```json
{
  "navigation": {
    "home": "Home",
    "bestSellers": "Best Sellers",
    "about": "About",
    "shop": "Shop",
    "instagram": "Instagram",
    "more": "More",
    "cart": "Cart",
    "selectLanguage": "Select Language"
  }
}
```

### Product Section Template
```json
{
  "products": {
    "[slug]": {
      "name": "Product Name",
      "description": "Product description",
      "ingredients": [
        "Ingredient 1",
        "Ingredient 2"
      ]
    }
  }
}
```

### Common UI Elements
```json
{
  "common": {
    "addToCart": "Add to Cart",
    "price": "Price",
    "ingredients": "Ingredients",
    "madeFrom": "Made from recycled coffee grounds",
    "ecoFriendly": "Eco-friendly and sustainable",
    "handcraftedIn": "Handcrafted in Germany",
    "shopNow": "Shop Now",
    "learnMore": "Learn More",
    "viewProduct": "View Product"
  }
}
```

---

## Notes

- All time estimates assume one developer working focused hours
- Translation quality is critical - budget for professional services
- Consider starting with key pages (homepage, shop) before full implementation
- Monitor bundle size after adding translations
- Keep English as source of truth, sync German translations when content changes

---

**Document Version:** 1.0  
**Last Updated:** January 3, 2026  
**Next Review:** After Phase 1 completion
