import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <motion.button
      onClick={toggleLanguage}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-4 py-2 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
      aria-label="Toggle Language"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Content */}
      <div className="relative z-10 flex items-center space-x-2">
        {/* Language Icon/Text */}
        <span className="text-sm font-bold">
          {language === 'en' ? 'अ' : 'A'}
        </span>
        
        {/* Toggle Switch */}
        <div className="relative w-12 h-6 bg-white/30 rounded-full">
          <motion.div
            layout
            transition={{ type: "spring", stiffness: 700, damping: 30 }}
            className="absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-md"
            style={{
              left: language === 'en' ? '2px' : '26px'
            }}
          />
        </div>
        
        {/* Language Label */}
        <span className="text-sm font-bold hidden sm:inline">
          {language === 'en' ? 'हिंदी' : 'English'}
        </span>
      </div>
    </motion.button>
  );
};

export default LanguageToggle;
