/**
 * EXAMPLE: How to Add Translations to Home Page Hero Section
 * 
 * This file shows the BEFORE and AFTER of adding translations
 */

// ==================== BEFORE (English Only) ====================

import { motion } from 'framer-motion';

const Hero_BEFORE = () => {
  return (
    <section>
      <h1>Your Trusted Partner in Logistics Excellence</h1>
      <p>Delivering reliable C&F solutions with precision and care</p>
      <button>Get Started</button>
      <button>Learn More</button>
    </section>
  );
};


// ==================== AFTER (English + Hindi) ====================

import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { homeTranslations } from '../translations/home';

const Hero_AFTER = () => {
  const { t } = useLanguage();  // 👈 Add this hook
  
  return (
    <section>
      {/* Replace hardcoded text with t() function */}
      <h1>{t(homeTranslations.hero.title)} {t(homeTranslations.hero.logistics)}</h1>
      <p>{t(homeTranslations.hero.subtitle)}</p>
      <button>{t(homeTranslations.hero.cta)}</button>
      <button>{t(homeTranslations.hero.learnMore)}</button>
    </section>
  );
};

// When language is English: "Your Trusted Partner in Logistics Excellence"
// When language is Hindi: "आपका विश्वसनीय साझेदार लॉजिस्टिक्स उत्कृष्टता में"


// ==================== EXAMPLE 2: Service Cards ====================

// BEFORE
const ServiceCard_BEFORE = ({ service }) => {
  return (
    <div>
      <h3>Warehousing Solutions</h3>
      <p>State-of-the-art storage facilities with advanced inventory management</p>
      <button>Learn More</button>
    </div>
  );
};

// AFTER
import { useLanguage } from '../context/LanguageContext';
import { homeTranslations } from '../translations/home';

const ServiceCard_AFTER = ({ service }) => {
  const { t } = useLanguage();
  
  return (
    <div>
      <h3>{t(homeTranslations.services.warehousing.title)}</h3>
      <p>{t(homeTranslations.services.warehousing.description)}</p>
      <button>{t(homeTranslations.services.learnMore)}</button>
    </div>
  );
};


// ==================== EXAMPLE 3: Statistics Section ====================

// BEFORE
const Stats_BEFORE = () => {
  return (
    <div className="grid grid-cols-4 gap-8">
      <div>
        <h3>15+</h3>
        <p>Warehouses</p>
      </div>
      <div>
        <h3>500+</h3>
        <p>Happy Clients</p>
      </div>
      <div>
        <h3>50K+</h3>
        <p>Deliveries/Year</p>
      </div>
      <div>
        <h3>10+</h3>
        <p>Years Experience</p>
      </div>
    </div>
  );
};

// AFTER
import { useLanguage } from '../context/LanguageContext';
import { homeTranslations } from '../translations/home';

const Stats_AFTER = () => {
  const { t } = useLanguage();
  
  const stats = [
    { value: '15+', label: t(homeTranslations.stats.warehouses) },
    { value: '500+', label: t(homeTranslations.stats.clients) },
    { value: '50K+', label: t(homeTranslations.stats.deliveries) },
    { value: '10+', label: t(homeTranslations.stats.experience) }
  ];
  
  return (
    <div className="grid grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <div key={index}>
          <h3>{stat.value}</h3>
          <p>{stat.label}</p>
        </div>
      ))}
    </div>
  );
};


// ==================== QUICK REFERENCE ====================

/**
 * 3 STEPS TO ADD TRANSLATIONS:
 * 
 * 1. Import the hook and translations
 *    import { useLanguage } from '../context/LanguageContext';
 *    import { homeTranslations } from '../translations/home';
 * 
 * 2. Use the hook in your component
 *    const { t } = useLanguage();
 * 
 * 3. Replace hardcoded text with t() function
 *    "Contact Us" → {t(commonTranslations.contactUs)}
 */


// ==================== AVAILABLE TRANSLATIONS ====================

/**
 * Already available translation files:
 * 
 * 1. navigationTranslations (src/translations/navigation.js)
 *    - home, services, portfolio, gallery, about, assets, sop, insights, contact
 *    - warehousing, transportation, supplyChain, customs, integrated, risk
 * 
 * 2. commonTranslations (src/translations/common.js)
 *    - readMore, learnMore, getStarted, contactUs, viewAll
 *    - submit, cancel, close, next, previous
 *    - footer.tagline, footer.quickLinks, etc.
 * 
 * 3. homeTranslations (src/translations/home.js)
 *    - hero.title, hero.subtitle, hero.cta
 *    - services.warehousing.title, services.warehousing.description
 *    - whyChoose.title, whyChoose.warehouse.title
 *    - stats.warehouses, stats.clients, stats.deliveries
 *    - cta.title, cta.subtitle, cta.button
 */


// ==================== CREATE NEW TRANSLATION FILE ====================

/**
 * Template for creating new translation file:
 */

// src/translations/about.js
export const aboutTranslations = {
  hero: {
    title: {
      en: "About Krishna Care",
      hi: "कृष्णा केयर के बारे में"
    },
    subtitle: {
      en: "Your trusted logistics partner since 2014",
      hi: "2014 से आपका विश्वसनीय लॉजिस्टिक्स साझेदार"
    }
  },
  mission: {
    title: {
      en: "Our Mission",
      hi: "हमारा मिशन"
    },
    description: {
      en: "To provide world-class logistics solutions",
      hi: "विश्व स्तरीय लॉजिस्टिक्स समाधान प्रदान करना"
    }
  }
};

// Then use it in your component:
import { useLanguage } from '../context/LanguageContext';
import { aboutTranslations } from '../translations/about';

const About = () => {
  const { t } = useLanguage();
  
  return (
    <div>
      <h1>{t(aboutTranslations.hero.title)}</h1>
      <p>{t(aboutTranslations.hero.subtitle)}</p>
      <h2>{t(aboutTranslations.mission.title)}</h2>
      <p>{t(aboutTranslations.mission.description)}</p>
    </div>
  );
};
