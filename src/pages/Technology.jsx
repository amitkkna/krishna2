import { FaRobot, FaCloud, FaMobileAlt, FaDatabase, FaChartBar, FaShieldAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Technology = () => {
  const technologies = [
    {
      icon: <FaRobot size={48} />,
      title: 'Artificial Intelligence & Machine Learning',
      description: 'Leveraging AI for predictive analytics, demand forecasting, and intelligent route optimization.',
      capabilities: [
        'Predictive demand forecasting',
        'Dynamic route optimization',
        'Automated decision making',
        'Pattern recognition',
        'Risk assessment'
      ],
      color: 'from-blue-500 to-blue-700'
    },
    {
      icon: <FaCloud size={48} />,
      title: 'IoT & Real-Time Tracking',
      description: 'Internet of Things sensors provide real-time visibility across the entire supply chain.',
      capabilities: [
        'GPS vehicle tracking',
        'Temperature monitoring',
        'Asset tracking',
        'Condition monitoring',
        'Geofencing alerts'
      ],
      color: 'from-green-500 to-green-700'
    },
    {
      icon: <FaDatabase size={48} />,
      title: 'Warehouse Management System (WMS)',
      description: 'Advanced WMS for efficient inventory management and warehouse operations.',
      capabilities: [
        'Real-time inventory tracking',
        'Automated picking and packing',
        'Space optimization',
        'Barcode scanning',
        'Multi-warehouse management'
      ],
      color: 'from-purple-500 to-purple-700'
    },
    {
      icon: <FaChartBar size={48} />,
      title: 'Transportation Management System (TMS)',
      description: 'Comprehensive TMS for planning, execution, and optimization of transportation operations.',
      capabilities: [
        'Route planning and optimization',
        'Carrier management',
        'Load optimization',
        'Freight audit and payment',
        'Performance analytics'
      ],
      color: 'from-orange-500 to-orange-700'
    },
    {
      icon: <FaMobileAlt size={48} />,
      title: 'Customer Portal & Mobile Apps',
      description: 'User-friendly digital platforms for seamless communication and visibility.',
      capabilities: [
        'Real-time shipment tracking',
        'Order management',
        'Document access',
        'Mobile notifications',
        'Customer support chat'
      ],
      color: 'from-pink-500 to-pink-700'
    },
    {
      icon: <FaShieldAlt size={48} />,
      title: 'Cybersecurity & Data Protection',
      description: 'Enterprise-grade security measures to protect your sensitive data.',
      capabilities: [
        'End-to-end encryption',
        'Multi-factor authentication',
        'Regular security audits',
        'Data backup and recovery',
        'Compliance management'
      ],
      color: 'from-red-500 to-red-700'
    }
  ];

  const integrations = [
    'SAP',
    'Oracle',
    'Microsoft Dynamics',
    'Salesforce',
    'QuickBooks',
    'Shopify',
    'Amazon',
    'WooCommerce'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg text-white pt-32 pb-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Technology-Driven <span className="text-yellow-300">Innovation</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Harnessing the power of cutting-edge technology to deliver superior logistics solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technologies */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-20">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`inline-flex w-20 h-20 bg-gradient-to-br ${tech.color} rounded-xl items-center justify-center text-white mb-6 shadow-lg`}>
                    {tech.icon}
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    {tech.title}
                  </h2>
                  <p className="text-xl text-gray-600 mb-6">
                    {tech.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg text-gray-900 mb-3">Key Capabilities:</h3>
                    {tech.capabilities.map((capability, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{capability}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className={`bg-gradient-to-br ${tech.color} rounded-2xl p-12 shadow-2xl`}>
                    <div className="text-white text-center">
                      <div className="mb-6">{tech.icon}</div>
                      <div className="text-6xl font-bold mb-2">
                        {index % 2 === 0 ? '99.9%' : '24/7'}
                      </div>
                      <div className="text-lg opacity-90">
                        {index % 2 === 0 ? 'System Uptime' : 'Monitoring'}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-600">
              Our technology integrates with your existing systems
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center hover:shadow-lg transition-shadow"
              >
                <span className="text-gray-700 font-semibold text-center">
                  {integration}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-bg text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Experience Technology That Works
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let us show you how our technology can transform your logistics operations
            </p>
            <a href="/contact" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block shadow-xl">
              Schedule a Demo
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Technology;
