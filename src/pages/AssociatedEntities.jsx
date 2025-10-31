import React from 'react';
import { motion } from 'framer-motion';

const AssociatedEntities = () => {
  const entities = [
    {
      id: 1,
      name: 'MLA Group',
      image: '/images/Associated Entities/MLA Group.jpg',
      description: 'Sample text about MLA Group will be added here. This section will contain detailed information about the company, its services, and its role in our network.',
      color: 'blue'
    },
    {
      id: 2,
      name: 'Agarwal Sales Corporation',
      image: '/images/Associated Entities/Agrawal coal sales corporation.jpg',
      description: 'Sample text about Agarwal Sales Corporation will be added here. This section will contain detailed information about the company, its services, and its role in our network.',
      color: 'primary'
    },
    {
      id: 3,
      name: 'Asha Enterprises',
      image: '/images/Associated Entities/asha Enterprises.jpg',
      description: 'Sample text about Asha Enterprises will be added here. This section will contain detailed information about the company, its services, and its role in our network.',
      color: 'blue'
    },
    {
      id: 4,
      name: 'Akshat Fuels Pvt. Ltd.',
      image: '/images/Associated Entities/akshat fuels.jpg',
      description: 'Sample text about Akshat Fuels Pvt. Ltd. will be added here. This section will contain detailed information about the company, its services, and its role in our network.',
      color: 'primary'
    },
    {
      id: 5,
      name: 'Manoj Road Lines',
      image: '/images/Associated Entities/manoj road lines.jpg',
      description: 'Sample text about Manoj Road Lines will be added here. This section will contain detailed information about the company, its services, and its role in our network.',
      color: 'blue'
    }
  ];

  const getColorClasses = (color) => {
    if (color === 'blue') {
      return {
        iconBg: 'bg-blue-500',
        cardBorder: 'border-blue-200',
        cardHover: 'hover:border-blue-400',
        iconContainer: 'bg-blue-50',
        textColor: 'text-blue-600',
        badgeBg: 'bg-blue-50'
      };
    }
    return {
      iconBg: 'bg-primary-600',
      cardBorder: 'border-primary-200',
      cardHover: 'hover:border-primary-400',
      iconContainer: 'bg-primary-50',
      textColor: 'text-primary-600',
      badgeBg: 'bg-primary-50'
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
              className="inline-block mb-8"
            >
              <div className="w-28 h-28 bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 rounded-3xl flex items-center justify-center mx-auto shadow-2xl transform hover:scale-110 transition-transform duration-300 relative">
                <div className="absolute inset-0 bg-yellow-400 rounded-3xl blur-xl opacity-50 animate-pulse"></div>
                <svg className="w-16 h-16 text-[#1a2947] relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
            >
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500">Associated Entities</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-8"
            >
              <p className="text-2xl md:text-3xl font-semibold text-white mb-2 tracking-wide">
                Trusted Partners in Success
              </p>
              <div className="w-32 h-1.5 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full"></div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg md:text-xl text-gray-100 max-w-5xl mx-auto leading-relaxed font-light px-4"
            >
              Our network of <span className="font-semibold text-yellow-400">trusted partners</span>, <span className="font-semibold text-yellow-400">associated companies</span>, and <span className="font-semibold text-yellow-400">strategic alliances</span> working together to deliver excellence.
              Together, we build stronger foundations for lasting success and mutual growth.
            </motion.p>
          </motion.div>
        </div>

        {/* Modern Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 100L60 88.3C120 76.7 240 53.3 360 43.3C480 33.3 600 36.7 720 43.3C840 50 960 60 1080 63.3C1200 66.7 1320 63.3 1380 61.7L1440 60V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0Z" fill="url(#wave-gradient-entities)"/>
            <defs>
              <linearGradient id="wave-gradient-entities" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F9FAFB" stopOpacity="0.1"/>
                <stop offset="100%" stopColor="#F9FAFB" stopOpacity="1"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>

      {/* Entities Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Associated Companies
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the companies that form our trusted network of business partners
          </p>
        </div>

        {/* Entities Grid */}
        <div className="space-y-8">
          {entities.map((entity, index) => {
            const colors = getColorClasses(entity.color);
            
            return (
              <div
                key={entity.id}
                className={`group relative bg-white rounded-2xl border-2 ${colors.cardBorder} ${colors.cardHover} overflow-hidden transition-all duration-300 hover:shadow-xl`}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Card Content */}
                <div className="flex flex-col md:flex-row items-start gap-6 p-8">
                  {/* Image */}
                  <div className="flex-shrink-0 w-full md:w-64 h-48 md:h-40 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
                    <img 
                      src={entity.image} 
                      alt={entity.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    {/* Entity Number */}
                    <div className="flex items-center gap-4 mb-3">
                      <span className={`text-sm font-semibold ${colors.textColor} ${colors.badgeBg} px-3 py-1 rounded-full`}>
                        Entity {entity.id}
                      </span>
                    </div>

                    {/* Entity Name */}
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      {entity.name}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {entity.description}
                    </p>

                    {/* Placeholder Notice */}
                    <div className="mt-4 flex items-center gap-2 text-sm text-gray-500 italic">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span>Content to be updated</span>
                    </div>
                  </div>
                </div>

                {/* Decorative Element */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 ${colors.iconBg} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-br from-primary-600 to-blue-700 rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-[100px] opacity-20"></div>
          
          <div className="relative">
            <h3 className="text-3xl font-bold mb-4">
              Want to Learn More?
            </h3>
            <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
              Get in touch with us to know more about our associated entities and partnership opportunities
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-yellow-400 text-primary-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-yellow-300 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Contact Us
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssociatedEntities;
