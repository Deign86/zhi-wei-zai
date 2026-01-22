# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Zhi Wei Zai | 知味在
**Generated:** 2026-01-23
**Category:** Chinese Restaurant / Traditional Dining
**Style:** Chinese Traditional Elegance with Modern Web

---

## 🎨 Brand Identity

### Design Philosophy
Inspired by traditional Chinese aesthetics (中式传统美学), blending imperial palace warmth with modern elegance. The design evokes the golden age of Chinese dining culture with warm, inviting tones reminiscent of silk, lacquer, and aged wood.

---

## Global Rules

### Color Palette (Chinese Traditional)

| Role | Hex | Tailwind Class | CSS Variable | Chinese Name |
|------|-----|----------------|--------------|--------------|
| Primary (Crimson) | `#902223` | `zwz-crimson` | `--color-primary` | 绛红 (Jiàng Hóng) |
| Secondary (Brown) | `#8D5631` | `zwz-brown` | `--color-secondary` | 棕褐 (Zōng Hè) |
| Background (Cream) | `#E2CD9C` | `zwz-cream` | `--color-background` | 米黄 (Mǐ Huáng) |
| Text (Dark Brown) | `#3D2317` | `zwz-text` | `--color-text` | 深褐 (Shēn Hè) |
| Accent (Gold) | `#C4A44A` | `zwz-gold` | `--color-accent` | 金色 (Jīn Sè) |
| Light Cream | `#F5EDD8` | `zwz-cream-light` | `--color-background-light` | 淡米 (Dàn Mǐ) |

