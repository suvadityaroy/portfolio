# ⚠️ VERCEL DEPLOYMENT - EMAIL NOT WORKING

## Problem
Your contact form returns **500 errors** because environment variables are not set in Vercel.

## Quick Fix - Add Environment Variables to Vercel

### Step 1: Go to Vercel Dashboard
1. Visit: https://vercel.com/suvadityaroy-roys-projects/portfolio/settings/environment-variables
2. Or: Vercel Dashboard → Your Project → Settings → Environment Variables

### Step 2: Add These Variables

Click "Add New" for each:

| Key | Value | Environment |
|-----|-------|-------------|
| `EMAIL_USER` | `suvadityaroy.dev@gmail.com` | Production, Preview, Development |
| `EMAIL_PASSWORD` | `neor xtyo dowr myku` | Production, Preview, Development |
| `SMTP_HOST` | `smtp.gmail.com` | Production, Preview, Development |
| `SMTP_PORT` | `587` | Production, Preview, Development |
| `SMTP_SECURE` | `false` | Production, Preview, Development |

**Important:** 
- Make sure to select **all three environments** (Production, Preview, Development)
- Copy-paste the values exactly as shown above
- The EMAIL_PASSWORD is your Gmail App Password (spaces included)

### Step 3: Redeploy
After adding variables:
1. Go to Deployments tab
2. Click "..." on latest deployment
3. Click "Redeploy"
4. **OR** just push a new commit:
   ```bash
   git commit --allow-empty -m "Trigger redeploy"
   git push
   ```

### Step 4: Test
After redeployment (takes ~2 minutes):
1. Go to https://suvadityaroy.tech
2. Fill out the contact form
3. Click "Send Message"
4. Should see success animation! ✅

---

## Alternative: Vercel CLI Method

```bash
# Install Vercel CLI if you haven't
npm i -g vercel

# Login
vercel login

# Add environment variables
vercel env add EMAIL_USER
# Enter: suvadityaroy.dev@gmail.com
# Select: All environments

vercel env add EMAIL_PASSWORD
# Enter: neor xtyo dowr myku
# Select: All environments

vercel env add SMTP_HOST
# Enter: smtp.gmail.com
# Select: All environments

vercel env add SMTP_PORT
# Enter: 587
# Select: All environments

vercel env add SMTP_SECURE
# Enter: false
# Select: All environments

# Redeploy
vercel --prod
```

---

## Why This Happened
- `.env.local` file is **not uploaded to Vercel** (it's in .gitignore for security)
- Environment variables must be set manually in Vercel dashboard
- Without them, the email API can't authenticate with Gmail

---

## Verify It's Working
After redeployment, check logs at:
https://vercel.com/suvadityaroy-roys-projects/portfolio/logs

You should see:
- ✅ Status 200 for `/api/contact` instead of 500
- ✅ No errors in the logs
