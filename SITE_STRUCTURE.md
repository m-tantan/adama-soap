# Adama Soaps Site Structure Analysis

**Analysis Date**: December 22, 2024  
**Source**: Original Soaps site.html (Wix export)

---

## Product Catalog Discovered

### 12 Products Identified:

1. **CLC Soap (Coffee-Lemon-Cedar)** - Best Seller
   - Price: €6.00
   - Slug: `ceramic-flower-vase` (note: slug mismatch - actual product is soap)
   - Images: `72e571_b7d9cd64812e4cc2ac9c5f16ad9c78fb~mv2.png` (1024x1024)
   - Ribbon: "Best Seller"

2. **Minimalist Tote Bag**
   - Price: €20.00
   - Slug: `minimalist-tote-bag`
   - Images: 
     - `22e53e_07a8336264e94f07843e4f6ec8224169~mv2.jpg` (4000x4000)
     - `22e53e_9a8e513558f2438eb8e6dd6c6d6cdbf5~mv2.jpg` (3522x3522)

3. **Hydrating Eye Serum - Pre Order**
   - Price: €56.00
   - Slug: `hydrating-eye-serum`
   - Images:
     - `22e53e_45964e1ca2d844958c7348510063a4df~mv2.jpg` (3941x3941)
     - `22e53e_87b5aa2bd35b4183890ed87ca496e67f~mv2.jpg` (4000x4000)
   - Button: "Pre-Order" (different from "Add to Cart")

4. **Knitted Golf Sweater**
   - Price: €275.00
   - Slug: `knitted-golf-sweater`
   - Images:
     - `22e53e_a383423cefa645b3be584349a6071bc0~mv2.jpg` (2662x2662)
     - `22e53e_008b06daf2e844eb9b1626f6c8ea93bd~mv2.jpg` (3007x3007)

5. **Round Eyeglasses** - New
   - Price: €80.00
   - Slug: `round-eyeglasses`
   - Images:
     - `22e53e_56f1f1a7011f4352b97a7b2334c63d05~mv2.jpg` (3708x3709)
     - `22e53e_0bad35f84f1a4718b1f5a0e14732f930~mv2.jpg` (2938x2938)
   - Ribbon: "New"

6. **Solid Wood Chair**
   - Price: €690.00
   - Slug: `solid-wood-chair`
   - Images:
     - `22e53e_c93a1b96015f4f548df8d691e4b75f43~mv2.jpg` (4000x4000)
     - `22e53e_d2475ef5e62b4727850754bb0e3a3d0f~mv2.jpg` (2000x2000)

7. **Foaming Facial Cleanser**
   - Price: €85.00
   - Slug: `foaming-facial-cleanser`
   - Images:
     - `22e53e_ee2ff808d8aa4e47a793cef6550d2306~mv2.jpg` (4000x4000)
     - `22e53e_a571568d7de04e979145ac6dc1a9f00d~mv2.jpg` (3330x3329)

8. **Baseball Cap** - Sale
   - Regular Price: €129.00
   - Sale Price: €68.00
   - Slug: `baseball-cap`
   - Images:
     - `22e53e_71aca8b5483a4e5f80fb33cf76f9bc84~mv2.jpg` (4000x4000)
     - `22e53e_70f8de4fae82472aa2e1e1c9d4fac4fa~mv2.jpg` (2250x2250)
   - Ribbon: "Sale"

9. **Stainless Steel Water Bottle**
   - Price: €199.00
   - Slug: `stainless-steel-water-bottle`
   - Images:
     - `22e53e_1f43490f7e1845a5bf333f2784508a91~mv2.jpg` (4000x4000)
     - `22e53e_831ecd8998c14d6db1aab3c12c32fcb6~mv2.jpg` (4000x4000)

10. **Essential Oil Diffuser**
    - Price: €119.00
    - Slug: `essential-oil-diffuser`
    - Images:
      - `22e53e_b231b9c8053942b49508f464049db5c9~mv2.jpg` (2000x2000)
      - `22e53e_9d6ef0a55ff4434c9fa4af0e3b8e92a9~mv2.jpg` (2895x2895)

11. **Textured Loop Earrings**
    - Price: €269.00
    - Slug: `textured-loop-earrings`
    - Images:
      - `22e53e_8cbcee6500094796a3fc3730d52840f1~mv2.jpg` (3000x3000)
      - `22e53e_7157f1b241bd4a1c8f3360be859fde55~mv2.jpg` (2000x2000)

