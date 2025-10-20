# Language Toggle Button - Visual Guide

## 🎨 What It Looks Like

### English Mode (Default)
```
┌──────────────────────────────────┐
│  ┌────────────────────────────┐  │
│  │  अ  ●───────  हिंदी       │  │  ← Button
│  └────────────────────────────┘  │
│        ↑    ↑         ↑          │
│     Hindi  Toggle   "Switch      │
│     Letter  Switch  to Hindi"    │
└──────────────────────────────────┘
```

### Hindi Mode (After clicking)
```
┌──────────────────────────────────┐
│  ┌────────────────────────────┐  │
│  │  A  ───────●  English      │  │  ← Button
│  └────────────────────────────┘  │
│        ↑         ↑      ↑         │
│     English   Toggle  "Switch     │
│     Letter    Switch  to English" │
└──────────────────────────────────┘
```

## 📍 Location on Page

```
┌─────────────────────────────────────────────────────┐
│ [HEADER - Navy Blue Background]                     │
│                                                      │
│  ┌──┐  KRISHNA CARE          [अ ●───── हिंदी]     │
│  │KC│  Logistics & Supply                ↑          │
│  └──┘  Chain                         TOGGLE HERE    │
│                                                      │
├─────────────────────────────────────────────────────┤
│ [NAVIGATION BAR - White Background]                 │
│                                                      │
│  Home | Services ▼ | Portfolio | Gallery | ...      │
│                                                      │
└─────────────────────────────────────────────────────┘
```

## 🎨 Button Design Details

### Colors
- **Background**: Gradient from Yellow (#fbbf24) to Orange (#f97316)
- **Text**: Dark Gray (#1f2937)
- **Toggle Dot**: White (#ffffff)
- **Hover Effect**: Gradient reverses (Orange to Yellow)

### Dimensions
- **Width**: Auto (fits content)
- **Height**: 40px (2.5rem)
- **Padding**: 16px horizontal, 8px vertical
- **Border Radius**: 8px (rounded-lg)

### Animation
- **Toggle Switch**: Smooth slide (300ms spring animation)
- **Button Scale**: Grows to 105% on hover
- **Shadow**: Elevates on hover (shadow-lg → shadow-xl)

## 💫 Interaction States

### Normal State
```
┌────────────────────────┐
│  अ  ●───────  हिंदी  │  Yellow-Orange gradient
└────────────────────────┘  Shadow-lg
```

### Hover State
```
┌────────────────────────┐
│  अ  ●───────  हिंदी  │  Orange-Yellow gradient
└────────────────────────┘  Shadow-xl, 5% larger
     Cursor: pointer
```

### Clicked State
```
┌────────────────────────┐
│  A  ───────●  English  │  Switches instantly
└────────────────────────┘  Toggle slides to right
     95% scale for 100ms
```

## 📱 Responsive Behavior

### Desktop (> 640px)
```
┌─────────────────────────┐
│  अ  ●───────  हिंदी    │  Full text shown
└─────────────────────────┘
```

### Mobile (< 640px)
```
┌───────────────┐
│  अ  ●─────    │  Language name hidden
└───────────────┘  (space-saving)
```

## 🎯 Elements Breakdown

### 1. Language Indicator (Left)
- **English Mode**: Shows `अ` (Hindi letter)
- **Hindi Mode**: Shows `A` (English letter)
- **Purpose**: Shows which language you'll switch TO

### 2. Toggle Switch (Middle)
- **Shape**: Rounded pill background
- **Dot**: White circle that slides
- **English**: Dot on LEFT side
- **Hindi**: Dot on RIGHT side

### 3. Language Label (Right)
- **English Mode**: Shows `हिंदी` (in Devanagari)
- **Hindi Mode**: Shows `English` (in Latin)
- **Mobile**: Hidden on small screens

## 🌈 Color Specifications

```css
/* Background Gradient */
background: linear-gradient(to right, #fbbf24, #f97316);

/* Hover Gradient (Reversed) */
background: linear-gradient(to right, #f97316, #fbbf24);

/* Text Color */
color: #1f2937;

/* Toggle Background */
background: rgba(255, 255, 255, 0.3); /* White with 30% opacity */

/* Toggle Dot */
background: #ffffff; /* Pure white */
```

## ✨ Animation Timing

```javascript
// Toggle Switch Slide
transition: {
  type: "spring",
  stiffness: 700,
  damping: 30
}

// Button Hover Scale
whileHover={{ scale: 1.05 }}

// Button Click
whileTap={{ scale: 0.95 }}

// Background Gradient Fade
transition: opacity 300ms
```

## 🔤 Typography

- **Font Family**: System default (inherits from body)
- **Font Weight**: 600 (semibold) for all text
- **Font Size**: 0.875rem (14px)
- **Letter**: Larger, 1rem for language indicator

## 📊 Accessibility

- **ARIA Label**: `"Toggle Language"`
- **Keyboard**: Accessible via Tab key
- **Screen Readers**: Announces "Toggle Language" button
- **Contrast Ratio**: Excellent (dark text on light background)

## 🎪 Complete Visual Example

```
BEFORE CLICK (English Active):
┌──────────────────────────────────────────────────┐
│  [Gradient: Yellow → Orange]                     │
│  ┌─────────────────────────────────────────────┐ │
│  │                                             │ │
│  │   अ    ┌───────────┐         हिंदी        │ │
│  │        │ ●─────────│                        │ │
│  │        └───────────┘                        │ │
│  │         Toggle OFF                          │ │
│  │                                             │ │
│  └─────────────────────────────────────────────┘ │
│                                                  │
│  Shadow: 0 4px 6px rgba(0,0,0,0.1)              │
└──────────────────────────────────────────────────┘

AFTER CLICK (Hindi Active):
┌──────────────────────────────────────────────────┐
│  [Gradient: Yellow → Orange]                     │
│  ┌─────────────────────────────────────────────┐ │
│  │                                             │ │
│  │   A    ┌───────────┐       English         │ │
│  │        │─────────●│                         │ │
│  │        └───────────┘                        │ │
│  │         Toggle ON                           │ │
│  │                                             │ │
│  └─────────────────────────────────────────────┘ │
│                                                  │
│  Shadow: 0 4px 6px rgba(0,0,0,0.1)              │
└──────────────────────────────────────────────────┘

Navigation changes immediately:
Home → होम
Services → सेवाएं
Contact → संपर्क
etc.
```

## 🎬 Animation Flow

1. **User hovers**: Button scales to 105%, shadow increases
2. **User clicks**: Button scales to 95% briefly
3. **Toggle animates**: White dot slides smoothly to other side
4. **Text changes**: Language indicator and label swap instantly
5. **Navigation updates**: All menu items switch to new language
6. **LocalStorage saves**: Preference remembered for next visit

---

**The toggle is now LIVE in your header!** 🎉
Look for the yellow-orange button in the top-right corner!
