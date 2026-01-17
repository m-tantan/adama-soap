---
name: compare-sites
description: Use Playwright MCP to systematically compare two websites (original vs rebuilt, staging vs production, deployed vs localhost). Identifies visual differences, missing features, CSS/styling issues, broken images, 404s, console errors, and functionality gaps. Triggered when asked to compare sites, find design gaps, check parity, or fix styling inconsistencies between environments.
---

## Process

### 1. Navigate to Both Sites

```javascript
// Navigate to original site
await page.goto('https://original-site.com');

// Navigate to new implementation
await page.goto('https://new-site.vercel.app');
// Or localhost
await page.goto('http://localhost:3000');
```

### 2. Visual Comparison - Take Screenshots

```javascript
// Full page screenshot
await page.screenshot({
  fullPage: true,
  scale: 'css',
  type: 'png'
});

// Viewport only (above the fold)
await page.screenshot({
  fullPage: false,
  scale: 'css',
  type: 'png'
});
```

**Compare screenshots visually for:**
- Layout differences
- Missing sections
- Color/styling inconsistencies
- Typography changes
- Spacing issues

### 3. Check Console Errors

```javascript
// View console messages from page load
// (Automatically captured during navigation)
```

**Look for:**
- `[ERROR]` - JavaScript errors
- `[WARNING]` - Performance warnings, deprecated APIs
- Failed resource loads (404s)
- CORS issues

### 4. Inspect Network Requests

```javascript
// Get all network requests including static resources
await page.evaluate(() => {
  return performance.getEntries()
    .filter(e => e.entryType === 'resource')
    .map(e => ({
      url: e.name,
      type: e.initiatorType,
      status: 'ok'
    }));
});
```

**Or use MCP tool:**
```javascript
browser_network_requests({ includeStatic: true })
```

**Check for:**
- 404 errors on images, CSS, JS files
- Incorrect paths (e.g., hardcoded base paths)
- Missing assets
- Failed API calls

### 5. Inspect Page Structure

```javascript
// Get page snapshot (semantic structure)
// (Automatically shown in page state)
```

**Use page snapshot to verify:**
- All navigation links present
- All sections exist (Hero, About, Products, Footer, etc.)
- Buttons and CTAs are visible
- Forms have all fields
- Social media links present

### 6. Check Specific Elements with JavaScript

```javascript
// Check if desktop nav is visible
await page.evaluate(() => {
  const desktopNav = document.querySelector('.hidden.md\\:flex');
  return {
    exists: !!desktopNav,
    display: desktopNav ? window.getComputedStyle(desktopNav).display : null,
    classes: desktopNav ? desktopNav.className : null
  };
});

// Check for specific CSS classes being generated
await page.evaluate(() => {
  const styles = Array.from(document.styleSheets)
    .flatMap(sheet => {
      try {
        return Array.from(sheet.cssRules || []);
      } catch (e) {
        return [];
      }
    })
    .filter(rule => rule.cssText && rule.cssText.includes('md:flex'))
    .map(rule => rule.cssText);
  
  return { found: styles.length, samples: styles.slice(0, 3) };
});

// Get all links and their properties
await page.evaluate(() => {
  return Array.from(document.querySelectorAll('nav a')).map(a => ({
    text: a.textContent,
    href: a.href,
    display: window.getComputedStyle(a).display,
    color: window.getComputedStyle(a).color
  }));
});

// Check viewport width and responsive behavior
await page.evaluate(() => {
  return {
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight,
    devicePixelRatio: window.devicePixelRatio
  };
});
```

### 7. Test Responsive Breakpoints

```javascript
// Resize browser to test mobile/tablet/desktop views
await page.setViewportSize({ width: 375, height: 667 });  // Mobile
await page.setViewportSize({ width: 768, height: 1024 }); // Tablet
await page.setViewportSize({ width: 1920, height: 1080 }); // Desktop
```

