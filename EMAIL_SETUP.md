# Email Setup Instructions

## How to Configure Email Notifications

When someone submits the contact form, you'll receive an email notification.

### Step 1: Get Your Gmail App Password

**Why App Password?** Google doesn't allow direct password use for security. You need a special App Password.

**How to get it:**

1. **Open this link**: https://myaccount.google.com/apppasswords
   - Or go to: Google Account → Security → 2-Step Verification → App passwords

2. **You'll see a page that says "App passwords"**
   - If you don't see this option, first enable **2-Step Verification** on your Google Account

3. **Select app**: Choose "Mail"

4. **Select device**: Choose "Other" and type "Portfolio Website"

5. **Click Generate**

6. **Copy the 16-character password** that appears
   - It looks like: `abcd efgh ijkl mnop` (16 characters with spaces)
   - **Save this somewhere** - you can't see it again!

### Step 2: Update .env.local File

Open the `.env.local` file in your project root and update:

```env
EMAIL_USER=your-actual-email@gmail.com
EMAIL_PASSWORD=xxxx xxxx xxxx xxxx
```

Replace:
- `your-actual-email@gmail.com` with your Gmail address
- `xxxx xxxx xxxx xxxx` with the 16-character App Password you generated

### Step 3: Restart the Development Server

After updating `.env.local`, restart your dev server:

```bash
npm run dev
```

### Step 4: Test the Contact Form

1. Fill out the contact form on your website
2. Click "Send Message"
3. Check your Gmail inbox for the notification

## Security Notes

- ⚠️ **Never commit `.env.local` to Git** - it's already in `.gitignore`
- The App Password is specific to your app and doesn't give full account access
- You can revoke the App Password anytime from Google Account settings

## Troubleshooting

**Email not sending?**
- Verify your Gmail credentials in `.env.local`
- Check if 2-Step Verification is enabled
- Make sure you're using an App Password, not your regular password
- Check the terminal for error messages

**Gmail blocking access?**
- Ensure you're using an App Password (not regular password)
- Check if "Less secure app access" needs to be enabled (for older accounts)
