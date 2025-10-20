import { motion } from 'framer-motion';
import { FaIndustry, FaPills, FaSeedling, FaPaintBrush, FaShoppingCart } from 'react-icons/fa';

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
          name: 'BHARAT SERUMS AND VACCINES LIMITED',
          website: 'www.bsvgroup.com'
        },
        {
          name: 'SINAG HEALTHCARE PVT LTD',
          subtitle: 'Delhi',
          website: 'www.sinaghealthcare.in'
        },
        {
          name: 'MORVEL PHARMACIA',
          subtitle: 'Likely Morwell Pharm',
          website: 'www.morvel.in'
        }
      ]
    },
    {
      title: 'Pesticides Division',
      icon: <FaSeedling className="w-8 h-8" />,
      gradient: 'from-green-500 to-green-700',
      companies: [
        { name: 'TATA RALLIS INDIA LTD.', subtitle: 'Mumbai', website: 'www.rallis.com' },
        { name: 'SUMITOMO CHEMICAL INDIA LTD.', subtitle: 'Mumbai', website: 'www.sumitomochemical.com' },
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
        { name: 'CHAMINOVA' },
        { name: 'UNIVERSAL AGRO CHEMICAL INDUSTRIES', subtitle: 'Kolkata' },
        { name: 'GANPATI AGRIZONE CARE' },
        { name: 'SAHIB FERTILIZER PVT LTD' },
        { name: 'GMD TRADE & COMMERCE PVT LTD' },
        { name: 'CANBIOSYS' },
        { name: 'USK' },
        { name: 'GROWERO TECHNOLOGIES' },
        { name: 'NADIYA FERTILIZER' }
      ]
    },
    {
      title: 'Paints & Distemper Division',
      icon: <FaPaintBrush className="w-8 h-8" />,
      gradient: 'from-purple-500 to-purple-700',
      companies: [
        { name: 'SHALIMAR PAINTS LTD', website: 'www.shalimarpaints.com' },
        { name: 'BRITISH PAINTS', website: 'www.britishpaints.in' }
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
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <FaIndustry className="w-10 h-10" />
            </div>
            <h1 className="text-5xl font-bold mb-6 font-heading">
              Our Portfolio
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed mb-4">
              Krishna Care - C&F Agency Profile
            </p>
            <p className="text-lg text-primary-200 leading-relaxed max-w-3xl mx-auto">
              Krishna Care serves as the official Clearing and Forwarding (C&F) Agent for the entire state of Chhattisgarh, 
              managing logistics and distribution for a diverse portfolio of leading companies. For smooth and efficient 
              functioning, operations are organized into the following specialized divisions:
            </p>
          </motion.div>
        </div>
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
              <div className="text-4xl font-bold mb-2">4</div>
              <div className="text-primary-200">Divisions</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-2">30+</div>
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
                  'Innov Lite (India) Pvt. Ltd.'
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
                  'Ganpati Agro'
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
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow border-l-4 border-purple-600"
                >
                  <div className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="text-gray-700 font-medium block">Berger Paints India Ltd.</span>
                      <span className="text-sm text-purple-600 font-semibold mt-1 inline-block">
                        ⭐ 14 Years Partnership
                      </span>
                    </div>
                  </div>
                </motion.div>
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
                <div className="text-5xl font-bold mb-2">16+</div>
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
