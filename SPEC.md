# Islamic Scientific Heritage Website - SPEC.md

## 1. Project Overview

**Project Name:** Islamic Science History Portal
**Type:** Educational Website / Interactive Experience
**Core Functionality:** A comprehensive digital archive showcasing the golden age of Islamic scientific achievements, featuring an AI-powered chatbot interface for interactive learning.
**Target Users:** Students, researchers, educators, and anyone interested in Islamic scientific heritage.

---

## 2. Visual & Design Specification

### Theme & Aesthetic
- **Style:** Arabesque Modern - blending classical Islamic geometric patterns with contemporary minimalism
- **Color Palette:**
  - Primary: `#1B4D3E` (Deep Emerald - representing Islam)
  - Secondary: `#C9A227` (Antique Gold - representing knowledge/wealth)
  - Accent: `#8B4513` (Saddle Brown - earth tones)
  - Background: `#F5F0E8` (Warm Cream - parchment feel)
  - Text: `#2C1810` (Dark Sepia - readable, historical feel)
  - Highlight: `#E8D5B7` (Light Gold - cards/sections)

### Typography
- **Headings:** "Amiri" (Arabic serif) + "Playfair Display" (English)
- **Body:** "Cairo" (Arabic sans-serif) + "Source Sans Pro" (English)
- **Decorative:** "Scheherazade New" (Quranic/poetry sections)

### Visual Elements
- Islamic geometric patterns as subtle backgrounds
- Star and crescent motifs
- Compass rose / astrolabe inspired icons
- Glowing effects for interactive elements
- Smooth scroll animations

### Layout Structure
```
┌─────────────────────────────────────────────────────────┐
│  HEADER: Logo + Navigation + Language Toggle           │
├─────────────────────────────────────────────────────────┤
│  HERO: Full-width with geometric pattern + CTA         │
├─────────────────────────────────────────────────────────┤
│  FEATURES: 3-4 cards showcasing main sections         │
├─────────────────────────────────────────────────────────┤
│  TIMELINE: Interactive historical timeline             │
├─────────────────────────────────────────────────────────┤
│  SCHOLARS: Cards of famous Islamic scientists          │
├─────────────────────────────────────────────────────────┤
│  CHATBOT: Floating chat interface (bottom-right)       │
├─────────────────────────────────────────────────────────┤
│  FOOTER: Links + Credits + Social Media                 │
└─────────────────────────────────────────────────────────┘
```

---

## 3. Sections Specification

### 3.1 Header
- Logo with Islamic geometric design
- Navigation links: Home, Timeline, Scholars, Sciences, Quiz, Chat
- Language toggle (Arabic/English)
- Smooth scroll to sections

### 3.2 Hero Section
- Large background with subtle Islamic pattern
- Animated Arabic calligraphy welcome text
- "Explore the Golden Age" CTA button
- Floating geometric shapes animation

### 3.3 Features Grid
- **The Golden Age**: Overview of 8th-14th century
- **Great Scholars**: Profiles of Ibn Sina, Al-Khwarizmi, Ibn al-Haytham, etc.
- **Sciences**: Mathematics, Astronomy, Medicine, Chemistry, Physics
- **Interactive Map**: Geographic exploration of scholarly centers

### 3.4 Historical Timeline
- Horizontal scrollable timeline
- Key dates: 762 (House of Wisdom founded), 820 (Algebra), etc.
- Visual markers with icons
- Click to expand events

### 3.5 Scholars Gallery
- Card grid with photos/illustrations
- Name, field, notable works
- Hover effect with brief bio
- Click for detailed modal

### 3.6 Sciences Explored
- Tabbed interface: Mathematics | Astronomy | Medicine | Chemistry | Physics
- Each section includes:
  - Introduction text
  - Key inventions/discoveries
  - Interactive diagrams
  - Notable contributions

### 3.7 Chatbot Interface (UI Only)
- Floating button (bottom-right) with pulsing animation
- Chat panel slides up when clicked
- Header with "Scholar Bot" title and Islamic pattern
- Message bubbles (user right, bot left)
- Suggested questions as chips
- Input field with send button
- **Note:** UI ready, chat functionality requires backend integration

