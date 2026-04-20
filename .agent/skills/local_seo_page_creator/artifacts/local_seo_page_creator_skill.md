# Local SEO Page Creator — Countrywide UPVC

## Purpose

Generate production-ready, body-only HTML landing pages for **Countrywide UPVC** local SEO campaigns. Each page targets a specific `{LOCATION}` × `{SERVICE}` combination (e.g. "Windows Crosby", "Doors Liverpool") and is designed to be pasted directly into a **WordPress Breakdance Page Builder** Code Block element.

---

## 1. Core Principles

| Principle | Detail |
|-----------|--------|
| **Body-only HTML** | No `<head>`, `<header>`, or `<footer>` — WordPress provides these. |
| **Self-contained** | All CSS is embedded via `<style>` within the page. |
| **SEO-first** | Structured data, semantic headings (single H1), internal linking to silo pages. |
| **Image relevance** | Every image MUST match the product category of its containing section. Window sections → window images only. Door sections → door images only. See §8 below. |
| **Breakdance compatible** | All layout overrides use `!important` where needed to counter Breakdance's flex-direction:column defaults. |
| **Responsive** | Mobile-first with breakpoints at 1024px, 768px, 480px. |
| **Accessibility** | `prefers-reduced-motion`, semantic HTML, proper alt text. |

---

## 2. File Naming Convention

```
{service}-{location}-body.html
```

Examples:
- `windows-liverpool-body.html`
- `doors-crosby-body.html`
- `windows-crosby-body.html`
- `conservatories-maghull-body.html`

---

## 3. Template Structure (Section Order)

Every page follows this exact section order:

```
1.  Schema Markup (JSON-LD script)
2.  <style> block (full CSS design system)
3.  <div class="cw-body">
4.    HERO section
5.    TRUST BAR
6.    INTRO / SEO Content section
7.    SECURITY section (or equivalent product feature section)
8.    RANGE OF SERVICES (internal links paragraph)
9.    OUR PROMISE cards (4× promise cards)
10.   HOW IT WORKS steps (4× steps)
11.   SEO PROSE section (long-form content with H3 subheads)
12.   AREAS WE COVER (dark section with area links + images)
13.   GALLERY section (8 images grid)
14.   TESTIMONIALS section (3× review cards + Google badge)
15.   FAQ section (accordion)
16.   FINAL CTA section (dark background)
17. </div>
18. <script> (FAQ accordion JS)
```

---

## 4. Schema Markup

Every page must include a `@graph` array with three schema types:

### 4a. FAQPage
- `@id`: `https://www.countrywideupvc.co.uk/{slug}/#faq`
- Contains 6-8 `Question` objects relevant to the service + location
- Content must match the visible FAQ accordion on the page exactly

### 4b. LocalBusiness
- `@id`: `https://www.countrywideupvc.co.uk/#localbusiness`
- Fixed business details:
  - Name: `Countrywide UPVC (NW) Ltd`
  - Address: `104 New Court Way, Ormskirk, Lancashire, L39 2YT`
  - Phone: `0151 245 7067` / `01695 579 764`
  - Email: `info@countrywideupvc.co.uk`
  - Opening: Mon–Fri 9am–5pm
  - Rating: 4.9/5 based on 104 reviews
- `areaServed`: Liverpool, Ormskirk, Maghull, Southport, Crosby, Formby
- Social profiles: Facebook, Instagram, TikTok

### 4c. Service
- `@id`: `https://www.countrywideupvc.co.uk/{slug}/#service`
- `serviceType` matches the page topic
- `provider` references the LocalBusiness `@id`
- `areaServed` references the target location

---

## 5. CSS Design System

### 5a. CSS Custom Properties (Design Tokens)
```css
:root {
  --cw-primary: #1e293b;
  --cw-accent: #00a99d;
  --cw-accent-light: rgba(0, 169, 157, 0.1);
  --cw-slate-50: #f8fafc;
  --cw-slate-100: #f1f5f9;
  --cw-slate-200: #e2e8f0;
  --cw-slate-300: #cbd5e1;
  --cw-slate-400: #94a3b8;
  --cw-slate-500: #64748b;
  --cw-slate-600: #475569;
  --cw-slate-900: #0f172a;
  --cw-radius: 12px;
  --cw-section-max: 1280px;
}
```

