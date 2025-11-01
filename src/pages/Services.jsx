import { Link } from 'react-router-dom';
import {
  FaTruck,
  FaWarehouse,
  FaChartLine,
  FaCogs,
  FaArrowRight,
  FaCheckCircle,
  FaShippingFast,
  FaBoxes,
  FaClipboardList,
  FaShieldAlt,
  FaFileInvoice,
  FaTasks
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      id: 'warehousing',
      icon: <FaWarehouse size={48} />,
      title: 'Warehousing Solutions',
      description: 'Modern warehousing facilities equipped with advanced inventory management systems.',
      features: [
        'Secure & Optimized Storage (Dedicated/Shared)',
        'Real-time Stock Tracking & Cycle Counting',
        'FIFO/LIFO Management',
        'Batch Control',
        'Pick and Pack Services',
        'Cross-Docking',
        'Distribution Services',
        'Warehouse Management System (WMS)',
        'Temperature-Controlled Storage'
      ],
      color: 'from-green-500 to-green-700',
      image: '/images/services/warehousing.jpg'
    },
    {
      id: 'transportation',
      icon: <FaTruck size={48} />,
      title: 'Primary Transportation',
      description: 'Comprehensive transportation solutions with a fleet of modern vehicles and real-time tracking.',
      features: [
        'Primary & Secondary Distribution',
        'Full Truckload (FTL) Services',
        'Less Than Truckload (LTL) Services',
        'Real-time GPS Tracking',
        'Route Optimization',
        'Fleet Management & Coordination',
        'Temperature-Controlled Transport',
        'Multi-Modal Transportation'
      ],
      color: 'from-blue-500 to-blue-700',
      image: '/images/services/transportation.jpg'
    },
    {
      id: 'order-fulfillment',
      icon: <FaTasks size={48} />,
      title: 'Order Fulfillment & Operations',
      description: 'End-to-end order processing with precision, quality control, and complete compliance.',
      features: [
        'Timely Order Processing & Fulfillment',
        'Accurate Picking & Quality Control',
        'Professional Packing & Labeling',
        'E-Way Bills & GST Compliance',
        'Complete Documentation Support',
        'Returns & Reverse Logistics',
        'Product Recall Management',
        'Damaged Goods Handling'
      ],
      color: 'from-orange-500 to-orange-700',
      image: '/images/services/order-fulfillment.jpg'
    },
    {
      id: 'supply-chain-management',
      icon: <FaChartLine size={48} />,
      title: 'Supply Chain Management',
      description: 'Strategic management to optimize your supply chain operations and maximize efficiency.',
      features: [
        'Supply Chain Analysis',
        'Process Optimization',
        'Cost Reduction Strategies',
        'Network Design',
        'Technology Implementation',
        'Performance Metrics'
      ],
      color: 'from-purple-500 to-purple-700',
      image: '/images/services/supply-chain-management.jpg'
    },
    {
      id: 'customs-clearance',
      icon: <FaFileInvoice size={48} />,
      title: 'Customs Clearance',
      description: 'Expert customs clearance services ensuring smooth and compliant international trade operations.',
      features: [
        'Import/Export Documentation',
        'Customs Compliance',
        'Tariff Classification',
        'Duty Drawback Services',
        'Trade Compliance Consulting',
        'Regulatory Updates & Advisory'
      ],
      color: 'from-indigo-500 to-indigo-700',
      image: '/images/services/customs-clearance.jpg'
    },
    {
      id: 'integrated-solutions',
      icon: <FaCogs size={48} />,
      title: 'Integrated Solutions',
      description: 'End-to-end logistics solutions combining all services for seamless operations.',
      features: [
        'Customized Solutions',
        'End-to-End Management',
        'Technology Integration',
        'Online Tracking Portals',
        'ERP System Integration',
        'Real-time Visibility & Tracking',
        'Stock Aging Reports',
        'Dispatch Efficiency Tracking',
        'Inventory Movement Analytics',
        'Dedicated Account Management',
        'Scalable Operations'
      ],
      color: 'from-teal-500 to-teal-700',
      image: '/images/services/integrated-solutions.jpg'
    },
    {
      id: 'risk-management',
      icon: <FaShieldAlt size={48} />,
      title: 'Risk Management',
      description: 'Comprehensive risk assessment and mitigation strategies to protect your supply chain.',
      features: [
        'Risk Assessment & Analysis',
        'Insurance Coordination',
        'Transit Insurance',
        'Cargo Security Solutions',
        'Business Continuity Planning',
        'Vendor Risk Evaluation',
        'Compliance & Regulatory Risk'
      ],
      color: 'from-red-500 to-red-700',
      image: '/images/services/services-risk-management.jpeg'
    }
  ];

  const additionalServices = [
    {
      icon: <FaShippingFast size={32} />,
      title: 'Express Delivery',
      description: 'Same-day and next-day delivery options for urgent shipments'
    },
    {
      icon: <FaBoxes size={32} />,
      title: 'Packaging Services',
      description: 'Professional packaging solutions to ensure safe transit'
    },
    {
      icon: <FaClipboardList size={32} />,
      title: 'Documentation Support',
      description: 'Complete documentation and customs clearance assistance'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg pt-40 pb-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 style={{color: '#ffffff'}} className="text-5xl md:text-6xl font-bold mb-6">
              Comprehensive Logistics <span className="text-yellow-300">Services</span>
            </h1>
            <p style={{color: '#dbeafe'}} className="text-xl mb-8">
              Tailored solutions to meet your unique supply chain needs with cutting-edge
              technology and industry expertise
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`inline-flex w-20 h-20 bg-gradient-to-br ${service.color} rounded-xl items-center justify-center text-white mb-6 shadow-lg`}>
                    {service.icon}
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-xl text-gray-600 mb-8">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <FaCheckCircle className="text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link 
                    to={`/services/${service.id}`}
                    className="btn-primary inline-flex items-center space-x-2"
                  >
                    <span>Learn More</span>
                    <FaArrowRight />
                  </Link>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="rounded-2xl shadow-2xl w-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600">
              Supporting services to complement your logistics needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <div className="p-8">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mx-auto mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-bg text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Every business is unique. Let's create a logistics solution tailored specifically to your needs.
            </p>
            <Link to="/contact" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2 shadow-xl">
              <span>Request a Consultation</span>
              <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
