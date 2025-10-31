import { motion } from 'framer-motion';
import { FaIndustry, FaPills, FaSeedling, FaPaintBrush, FaShoppingCart, FaPlug } from 'react-icons/fa';

const Portfolio = () => {
  const divisions = [
    {
      title: 'Pharma Division',
      icon: <FaPills className="w-8 h-8" />,
      gradient: 'from-blue-500 to-blue-700',
      companies: [
        {
          name: 'AURA NUTRACEUTICALS LTD.',
          subtitle: 'A Group of Unjha Pharmaceuticals Ltd., Ahmedabad',
          website: 'www.unjha.com'
        },
        {
          name: 'SINAG HEALTHCARE PVT LTD',
          subtitle: 'Delhi',
          website: 'www.sinaghealthcare.in'
        }
      ]
    },
    {
      title: 'Pesticides & Fertilizer Division',
      icon: <FaSeedling className="w-8 h-8" />,
      gradient: 'from-green-500 to-green-700',
      companies: [
        { name: 'TATA RALLIS INDIA LTD.', subtitle: 'Mumbai', website: 'www.rallis.com' },
        { name: 'GODREJ AGROVET LIMITED', subtitle: 'Mumbai', website: 'www.godrejagrovet.com' },
        { name: 'GHARDA CHEMICALS LTD.', subtitle: 'Mumbai', website: 'www.gharda.com' },
        { name: 'SWAL CORPORATION LTD.', subtitle: 'Mumbai', website: 'www.swalindia.com' },
        { name: 'FMC INDIA PVT. LTD.', subtitle: 'Mumbai', website: 'www.fmc.com/en-in' },
        { name: 'COROMANDEL INTERNATIONAL LTD.', website: 'www.coromandel.biz' },
        { name: 'AGROCEL INDUSTRIES PVT LTD.', subtitle: 'Gujarat', website: 'www.agrocel.co.in' },
        { name: 'CHAMBAL FERTILISERS AND CHEMICALS LTD', subtitle: 'New Delhi', website: 'www.chambalfertilisers.com' },
        { name: 'AGRINOS, INC.', subtitle: 'AgriNose India', website: 'www.agrinos.com' },
        { name: 'ATUL LTD.', website: 'www.atul.co.in' },
        { name: 'GUJARAT INSECTICIDES LIMITED', website: 'www.gilghw.com' },
        { name: 'GEOLIFE AGROTECH', website: 'www.geolife.com' },
        { name: 'CHAMINOVA' , website: 'www.cheminova.asia' },
        { name: 'UNIVERSAL AGRO CHEMICAL INDUSTRIES', subtitle: 'Kolkata', website: 'www.universalagri.net' },
        { name: 'SAHIB FERTILIZER PVT LTD' },
        { name: 'GMD TRADE & COMMERCE PVT LTD' },
        { name: 'CANBIOSYS', website: 'www.kanbiosys.com' },
        { name: 'USK', website: 'www.uskagrosciences.com' },
        { name: 'GROWERO TECHNOLOGIES' },
        { name: 'NADIYA FERTILIZER', website: 'www.nadiyabiotechpl.com'},
        { name: 'GEEKEN CHEMICALS', website: 'www.geekenchemicals.com' },
        { name: 'SEA6 ENERGY', website: 'www.sea6energy.com' },
        { name: 'HINDALCO', website: 'www.hindalco.com' }
      ]
    },
    {
      title: 'Paints & Distemper Division',
      icon: <FaPaintBrush className="w-8 h-8" />,
      gradient: 'from-purple-500 to-purple-700',
      companies: [
        { name: 'SHALIMAR PAINTS LTD', website: 'www.shalimarpaints.com' },
        { name: 'NEON PAINTS' }
      ]
    },
    {
      title: 'FMCG Division',
      icon: <FaShoppingCart className="w-8 h-8" />,
      gradient: 'from-orange-500 to-orange-700',
      companies: [
        { name: 'WIPRO LTD', subtitle: 'Consumer Care & Lighting', website: 'www.wiproconsumercare.com' },
        { name: 'TIRUPATI INDUSTRIES' }
      ]
    },
    {
      title: 'Electronics Division',
      icon: <FaPlug className="w-8 h-8" />,
      gradient: 'from-indigo-500 to-indigo-700',
      companies: [
        { name: 'FINOLEX CABLES', website: 'www.finolex.com' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0f1729] via-[#1a2947] to-[#2d3f5f] text-white pt-40 pb-32 overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Decorative Gradient Orbs */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-[10%] w-96 h-96 bg-yellow-400 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-[10%] w-[500px] h-[500px] bg-blue-400 rounded-full blur-[120px] opacity-15 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500 rounded-full blur-[150px] opacity-10"></div>
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-6xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
              className="inline-block mb-8"
            >
              <div className="w-28 h-28 bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 rounded-3xl flex items-center justify-center mx-auto shadow-2xl transform hover:scale-110 transition-transform duration-300 relative">
                <div className="absolute inset-0 bg-yellow-400 rounded-3xl blur-xl opacity-50 animate-pulse"></div>
                <FaIndustry className="text-[#1a2947] text-6xl relative z-10" />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
            >
              Our Diverse <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500">Portfolio</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-8"
            >
              <p className="text-2xl md:text-3xl font-semibold text-white mb-2 tracking-wide">
                Krishna Care - C&F Agency Profile
              </p>
              <div className="w-32 h-1.5 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full"></div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg md:text-xl text-gray-100 max-w-5xl mx-auto leading-relaxed font-light px-4"
            >
              Krishna Care serves as the official Clearing and Forwarding (C&F) Agent for the entire state of <span className="font-semibold text-yellow-400">Chhattisgarh</span>,
              managing <span className="font-semibold text-yellow-400">logistics and distribution</span> for a diverse portfolio of leading companies. For smooth and efficient
              functioning, operations are organized into <span className="font-semibold text-yellow-400">specialized divisions</span>.
            </motion.p>
          </motion.div>
        </div>

        {/* Modern Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 100L60 88.3C120 76.7 240 53.3 360 43.3C480 33.3 600 36.7 720 43.3C840 50 960 60 1080 63.3C1200 66.7 1320 63.3 1380 61.7L1440 60V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0Z" fill="url(#wave-gradient-portfolio)"/>
            <defs>
              <linearGradient id="wave-gradient-portfolio" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F9FAFB" stopOpacity="0.1"/>
                <stop offset="100%" stopColor="#F9FAFB" stopOpacity="1"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>

      {/* Running Logo Section */}
      <section className="py-16 bg-gradient-to-br from-slate-100 via-gray-100 to-slate-100 overflow-hidden relative">
        {/* Decorative Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.2) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Subtle Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="container-custom mb-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Trusted by <span className="text-primary-600">Industry Leaders</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Our diverse portfolio of prestigious partnerships
            </p>
          </motion.div>
        </div>

        {/* Infinite Scroll Logo Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-100 via-gray-100 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-100 via-gray-100 to-transparent z-10"></div>

          {/* Scrolling Logos */}
          <div className="flex animate-scroll">
            {/* First Set of Logos */}
            <div className="flex items-center space-x-10 px-6">
              <div className="flex-shrink-0 w-44 h-28 flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300">
                <img src="/images/logos/rallies.png" alt="Tata Rallis India Ltd" className="max-w-full max-h-full object-contain filter drop-shadow-2xl" />
              </div>
              <div className="flex-shrink-0 w-44 h-28 flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300">
                <img src="/images/logos/godrej.png" alt="Godrej Agrovet Limited" className="max-w-full max-h-full object-contain filter drop-shadow-2xl" />
              </div>
              <div className="flex-shrink-0 w-44 h-28 flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300">
                <img src="/images/logos/ghadra.png" alt="Gharda Chemicals Ltd" className="max-w-full max-h-full object-contain filter drop-shadow-2xl" />
              </div>
              <div className="flex-shrink-0 w-44 h-28 flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300">
                <img src="/images/logos/swal.png" alt="Swal Corporation Ltd" className="max-w-full max-h-full object-contain filter drop-shadow-2xl" />
              </div>
              <div className="flex-shrink-0 w-44 h-28 flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300">
                <img src="/images/logos/coromondal.png" alt="Coromandel International Ltd" className="max-w-full max-h-full object-contain filter drop-shadow-2xl" />
              </div>
            </div>

            {/* Duplicate Set for Seamless Loop */}
            <div className="flex items-center space-x-10 px-6">
              <div className="flex-shrink-0 w-44 h-28 flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300">
                <img src="/images/logos/rallies.png" alt="Tata Rallis India Ltd" className="max-w-full max-h-full object-contain filter drop-shadow-2xl" />
              </div>
              <div className="flex-shrink-0 w-44 h-28 flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300">
                <img src="/images/logos/godrej.png" alt="Godrej Agrovet Limited" className="max-w-full max-h-full object-contain filter drop-shadow-2xl" />
              </div>
              <div className="flex-shrink-0 w-44 h-28 flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300">
                <img src="/images/logos/ghadra.png" alt="Gharda Chemicals Ltd" className="max-w-full max-h-full object-contain filter drop-shadow-2xl" />
              </div>
              <div className="flex-shrink-0 w-44 h-28 flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300">
                <img src="/images/logos/swal.png" alt="Swal Corporation Ltd" className="max-w-full max-h-full object-contain filter drop-shadow-2xl" />
              </div>
              <div className="flex-shrink-0 w-44 h-28 flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300">
                <img src="/images/logos/coromondal.png" alt="Coromandel International Ltd" className="max-w-full max-h-full object-contain filter drop-shadow-2xl" />
              </div>
            </div>

            {/* Third Set for Extra Smoothness */}
            <div className="flex items-center space-x-10 px-6">
              <div className="flex-shrink-0 w-44 h-28 flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300">
                <img src="/images/logos/rallies.png" alt="Tata Rallis India Ltd" className="max-w-full max-h-full object-contain filter drop-shadow-2xl" />
              </div>
              <div className="flex-shrink-0 w-44 h-28 flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300">
                <img src="/images/logos/godrej.png" alt="Godrej Agrovet Limited" className="max-w-full max-h-full object-contain filter drop-shadow-2xl" />
              </div>
              <div className="flex-shrink-0 w-44 h-28 flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300">
                <img src="/images/logos/ghadra.png" alt="Gharda Chemicals Ltd" className="max-w-full max-h-full object-contain filter drop-shadow-2xl" />
              </div>
              <div className="flex-shrink-0 w-44 h-28 flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300">
                <img src="/images/logos/swal.png" alt="Swal Corporation Ltd" className="max-w-full max-h-full object-contain filter drop-shadow-2xl" />
              </div>
              <div className="flex-shrink-0 w-44 h-28 flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300">
                <img src="/images/logos/coromondal.png" alt="Coromandel International Ltd" className="max-w-full max-h-full object-contain filter drop-shadow-2xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Animation Styles */}
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-scroll {
            animation: scroll 30s linear infinite;
          }

          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      {/* Divisions Section */}
      <section className="py-20">
        <div className="container-custom">
          {divisions.map((division, index) => (
            <motion.div
              key={division.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-16 last:mb-0"
            >
              {/* Division Header */}
              <div className={`bg-gradient-to-r ${division.gradient} rounded-2xl p-8 mb-8 shadow-xl`}>
                <div className="flex items-center space-x-4 text-white">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    {division.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold font-heading">{division.title}</h2>
                    <p className="text-white/90 mt-1">
                      {division.companies.length} Partner{division.companies.length !== 1 ? 's' : ''}
                    </p>
                  </div>
                </div>
              </div>

              {/* Companies Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {division.companies.map((company, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                      {company.name}
                    </h3>
                    {company.subtitle && (
                      <p className="text-sm text-gray-600 mb-3">
                        {company.subtitle}
                      </p>
                    )}
                    {company.website ? (
                      <a
                        href={`https://${company.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm group"
                      >
                        <span className="border-b border-primary-300 group-hover:border-primary-600 transition-colors">
                          {company.website}
                        </span>
                        <svg 
                          className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                          />
                        </svg>
                      </a>
                    ) : (
                      <p className="text-sm text-gray-400 italic">
                        Official website not available
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-primary-900 to-primary-800 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-2">5</div>
              <div className="text-primary-200">Divisions</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-2">35+</div>
              <div className="text-primary-200">Partner Companies</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-primary-200">Chhattisgarh Coverage</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-primary-200">Operations</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Previous Experience Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-heading">
              Our Experience: Previous Company Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              With over <span className="text-primary-600 font-bold">20 years of operational experience</span> in CFA and distribution, 
              our organization has a proven track record of successful partnerships. Below is a list of esteemed companies 
              we have had the privilege to work with:
            </p>
          </motion.div>

          {/* Previous Companies by Category */}
          <div className="space-y-12">
            {/* Pharmaceuticals & Healthcare */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border-2 border-blue-200"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <FaPills className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 font-heading">
                  Pharmaceuticals & Healthcare
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  'Alembic Pharma',
                  'Elder Pharmaceuticals Ltd.',
                  'Morwell Pharmacia Pvt. Ltd.',
                  'Corona Remedies Pvt. Ltd.',
                  'Lincoln Pharma',
                  'Shreya Life Sciences (P) Ltd.',
                  'Innov Lite (India) Pvt. Ltd.',
                  'Bharat Serums and Vaccines Limited',
                  'Morvel Pharmacia'
                ].map((company, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start space-x-2">
                      <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 font-medium">{company}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Agrochemicals, Seeds & Bio-Genetics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border-2 border-blue-200"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <FaSeedling className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 font-heading">
                  Agrochemicals, Seeds & Bio-Genetics
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  'Vimax Crop Science Limited',
                  'Uniphos Seeds & Bio Genetics (P) Ltd.',
                  'Advanta Seeds',
                  'ISAGRO (ASIA) Chemical Ltd. (Mumbai)',
                  'Jivagro Ltd.',
                  'Sumitomo',
                  'Ganpati Agro',
                  'Sumitomo Chemical India Ltd.',
                  'Ganpati Agrizone Care'
                ].map((company, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start space-x-2">
                      <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 font-medium">{company}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Paints */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 border-2 border-primary-200"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                  <FaPaintBrush className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 font-heading">
                  Paints
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: 'Berger Paints India Ltd.', highlight: '⭐ 14 Years Partnership' },
                  { name: 'British Paints' }
                ].map((company, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className={`bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow ${company.highlight ? 'border-l-4 border-purple-600' : ''}`}
                  >
                    <div className="flex items-start space-x-2">
                      <svg className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <span className="text-gray-700 font-medium block">{company.name}</span>
                        {company.highlight && (
                          <span className="text-sm text-purple-600 font-semibold mt-1 inline-block">
                            {company.highlight}
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Industrials */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border-2 border-gray-200"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                  <FaIndustry className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 font-heading">
                  Industrials
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 font-medium">Vinayak Industries Ltd.</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Beauty and Cosmetics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-8 border-2 border-pink-200"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 font-heading">
                  Beauty & Cosmetics
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-pink-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 font-medium">Previous Beauty & Cosmetics Partners</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Experience Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 text-white text-center"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-5xl font-bold mb-2">20+</div>
                <div className="text-amber-100">Years of Experience</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">20+</div>
                <div className="text-amber-100">Previous Partners</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">14</div>
                <div className="text-amber-100">Years with Berger Paints</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
