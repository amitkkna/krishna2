import { motion } from 'framer-motion';
import { 
  FaClipboardCheck, 
  FaWarehouse, 
  FaShieldAlt, 
  FaBoxes,
  FaTruck,
  FaCheckCircle,
  FaFire,
  FaTools,
  FaBug,
  FaLayerGroup,
  FaRuler,
  FaHardHat,
  FaWind,
  FaFileInvoice,
  FaClock,
  FaCalendarAlt,
  FaUserShield,
  FaLock,
  FaFirstAid,
  FaExclamationTriangle,
  FaCertificate,
  FaArrowRight
} from 'react-icons/fa';

const SOP = () => {
  const sopSections = [
    {
      id: 1,
      icon: <FaWarehouse className="text-4xl" />,
      title: 'State-of-the-Art Warehousing & Infrastructure',
      subtitle: 'The integrity of your product starts with the quality of its environment',
      color: 'from-blue-500 to-blue-600',
      features: [
        {
          icon: <FaCheckCircle />,
          title: 'Superior Facilities',
          description: 'A-class construction warehouses well-protected from rain, fire, and moisture with adequate natural lighting and aeration'
        },
        {
          icon: <FaShieldAlt />,
          title: 'Strategic & Safe Layout',
          description: 'Located away from flood-prone areas and high-tension grids with clearly demarcated areas for different product categories'
        },
        {
          icon: <FaBug />,
          title: 'Impeccable Housekeeping',
          description: 'Daily cleaning standards, monthly pest control with diligently maintained records'
        }
      ]
    },
    {
      id: 2,
      icon: <FaBoxes className="text-4xl" />,
      title: 'Meticulous Storage & Material Handling',
      subtitle: 'Treating your products with the respect they deserve',
      color: 'from-green-500 to-green-600',
      features: [
        {
          icon: <FaLayerGroup />,
          title: 'Strict Stacking Norms',
          description: 'Precise, product-specific stacking height limits to prevent crushing or damage'
        },
        {
          icon: <FaHardHat />,
          title: 'Safe Handling Protocols',
          description: 'Trained staff using appropriate equipment like ladders and trolleys for all material movement'
        },
        {
          icon: <FaRuler />,
          title: 'Protective Spacing',
          description: 'Minimum 60 cm (2 feet) distance between walls and stacks for ventilation and safe access'
        },
        {
          icon: <FaTools />,
          title: 'Use of Dunnage',
          description: 'Proper wooden planks under all stacks to protect from ground-level hazards'
        }
      ]
    },
    {
      id: 3,
      icon: <FaTruck className="text-4xl" />,
      title: 'Seamless Operational Workflow',
      subtitle: 'Efficiency and accuracy are the cornerstones of our operations',
      color: 'from-purple-500 to-purple-600',
      inbound: [
        {
          icon: <FaClipboardCheck />,
          title: 'Immediate Verification',
          description: 'Thorough physical verification against GST invoice and transporter documents'
        },
        {
          icon: <FaExclamationTriangle />,
          title: 'Instant Discrepancy Reporting',
          description: 'Any difference, damage, or shortage photographed and reported same day'
        },
        {
          icon: <FaClock />,
          title: 'Real-Time System Updates',
          description: 'All stock receipts updated in SAP (MIGO) on the same day of unloading'
        }
      ],
      outbound: [
        {
          icon: <FaCalendarAlt />,
          title: 'FEFO Principle',
          description: 'First Expiry First Out system to guarantee product freshness'
        },
        {
          icon: <FaClock />,
          title: 'Unmatched Speed',
          description: 'Orders before 4 PM dispatched same day. All SOs executed within 48 hours'
        },
        {
          icon: <FaFileInvoice />,
          title: 'Flawless Documentation',
          description: 'SAP-generated invoice and valid E-way bill for every dispatch'
        }
      ]
    },
    {
      id: 4,
      icon: <FaShieldAlt className="text-4xl" />,
      title: 'Unwavering Commitment to Safety & Compliance',
      subtitle: 'Complete peace of mind through unyielding commitment to regulations',
      color: 'from-red-500 to-red-600',
      features: [
        {
          icon: <FaCertificate />,
          title: 'Full Legal Compliance',
          description: 'Godowns fully endorsed on pesticide licenses and GST certificates with framed display'
        },
        {
          icon: <FaFire />,
          title: 'Fire Safety',
          description: 'Two 10kg fire extinguishers per 100 sqm with valid NOC from fire safety authority'
        },
        {
          icon: <FaFirstAid />,
          title: 'Personnel & Product Safety',
          description: 'PPE equipment, first-aid kits, and emergency contact lists prominently displayed'
        },
        {
          icon: <FaUserShield />,
          title: '24/7 Security',
          description: 'Round-the-clock dedicated security personnel with restricted access'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
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
                <FaClipboardCheck className="text-[#1a2947] text-6xl relative z-10" />
              </div>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
            >
              Our Commitment to <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500">Excellence</span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-8"
            >
              <p className="text-2xl md:text-3xl font-semibold text-white mb-2 tracking-wide">
                A Look Inside Our C&F Operations
              </p>
              <div className="w-32 h-1.5 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full"></div>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg md:text-xl text-gray-100 max-w-5xl mx-auto leading-relaxed font-light px-4"
            >
              We believe that superior logistics is built on a foundation of <span className="font-semibold text-yellow-400">precision</span>, <span className="font-semibold text-yellow-400">safety</span>, and <span className="font-semibold text-yellow-400">complete transparency</span>. 
              Our Standard Operating Procedure is more than just a manual; it's our commitment to you that your products 
              are managed with the highest level of care, compliance, and reliability.
            </motion.p>
          </motion.div>
        </div>

        {/* Modern Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 100L60 88.3C120 76.7 240 53.3 360 43.3C480 33.3 600 36.7 720 43.3C840 50 960 60 1080 63.3C1200 66.7 1320 63.3 1380 61.7L1440 60V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0Z" fill="url(#wave-gradient)"/>
            <defs>
              <linearGradient id="wave-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F9FAFB" stopOpacity="0.1"/>
                <stop offset="100%" stopColor="#F9FAFB" stopOpacity="1"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <div className="container-custom max-w-7xl">
          {sopSections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="mb-24 last:mb-0"
            >
              {/* Section Header with Number Badge */}
              <div className="text-center mb-16 relative">
                {/* Decorative Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-1 h-12 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
                
                <motion.div
                  initial={{ scale: 0, rotate: -90 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                  className="inline-block mb-8 relative"
                >
                  {/* Glowing effect behind icon */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${section.color} rounded-3xl blur-2xl opacity-30 scale-110`}></div>
                  
                  {/* Icon Container */}
                  <div className={`relative p-8 bg-gradient-to-br ${section.color} text-white rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300`}>
                    {section.icon}
                  </div>
                  
                  {/* Number Badge */}
                  <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-xl border-4 border-white">
                    {section.id}
                  </div>
                </motion.div>
                
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl md:text-5xl font-extrabold mb-4"
                >
                  <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                    {section.title}
                  </span>
                </motion.h2>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <p className="text-xl md:text-2xl font-medium text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
                    <span className="italic">{section.subtitle}</span>
                  </p>
                  <div className={`w-24 h-1.5 bg-gradient-to-r ${section.color} mx-auto mt-4 rounded-full`}></div>
                </motion.div>
              </div>

              {/* Special handling for Operational Workflow (section 3) */}
              {section.id === 3 ? (
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Inbound Process */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative group"
                  >
                    {/* Gradient Background Card */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl transform group-hover:scale-105 transition-transform duration-300 shadow-2xl"></div>
                    
                    {/* Content Card */}
                    <div className="relative bg-white rounded-3xl p-8 m-1 shadow-xl">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform">
                            <FaBoxes className="text-white text-2xl" />
                          </div>
                          <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Receiving Your Stock</h3>
                            <p className="text-sm text-green-600 font-bold uppercase tracking-widest mt-1">Inward Process</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-5">
                        {section.inbound.map((feature, idx) => (
                          <motion.div 
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-start space-x-4 p-5 bg-gradient-to-br from-gray-50 to-green-50 rounded-2xl hover:shadow-md transition-all duration-300 border border-green-100"
                          >
                            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-md">
                              {feature.icon}
                            </div>
                            <div className="flex-1">
                              <h4 className="font-bold text-gray-900 mb-2 text-lg">{feature.title}</h4>
                              <p className="text-gray-700 leading-relaxed">{feature.description}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Outbound Process */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative group"
                  >
                    {/* Gradient Background Card */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl transform group-hover:scale-105 transition-transform duration-300 shadow-2xl"></div>
                    
                    {/* Content Card */}
                    <div className="relative bg-white rounded-3xl p-8 m-1 shadow-xl">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform">
                            <FaTruck className="text-white text-2xl" />
                          </div>
                          <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Dispatching Your Orders</h3>
                            <p className="text-sm text-blue-600 font-bold uppercase tracking-widest mt-1">Outward Process</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-5">
                        {section.outbound.map((feature, idx) => (
                          <motion.div 
                            key={idx}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-start space-x-4 p-5 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl hover:shadow-md transition-all duration-300 border border-blue-100"
                          >
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-md">
                              {feature.icon}
                            </div>
                            <div className="flex-1">
                              <h4 className="font-bold text-gray-900 mb-2 text-lg">{feature.title}</h4>
                              <p className="text-gray-700 leading-relaxed">{feature.description}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              ) : (
                /* Regular Features Grid */
                <div className={`grid ${section.features.length > 2 ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-2'} gap-8`}>
                  {section.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      className="relative group"
                    >
                      {/* Gradient Border Effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${section.color} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm`}></div>
                      
                      {/* Card Content */}
                      <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 group-hover:border-transparent h-full flex flex-col">
                        {/* Icon with Gradient Background */}
                        <div className="mb-6">
                          <div className={`w-16 h-16 bg-gradient-to-br ${section.color} text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                            <span className="text-2xl">{feature.icon}</span>
                          </div>
                        </div>

                        {/* Title */}
                        <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-700 transition-all">
                          {feature.title}
                        </h4>

                        {/* Description */}
                        <p className="text-gray-700 leading-relaxed text-base flex-grow">
                          {feature.description}
                        </p>

                        {/* Bottom Accent Line */}
                        <div className={`h-1.5 bg-gradient-to-r ${section.color} rounded-full mt-6 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-[#0f1729] via-[#1a2947] to-[#2d3f5f] text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400 rounded-full blur-[120px] opacity-15 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            {/* Icon Badge */}
            <motion.div
              initial={{ scale: 0, rotate: 180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
              className="inline-block mb-8"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-2xl">
                <FaShieldAlt className="text-white text-4xl" />
              </div>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Partner with <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500">Confidence</span>
            </h2>
            
            <div className="w-32 h-1.5 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full mb-8"></div>
            
            <p className="text-xl md:text-2xl text-gray-100 mb-12 leading-relaxed font-light max-w-4xl mx-auto px-4">
              Our rigorous Standard Operating Procedure is our promise of <span className="font-semibold text-yellow-400">quality</span>, <span className="font-semibold text-yellow-400">reliability</span>, and <span className="font-semibold text-yellow-400">trust</span>. 
              Choose a C&F partner who prioritizes your business with precision and care.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 text-gray-900 px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Contact Us Today</span>
                <FaArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <motion.a
                href="/assets"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 hover:border-white/50 transition-all duration-300"
              >
                <span>View Our Facilities</span>
                <FaWarehouse className="group-hover:scale-110 transition-transform" />
              </motion.a>
            </div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            >
              {[
                { icon: <FaCertificate />, label: 'Fully Licensed' },
                { icon: <FaFire />, label: 'Fire Safety Certified' },
                { icon: <FaUserShield />, label: '24/7 Security' },
                { icon: <FaCheckCircle />, label: '100% Compliant' }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center space-y-2 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <div className="text-yellow-400 text-3xl">{item.icon}</div>
                  <p className="text-sm font-semibold text-gray-200">{item.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SOP;
