import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock
} from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import { footerTranslations } from '../../translations/footer';
import { navigationTranslations } from '../../translations/navigation';
import { newsletterService } from '../../services/apiService';
import { toast } from 'react-toastify';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error('Please enter your email');
      return;
    }

    try {
      setLoading(true);
      await newsletterService.subscribe(email);
      toast.success('Successfully subscribed to newsletter!');
      setEmail('');
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      toast.error(error.response?.data?.message || 'Failed to subscribe. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                <span className="text-white font-bold text-2xl">KC</span>
              </div>
              <div className="flex flex-col">
                <h3 className="text-2xl font-bold text-white font-heading leading-tight">Krishna Care</h3>
                <span className="text-sm font-semibold text-yellow-400 leading-tight">Asha Enterprises</span>
                <span className="text-xs text-gray-400 leading-tight mt-0.5">Logistics & Supply Chain</span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              {t(footerTranslations.tagline)}
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4 font-heading">{t(footerTranslations.quickLinks.title)}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-primary-400 transition-colors inline-block">
                  {t(navigationTranslations.home)}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-primary-400 transition-colors inline-block">
                  {t(navigationTranslations.about)}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-primary-400 transition-colors inline-block">
                  {t(navigationTranslations.services)}
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-sm hover:text-primary-400 transition-colors inline-block">
                  {t(navigationTranslations.portfolio)}
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm hover:text-primary-400 transition-colors inline-block">
                  {t(navigationTranslations.gallery)}
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm hover:text-primary-400 transition-colors inline-block">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4 font-heading">{t(footerTranslations.services.title)}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services/transportation" className="text-sm hover:text-primary-400 transition-colors inline-block">
                  {t(navigationTranslations.transportation)}
                </Link>
              </li>
              <li>
                <Link to="/services/warehousing" className="text-sm hover:text-primary-400 transition-colors inline-block">
                  {t(navigationTranslations.warehousing)}
                </Link>
              </li>
              <li>
                <Link to="/services/supply-chain-management" className="text-sm hover:text-primary-400 transition-colors inline-block">
                  {t(navigationTranslations.supplyChain)}
                </Link>
              </li>
              <li>
                <Link to="/services/integrated-solutions" className="text-sm hover:text-primary-400 transition-colors inline-block">
                  {t(navigationTranslations.integrated)}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4 font-heading">{t(footerTranslations.contact.title)}</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-primary-500 mt-1 flex-shrink-0" />
                <span className="text-sm">
                  {t(footerTranslations.contact.address)}
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-primary-500 flex-shrink-0" />
                <a href="tel:+917714081000" className="text-sm hover:text-primary-400 transition-colors">
                  {t(footerTranslations.contact.phone)}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <FaEnvelope className="text-primary-500 mt-1 flex-shrink-0" />
                <div className="flex flex-col space-y-1">
                  <a href="mailto:ashaenterprises.kc@gmail.com" className="text-sm hover:text-primary-400 transition-colors">
                    ashaenterprises.kc@gmail.com
                  </a>
                  <a href="mailto:kc.krishnacare@yahoo.com" className="text-sm hover:text-primary-400 transition-colors">
                    kc.krishnacare@yahoo.com
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <FaClock className="text-primary-500 mt-1 flex-shrink-0" />
                <span className="text-sm">
                  {t(footerTranslations.contact.hours)}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-white font-semibold text-xl mb-2 font-heading">{t(footerTranslations.newsletter.title)}</h4>
            <p className="text-gray-400 text-sm mb-4">
              {t(footerTranslations.newsletter.subtitle)}
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t(footerTranslations.newsletter.placeholder)}
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                required
                disabled={loading}
              />
              <button
                type="submit"
                className="btn-primary whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={loading}
              >
                {loading ? 'Subscribing...' : t(footerTranslations.newsletter.button)}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {currentYear} Krishna Care. {t(footerTranslations.copyright.allRights)}
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-primary-400 transition-colors">
                {t(footerTranslations.legal.privacy)}
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-primary-400 transition-colors">
                {t(footerTranslations.legal.terms)}
              </Link>
              <Link to="/sitemap" className="text-gray-400 hover:text-primary-400 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