### 8. Test Interactive Elements

```javascript
// Click navigation items
await page.click('text=Shop');
await page.click('text=About');

// Fill forms
await page.fill('input[type="email"]', 'test@example.com');

// Hover over elements
await page.hover('.product-card');

// Check for hover effects, dropdowns, modals
```

---

## Comparison Checklist

### Visual & Layout
- [ ] Hero section matches (images, text, CTA buttons)
- [ ] Navigation bar complete (logo, menu items, cart)
- [ ] Footer matches (contact info, social links, policies)
- [ ] Color scheme identical
- [ ] Fonts and typography match
- [ ] Spacing and padding consistent
- [ ] Responsive breakpoints work correctly

### Functionality
- [ ] All links work and go to correct pages
- [ ] Navigation menu opens/closes
- [ ] Language switcher works (if applicable)
- [ ] Forms submit correctly
- [ ] Add to cart functionality
- [ ] Search works
- [ ] Filters/sorting works

### Content
- [ ] All text content present
- [ ] All images loading
- [ ] Product listings complete
- [ ] Pricing correct
- [ ] Contact information accurate

### Performance & Technical
- [ ] No console errors
- [ ] No 404s for assets
- [ ] Page loads quickly
- [ ] Images optimized
- [ ] CSS/JS bundles loaded correctly
- [ ] Meta tags present (title, description)

### Cross-Browser & Device
- [ ] Works on desktop (1920px)
- [ ] Works on tablet (768px)
- [ ] Works on mobile (375px)
- [ ] Safari compatibility
- [ ] Chrome compatibility
- [ ] Firefox compatibility

---

## Common Issues Found

### CSS/Styling Issues
- **Tailwind breakpoints not working**: Custom `screens` config overriding defaults
- **Classes not generated**: Need to clear `.next` cache and rebuild
- **Inline styles overriding Tailwind**: Check for `style={{}}` attributes
- **Mobile/desktop views swapped**: Check `hidden` vs `md:flex` classes

### Image Issues
- **404 on images**: Hardcoded base path in `withBasePath()` utility
- **Images not loading**: Check `next.config.ts` for `unoptimized: true`
- **Wrong aspect ratios**: Check Next.js Image component props

### Routing Issues
- **404 on all pages**: Pages in wrong folder structure (should be in `app/` not `app/[locale]/` if no i18n)
- **Redirects not working**: Middleware issues or `basePath` misconfiguration
- **Links broken**: Check `href` attributes for correct paths

### Build Issues
- **Static export fails**: Can't use API routes or server features with `output: 'export'`
- **i18n errors**: Missing locale files or middleware configuration
- **JSON syntax errors**: Smart quotes instead of standard quotes in translation files

---

## Tools Used

- **Playwright MCP Browser Tools**:
  - `browser_navigate` - Load pages
  - `browser_take_screenshot` - Visual comparison
  - `browser_snapshot` - Semantic page structure
  - `browser_network_requests` - Check for 404s
  - `browser_console_messages` - JavaScript errors
  - `browser_evaluate` - Custom DOM/CSS inspection
  - `browser_resize` - Test responsive design

---

## Example Workflow

```bash
# 1. Start local dev server
npm run dev

# 2. Navigate to localhost
browser_navigate("http://localhost:3000")

# 3. Take screenshot
browser_take_screenshot({ fullPage: true })

# 4. Check for errors
browser_console_messages()
browser_network_requests({ includeStatic: true })

# 5. Navigate to production/original
browser_navigate("https://original-site.com")

# 6. Take screenshot for comparison
browser_take_screenshot({ fullPage: true })

# 7. Visually compare the two screenshots

# 8. Check specific elements that differ
browser_evaluate(() => {
  // Custom JavaScript to inspect differences
})

# 9. Fix issues found and retest
```

---

**Last Updated:** January 4, 2026  
**Project:** Adama Soaps Next.js Migration