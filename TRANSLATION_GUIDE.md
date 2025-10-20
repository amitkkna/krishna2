# Language Translation Implementation Guide

This document explains how to add Hindi translations to your Krishna Care website pages.

## Overview

The language translation system uses:
- **LanguageContext**: Manages the current language state
- **LanguageToggle**: Button component to switch between English and Hindi
- **Translation Files**: Organized by page/section with English and Hindi text

## How It Works

### 1. Language Context

Located at: `src/context/LanguageContext.jsx`

The context provides:
- `language`: Current language ('en' or 'hi')
- `toggleLanguage()`: Function to switch languages
- `t()`: Translation function to get the right text

### 2. Using Translations in Components

```jsx
import { useLanguage } from '../context/LanguageContext';
import { homeTranslations } from '../translations/home';

function MyComponent() {
  const { t } = useLanguage();
  
  return (
    <h1>{t(homeTranslations.hero.title)}</h1>
  );
}
```

### 3. Translation File Structure

Translation files follow this pattern:

```javascript
export const pageTranslations = {
  section: {
    key: {
      en: "English text",
      hi: "हिंदी पाठ"
    }
  }
};
```

## Existing Translation Files

### 1. Navigation (`src/translations/navigation.js`)
- Header menu items
- Service dropdown items

### 2. Common (`src/translations/common.js`)
- Shared buttons and labels
- Footer content
- Common actions

### 3. Home (`src/translations/home.js`)
- Hero section
- Services section
- Why Choose section
- Statistics
- CTA section

## Adding Translations to a New Page

### Step 1: Create Translation File

Create `src/translations/[pagename].js`:

```javascript
export const aboutTranslations = {
  hero: {
    title: {
      en: "About Krishna Care",
      hi: "कृष्णा केयर के बारे में"
    },
    description: {
      en: "Your trusted logistics partner",
      hi: "आपका विश्वसनीय लॉजिस्टिक्स साझेदार"
    }
  }
};
```

### Step 2: Import and Use in Component

```jsx
import { useLanguage } from '../context/LanguageContext';
import { aboutTranslations } from '../translations/about';

const About = () => {
  const { t } = useLanguage();
  
  return (
    <div>
      <h1>{t(aboutTranslations.hero.title)}</h1>
      <p>{t(aboutTranslations.hero.description)}</p>
    </div>
  );
};
```

## Translation Guidelines

### Hindi Translation Tips

1. **Be Concise**: Hindi translations may be longer
2. **Cultural Context**: Adapt idioms and phrases appropriately
3. **Technical Terms**: Some logistics terms may remain in English
4. **Formal vs Informal**: Use formal Hindi for business content

### Organizing Translations

1. Group by page or major section
2. Create nested objects for related content
3. Use descriptive keys
4. Keep consistent naming across files

## Example: Adding Translations to SOP Page

### 1. Create `src/translations/sop.js`

```javascript
export const sopTranslations = {
  hero: {
    title: {
      en: "Our Commitment to Excellence",
      hi: "उत्कृष्टता के प्रति हमारी प्रतिबद्धता"
    },
    subtitle: {
      en: "A Look Inside Our C&F Operations",
      hi: "हमारे सी एंड एफ संचालन के अंदर एक नज़र"
    }
  },
  sections: {
    warehousing: {
      title: {
        en: "State-of-the-Art Warehousing & Infrastructure",
        hi: "अत्याधुनिक वेयरहाउसिंग और बुनियादी ढांचा"
      }
    }
  }
};
```

### 2. Update SOP Component

```jsx
import { useLanguage } from '../context/LanguageContext';
import { sopTranslations } from '../translations/sop';

const SOP = () => {
  const { t } = useLanguage();
  
  return (
    <h1>{t(sopTranslations.hero.title)}</h1>
  );
};
```

## Language Toggle Button

The toggle button is automatically included in the header. It shows:
- Current language indicator (अ for Hindi, A for English)
- Animated toggle switch
- Next language name (हिंदी or English)

## Testing Translations

1. Click the language toggle in the header
2. Verify all translated text switches correctly
3. Check layout doesn't break with longer Hindi text
4. Test on mobile devices

## Next Steps

To complete the translation system:

1. ✅ Create translation files for all pages
2. ✅ Update each page component to use `t()` function
3. ✅ Test all pages in both languages
4. ✅ Adjust layout if Hindi text causes overflow

## Pages to Translate

- [x] Navigation (Header & Footer)
- [x] Home Page
- [ ] About Page
- [ ] Services Pages
- [ ] Portfolio
- [ ] Gallery
- [ ] Assets
- [ ] SOP
- [ ] Blog
- [ ] Contact

## Support

The language preference is saved in localStorage, so users' language choice persists across sessions.