### 5b. Class Naming Convention
All classes are prefixed with `cw-`. BEM-like structure:
- Block: `.cw-hero`, `.cw-section`, `.cw-service-card`
- Element: `.cw-hero__content`, `.cw-service-card__img`
- Modifier: `.cw-section--alt`, `.cw-section--dark`, `.cw-btn--primary`

### 5c. Key Component Classes

| Component | Class | Notes |
|-----------|-------|-------|
| Root wrapper | `.cw-body` | Full-width override for Breakdance |
| Section | `.cw-section` | 80px vertical padding |
| Alt section | `.cw-section--alt` | Light grey bg |
| Dark section | `.cw-section--dark` | Dark navy bg + white text |
| Container | `.cw-container` | max-width 1280px, centered |
| Heading | `.cw-heading` | With `.cw-heading__bar` accent underline |
| Buttons | `.cw-btn` + modifier | `--primary`, `--white`, `--outline`, `--lg` |
| Grid | `.cw-grid` + column class | `cw-grid-2`, `cw-grid-3`, `cw-grid-4` |
| CTA Bar | `.cw-cta-bar` | Centered flex row of buttons |

### 5d. Breakdance Overrides (Required)
These must be included to prevent Breakdance from breaking layouts:
```css
/* Force full-width inside Breakdance containers */
.cw-body {
  width: 100vw !important;
  max-width: 100vw !important;
  margin-left: calc(-50vw + 50%) !important;
  margin-right: calc(-50vw + 50%) !important;
  overflow-x: hidden;
}

/* Override Breakdance's flex-direction: column */
.cw-body .cw-hero__ctas,
.cw-body .cw-cta-bar,
.cw-body .cw-google-badge,
.cw-body .cw-stars {
  display: flex !important;
  flex-direction: row !important;
  flex-wrap: wrap !important;
}

/* Grid layouts must not become column */
.cw-body .cw-grid,
.cw-body .cw-intro__grid,
.cw-body .cw-areas__grid,
.cw-body .cw-gallery,
.cw-body .cw-intro__checklist,
.cw-body .cw-areas__list,
.cw-body .cw-areas__images {
  display: grid !important;
}
```

---

## 6. Content Sections — Detailed Requirements

### 6a. HERO
- Full-viewport background image with dark overlay + blur
- **H1**: `{Service} {Location}` (e.g. "Windows Liverpool", "Doors Crosby")
- **H2**: Tagline with trust signal (e.g. "FENSA Approved Double Glazing Across Merseyside")
- **Subtitle**: USP paragraph — no pressure selling, years of experience, guarantee
- **CTAs**: Primary phone button + white "Get a Free Quote" button
- **Footer tagline**: "Free Home Survey · No Obligation · 10-Year Guarantee"

### 6b. TRUST BAR
- Row of accreditation logos: FENSA, Constructionline, SafeContractor, CHAS, IWG
- Greyscale by default, full colour on hover
- Fixed image URLs from client's WordPress media library

### 6c. INTRO / SEO Content
- Two-column grid: text left, image right
- H2 with location keyword
- 2-3 paragraphs of unique, locally-relevant copy
- Internal links to nearby area pages
- Checklist of 6 USPs with green tick icons
- Image with tilted accent background + FENSA badge overlay

### 6d. SECURITY Section
- Section modifier: `cw-section--alt`
- Two-column: copy left, image right
- Focus on Yale locking, internal beading, composite door security
- CTA buttons

### 6e. RANGE OF SERVICES
- Prose section with internal links to all product category pages
- Links to: casement, bay, flush casement, tilt & turn, aluminium windows
- Links to: uPVC doors, composite doors, bifold doors, French/patio doors
- Links to: conservatories, roof conversions
- CTA: "Browse Window Options" + "View Our Doors"

### 6f. OUR PROMISE (4 cards)
- Icon + H3 + description
- Topics: No Pressure Sales, FENSA Certified, 10-Year Guarantee, Family-Run Business