**Color Notes:** Traditional Chinese palette inspired by imperial architecture, silk robes, and tea ceremony aesthetics. The crimson (#902223) represents prosperity and celebration. The brown (#8D5631) evokes aged wood and traditional furniture. The cream (#E2CD9C) provides warmth like aged parchment.

### Tailwind Config Colors
```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        'zwz-crimson': '#902223',      // Primary - Deep Chinese Red
        'zwz-crimson-light': '#A83234', // Hover state
        'zwz-crimson-dark': '#6E1A1B',  // Dark accent
        'zwz-brown': '#8D5631',          // Secondary - Warm Brown
        'zwz-brown-light': '#A86B42',    // Hover state
        'zwz-brown-dark': '#6B4025',     // Dark accent
        'zwz-cream': '#E2CD9C',          // Background - Warm Cream
        'zwz-cream-light': '#F5EDD8',    // Light sections
        'zwz-cream-dark': '#D4BE8A',     // Darker cream
        'zwz-gold': '#C4A44A',           // Accent - Imperial Gold
        'zwz-gold-light': '#D4B85E',     // Hover gold
        'zwz-text': '#3D2317',           // Primary text
        'zwz-text-light': '#5C3D2E',     // Secondary text
      }
    }
  }
}
```

### Typography

- **Heading Font:** Cinzel (for English headings) + Noto Serif SC (for Chinese characters)
- **Body Font:** Karla (for English) + Noto Sans SC (for Chinese)
- **Display Font:** Playfair Display (for decorative elements)
- **Mood:** Chinese, traditional, elegant, cultural, sophisticated, timeless
- **Google Fonts:** [Cinzel + Karla + Playfair Display + Noto Sans SC + Noto Serif SC](https://fonts.google.com/share?selection.family=Cinzel:wght@400;500;600;700|Karla:wght@300;400;500;600;700|Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400|Noto+Sans+SC:wght@300;400;500;700|Noto+Serif+SC:wght@400;500;600;700)

**CSS Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Karla:wght@300;400;500;600;700&family=Noto+Sans+SC:wght@300;400;500;700&family=Noto+Serif+SC:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');
```

### Typography Scale (Unified)

| Role | Mobile | Desktop | Tailwind Class | Font |
|------|--------|---------|----------------|------|
| **Hero Title** | 2.5rem (40px) | 4.5rem (72px) | `text-4xl md:text-6xl lg:text-7xl` | `font-display` (Playfair Display) |
| **Page Title** | 2rem (32px) | 3rem (48px) | `text-3xl md:text-4xl lg:text-5xl` | `font-display` (Playfair Display) |
| **Section Title** | 1.5rem (24px) | 2rem (32px) | `text-2xl md:text-3xl` | `font-display` (Playfair Display) |
| **Card Title** | 1.25rem (20px) | 1.5rem (24px) | `text-xl md:text-2xl` | `font-heading` (Cinzel) |
| **Subtitle** | 1.125rem (18px) | 1.25rem (20px) | `text-lg md:text-xl` | `font-body` (Karla) |
| **Body Large** | 1rem (16px) | 1.125rem (18px) | `text-base md:text-lg` | `font-body` (Karla) |
| **Body** | 0.875rem (14px) | 1rem (16px) | `text-sm md:text-base` | `font-body` (Karla) |
| **Caption** | 0.75rem (12px) | 0.875rem (14px) | `text-xs md:text-sm` | `font-body` (Karla) |
| **Badge/Tag** | 0.75rem (12px) | 0.75rem (12px) | `text-xs` | `font-body` (Karla) |
| **Nav Link** | 0.875rem (14px) | 1rem (16px) | `text-sm md:text-base` | `font-body` (Karla) |
| **Brand Name** | 1.125rem (18px) | 1.25rem (20px) | `text-lg md:text-xl` | `font-heading` (Cinzel) |
| **Button** | 0.875rem (14px) | 1rem (16px) | `text-sm md:text-base` | `font-body` (Karla) |

### Font Weight Usage

| Weight | Tailwind | Usage |
|--------|----------|-------|
| 300 | `font-light` | Decorative text, hero subtitles |
| 400 | `font-normal` | Body text, descriptions |
| 500 | `font-medium` | Nav links, labels, form text |
| 600 | `font-semibold` | Active nav, emphasis, card titles |
| 700 | `font-bold` | Headings, titles, CTAs |

### ⚠️ FORBIDDEN FONTS (Remove from codebase)

- ❌ **Merriweather** — Not in design system, replace with `Karla` or `Playfair Display`
- ❌ Arbitrary font-size values (use scale above)
- ❌ `vw`-based font sizes (use responsive Tailwind classes instead)

### Spacing Variables

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `4px` / `0.25rem` | Tight gaps |
| `--space-sm` | `8px` / `0.5rem` | Icon gaps, inline spacing |
| `--space-md` | `16px` / `1rem` | Standard padding |
| `--space-lg` | `24px` / `1.5rem` | Section padding |
| `--space-xl` | `32px` / `2rem` | Large gaps |
| `--space-2xl` | `48px` / `3rem` | Section margins |
| `--space-3xl` | `64px` / `4rem` | Hero padding |

### Shadow Depths

| Level | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(61,35,23,0.05)` | Subtle lift |
| `--shadow-md` | `0 4px 6px rgba(61,35,23,0.1)` | Cards, buttons |
| `--shadow-lg` | `0 10px 15px rgba(61,35,23,0.1)` | Modals, dropdowns |
| `--shadow-xl` | `0 20px 25px rgba(144,34,35,0.15)` | Hero images, featured cards |

### Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | `4px` | Small elements, badges |
| `--radius-md` | `8px` | Buttons, inputs |
| `--radius-lg` | `12px` | Cards |
| `--radius-xl` | `16px` | Large cards, modals |
| `--radius-2xl` | `24px` | Hero sections, floating nav |

---

## Component Specs

### Buttons

```css
/* Primary Button - Crimson */
.btn-primary {
  background: #902223;
  color: #F5EDD8;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  font-family: 'Cinzel', serif;
  letter-spacing: 0.5px;
  transition: all 200ms ease;
  cursor: pointer;
  border: none;
}

.btn-primary:hover {
  background: #A83234;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(144,34,35,0.3);
}

/* Secondary Button - Brown Outline */
.btn-secondary {
  background: transparent;
  color: #8D5631;
  border: 2px solid #8D5631;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  font-family: 'Cinzel', serif;
  letter-spacing: 0.5px;
  transition: all 200ms ease;
  cursor: pointer;
}

.btn-secondary:hover {
  background: #8D5631;
  color: #F5EDD8;
}

/* Gold Accent Button */
.btn-gold {
  background: linear-gradient(135deg, #C4A44A 0%, #D4B85E 100%);
  color: #3D2317;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  font-family: 'Cinzel', serif;
  letter-spacing: 0.5px;
  transition: all 200ms ease;
  cursor: pointer;
  border: none;
}

.btn-gold:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(196,164,74,0.4);
}
```

### Cards

```css
.card {
  background: #F5EDD8;
  border: 1px solid rgba(141,86,49,0.15);
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 6px rgba(61,35,23,0.08);
  transition: all 200ms ease;
  cursor: pointer;
}

.card:hover {
  box-shadow: 0 10px 20px rgba(144,34,35,0.12);
  transform: translateY(-2px);
  border-color: rgba(144,34,35,0.2);
}

/* Featured Card with Gold Border */
.card-featured {
  background: linear-gradient(135deg, #F5EDD8 0%, #E2CD9C 100%);
  border: 2px solid #C4A44A;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 8px 24px rgba(196,164,74,0.2);
}
```

### Navigation

```css
/* Floating Navbar */
.navbar {
  background: rgba(245,237,216,0.95);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(144,34,35,0.1);
  border-radius: 16px;
  padding: 12px 24px;
  box-shadow: 0 4px 12px rgba(61,35,23,0.1);
}

.nav-link {
  color: #3D2317;
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: 500;
  transition: all 200ms ease;
  cursor: pointer;
}

.nav-link:hover {
  background: rgba(144,34,35,0.1);
  color: #902223;
}

.nav-link.active {
  background: #902223;
  color: #F5EDD8;
}
```

### Inputs

```css
.input {
  padding: 12px 16px;
  border: 1px solid rgba(141,86,49,0.3);
  border-radius: 8px;
  font-size: 16px;
  font-family: 'Karla', sans-serif;
  background: #F5EDD8;
  color: #3D2317;
  transition: all 200ms ease;
}

.input:focus {
  border-color: #902223;
  outline: none;
  box-shadow: 0 0 0 3px rgba(144,34,35,0.15);
}

.input::placeholder {
  color: rgba(61,35,23,0.5);
}
```

### Modals

```css
.modal-overlay {
  background: rgba(61,35,23,0.6);
  backdrop-filter: blur(4px);
}

.modal {
  background: #F5EDD8;
  border: 1px solid rgba(196,164,74,0.3);
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 25px 50px rgba(61,35,23,0.25);
  max-width: 500px;
  width: 90%;
}
```

### Decorative Elements

```css
/* Chinese-style Divider */
.divider-chinese {
  display: flex;
  align-items: center;
  gap: 16px;
  color: #C4A44A;
}

.divider-chinese::before,
.divider-chinese::after {
  content: '';
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, transparent, #C4A44A, transparent);
}

/* Gold Border Accent */
.border-accent {
  border: 2px solid transparent;
  background: linear-gradient(#F5EDD8, #F5EDD8) padding-box,
              linear-gradient(135deg, #C4A44A, #8D5631) border-box;
}

/* Traditional Corner Decoration */
.corner-decoration {
  position: relative;
}

.corner-decoration::before,
.corner-decoration::after {
  content: '';
  position: absolute;
  width: 24px;
  height: 24px;
  border: 2px solid #C4A44A;
}

.corner-decoration::before {
  top: -4px;
  left: -4px;
  border-right: none;
  border-bottom: none;
}

.corner-decoration::after {
  bottom: -4px;
  right: -4px;
  border-left: none;
  border-top: none;
}
```

---

## Style Guidelines

**Style:** Chinese Traditional Elegance

**Keywords:** Imperial, warm tones, silk textures, lacquer finish, aged wood, calligraphy, traditional patterns, tea ceremony, palace aesthetics

**Best For:** Chinese restaurants, traditional dining, cultural experiences, tea houses, Asian fusion cuisine, heritage brands

**Key Effects:**
- Subtle gradients mimicking silk sheen
- Warm shadows using brown tones
- Gold accents for premium feel
- Smooth transitions (200-300ms)
- Elegant hover states with slight lift

### Page Pattern

**Pattern Name:** Elegant Dining Experience

- **CTA Placement:** Above fold with prominent reservation button
- **Section Order:** Hero > About/Story > Menu Highlights > Gallery > Testimonials > Reservations > Footer

### Chinese-Inspired Design Elements

| Element | Implementation |
|---------|----------------|
| Section Dividers | Gold gradient lines with center icon |
| Image Borders | Subtle gold/brown borders |
| Heading Style | Cinzel font with letter-spacing |
| Background Texture | Subtle cream gradient overlays |
| Icons | Traditional/cultural SVG icons |

---

## Anti-Patterns (Do NOT Use)

- ❌ Bright neon colors
- ❌ Playful/cartoon aesthetics
- ❌ Cold blue/gray tones
- ❌ Harsh black backgrounds
- ❌ Comic sans or playful fonts

### Additional Forbidden Patterns

- ❌ **Emojis as icons** — Use SVG icons (Heroicons, Lucide, Simple Icons)
- ❌ **Missing cursor:pointer** — All clickable elements must have cursor:pointer
- ❌ **Layout-shifting hovers** — Avoid scale transforms that shift layout
- ❌ **Low contrast text** — Maintain 4.5:1 minimum contrast ratio
- ❌ **Instant state changes** — Always use transitions (150-300ms)
- ❌ **Invisible focus states** — Focus states must be visible for a11y

---

## Pre-Delivery Checklist

Before delivering any UI code, verify:

- [ ] No emojis used as icons (use SVG instead)
- [ ] All icons from consistent icon set (Heroicons/Lucide)
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover states with smooth transitions (150-300ms)
- [ ] Light mode: text contrast 4.5:1 minimum
- [ ] Focus states visible for keyboard navigation
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive: 375px, 768px, 1024px, 1440px
- [ ] No content hidden behind fixed navbars
- [ ] No horizontal scroll on mobile
