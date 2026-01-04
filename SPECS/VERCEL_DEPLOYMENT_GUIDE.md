# Vercel Deployment Guide
## Adama Soaps - Next.js Project

**Date:** January 4, 2026  
**Status:** Ready to Deploy  
**Hosting:** Vercel + Vercel Postgres (FREE)  
**Cost:** $0/month (free tier)

---

## **STEP-BY-STEP DEPLOYMENT (15 minutes)**

### **STEP 1: Create GitHub Account (If You Don't Have One)**

1. Go to https://github.com
2. Sign up with email
3. Create username
4. Verify email
5. **Done** ✅

---

### **STEP 2: Push Your Code to GitHub**

**In PowerShell Terminal (in your project folder):**

```powershell
# Check if git is initialized
git status

# If not initialized, do this:
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit - Adama Soaps project"

# Create main branch (if not exists)
git branch -M main

# Add GitHub remote (replace USERNAME with your GitHub username)
git remote add origin https://github.com/USERNAME/adama-soaps.git

# Push to GitHub
git push -u origin main
```

**What this does:**
- Uploads your entire project to GitHub
- Creates repository at `github.com/USERNAME/adama-soaps`
- Takes ~1-2 minutes

**Verify:** Go to github.com/USERNAME/adama-soaps - you should see your code

---

### **STEP 3: Sign Up for Vercel with GitHub**

1. Go to https://vercel.com/signup
2. Click **"Continue with GitHub"**
3. Authorize Vercel to access your GitHub
4. You're logged in ✅

---

### **STEP 4: Import Your Project to Vercel**

1. After signing in, click **"New Project"**
2. Select your GitHub account
3. Find & click **"adama-soaps"** repository
4. Click **"Import"**
5. **Leave all settings default** (Vercel detects Next.js automatically)
6. Click **"Deploy"**

**What Vercel does:**
- Reads your Next.js config
- Installs dependencies
- Builds your project
- Deploys automatically
- Takes ~3-5 minutes

---

### **STEP 5: Create Vercel Postgres Database**

**After deployment completes:**

1. Click on your project name in Vercel Dashboard
2. Go to **"Storage"** tab (top menu)
3. Click **"Create Database"** → **"Postgres"**
4. Choose region: **EU** (closest to Germany)
5. Click **"Create"**

**Vercel automatically:**
- ✅ Creates PostgreSQL database
- ✅ Adds connection string to `.env.local`
- ✅ Configures everything
- Takes ~30 seconds

---

### **STEP 6: Get Your Live URL**

In Vercel Dashboard:
- Look for **"Domains"** section
- Your site is live at: `adama-soaps.vercel.app` (or custom domain)
- Visit the URL - your site is LIVE! 🎉

---

## **AFTER DEPLOYMENT**

### **Your Site is Now:**
- ✅ **Live online** (accessible worldwide)
- ✅ **Connected to Vercel Postgres** (database ready)
- ✅ **Auto-deploys** when you push to GitHub
- ✅ **HTTPS enabled** (secure)
- ✅ **Free tier** ($0/month)

### **Environment Variables Auto-Added:**

When you created Postgres, Vercel added to `.env`:
```
POSTGRES_PRISMA_URL=postgresql://...
POSTGRES_URL_NON_POOLING=postgresql://...
```

These are **automatically in Vercel**, you don't need to add manually.

---

## **NEXT STEPS (Before PayPal Integration)**

### **1. Set Up Prisma ORM** (Local)

```bash
# Install Prisma
npm install @prisma/client
npm install -D prisma

# Initialize Prisma
npx prisma init
```

This creates `prisma/schema.prisma` file.

---

### **2. Create Database Schema** (Local)

Edit `prisma/schema.prisma`:

```prisma
// prisma/schema.prisma

datasource db {
  provider = "postgresql"
  url      = env("POSTGRES_PRISMA_URL")
}

generator client {
  provider = "prisma-client-js"
}

model Order {
  id                String   @id @default(cuid())
  orderNumber       String   @unique
  paypalOrderId     String?  @unique
  customerEmail     String
  customerName      String?
  totalAmount       Float
  currency          String   @default("EUR")
  status            String   @default("pending") // pending, paid, failed, refunded
  items             Json     // Store cart items as JSON
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
  status               String   // COMPLETED, PENDING, FAILED
  paymentMethod        String?  // card, paypal
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

### **3. Create & Test Database Locally**

```bash
# Create initial migration
npx prisma migrate dev --name init

# This will:
# ✅ Connect to Vercel Postgres
# ✅ Create tables
# ✅ Generate Prisma client
```

**If you get connection error:**
- Double-check `POSTGRES_PRISMA_URL` in `.env.local`
- Vercel added it automatically when you created the database

---

### **4. Test the Connection**

Create `test-db.ts` in your project root:

```typescript
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Testing database connection...');
  
  const result = await prisma.$queryRaw`SELECT 1`;
  console.log('✅ Database connected!');
}

main()
  .catch((e) => {
    console.error('❌ Connection failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
```

Run:
```bash
npx ts-node test-db.ts
```

Expected output:
```
✅ Database connected!
```

---

## **DEPLOYMENT CHECKLIST**

- [ ] GitHub account created
- [ ] Code pushed to GitHub repository
- [ ] Vercel account created with GitHub
- [ ] Project imported to Vercel
- [ ] Vercel deployment completed (site is LIVE)
- [ ] Vercel Postgres database created
- [ ] Live URL accessible (adama-soaps.vercel.app)
- [ ] Prisma installed locally
- [ ] `prisma/schema.prisma` created
- [ ] Database schema defined
- [ ] Migration run successfully
- [ ] Database connection tested

---

## **TROUBLESHOOTING**

### **"Deployment failed"**
- Check: Does your `package.json` have build script?
- Solution: Run `npm run build` locally first
- Check error logs in Vercel dashboard

### **"Can't connect to database"**
- Check: `POSTGRES_PRISMA_URL` in Vercel environment
- Solution: Re-create Postgres database
- Verify: Go to Vercel Storage tab

### **"git push fails"**
- Check: Did you authorize Vercel with GitHub?
- Check: Is remote URL correct? `git remote -v`
- Solution: `git remote set-url origin https://github.com/USERNAME/adama-soaps.git`

### **"Prisma migration error"**
- Run: `npx prisma db push` (force sync)
- Check: PostgreSQL connection string
- Verify: Database exists in Vercel

---

## **WHAT'S NEXT**

### **Week 1: ✅ DONE**
- Vercel deployment complete
- Database set up
- Site is live

### **Week 2: When PayPal Credentials Arrive**
- Add PayPal SDK: `npm install @paypal/checkout-server-sdk`
- Create PayPal API routes
- Build checkout flow
- Implement webhooks

### **Week 3: Test & Launch**
- Full payment testing
- Security review
- Go live with payments

---

## **SUPPORT**

- **Vercel Docs:** https://vercel.com/docs
- **Prisma Docs:** https://www.prisma.io/docs
- **Next.js Docs:** https://nextjs.org/docs

---

**You're all set! Your site is now LIVE and ready for PayPal integration.** 🚀
