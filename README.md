# Zuri IT Consults — Official Website

Professional website for **Zuri IT Consults**, a Kenyan IT consulting firm delivering network infrastructure, cybersecurity, Microsoft 365, CCTV, and IT support services.

---

## Tech Stack

- Pure HTML5, CSS3, Vanilla JavaScript
- No build tools required — open directly in browser
- Google Fonts (Inter + Syne)
- Font Awesome 6 (CDN)
- Fully responsive (mobile, tablet, desktop)

---

## File Structure

```
Zuri IT Website/
├── index.html          ← Main page (all sections)
├── css/
│   └── style.css       ← All styles (variables, components, responsive)
├── js/
│   └── main.js         ← Interactivity (navbar, animations, form, scroll)
├── assets/
│   └── images/         ← Add logo and project images here
├── .gitignore
└── README.md
```

---

## Local Development

No installation needed.

1. Open the `Zuri IT Website` folder in VS Code
2. Install the **Live Server** extension (if not already installed)
3. Right-click `index.html` → **Open with Live Server**
4. Browser opens at `http://127.0.0.1:5500`

Any file save triggers a live reload automatically.

---

## Customisation Checklist

Before going live, update these items in `index.html`:

- [x] Official email: `info@zuriitconsults.com`
- [ ] Update social media links (LinkedIn, Twitter/X, WhatsApp)
- [ ] Add real project descriptions in the Projects section
- [ ] Add a real logo image in `assets/images/` and update the navbar
- [ ] Update meta description and Open Graph tags with final URL
- [ ] Connect the contact form to a real backend (Formspree, EmailJS, or custom API)

---

## Connecting the Contact Form

The form currently simulates submission. To make it live, replace the `setTimeout` block in `js/main.js` with a real service:

### Option 1 — Formspree (free, no backend needed)
1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form — get your endpoint URL
3. Change the form tag in `index.html`:
   ```html
   <form action="https://formspree.io/f/YOUR_ID" method="POST">
   ```
4. Remove the JS form handler or keep it for UX feedback

### Option 2 — EmailJS (sends directly from browser)
1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Add the EmailJS SDK and call `emailjs.send()` in `main.js`

---

## Deploying to GitHub Pages

This site is ready for GitHub Pages hosting with zero configuration.

### Step 1 — Create GitHub repo
```bash
git init
git add .
git commit -m "Initial commit — Zuri IT Consults website"
```

### Step 2 — Push to GitHub
```bash
# Create a new PUBLIC repo on github.com named: zuriitconsults-website
git remote add origin https://github.com/ryanmwaks/zuriitconsults-website.git
git branch -M main
git push -u origin main
```

### Step 3 — Enable GitHub Pages
1. Go to the repo on GitHub
2. Click **Settings → Pages**
3. Under **Source**: select `Deploy from a branch`
4. Branch: `main` | Folder: `/ (root)`
5. Click **Save**
6. Site goes live at: `https://ryanmwaks.github.io/zuriitconsults-website`

Deployment takes 1–2 minutes after pushing.

### Step 4 — Custom Domain (optional)
1. Official domain: `zuriitconsults.com`
2. In GitHub Pages settings → add custom domain
3. Add a `CNAME` file to the repo root containing your domain name
4. Update DNS records at your registrar

---

## Future Improvements

- [ ] Add a blog/articles section
- [ ] Add a services detail page per service
- [ ] Add client testimonials section
- [ ] Add WhatsApp floating button
- [ ] Connect to a CMS (Contentful, Sanity) for easy content updates
- [ ] Add Google Analytics or Umami for traffic tracking
- [ ] Add a cookie consent banner for GDPR compliance

---

---

## Ownership & Licence

The code in this repository is proprietary software of **ZURI IT CONSULTS**. It is published for portfolio and reference purposes only. No licence to copy, modify, redistribute, use commercially or use for AI/ML training is granted; see [LICENSE](LICENSE), [COPYRIGHT](COPYRIGHT) and [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md). To report a vulnerability, see [SECURITY.md](SECURITY.md).

**Developed and maintained by ZURI IT CONSULTS**: *Delivering Secure Digital Systems*
[www.zuriitconsults.com](https://www.zuriitconsults.com) · info@zuriitconsults.com · +254 710 634 288 · +254 780 634 289

Copyright © 2026 ZURI IT CONSULTS | Ryan Mwakala Njumwa. All rights reserved.
