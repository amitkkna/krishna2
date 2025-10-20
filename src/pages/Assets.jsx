import { motion } from 'framer-motion';
import { 
  FaBuilding, 
  FaWarehouse, 
  FaTruck, 
  FaBoxes, 
  FaServer, 
  FaCog, 
  FaCheckCircle,
  FaShieldAlt,
  FaBolt,
  FaNetworkWired,
  FaSnowflake,
  FaCamera,
  FaTools,
  FaChartLine
} from 'react-icons/fa';
import { useState } from 'react';

const Assets = () => {
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (facilityIndex) => {
    setImageErrors(prev => ({ ...prev, [facilityIndex]: true }));
  };

  const facilities = [
    {
      title: 'KRISHNA CARE (Gondwara) - Head Office & Primary Logistics Hub',
      icon: <FaBuilding className="w-12 h-12" />,
      color: 'from-blue-600 to-blue-800',
      image: '/images/assets/head-office.png',
      description: 'Our flagship facility in Gondwara serves as the Head Office and a sophisticated logistics hub, strategically designed to meet the demands of modern C&F agency and distributorship operations.',
      features: [
        {
          title: 'Established Complex',
          description: 'Encompassing approximately 36,000 square feet, this modern, fully computerized office and warehouse complex is equipped to manage extensive storage and rapid transportation requirements.'
        },
        {
          title: 'Advanced Connectivity',
          description: 'The facility boasts state-of-the-art communication technologies, including multiple telephone lines, fax capabilities, EPBX systems, modems, online UPS systems, generators for uninterrupted power, and complete air conditioning.'
        },
        {
          title: 'Integrated Operations',
          description: 'All business operations are seamlessly managed through advanced computer systems, each paired with high-speed printers, ensuring efficiency and accuracy across all processes.'
        }
      ]
    },
    {
      title: 'KRISHNA CARE (Gondwara) - New Logistics Complex',
      icon: <FaWarehouse className="w-12 h-12" />,
      color: 'from-green-600 to-green-800',
      image: '/images/assets/new-complex.png',
      description: 'We are proud to announce the establishment of our new, modern logistics complex, built to multinational standards, significantly expanding our operational capabilities.',
      features: [
        {
          title: 'Expansive Facility',
          description: 'This new building adds an impressive 90,000 square feet of space, with a substantial vacant area of approximately 72,000 square feet available for future expansion or custom solutions.'
        },
        {
          title: 'Corporate Office',
          description: 'Features a dedicated 6,000 square feet fully air-conditioned corporate office, complete with a professional conference room and private cabins for managers.'
        },
        {
          title: 'Robust IT & Power Infrastructure',
          description: 'Equipped with two online UPS systems for uninterrupted power supply in the office, dual telephone lines, and comprehensive EPBX networking extending to all godowns and staff systems.'
        },
        {
          title: 'Flexible Space Solutions',
          description: 'We offer flexible godown and office space tailored to our partners\' specific needs.'
        },
        {
          title: 'Extensive Industry Experience',
          description: 'Our team brings 24 years of invaluable experience in the C&F sector, ensuring expert handling of all logistics challenges.'
        }
      ]
    }
  ];

  const warehouseCapabilities = [
    {
      icon: <FaTruck className="w-8 h-8" />,
      title: 'Vertical Goods Movement',
      description: 'Equipped with two industrial lifts, boasting loading capacities of 1,000 KG and 1,500 KG respectively. Additionally, a specialized conveyor lift facilitates rapid goods elevation up to 32 feet within 1.3 minutes, significantly enhancing the speed of both inward and outward goods movement.',
      color: 'from-purple-500 to-purple-700'
    },
    {
      icon: <FaBoxes className="w-8 h-8" />,
      title: 'Quality Control & Accuracy',
      description: 'We maintain dedicated loading and unloading observation points to ensure precise quantity verification and minimize discrepancies.',
      color: 'from-orange-500 to-orange-700'
    }
  ];

  const infrastructureFeatures = [
    {
      icon: <FaBolt className="w-8 h-8" />,
      title: 'Power Backup',
      description: 'Dual online UPS systems and generators ensure 100% uptime with zero interruption',
      color: 'text-yellow-600 bg-yellow-50'
    },
    {
      icon: <FaNetworkWired className="w-8 h-8" />,
      title: 'Network Infrastructure',
      description: 'Complete EPBX networking across all godowns with high-speed internet connectivity',
      color: 'text-blue-600 bg-blue-50'
    },
    {
      icon: <FaSnowflake className="w-8 h-8" />,
      title: 'Climate Control',
      description: 'Fully air-conditioned facilities maintaining optimal temperature for sensitive goods',
      color: 'text-blue-500 bg-blue-50'
    },
    {
      icon: <FaCamera className="w-8 h-8" />,
      title: '24/7 Surveillance',
      description: 'Advanced CCTV systems monitoring all areas for maximum security',
      color: 'text-primary-600 bg-primary-50'
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: 'Safety Systems',
      description: 'Fire detection and suppression systems with emergency protocols',
      color: 'text-blue-700 bg-blue-50'
    },
    {
      icon: <FaTools className="w-8 h-8" />,
      title: 'Material Handling',
      description: 'Modern equipment including forklifts, pallet jacks, and conveyors',
      color: 'text-primary-700 bg-primary-50'
    }
  ];

  const keyHighlights = [
    {
      title: 'Total Facility Space',
      value: '126,000',
      unit: 'Sq Ft',
      description: 'Combined area across all facilities',
      icon: <FaBuilding className="w-6 h-6" />,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Storage Capacity',
      value: '72,000',
      unit: 'Sq Ft',
      description: 'Available warehouse space',
      icon: <FaWarehouse className="w-6 h-6" />,
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Loading Capacity',
      value: '2,500',
      unit: 'KG',
      description: 'Combined lift capacity',
      icon: <FaTruck className="w-6 h-6" />,
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Service Coverage',
      value: '100%',
      unit: 'CG',
      description: 'Complete Chhattisgarh coverage',
      icon: <FaChartLine className="w-6 h-6" />,
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const stats = [
    { number: '36,000', label: 'Sq Ft - Head Office', icon: <FaBuilding /> },
    { number: '90,000', label: 'Sq Ft - New Complex', icon: <FaWarehouse /> },
    { number: '24+', label: 'Years Experience', icon: <FaCog /> },
    { number: '6,000', label: 'Sq Ft - Corporate Office', icon: <FaServer /> }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg text-white pt-40 pb-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Assets & <span className="text-yellow-400">Infrastructure</span>
            </h1>
            <p className="text-lg text-gray-200">
              State-of-the-art facilities and equipment designed for excellence in logistics operations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="text-primary-600 mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-16 last:mb-0"
            >
              {/* Facility Header */}
              <div className={`bg-gradient-to-r ${facility.color} rounded-2xl p-8 mb-8 shadow-xl`}>
                <div className="flex items-center space-x-4 text-white">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    {facility.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold font-heading">{facility.title}</h2>
                  </div>
                </div>
              </div>

              {/* Image and Description Section */}
              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="rounded-xl overflow-hidden shadow-lg h-[400px]"
                >
                  {!imageErrors[index] ? (
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      onError={() => handleImageError(index)}
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${facility.color} flex items-center justify-center`}>
                      <div className="text-white text-center p-8">
                        {facility.icon}
                        <p className="mt-4 text-lg font-semibold">Facility Image</p>
                      </div>
                    </div>
                  )}
                </motion.div>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-white rounded-xl p-8 shadow-md flex items-center"
                >
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {facility.description}
                  </p>
                </motion.div>
              </div>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {facility.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-primary-600"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Highlights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that showcase our operational excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {keyHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-100"
              >
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                  <div className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 rounded-full transform translate-x-12 -translate-y-12"></div>
                </div>
                <div className={`inline-block p-3 bg-gradient-to-br ${highlight.color} text-white rounded-2xl mb-4`}>
                  {highlight.icon}
                </div>
                <div className="text-4xl font-bold text-primary-900 mb-1">
                  {highlight.value}
                </div>
                <div className="text-sm font-semibold text-gray-500 mb-3">
                  {highlight.unit}
                </div>
                <div className="text-lg font-bold text-primary-900 mb-2">
                  {highlight.title}
                </div>
                <p className="text-sm text-gray-600">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Infrastructure & Technology</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern facilities equipped with cutting-edge technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {infrastructureFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary-200"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${feature.color}`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                <div className="mt-4 flex items-center text-sm font-semibold text-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FaCheckCircle className="mr-2" />
                  Operational
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Warehouse Capabilities Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Warehouse Capabilities & Equipment</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our warehouses are meticulously designed and fully equipped to operate optimally under all weather conditions, ensuring the integrity and efficient movement of goods.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {warehouseCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className={`bg-gradient-to-r ${capability.color} p-6`}>
                  <div className="flex items-center space-x-4 text-white">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      {capability.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{capability.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {capability.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary-900 to-primary-800 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience Our World-Class Infrastructure?</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Contact us today to learn more about how our assets can support your logistics needs.
            </p>
            <a
              href="/contact"
              className="inline-block bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition-colors text-lg"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Assets;
