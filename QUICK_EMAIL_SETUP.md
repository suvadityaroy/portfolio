## QUICK SETUP FOR EMAIL

### What you need:
1. Your Gmail address
2. A special "App Password" from Google (NOT your regular Gmail password)

### How to get App Password in 3 steps:

**Step 1:** Go to this website:
```
https://myaccount.google.com/apppasswords
```

**Step 2:** You'll see a page with dropdown menus:
- First dropdown: Select "Mail"
- Second dropdown: Select "Other" and type "Portfolio"
- Click the "Generate" button

**Step 3:** Google will show you a 16-character password like this:
```
abcd efgh ijkl mnop
```
Copy this password!

---

### Now update the .env.local file:

Open the file `.env.local` in your project folder and change these two lines:

```
EMAIL_USER=your-email@gmail.com          ← Put your Gmail here
EMAIL_PASSWORD=abcd efgh ijkl mnop       ← Put the App Password here
```

### Example:
If your Gmail is `john@gmail.com` and your App Password is `abcd efgh ijkl mnop`, then:

```
EMAIL_USER=john@gmail.com
EMAIL_PASSWORD=abcd efgh ijkl mnop
```

### That's it!

Now restart your dev server:
```
npm run dev
```

Test the contact form on your website. You'll receive emails at your Gmail!

---

### Don't see "App passwords" option?

You need to enable 2-Step Verification first:
1. Go to: https://myaccount.google.com/security
2. Find "2-Step Verification" and turn it ON
3. Then try getting the App Password again
