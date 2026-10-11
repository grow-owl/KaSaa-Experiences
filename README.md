# KaSaa Experiences — Official Web Application

Production-oriented, responsive multi-page website for **KaSaa Experiences**, a premier hands-on pottery, painting, and creative recreation venue located at 5th Floor, INOX, Vega Circle Mall, Sevoke Road, Siliguri, West Bengal, India.

---

## 🎨 Creative & Business Positioning
- **Primary Focus**: Hands-on pottery workshops (wheel throwing) and acrylic canvas painting.
- **Secondary Focus**: Spending quality time together — couple dates, anniversaries, friends outings, and celebrations.
- **Supporting Recreation**: In-studio karaoke and recreation lounge.
- **Strict Commercial Guidelines**: No pricing or budget fields displayed anywhere on site; all enquiries route directly through a contextual WhatsApp flow.

---

## 🚀 Tech Stack
- **Framework**: React 18 + JavaScript (ES Modules)
- **Bundler & Dev Server**: Vite 6
- **Styling**: Tailwind CSS v4 with custom brand tokens
- **Routing**: React Router v6
- **Icons**: Lucide React
- **Accessibility**: WCAG 2.2 AA compliant focus management, WAI-ARIA dialogs, trap-free lightbox, and keyboard-accessible accordions.

---

## 🛠️ Quick Start & Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Production Build & Test
```bash
npm run build
npm run preview
```

---

## ⚙️ Configuration & Environment
All business facts, hours, address, and social links are centralized in:
`src/data/siteConfig.js`

To set environment-specific overrides, copy `.env.example` to `.env`:
```env
VITE_SITE_URL=https://kasaaexperiences.com
VITE_WHATSAPP_NUMBER=919876543210
VITE_PHONE_NUMBER=
VITE_MAP_URL=
```
*Note: If `VITE_WHATSAPP_NUMBER` is not configured, the website automatically falls back to an inline status message and a 1-click "Copy Enquiry Message" button so visitors never experience a broken link.*

---

## 📋 Pre-Launch Documentation
- **[LAUNCH_CHECKLIST.md](./LAUNCH_CHECKLIST.md)**: Exhaustive list of owner-supplied items (WhatsApp number, official hours confirmation, Google Place link).
- **[ASSET_REQUIREMENTS.md](./ASSET_REQUIREMENTS.md)**: Specifications for photos requested from the owner.
- **[IMAGE_SOURCES.md](./IMAGE_SOURCES.md)**: Sourcing rights and placeholder policy.
- **[SEO_CONTENT_CHECKLIST.md](./SEO_CONTENT_CHECKLIST.md)**: Local Siliguri keyword targets and schema setup.
- **[IMPLEMENTATION_NOTES.md](./IMPLEMENTATION_NOTES.md)**: Architecture and design system overview.
