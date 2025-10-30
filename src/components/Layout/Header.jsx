import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import LanguageToggle from '../LanguageToggle';
import { useLanguage } from '../../context/LanguageContext';
import { navigationTranslations } from '../../translations/navigation';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { name: t(navigationTranslations.home), path: '/' },
    { 
      name: t(navigationTranslations.services), 
      path: '/services',
      hasDropdown: true,
      subLinks: [
        { name: t(navigationTranslations.warehousing), path: '/services/warehousing' },
        { name: t(navigationTranslations.transportation), path: '/services/transportation' },
        { name: t(navigationTranslations.supplyChain), path: '/services/supply-chain-management' },
        { name: t(navigationTranslations.customs), path: '/services/customs-clearance' },
        { name: t(navigationTranslations.integrated), path: '/services/integrated-solutions' },
        { name: t(navigationTranslations.risk), path: '/services/risk-management' },
      ]
    },
    { name: t(navigationTranslations.portfolio), path: '/portfolio' },
    { name: t(navigationTranslations.gallery), path: '/gallery' },
    { name: t(navigationTranslations.about), path: '/about' },
    { name: t(navigationTranslations.assets), path: '/assets' },
    { name: t(navigationTranslations.sop), path: '/sop' },
    { name: 'Associated Entities', path: '/associated-entities' },
    { name: t(navigationTranslations.insights), path: '/blog' },
    { name: t(navigationTranslations.contact), path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      {/* Top Row - Logo */}
      <div className="bg-gradient-to-r from-[#1a2947] to-[#2d3f5f]">
        <div className="px-8 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
              <span className="text-gray-900 font-bold text-lg">KC</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white font-heading tracking-wide">KRISHNA CARE</h1>
              <div className="flex items-center space-x-2 mt-0.5">
                <span className="text-xs font-medium text-yellow-400 tracking-wider">Asha Enterprises</span>
                <span className="text-gray-400 text-xs">•</span>
                <span className="text-xs text-gray-300">Logistics & Supply Chain</span>
              </div>
            </div>
          </Link>
          
          {/* Language Toggle */}
          <LanguageToggle />
        </div>
      </div>

      {/* Bottom Row - Navigation */}
      <div className="bg-white border-t border-gray-200">
        <div className="px-8">
          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center justify-between">
            <nav className="flex items-center space-x-1">
              {navLinks.map((link) => (
                <div key={link.path} className="relative group">
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `px-4 py-4 font-medium transition-all border-b-2 inline-flex items-center space-x-1 text-sm ${
                        isActive
                          ? 'text-primary-600 border-primary-600'
                          : 'text-gray-700 border-transparent hover:text-primary-600 hover:border-primary-300'
                      }`
                    }
                  >
                    <span>{link.name}</span>
                    {link.hasDropdown && (
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </NavLink>
                  
                  {/* Dropdown Menu - Horizontal */}
                  {link.hasDropdown && (
                    <div className="absolute top-full left-0 bg-white shadow-lg border-t-2 border-primary-600 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <div className="flex items-center py-3 px-4">
                        {link.subLinks.map((subLink, index) => (
                          <Link
                            key={subLink.path}
                            to={subLink.path}
                            className={`px-4 py-2 text-sm text-gray-700 hover:text-primary-600 transition-colors whitespace-nowrap ${
                              index < link.subLinks.length - 1 ? 'border-r border-gray-300' : ''
                            }`}
                          >
                            {subLink.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>
            <Link to="/contact" className="py-2 px-5 bg-yellow-400 text-gray-900 font-semibold rounded hover:bg-yellow-500 transition-colors ml-2 text-sm whitespace-nowrap flex-shrink-0">
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center justify-end py-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-primary-600 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="container-custom py-4">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-lg font-medium transition-colors ${
                      isActive
                        ? 'bg-primary-50 text-primary-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 py-3 px-6 bg-yellow-400 text-gray-900 font-semibold rounded hover:bg-yellow-500 transition-colors text-center"
              >
                Get a Quote
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
