# Homepage Design Gap Analysis: Wix Original vs Next.js Implementation

## Executive Summary
This document contains a comprehensive analysis of visual and functional differences between the original Wix homepage and the current Next.js implementation.

---

## 1. HEADER & NAVIGATION

### Logo Issues
- ❌ **Logo Missing/Different**: The Wix original shows "Adama for Website.png" logo in the header. Next.js version shows a different or smaller logo
- ❌ **Logo Position**: Logo appears to be in different position/size

### Navigation Menu
- ❌ **Menu Items Different**: 
  - Wix: Home, Welcome, Best Sellers, About, Instagram, More
  - Next.js: Home, Shop, About, Contact
- ❌ **Navigation Style**: Wix has centered horizontal navigation, Next.js appears different
- ❌ **Language Selector Missing**: Wix has "Language Selector: English" button in header
- ❌ **Cart Icon Style**: Cart icon styling differs between versions

### Header Background
- ❌ **Header is transparent/overlay** on Wix original over hero image
- ❌ **Header appears solid white** in Next.js version

---

## 2. HERO SECTION

### Hero Title
- ❌ **Different Text**: 
  - Wix: "Crafted from Used Coffee Grounds"
  - Next.js: "Natural Soaps from Coffee Grounds"

### Hero Subtitle/Description
- ❌ **Different Text**:
  - Wix: "Explore our range of eco-friendly soaps crafted with care using natural ingredients, designed to rejuvenate your skin while honoring the planet."
  - Next.js: "Eco-friendly. Handcrafted. Sustainable."

### Hero Background
- ❌ **Different Background Style**:
  - Wix: Dark olive/brown solid color (#585843 or similar)
  - Next.js: Green gradient (rgb(64, 124, 81) to rgb(177, 211, 187))

### Hero Layout
- ❌ **Missing Background Image**: Wix has large soap product images in the hero section
- ❌ **Text Color**: Wix appears to have white/cream text, Next.js may differ

### Button Styling
- ⚠️ **Button may need adjustment**: "Shop Now" button styling might differ slightly

---

## 3. BEST SELLERS / PRODUCT SECTION

### Section Title
- ❌ **Different Title**:
  - Wix: "Best Sellers" with a "Discover" link
  - Next.js: "Our Soaps"

### Product Display
- ❌ **Layout Completely Different**:
  - Wix: Horizontal scrolling carousel/slider with 2 visible products at a time
  - Next.js: Static grid showing 4 products

### Products Shown
- ❌ **Different Products**:
  - Wix: "Calm" (€9.50, marked New), "Forest" (€9.50)
  - Next.js: CLC Soap, Lavender Bliss, Mint Refresh, Citrus Burst (all €6.00 or less)

### Product Card Design
- ❌ **Badge Style**: Wix has circular "New" badge, Next.js has corner badges
- ❌ **Image Presentation**: Different aspect ratios/sizes
- ❌ **Price Display**: Different styling

### Background Color
- ❌ **Section Background**:
  - Wix: Dark olive/brown background (#585843 or similar)
  - Next.js: White background

### Navigation Controls
- ❌ **Missing Carousel Controls**: Wix has prev/next arrows for product slider
- ❌ **Missing "Discover" Link**: Wix has a "Discover" link next to title

---

## 4. OUR STORY SECTION

### Layout Orientation
- ✅ **Similar Layout**: Both have side-by-side image and text

### Image
- ✅ **Same Image**: "Denise + Yoav.jpeg" / "denise-yoav.jpg" appears to be the same

### Background Color
- ❌ **Different Background**:
  - Wix: Dark olive/brown (#585843 or similar) 
  - Next.js: Cream/beige (rgb(254, 250, 241))

### Text Content
- ⚠️ **Minor Text Difference** in "Why" paragraph:
  - Wix: "...from sourcing materials to packaging, ensuring that your choice of soap is one that supports a healthy planet."
  - Next.js: "...from sourcing materials to packaging our soaps."

### Text Color
- ❌ **Text Color**:
  - Wix: Light/white text (on dark background)
  - Next.js: Dark text (rgb(64, 63, 43)) on light background

---

## 5. CAFE PARTNERS / MAP SECTION

### Entire Section Missing
- ❌ **MISSING SECTION**: Wix has entire section titled "We turn their coffee waste into soaps — you'll find Adama available in these cafés."
- ❌ **Missing Interactive Map**: Shows locations of partner cafés
- ❌ **Missing Partner List**:
  - Online Shop
  - Wagners Juicery
  - Marita Cafe
- ❌ **Missing Contact Details** for each café location

---

## 6. FOLLOW US / INSTAGRAM SECTION

### Section Title
- ✅ **Same Title**: "Follow Us"

### Instagram Handle
- ✅ **Same Handle**: @wix link

### Instagram Feed/Gallery
- ❌ **MISSING INSTAGRAM GALLERY**: Wix shows 4 Instagram post images in a 2x2 grid
- ❌ **No Visual Content**: Next.js only shows the text link, no images

### Background
- ❌ **Background Color**:
  - Wix: Dark olive/brown background
  - Next.js: White background

---

## 7. FOOTER

### Layout
- ⚠️ **Different Structure**: Footer layouts differ

### Background
- ❌ **Background Color**:
  - Wix: Dark olive/brown
  - Next.js: Likely different

### Address Format
- ⚠️ **Address Display**:
  - Wix: "Holzstr.11 2/a, 80469 Munich Germany" (on separate lines)
  - Next.js: "Holzstr.11 2/a, Germany"

### Newsletter/Email Signup
- ⚠️ **Form Differences**: May have different styling/layout
- ❌ **Missing Checkbox**: Wix has "Yes, subscribe me to your newsletter" checkbox

---

## 8. OVERALL DESIGN SYSTEM

### Color Palette
- ❌ **PRIMARY DARK COLOR**: 
  - Wix uses consistent dark olive/brown (#585843 or similar) throughout
  - Next.js uses mixed greens and other colors

### Typography
- ⚠️ **Font Rendering**: May differ slightly in weights/sizes

### Spacing/Padding
- ⚠️ **Section Spacing**: Appears to differ between sections

### Image Aspect Ratios
- ⚠️ **Product Images**: Different aspect ratios for product cards

---

## PRIORITY FIXES (Ordered by Visual Impact)

### CRITICAL (Must Fix)
1. Fix hero section background (solid dark olive instead of green gradient)
2. Change hero title and subtitle text
3. Add soap product images to hero background
4. Change "Our Soaps" to "Best Sellers" section
5. Convert product grid to carousel/slider
6. Fix section background colors (dark olive for Best Sellers, Follow Us)
7. Change Our Story section background to dark olive and text to light color
8. Add missing Café Partners/Map section
9. Add Instagram gallery images to Follow Us section

### HIGH (Should Fix)
10. Update navigation menu items
11. Add language selector to header
12. Fix logo in header
13. Update footer background to dark olive
14. Update footer address to full format
15. Add newsletter checkbox to footer form

### MEDIUM (Nice to Have)
16. Fine-tune button styles
17. Adjust spacing/padding to match exactly
18. Update product cards to match Wix design
19. Add carousel navigation arrows
20. Add "Discover" link to Best Sellers section

---

## COLOR CODES TO USE

Based on visual analysis of Wix original:
- **Primary Dark**: #585843 or rgb(88, 88, 67) - dark olive/brown
- **Text on Dark**: #FFFFFF or #F5F5DC - white/cream
- **Accent/Links**: Purple/blue for links

## NEXT STEPS

Will proceed to implement fixes in order of priority, starting with the most visually impactful changes.
