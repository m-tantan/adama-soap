# PayPal Integration Specification

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
1. [Prerequisites](#prerequisites)
2. [Technical Architecture](#technical-architecture)
3. [Required Dependencies](#required-dependencies)
4. [Environment Configuration](#environment-configuration)
5. [File Structure](#file-structure)
6. [API Endpoints Required](#api-endpoints-required)
7. [Database Schema](#database-schema)
8. [Security Requirements](#security-requirements)
9. [Testing Plan](#testing-plan)
10. [Implementation Checklist](#implementation-checklist)

---

## **Prerequisites**

### **From Business (Blocking Requirements)**
- [ ] PayPal Business Account created
- [ ] Bank account verified with PayPal
- [ ] API Credentials obtained:
  - [ ] **Client ID**
  - [ ] **Secret Key** (or Signature)
  - [ ] **Mode:** Sandbox (testing) OR Live (production)

### **From Developer (Already Done)**
- [x] Next.js 13+ (app router configured)
- [x] TypeScript enabled
- [x] Node.js 14+
- [x] next-intl configured (localization ready)
- [x] git repository initialized

---

## **Technical Architecture**

```
┌─────────────────────────────────────────────────────────────┐
│                     CUSTOMER BROWSER                         │
└────────────────┬────────────────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────────────────┐
│                    NEXT.JS APP                               │
│                                                               │
│  1. Checkout Page (Client Component)                         │
│     └─► Send cart data to API                                │
│                                                               │
│  2. API Routes (Server)                                      │
│     ├─► POST /api/paypal/create-order                        │
│     │   └─► Call PayPal API → Create Order                   │
│     │                                                         │
│     ├─► POST /api/paypal/capture-order                       │
│     │   └─► Call PayPal API → Capture Payment                │
│     │                                                         │
│     └─► POST /api/paypal/webhook                             │
│         └─► Receive payment confirmations                    │
│                                                               │
│  3. Success/Failure Pages                                    │
│     ├─► checkout/success                                     │
│     └─► checkout/cancelled                                   │
└────────────────┬────────────────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────────────────┐
│                   PAYPAL API                                  │
│                                                               │
│  ├─► Create Order (POST)                                     │
│  ├─► Capture Order (POST)                                    │
│  ├─► Get Order Status (GET)                                  │
│  └─► Refund (POST)                                           │
└────────────────┬────────────────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────────────────┐
│                 DATABASE (Optional but recommended)           │
│                                                               │
│  ├─► Orders table (store order data)                         │
│  ├─► Payments table (store payment data)                     │
│  └─► Webhooks table (log webhook events)                     │
└─────────────────────────────────────────────────────────────┘
```

---

## **Required Dependencies**

### **Install These Packages**

```bash
npm install @paypal/checkout-server-sdk
npm install @paypal/paypalrestsdk
npm install axios
npm install dotenv
```

### **Package Details**

| Package | Version | Purpose |
|---------|---------|---------|
| `@paypal/checkout-server-sdk` | Latest | Official PayPal SDK for Node.js |
| `axios` | Latest | HTTP client for API calls |
| `dotenv` | Latest | Environment variable management |

---

## **Environment Configuration**

### **Add to `.env.local`**

```env
# PayPal Credentials (from business)
PAYPAL_CLIENT_ID=your_client_id_here
PAYPAL_SECRET_KEY=your_secret_key_here

# PayPal Mode (sandbox for testing, live for production)
PAYPAL_MODE=sandbox

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_PAYPAL_CLIENT_ID=your_client_id_here

# Database (if using database for order tracking)
DATABASE_URL=postgresql://...
```

### **Sandbox vs Live**

- **SANDBOX:** For testing (doesn't charge real money)
- **LIVE:** For production (real payments)
- Business will provide separate credentials for each

---

## **File Structure**

```
app/
├── api/
│   └── paypal/
│       ├── create-order/
│       │   └── route.ts           ← Create PayPal order
│       ├── capture-order/
│       │   └── route.ts           ← Capture (charge) payment
│       ├── get-order/
│       │   └── route.ts           ← Check order status
│       ├── webhook/
│       │   └── route.ts           ← Receive payment updates
│       └── refund/
│           └── route.ts           ← Process refunds
│
├── checkout/
│   ├── page.tsx                   ← Checkout page
│   ├── success/
│   │   └── page.tsx               ← Payment success page
│   └── cancelled/
│       └── page.tsx               ← Payment cancelled page
│
└── components/
    ├── PayPalButton.tsx           ← Reusable PayPal button
    └── OrderSummary.tsx           ← Cart/Order display

lib/
├── paypal.ts                      ← PayPal client setup
├── paypal-helpers.ts              ← Utility functions
└── types.ts                       ← TypeScript types

types/
├── paypal.ts                      ← PayPal API types
└── order.ts                       ← Order types
```

---

## **API Endpoints Required**

### **1. POST `/api/paypal/create-order`**

**Purpose:** Create a PayPal order (before payment)

**Request Body:**
```json
{
  "amount": "49.99",
  "currency": "EUR",
  "items": [
    {
      "name": "Coffee Soap - 100g",
      "quantity": 2,
      "price": "24.99"
    }
  ],
  "orderId": "ORDER-12345",
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

**Logic:**
- Validate cart data
- Call PayPal API: Create Order
- Return order ID to frontend
- (Optional) Save to database

---

### **2. POST `/api/paypal/capture-order`**

**Purpose:** Capture payment (charge customer)

**Request Body:**
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

**Logic:**
- Validate order exists
- Call PayPal API: Capture Order
- Mark order as paid
- Send confirmation email
- Update database

---

### **3. GET `/api/paypal/get-order`**

**Purpose:** Check order status

**Query Parameters:**
```
?orderID=paypal-order-id-xxxxx
```

**Response:**
```json
{
  "status": "APPROVED",
  "payer": {
    "email": "customer@paypal.com"
  },
  "amount": "49.99"
}
```

---

### **4. POST `/api/paypal/webhook`**

**Purpose:** Receive payment notifications from PayPal

**Webhook Events:**
- `PAYMENT.CAPTURE.COMPLETED` → Payment successful
- `PAYMENT.CAPTURE.DENIED` → Payment failed
- `PAYMENT.CAPTURE.REFUNDED` → Refund processed

**Logic:**
- Verify webhook signature
- Log webhook event
- Update order status
- Trigger actions (send email, etc.)

---

### **5. POST `/api/paypal/refund`**

**Purpose:** Process refunds

**Request Body:**
```json
{
  "captureId": "xxx",
  "amount": "49.99",
  "reason": "Customer request"
}
```

**Response:**
```json
{
  "refundId": "xxx",
  "status": "SUCCESS"
}
```

---

## **Database Schema**

### **Orders Table (Optional but Recommended)**

```sql
CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_number VARCHAR(50) UNIQUE NOT NULL,
  paypal_order_id VARCHAR(100) UNIQUE,
  customer_email VARCHAR(255) NOT NULL,
  customer_name VARCHAR(255),
  total_amount DECIMAL(10, 2) NOT NULL,
  currency VARCHAR(3) DEFAULT 'EUR',
  status VARCHAR(50) DEFAULT 'pending', -- pending, paid, failed, refunded
  items JSONB, -- Store cart items as JSON
  shipping_address JSONB,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  paid_at TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id UUID REFERENCES orders(id),
  paypal_transaction_id VARCHAR(100),
  amount DECIMAL(10, 2) NOT NULL,
  currency VARCHAR(3),
  status VARCHAR(50), -- COMPLETED, PENDING, FAILED
  payment_method VARCHAR(50), -- card, paypal, etc
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE webhooks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_type VARCHAR(100),
  order_id UUID REFERENCES orders(id),
  payload JSONB,
  processed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## **Security Requirements**

### **Authentication & Authorization**
- [ ] Verify API requests come from legitimate sources
- [ ] Use environment variables for credentials (never hardcode)
- [ ] Validate webhook signatures from PayPal

### **Data Protection**
- [ ] Never log full payment data
- [ ] Encrypt sensitive data in transit (HTTPS only)
- [ ] Don't store full credit card numbers
- [ ] Use secure headers (CSP, X-Frame-Options, etc.)

### **API Security**
- [ ] Rate limit API endpoints (prevent abuse)
- [ ] Validate all input data
- [ ] Use CORS properly (allow only your domain)
- [ ] Add request size limits

### **Webhook Security**
- [ ] Verify webhook signature with PayPal
- [ ] Check webhook timestamp (prevent replay attacks)
- [ ] Implement idempotency (same webhook twice = same result)

### **Code Example: Webhook Verification**
```typescript
import crypto from 'crypto';

function verifyPayPalSignature(
  webhookId: string,
  transmissionId: string,
  transmissionTime: string,
  certUrl: string,
  webhookBody: string,
  signature: string
): boolean {
  // Verify PayPal webhook is authentic
  // Implementation details in development phase
  return true;
}
```

---

## **Testing Plan**

### **Unit Tests Required**

```typescript
// tests/paypal.test.ts

describe('PayPal Integration', () => {
  describe('Create Order', () => {
    it('should create order with valid cart data');
    it('should reject invalid amount');
    it('should handle PayPal API errors');
  });

  describe('Capture Order', () => {
    it('should capture payment successfully');
    it('should fail with invalid order ID');
    it('should handle PayPal errors gracefully');
  });

  describe('Webhook', () => {
    it('should verify PayPal signature');
    it('should process PAYMENT.CAPTURE.COMPLETED');
    it('should ignore unsigned webhooks');
  });
});
```

### **Manual Testing Checklist**

- [ ] Create order with sandbox cart
- [ ] Complete payment in PayPal sandbox
- [ ] Verify order status updates
- [ ] Receive webhook notification
- [ ] Test failed payment scenario
- [ ] Verify success page displays
- [ ] Test refund process
- [ ] Check email confirmations

### **Test Payment Cards (Sandbox)

| Card Type | Number | Status |
|-----------|--------|--------|
| Visa | 4532015112830366 | Success |
| Mastercard | 5425233010103442 | Success |
| Amex | 374245455400126 | Success |

**Password:** Any value  
**Expiry:** Future date

---

## **Implementation Checklist**

### **Phase 1: Setup (Days 1-2)**
- [ ] Receive API credentials from business
- [ ] Add credentials to `.env.local`
- [ ] Install PayPal SDK packages
- [ ] Create PayPal client helper (`lib/paypal.ts`)
- [ ] Set up TypeScript types

### **Phase 2: Core API Routes (Days 2-3)**
- [ ] Create `/api/paypal/create-order` endpoint
- [ ] Create `/api/paypal/capture-order` endpoint
- [ ] Create `/api/paypal/get-order` endpoint
- [ ] Add error handling & logging
- [ ] Test with sandbox API

### **Phase 3: Frontend (Days 3-4)**
- [ ] Create `CheckoutButton` component
- [ ] Update checkout page
- [ ] Create success page (`/checkout/success`)
- [ ] Create failed page (`/checkout/cancelled`)
- [ ] Add loading states & error handling

### **Phase 4: Webhook & Advanced (Days 4-5)**
- [ ] Create `/api/paypal/webhook` endpoint
- [ ] Implement webhook signature verification
- [ ] Create `/api/paypal/refund` endpoint
- [ ] Set up webhook URL in PayPal dashboard
- [ ] Test webhook delivery

### **Phase 5: Database & Tracking (Days 5-6)**
- [ ] Set up orders database table
- [ ] Create order creation logic
- [ ] Log payment status changes
- [ ] Add order history page
- [ ] Create admin dashboard (basic)

### **Phase 6: Testing & Security (Days 6-7)**
- [ ] Run full manual testing
- [ ] Test all error scenarios
- [ ] Security audit (CORS, CSRF, etc.)
- [ ] Load testing (simulate traffic)
- [ ] Final sandbox testing

### **Phase 7: Production Launch (Day 7-8)**
- [ ] Switch to Live API credentials
- [ ] Update environment variables
- [ ] Deploy to production
- [ ] Monitor for errors
- [ ] Test with real payment

---

## **Development Timeline**

| Phase | Duration | Blockers |
|-------|----------|----------|
| Setup | 1 day | Need API credentials |
| Core API | 1-2 days | None |
| Frontend | 1 day | Needs core API ready |
| Webhook | 1 day | Needs PayPal dashboard access |
| Database | 1 day | Optional |
| Testing | 1-2 days | None |
| Production | 1 day | Business approval |
| **TOTAL** | **7-8 days** | **Credentials needed by Day 1** |

---

## **Dependencies on Business**

### **Blocking Requirements (Must Have Before Starting)**
1. ✅ PayPal Business Account set up
2. ✅ Bank account verified
3. ✅ **API Credentials provided:**
   - Client ID
   - Secret Key
   - Mode (Sandbox or Live)

### **Nice to Have (Can Wait)**
- Branding preferences (colors, logos on checkout)
- Email templates for confirmations
- Refund policy details

---

## **Known Limitations & Assumptions (Your Configuration)**

✅ **What's Included (Simplified):**
1. **PostgreSQL Database:** Vercel Postgres (FREE, 3GB storage)
2. **Simple Products:** Single items only, no variants/bundles
3. **EUR Currency Only:** German/EU market focus
4. **Manual Shipping:** Business handles outside website  
5. **Manual Inventory:** Business updates stock manually
6. **Manual Refunds:** Business processes refunds in PayPal dashboard
7. **Placeholder Emails:** Basic order confirmation template (implement later)
8. **GDPR Compliant:** Minimal data collection, privacy policy included
9. **No Admin Dashboard:** MVP version, can add later
10. **No Future Features:** Keep it simple for now (add Mollie later if needed)

❌ **Not Included Yet:**
- Email service integration (Resend, SendGrid)
- Multi-currency (ILS, USD)
- Product variants or bundles
- Tax automation
- Admin order management dashboard
- Affiliate/referral system
- Mollie integration (planned for Phase 2)

---

## **Success Criteria**

### **Developer Readiness**
- [ ] All API endpoints working in sandbox
- [ ] All tests passing
- [ ] Zero console errors
- [ ] Webhook receiving notifications
- [ ] Full payment flow working end-to-end

### **Business Readiness**
- [ ] Business confirmed credentials working
- [ ] Test payments completed successfully
- [ ] Email confirmations sending
- [ ] Orders showing in database
- [ ] Admin can view/manage orders

### **Go-Live Criteria**
- [ ] Switched to Live API credentials
- [ ] Final security review passed
- [ ] Business approved checkout flow
- [ ] Monitoring/alerts configured
- [ ] Support process documented

---

## **Next Steps**

1. **Business:** Set up PayPal Business Account (starting now)
2. **Business:** Share API credentials once account is verified (expected: Jan 5-7)
3. **Developer:** Begin Phase 1 setup immediately upon receiving credentials
4. **Developer:** Keep this spec updated as implementation progresses

---

## **Notes**

- This is a **living document** - update as development progresses
- Reference this spec in code comments
- Link to relevant PayPal API docs in code
- Sync with business on timeline/blockers weekly

**Last Updated:** January 4, 2026  
**Next Review:** When credentials received
