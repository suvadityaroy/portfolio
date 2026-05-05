# Email Provider Configuration Guide

Your contact form now supports **Gmail, Outlook, Yahoo, and Business Email**!

## Quick Setup for Different Providers

### 1. Gmail (Current Setup)
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
```

**Get Gmail App Password:**
1. Go to: https://myaccount.google.com/security
2. Enable 2-Step Verification
3. Search for "App passwords"
4. Generate password for "Mail"

---

### 2. Outlook / Hotmail / Microsoft 365
```env
EMAIL_USER=your-email@outlook.com
EMAIL_PASSWORD=your-password
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_SECURE=false
```

**Note:** If you have 2FA enabled, use an app password.

---

### 3. Yahoo Mail
```env
EMAIL_USER=your-email@yahoo.com
EMAIL_PASSWORD=your-app-password
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
SMTP_SECURE=false
```

**Get Yahoo App Password:**
1. Go to: https://login.yahoo.com/account/security
2. Enable 2-Step Verification
3. Generate app password

---

### 4. Business Email (Custom Domain)
```env
EMAIL_USER=contact@yourdomain.com
EMAIL_PASSWORD=your-password
SMTP_HOST=mail.yourdomain.com
SMTP_PORT=587
SMTP_SECURE=false
```

**Common Business Email Providers:**
- **GoDaddy:** smtp.secureserver.net, port 587
- **Bluehost:** mail.yourdomain.com, port 587
- **HostGator:** mail.yourdomain.com, port 587
- **Namecheap:** mail.privateemail.com, port 587

**Ask your hosting provider for:**
- SMTP server address
- Port number (usually 587 or 465)
- Whether to use SSL/TLS

---

## Port Guide
- **Port 587:** TLS encryption (recommended) - Set `SMTP_SECURE=false`
- **Port 465:** SSL encryption - Set `SMTP_SECURE=true`
- **Port 25:** No encryption (not recommended)

---

## Troubleshooting

### "Failed to send message" error?

1. **Check credentials:** Make sure EMAIL_USER and EMAIL_PASSWORD are correct
2. **Use App Password:** For Gmail/Yahoo with 2FA, use app-specific password
3. **Check SMTP settings:** Verify host and port match your provider
4. **Firewall:** Ensure port 587 or 465 isn't blocked
5. **Test with Gmail first:** It's the easiest to set up

### Still not working?

Run this test in your terminal:
```bash
npm install -g nodemailer
node -e "const nodemailer = require('nodemailer'); const t = nodemailer.createTransport({host:'smtp.gmail.com',port:587,auth:{user:'YOUR_EMAIL',pass:'YOUR_PASSWORD'}}); t.verify().then(console.log).catch(console.error);"
```

Replace YOUR_EMAIL and YOUR_PASSWORD with your actual credentials.

---

## After Changing Settings

1. Update `.env.local` with your provider's settings
2. Restart your dev server: `npm run dev`
3. For production (Vercel), add environment variables in project settings
