# PayPal Integration Specification (UPDATED)

**Project:** Adama Soaps  
**Date:** January 4, 2026  
**Status:** Vercel Deployment → PayPal Integration  
**Phase 1:** Deploy to Vercel (THIS WEEK - Jan 4-6)
**Phase 2:** Integrate PayPal (NEXT WEEK - Jan 7-14, after credentials arrive)
**Database:** PostgreSQL (Vercel Postgres - FREE)
**Hosting:** Vercel (FREE tier)
**Configuration:** Simple products, EUR only, manual shipping/refunds, GDPR compliant

---

## **Table of Contents**
1. [Your Specific Configuration](#your-configuration)
2. [PHASE 1: Vercel Deployment](#phase-1-vercel-deployment)
3. [PHASE 2: PayPal Integration](#phase-2-paypal-integration)
4. [API Endpoints](#api-endpoints)
5. [Database Schema](#database-schema)
6. [Timeline](#timeline)
7. [Success Criteria](#success-criteria)

---

## **Your Configuration**

✅ **Database:** PostgreSQL (Vercel Postgres - FREE)  
✅ **Email:** Placeholder functions only (implement later)  
✅ **Admin:** Not needed (business checks PayPal directly)  
✅ **Products:** Simple items only (no variants)  
✅ **Currency:** EUR only  
✅ **Shipping:** Manual (business handles outside website)  
✅ **Inventory:** Manual updates  
✅ **Refunds:** Manual (business processes in PayPal)  
✅ **Communication:** Order confirmation only  
✅ **Compliance:** GDPR compliant  
✅ **Hosting:** Vercel  
✅ **Timeline:** ASAP (this week for Vercel, PayPal next week)

---

## **PHASE 1: Vercel Deployment (THIS WEEK)**

### **Complete This Before PayPal Integration**

See detailed guide: `SPECS/VERCEL_DEPLOYMENT_GUIDE.md`

**Quick checklist:**
- [ ] Push code to GitHub
- [ ] Sign up for Vercel
- [ ] Import project from GitHub
- [ ] Deploy (auto-builds and goes live)
- [ ] Create Vercel Postgres database
- [ ] Get live URL (adama-soaps.vercel.app)

**Outcome:** Site is live online with database ready.

**Time: ~30 minutes**

---

## **PHASE 2: PayPal Integration (NEXT WEEK)**

### **Prerequisites from Business**

- [ ] PayPal Business Account created
- [ ] Bank account verified
- [ ] API Credentials provided:
  - [ ] **Client ID**
  - [ ] **Secret Key**
  - [ ] **Mode:** Sandbox (testing)

### **From Developer (Your Machine)**

- [x] Site deployed to Vercel
- [x] Vercel Postgres configured
- [x] Prisma ORM installed
- [x] Database schema created

---

## **Required Dependencies (Install During PHASE 2)**

```bash
# When credentials arrive
npm install @paypal/checkout-server-sdk
npm install axios
```

---

## **Environment Configuration**

### **Already Done (Vercel Postgres)**
```env
# Added automatically by Vercel when you created database
POSTGRES_PRISMA_URL=postgresql://...
POSTGRES_URL_NON_POOLING=postgresql://...
```

### **Add These When Business Provides Credentials**

In Vercel Environment Variables:
```env
PAYPAL_CLIENT_ID=your_client_id_here
PAYPAL_SECRET_KEY=your_secret_key_here
PAYPAL_MODE=sandbox
NEXT_PUBLIC_PAYPAL_CLIENT_ID=your_client_id_here
NEXT_PUBLIC_SITE_URL=https://adama-soaps.vercel.app
```

---

## **Database Schema**

Use the schema from `VERCEL_DEPLOYMENT_GUIDE.md`:

```prisma
model Order {
  id                String   @id @default(cuid())
  orderNumber       String   @unique
  paypalOrderId     String?  @unique
  customerEmail     String
  customerName      String?
  totalAmount       Float
  currency          String   @default("EUR")
  status            String   @default("pending")
  items             Json
  shippingAddress   Json?
  createdAt         DateTime @default(now())
  paidAt            DateTime?
  updatedAt         DateTime @updatedAt

  payments          Payment[]
}

model Payment {
  id                   String   @id @default(cuid())
  orderId              String
  order                Order    @relation(fields: [orderId], references: [id])
  paypalTransactionId  String?  @unique
  amount               Float
  currency             String
  status               String
  paymentMethod        String?
  createdAt            DateTime @default(now())

  @@index([orderId])
}

model Webhook {
  id        String   @id @default(cuid())
  eventType String
  orderId   String?
  payload   Json
  processed Boolean  @default(false)
  createdAt DateTime @default(now())

  @@index([orderId])
}
```

---

## **File Structure (PHASE 2)**

```
app/
├── api/
│   └── paypal/
│       ├── create-order/
│       │   └── route.ts           ← Create PayPal order
│       ├── capture-order/
│       │   └── route.ts           ← Capture payment
│       └── webhook/
│           └── route.ts           ← Payment updates
│
├── checkout/
│   ├── page.tsx                   ← Checkout page
│   ├── success/
│   │   └── page.tsx               ← Success page
│   └── cancelled/
│       └── page.tsx               ← Cancelled page
│
└── components/
    └── PayPalButton.tsx           ← Reusable button

lib/
├── paypal.ts                      ← PayPal client setup
└── paypal-helpers.ts              ← Utility functions

types/
└── paypal.ts                      ← TypeScript types
```

---

## **API Endpoints**

### **1. POST `/api/paypal/create-order`**

Creates PayPal order before payment.

**Request:**
```json
{
  "amount": "49.99",
  "currency": "EUR",
  "items": [{"name": "Coffee Soap", "quantity": 2, "price": "24.99"}],
  "orderId": "ORD-12345",
  "customerEmail": "customer@example.com"
}
```

**Response:**
```json
{
  "orderID": "paypal-order-id-xxxxx",
  "status": "CREATED"
}
```

---

### **2. POST `/api/paypal/capture-order`**

Charges customer payment.

**Request:**
```json
{
  "orderID": "paypal-order-id-xxxxx"
}
```

**Response:**
```json
{
  "status": "COMPLETED",
  "transactionId": "xxx",
  "amount": "49.99"
}
```

---

### **3. POST `/api/paypal/webhook`**

Receives payment notifications from PayPal.

**Webhook Events:**
- `PAYMENT.CAPTURE.COMPLETED` → Payment successful
- `PAYMENT.CAPTURE.DENIED` → Payment failed

**Actions:**
- Verify webhook signature
- Update order status in database
- Trigger email notification (placeholder)

---

## **Implementation Checklist**

### **PHASE 1: Vercel (Days 1-2) - DO THIS NOW**
- [ ] GitHub account created
- [ ] Code pushed to GitHub
- [ ] Vercel account created
- [ ] Project imported to Vercel
- [ ] Site deployed (LIVE)
- [ ] Vercel Postgres database created
- [ ] Prisma installed & configured
- [ ] Database schema created & migrated
- [ ] Database connection tested

### **PHASE 2A: PayPal Setup (Day 3) - Wait for Credentials**
- [ ] Receive API credentials from business
- [ ] Add credentials to Vercel environment
- [ ] Install PayPal SDK: `npm install @paypal/checkout-server-sdk`
- [ ] Create PayPal client helper (`lib/paypal.ts`)
- [ ] Set up TypeScript types

### **PHASE 2B: Core API (Days 4-5)**
- [ ] Create `/api/paypal/create-order` endpoint
- [ ] Create `/api/paypal/capture-order` endpoint
- [ ] Add error handling
- [ ] Test with PayPal sandbox

### **PHASE 2C: Frontend (Days 5-6)**
- [ ] Create `CheckoutButton` component
- [ ] Update checkout page
- [ ] Create success page
- [ ] Create cancelled page
- [ ] Add loading states

### **PHASE 2D: Webhooks (Day 6)**
- [ ] Create `/api/paypal/webhook` endpoint
- [ ] Implement webhook verification
- [ ] Set up webhook URL in PayPal dashboard

### **PHASE 2E: Testing & Launch (Day 7)**
- [ ] Full sandbox testing
- [ ] All error scenarios tested
- [ ] Switch to Live credentials
- [ ] Deploy to production
- [ ] First real payment test

---

## **Timeline**

| Phase | Duration | Start | End | Status |
|-------|----------|-------|-----|--------|
| **Vercel Deploy** | 1-2 days | Jan 4 | Jan 6 | **NOW** |
| **Database Setup** | 1 day | Jan 4-6 | Jan 6 | **NOW** |
| **Wait for Credentials** | 2-3 days | Jan 6 | Jan 7-9 | **Business** |
| **PayPal Core API** | 2 days | Jan 7-9 | Jan 11 | Blocked |
| **Frontend** | 1 day | Jan 11 | Jan 12 | After API |
| **Webhooks** | 1 day | Jan 12 | Jan 13 | After API |
| **Testing & Launch** | 1 day | Jan 13 | Jan 14 | Final |
| **TOTAL** | **9 days** | **Jan 4** | **Jan 14** | **Two weeks** |

---

## **Success Criteria**

### **PHASE 1 Success:**
- [ ] Site is live at adama-soaps.vercel.app
- [ ] Site is accessible worldwide
- [ ] Vercel Postgres database is created
- [ ] Database connection works
- [ ] Code automatically deploys on GitHub push

### **PHASE 2 Success:**
- [ ] All API endpoints working in sandbox
- [ ] Checkout flow works end-to-end
- [ ] Webhook receives payment notifications
- [ ] Orders saved to database
- [ ] Success page displays after payment
- [ ] Switched to Live credentials
- [ ] First real payment successful

---

## **Security Requirements**

- [ ] Use environment variables (never hardcode credentials)
- [ ] HTTPS enabled (Vercel does this automatically)
- [ ] Webhook signature verification
- [ ] Input validation on all endpoints
- [ ] Error messages don't leak sensitive info
- [ ] GDPR: Minimal customer data collection
- [ ] Privacy policy includes payment info

---

## **Known Limitations (Your Configuration)**

✅ **What's Included:**
- PostgreSQL database (Vercel Postgres)
- Simple products only
- EUR currency
- Manual shipping & inventory
- Manual refunds
- Order confirmation only
- GDPR compliant
- No admin dashboard (v1)

❌ **Not Included (Can Add Later):**
- Email service integration
- Multi-currency support
- Product variants
- Tax automation
- Admin dashboard
- Mollie integration (Phase 2)

---

## **Next Steps**

**RIGHT NOW (Today - Jan 4):**
1. Follow `VERCEL_DEPLOYMENT_GUIDE.md`
2. Deploy your site
3. Create Vercel Postgres database
4. Set up Prisma locally
5. Create database schema

**NEXT (Jan 5-7):**
- Business sets up PayPal & gets credentials
- You wait (site is already live)

**Jan 7 Onwards:**
- Once credentials arrive
- Implement PayPal integration
- Test everything
- Go live with payments

---

## **Support Resources**

- **Vercel Docs:** https://vercel.com/docs
- **Prisma Docs:** https://www.prisma.io/docs
- **PayPal API:** https://developer.paypal.com/
- **Next.js Docs:** https://nextjs.org/docs

---

**Status:** Ready to deploy. Follow `VERCEL_DEPLOYMENT_GUIDE.md` to start.