### 6g. HOW IT WORKS (4 steps)
- Numbered circles (1-4)
- Steps: Free Home Survey → Detailed Quote → Manufacturing → Professional Install

### 6h. SEO PROSE (Long-form Content)
- `cw-prose` container (max-width 800px centered)
- H2 + multiple H3 subheadings
- Topics vary by service: energy efficiency, noise reduction, property types, local relevance
- Natural keyword integration — no stuffing
- MUST NOT include finance/credit information (client doesn't offer it)
- CTA buttons between paragraphs

### 6i. AREAS WE COVER
- Dark section
- Two-column grid: area links left, staggered images right
- Area list links: Liverpool, Crosby, Maghull, Ormskirk, Southport, Formby, Wirral, Aintree, Bootle, Waterloo, Huyton, St Helens
- "Contact our team" extra box with link to areas page

### 6j. GALLERY
- 4-column grid (2 on mobile), 8 images
- Hover overlay with accent colour + label text
- **Images must match the page's service type** (see §8)

### 6k. TESTIMONIALS
- 3 review cards with star ratings, quoted text, author name + location
- Reviews must be real reviews from the Trustindex widget
- Google badge with rating display

### 6l. FAQ ACCORDION
- 6-8 questions with expandable answers
- Must match FAQPage schema exactly
- JS toggle at bottom of page
- MUST NOT include finance-related FAQs

### 6m. FINAL CTA
- Dark section
- H2 + subtitle
- Two CTA buttons: phone + quote form

---

## 7. Business Information (Fixed)

| Field | Value |
|-------|-------|
| Company | Countrywide UPVC (NW) Ltd |
| Address | 104 New Court Way, Ormskirk, Lancashire, L39 2YT |
| Liverpool Phone | 0151 245 7067 |
| Lancashire Phone | 01695 579 764 |
| Email | info@countrywideupvc.co.uk |
| Hours | Mon–Fri 9am–5pm, Sat & Sun Closed |
| Website | https://www.countrywideupvc.co.uk/ |
| FENSA | Yes – approved installer |
| Experience | 25+ years, family-run |
| Guarantee | 10-year on products and workmanship |
| Rating | 4.9/5 based on 104 Google reviews |
| Frames | Profile 22 uPVC frames |
| Locks | Yale multi-point locking systems |
| Energy | A-rated as standard |

---

## 8. Image Relevance Rules (CRITICAL)

> **Every image used on a page MUST be relevant to the product category of the section it appears in.**

### Rules:
1. **Window pages**: Hero, intro, security, gallery → window images ONLY
2. **Door pages**: Hero, intro, security, gallery → door images ONLY
3. **Mixed sections** (e.g. "Range of Services"): May use generic images or omit images
4. **Area section images**: Should show the relevant product type, not generic images
5. **Never mix**: A gallery on a "Doors Crosby" page must NOT contain window images

### Image Sourcing Priority:
1. **Client's website** (`countrywideupvc.co.uk`) — scrape product pages for genuine images
2. **Client's WordPress media library** — use known upload URLs
3. **Only as last resort**: Generic stock images with appropriate alt text

### Known Image URLs:

#### Windows
- `https://www.countrywideupvc.co.uk/wp-content/uploads/2025/07/bay-windows-Liverpool.jpg`
- `https://www.countrywideupvc.co.uk/wp-content/uploads/2025/09/double-glazed-windows-liverpool.jpeg`
- `https://www.countrywideupvc.co.uk/wp-content/uploads/2024/11/Modern-uPVC-windows-in-slate-grey.jpg`
- Scrape more from: `/windows/casement/`, `/windows/bay/`, `/windows/aluminium/`, `/windows/flush-casements/`, `/windows/tilt-turn/`

#### Doors
- Scrape from: `/doors/upvc/`, `/doors/composite-doors/`, `/doors/bi-folding/`, `/doors/french-patio/`

#### Trust Logos
- FENSA: `https://www.countrywideupvc.co.uk/wp-content/uploads/2024/11/FENSA_Approved-Window-and-Door-Installations_RGB-1024x544-1.webp`
- Constructionline: `https://www.countrywideupvc.co.uk/wp-content/uploads/2024/11/constructionline-logo-png_seeklogo-328720.png`
- SafeContractor: `https://www.countrywideupvc.co.uk/wp-content/uploads/2024/11/safe-contractor-logo-1.jpg`
- CHAS: `https://www.countrywideupvc.co.uk/wp-content/uploads/2024/11/chas-logo-1-1.jpg`
- IWG: `https://www.countrywideupvc.co.uk/wp-content/uploads/2024/11/IWG.png`

---

## 9. Internal Linking Strategy

### Product Category Links (use on every page)
| Product | URL |
|---------|-----|
| Casement Windows | `/windows/casement/` |
| Bay Windows | `/windows/bay/` |
| Flush Casement Windows | `/windows/flush-casements/` |
| Tilt & Turn Windows | `/windows/tilt-turn/` |
| Aluminium Windows | `/windows/aluminium/` |
| uPVC Doors | `/doors/upvc/` |
| Composite Doors | `/doors/composite-doors/` |
| Bifold Doors | `/doors/bi-folding/` |
| French & Patio Doors | `/doors/french-patio/` |
| Conservatories | `/conservatories/` |
| Roof Conversions | `/roof-conversions/` |

### Area Pages (link contextually)
| Area | URL |
|------|-----|
| Liverpool | `/liverpool/` |
| Crosby | `/crosby/` |
| Maghull | `/maghull/` |
| Ormskirk | `/ormskirk/` |
| Southport | `/southport/` |
| Formby | `/formby/` |

### Local Service Pages (link where created)
| Page | URL Pattern |
|------|-------------|
| Windows {Location} | `/windows-{location}/` |
| Doors {Location} | `/doors-{location}/` |

---

## 10. FAQ Accordion JavaScript

Include at the bottom of every page:

```javascript
document.querySelectorAll('.cw-faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    document.querySelectorAll('.cw-faq-item').forEach(i => {
      if (i !== item) i.classList.remove('open');
    });
    item.classList.toggle('open');
  });
});
```

---

## 11. Content Rules

### DO:
- Write unique, location-specific copy for every page
- Reference local landmarks, property types, and geography naturally
- Use semantic heading hierarchy (H1 → H2 → H3)
- Include genuine customer testimonials from Trustindex
- Naturally integrate target keywords
- Reference FENSA, Yale, Profile 22 as trust signals
- Link to product category pages and area pages

### DO NOT:
- ❌ Mention finance, credit, monthly payments, or lending
- ❌ Copy content verbatim between pages (unique per location)
- ❌ Use window images on door pages or vice versa
- ❌ Include `<head>`, `<header>`, or `<footer>` elements
- ❌ Use Tailwind CSS or external stylesheets
- ❌ Keyword-stuff — keep copy natural and helpful
- ❌ Use placeholder images — always source real product images
- ❌ Include prices unless verified as current

---

## 12. Workflow for Creating a New Page

1. **Identify target**: Confirm `{SERVICE}` and `{LOCATION}`
2. **Scrape images**: Visit relevant product pages on client's site to collect on-brand images
3. **Draft schema**: Create JSON-LD with location-specific FAQ questions
4. **Copy CSS**: Replicate the full design system from an existing reference page
5. **Build sections**: Work through §6 sections in order
6. **Write unique copy**: Location-specific intro, SEO prose, and FAQ answers
7. **Internal links**: Wire up all product and area page links
8. **Image audit**: Verify every image matches its section's product category
9. **Preview locally**: Open in browser to check layout
10. **Deliver**: File named per §2 convention, ready for Breakdance paste

---

## 13. Reference Files

Use these as templates when creating new pages:

- **Windows page template**: [windows-liverpool-body.html](file:///C:/Users/graha/Windows%20Liverpool/countrywide_windows_liverpool/windows-liverpool-body.html)
- **Doors page template**: [doors-crosby-body.html](file:///C:/Users/graha/Windows%20Liverpool/countrywide_windows_liverpool/doors-crosby-body.html)
- **Alternate location**: [windows-crosby-body.html](file:///C:/Users/graha/Windows%20Liverpool/countrywide_windows_liverpool/windows-crosby-body.html)