### 3.8 Footer
- About section
- Quick links
- Contact information
- Social media icons
- Copyright with Islamic calendar year

---

## 4. Content Specification

### Famous Scholars (Sample)
1. **Al-Khwarizmi** (c. 780-850): Father of Algebra
2. **Ibn Sina** (980-1037): Canon of Medicine
3. **Ibn al-Haytham** (965-1040): Father of modern optics
4. **Al-Razi** (854-925): First to differentiate smallpox/measles
5. **Al-Biruni** (973-1048): Calculated Earth's circumference
6. **Ibn Rushd** (1126-1198): Philosophy and medicine
7. **Al-Kindi** (c. 801-873): First Arab philosopher
8. **Jabir ibn Hayyan** (c. 721-c. 815): Father of chemistry

### Key Scientific Achievements
- Algebra (Al-Khwarizmi)
- Optics & camera obscura (Ibn al-Haytham)
- Hospitals & medical classification (Al-Razi)
- Astrolabe improvements & star catalogs
- Surgical techniques and instruments
- Water clocks and mechanical devices
- Paper manufacturing spread
- Algebraic algorithms for computing

---

## 5. Chatbot UI Specification

### Visual Design
- **Button:** 60x60px circle, emerald gradient, chat icon
- **Panel:** 380px width, 500px height, rounded corners (16px)
- **Header:** 60px height, gradient background, close button
- **Messages area:** Scrollable, light background
- **Input area:** Fixed at bottom, text input + send button

### Pre-built Responses (UI Demo)
- Greeting message from "Al-Khwarizmi Bot"
- Suggested questions as clickable chips
- Typing indicator animation
- Timestamp on messages

### Suggested Questions
- "Who invented algebra?"
- "Tell me about Ibn Sina"
- "What did Islamic scientists discover about light?"
- "Show me the timeline of the Golden Age"
- "What contributions did Muslims make to medicine?"

---

## 6. Technical Stack

- **Frontend:** Pure HTML5, CSS3, Vanilla JavaScript
- **No frameworks:** Maximum compatibility and speed
- **Responsive:** Mobile-first with breakpoints at 768px, 1024px
- **Animations:** CSS keyframes + Intersection Observer
- **Fonts:** Google Fonts (Amiri, Cairo, Playfair Display)
- **Icons:** Inline SVG for Islamic motifs
- **Deployment:** Static hosting (Netlify/Vercel/GitHub Pages)

---

## 7. File Structure

```
islamic-science-history-site/
├── index.html          # Main page
├── css/
│   └── style.css      # All styles
├── js/
│   └── main.js        # Interactive functionality
├── assets/
│   └── images/        # (Optional) local images
└── README.md          # Project info
```

---

## 8. Acceptance Criteria

1. ✅ Website loads without errors
2. ✅ All sections are visible and properly styled
3. ✅ Navigation smooth-scrolls to sections
4. ✅ Timeline is interactive and scrollable
5. ✅ Scholar cards display correctly
6. ✅ Chatbot UI opens/closes smoothly
7. ✅ Chat interface has realistic placeholder responses
8. ✅ Arabic/English content displays correctly (RTL support)
9. ✅ Mobile responsive layout works
10. ✅ Deployed URL is accessible

---

## 9. Chatbot States

| State | Visual | Behavior |
|-------|--------|----------|
| Closed | Floating button visible | Pulse animation |
| Open | Panel slides up | Full chat interface visible |
| Typing | Animated dots | "Scholar is thinking..." |
| User message | Right-aligned, gold bubble | Timestamp shown |
| Bot message | Left-aligned, emerald bubble | Arabic/English response |

---

## 10. Interaction Specification

### User Controls
- Click chatbot button → Toggle panel open/close
- Click suggested question → Insert as user message
- Type in input → Enable send button
- Click send → Add user message, show typing, show bot response
- Click scholar card → Open modal with details

### Animations
- Hero text: Fade-in + slight slide-up
- Cards: Staggered fade-in on scroll
- Timeline: Slide left/right on scroll
- Chatbot: Slide-up panel with spring effect
- Buttons: Scale + glow on hover

---

*Document created: 2026-05-03*
*Project: Islamic Scientific Heritage Portal*