# Adama Soaps - Task List

| # | Task | Context & Details |
|---|------|-------------------|
| 1 | **PayPal Integration** | Add PayPal as a payment option for checkout. Currently no payment system is implemented. Could use PayPal Checkout SDK or Stripe (which also supports PayPal). |
| 2 | **Remove Ingredients List** | Delete the ingredients section from product pages (ProductDetails.tsx). Currently shows ingredients like "Recycled Coffee Grounds, Coconut Oil, etc." |
| 3 | **Replace placeholder Instagram images with actual posts** | The "Follow Us" section on homepage (app/page.tsx) shows placeholder images (instagram-1.jpg, instagram-2.jpg). Replace with real @adamasoaps Instagram content or embed. |
| 4 | **Remove "Forest" product** | Delete the Forest soap (id: 3) from data/products.ts. Only keep Calm and Sunny Sage. |
| 5 | **Fix or remove "More" button in navigation** | The "More" button in Header.tsx currently does nothing (no dropdown/action). Either add a dropdown menu or remove it. |
| 6 | **Full Online Store (Future Goal)** | Long-term vision: complete e-commerce with cart, checkout, order management, inventory tracking. Currently Phase 2 (static content only). |
| 7 | **Change favicon logo color to black** | Current favicon (/images/logo-black.png) appears cream/yellow. Need a black version for better visibility in browser tabs. |

---

## Priority

### Quick Wins (Can do now):
- **#2** - Remove ingredients list
- **#4** - Remove Forest product  
- **#5** - Remove "More" button
- **#7** - Create black version of logo for favicon

### Requires Assets/Content:
- **#3** - Need actual Instagram post images or embed code

### Requires More Planning:
- **#1** - PayPal integration (need PayPal business account, API keys)
- **#6** - Full e-commerce (Phase 3-4 in migration plan)