12. **Crew T-Shirt**
    - Price: €120.00
    - Slug: `crew-t-shirt`
    - Images:
      - `22e53e_10c04dbf48294c92b8bf55ef38654f8a~mv2.jpg` (3716x3716)
      - `22e53e_8d171558c9cb452ab1ca1e8a3a359c32~mv2.jpg` (4000x4000)

### Product Gallery Features:
- **Layout**: Swiper slider with left/right arrow navigation
- **Display**: 12 products total (`--totalNumberOfProducts:12`)
- **Image Hover**: Secondary image on hover (each product has 2 images)
- **Add to Cart**: Icon button on image hover with shopping cart icon
- **Product Ribbons**: "Best Seller", "New", "Sale" badges
- **Price Display**: Regular price + sale price support

---

## Page Structure

### Main Sections (in order):

1. **Header/Navigation** (SITE_HEADER)
   - Logo: Adama Soaps
   - Navigation menu (items not fully visible in analysis)
   - Language selector
   - Cart icon (likely)

2. **Hero Section** (PAGES_CONTAINER)
   - Main content area
   - Product gallery slider

3. **Our Story Section** (comp-mhut8ve72)
   - Two-column layout:
     - **Left Column**: Image (Denise + Yoav.jpeg - 1200x1599)
       - Image: `72e571_460c1cf971cb460aa83ea9a99633d5f8~mv2.jpeg`
     - **Right Column**: Text content
       - **Title**: "Our Story" (55px, font_3)
       - **Who We Are**: "At Adama Soaps, we pride ourselves on creating natural, eco-friendly soaps from used coffee grounds..."
       - **Our Mission**: "We strive to promote sustainability through our handcrafted soaps..."
       - **Why**: "Our commitment to the environment guides every step..."

4. **Location Map Section** (comp-mid6t8nl)
   - **Heading**: "We turn their coffee waste into soaps — you'll find Adama available in these cafés." (37px, font_4)
   - **Map Component**: Store location map (iframe)

5. **Follow Us Section** (comp-mhut8vf4)
   - **Heading**: "Follow Us" (55px, font_3, color_46)
   - **Instagram Gallery**: Pro Gallery component with 4 placeholder images
   - **Username Link**: @wix (Instagram)
   - **Load More Button**: "Load More" button

6. **Footer** (SITE_FOOTER)
   - Three-column layout:
     - **Column 1**: Brand & Social
       - "Adama Soaps" (37px, font_4)
     - **Column 2**: Contact Info
       - Phone: 015730104878
       - Email: info@mysite.com
       - Address: Holzstr.11 2/a, Germany
       - Social Media Icons: Facebook, Instagram, X (Twitter), TikTok
     - **Column 3**: Policy Links
       - Privacy Policy
       - Accessibility Statement
       - Shipping Policy
       - Terms & Conditions
       - Refund Policy
   - **Newsletter Signup**:
     - Heading: "Stay in Touch" (19px, font_7)
     - Email input field
     - Checkbox: "Yes, subscribe me to your newsletter."
     - Submit button: "Subscribe"
   - **Copyright**: "© 2035 by Adama Soaps. Powered and secured by Wix"

---

## Component Patterns Identified

### Product Gallery:
- **Swiper Component**: Horizontal slider with navigation arrows
- **Product Card Structure**:
  ```
  - Product Image Container (with hover effect for 2nd image)
  - Ribbon Badge (Best Seller / New / Sale)
  - Add to Cart Button (icon on image hover)
  - Product Name
  - Price Display (regular + sale price support)
  ```

### Gallery Layout Options:
- Slider mode (current)
- Thumbnails
- Columns
- Slideshow

### Hover Effects Available:
- zoom-in-on-hover
- tilt-on-hover
- blur-on-hover
- grayscale-on-hover
- shrink-on-hover
- invert-on-hover
- color-in-on-hover
- darkened-on-hover
- fade-in
- expand
- slide-up/down/left/right

---

## Footer Links & Pages

### Footer Policy Pages (currently blank Wix pages):
1. `/blank` → Privacy Policy
2. `/blank-1` → Accessibility Statement
3. `/blank-2` → Shipping Policy
4. `/blank-3` → Terms & Conditions
5. `/blank-4` → Refund Policy

### Social Media Links:
- Facebook: https://www.facebook.com/wix (placeholder)
- Instagram: https://www.instagram.com/wix (placeholder)
- X (Twitter): https://x.com/wix (placeholder)
- TikTok: https://www.tiktok.com/@wix (placeholder)

---

## Contact Information

- **Phone**: 015730104878
- **Email**: info@mysite.com
- **Address**: Holzstr.11 2/a, Germany

---

## Image Asset Summary

### Key Images Identified:
- **Logo**: Adama logo PNG (in Original Soaps site_files/)
- **Product Images**: 24 total product images (12 products × 2 images each)
- **Our Story Photo**: Denise + Yoav image (1200x1599)
- **Social Icons**: Facebook, Instagram, X, TikTok icons
- **Instagram Gallery**: 4 placeholder images

### Image Formats:
- **PNG**: Logo, some product images
- **JPG**: Most product images
- **Sizes**: Range from 2000x2000 to 4000x4000 (high resolution)

### Image CDN:
- Wix Static: `static.wixstatic.com`
- Image URIs follow pattern: `22e53e_[hash]~mv2.jpg`

---

## Critical Findings for Migration

### ⚠️ Important Notes:

1. **Product Data Mismatch**: 
   - Site is for "Adama Soaps" (coffee ground soaps)
   - But catalog contains unrelated products (tote bags, eyeglasses, furniture, etc.)
   - Only 1 actual soap product found: "CLC Soap (Coffee-Lemon-Cedar)" - €6.00
   - **ACTION NEEDED**: User must provide actual soap product catalog

2. **Slug Inconsistency**:
   - CLC Soap has slug `ceramic-flower-vase` (wrong product)
   - Suggests Wix demo/template content mixed with real data

3. **Placeholder Content**:
   - Social media links point to Wix official accounts
   - Instagram gallery shows demo images
   - Footer policy pages are blank

4. **Location Map**:
   - Map component present but iframe source not accessible
   - Shows partner cafés where Adama soaps are sold

5. **Business Model**:
   - B2C: Direct sales (€6 soap)
   - B2B: Distribution through cafés (coffee ground recycling partnership)

---

## Next Steps

### Before Phase 1 Implementation:

1. **✅ CRITICAL**: Get actual soap product catalog from user
   - Product names, descriptions, prices
   - High-resolution product images
   - Ingredient lists, benefits, scent profiles
   - Stock status, variants (sizes, scents)

2. **Update contact information**:
   - Real phone number
   - Real email address
   - Confirm physical address

3. **Get social media handles**:
   - Actual Facebook page
   - Actual Instagram account
   - Any other social platforms

4. **Get café partner information**:
   - List of cafés selling Adama soaps
   - Locations for map integration

5. **Policy content**:
   - Privacy Policy text
   - Shipping Policy details
   - Refund/Return policy
   - Terms & Conditions

---

## Typography Scale Identified

### Headings:
- **H2 (Main)**: font_3, 55px - "Our Story", "Follow Us"
- **H3**: font_6, 20px - "Who We Are", "Our Mission", "Why"
- **H4**: font_4, 37px - Section subheadings
- **H2 (Footer)**: font_2 - Instagram section

### Body Text:
- **Paragraph**: font_8, 17px - Body copy
- **Small**: font_9, 15px - Copyright text
- **Medium**: font_7, 19px - "Stay in Touch"
- **Product Name**: typography-11-runningText, priority-7-primary
- **Price**: Various price display classes

---

## Color References Found

### Primary Colors:
- `--color_11`: Background
- `--color_14`: Hover text
- `--color_15`: Primary text
- `--color_46`: Accent color (used in "Follow Us" heading)

### Full Color Palette:
- Colors: `--color_11` through `--color_65` defined
- Fonts: `--font_0` through `--font_10` defined

**Note**: Actual color values need extraction from embedded CSS (Task 2: Design System)

---

## Status: ✅ Task 1 Complete

**Site structure analyzed successfully**. Ready to proceed with:
- Task 2: Design System Extraction
- Task 3: Asset Cataloging
- Task 4: Component Architecture Planning

**BLOCKER**: Need actual soap product catalog before full migration can proceed.
