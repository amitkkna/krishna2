import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ServiceDetail = () => {
  const { serviceId } = useParams();

  const servicesData = {
    transportation: {
      title: 'Primary Transportation',
      subtitle: 'Reliable, efficient transportation solutions for your business',
      description: 'Our comprehensive transportation services ensure your goods reach their destination safely and on time. With a modern fleet and advanced tracking systems, we provide complete visibility throughout the journey.',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200',
      features: [
        {
          title: 'Full Truckload (FTL)',
          description: 'Dedicated vehicles for large shipments with direct delivery'
        },
        {
          title: 'Less Than Truckload (LTL)',
          description: 'Cost-effective solutions for smaller shipments'
        },
        {
          title: 'Real-time Tracking',
          description: 'GPS-enabled tracking for complete shipment visibility'
        },
        {
          title: 'Route Optimization',
          description: 'AI-powered route planning for faster deliveries'
        },
        {
          title: 'Temperature Control',
          description: 'Refrigerated transport for sensitive goods'
        },
        {
          title: 'Multi-Modal Options',
          description: 'Flexible transportation using multiple modes'
        }
      ],
      benefits: [
        'Reduced transit times',
        'Lower transportation costs',
        'Real-time shipment visibility',
        'Flexible scheduling',
        'Dedicated support team',
        'Insurance coverage'
      ],
      process: [
        { step: '1', title: 'Request Quote', description: 'Share your requirements' },
        { step: '2', title: 'Route Planning', description: 'We optimize the best route' },
        { step: '3', title: 'Pickup', description: 'Collection from your location' },
        { step: '4', title: 'Transit', description: 'Real-time tracking available' },
        { step: '5', title: 'Delivery', description: 'Safe delivery to destination' }
      ]
    },
    warehousing: {
      title: 'Warehousing Solutions',
      subtitle: 'State-of-the-art facilities for your storage needs',
      description: 'Our modern warehousing facilities are equipped with advanced technology to ensure optimal storage conditions and efficient inventory management. From receiving to dispatch, we handle your goods with care.',
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200',
      features: [
        {
          title: 'Climate Control',
          description: 'Temperature and humidity-controlled environments'
        },
        {
          title: 'Inventory Management',
          description: 'Real-time inventory tracking with WMS'
        },
        {
          title: 'Pick & Pack',
          description: 'Efficient order fulfillment services'
        },
        {
          title: 'Cross-Docking',
          description: 'Minimize storage time with direct transfer'
        },
        {
          title: 'Distribution',
          description: 'Streamlined distribution to multiple locations'
        },
        {
          title: 'Security',
          description: '24/7 surveillance and access control'
        }
      ],
      benefits: [
        'Flexible storage solutions',
        'Reduced inventory costs',
        'Advanced security systems',
        'Scalable capacity',
        'Real-time reporting',
        'Value-added services'
      ],
      process: [
        { step: '1', title: 'Receiving', description: 'Goods inspection and check-in' },
        { step: '2', title: 'Storage', description: 'Organized storage allocation' },
        { step: '3', title: 'Inventory', description: 'Real-time tracking system' },
        { step: '4', title: 'Fulfillment', description: 'Order processing and packing' },
        { step: '5', title: 'Dispatch', description: 'Timely delivery coordination' }
      ]
    },
    'supply-chain-management': {
      title: 'Supply Chain Management',
      subtitle: 'Strategic management for supply chain excellence',
      description: 'Our expert team manages your supply chain operations to identify optimization opportunities, reduce costs, and improve efficiency. We provide actionable insights backed by data and industry best practices.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200',
      features: [
        {
          title: 'Supply Chain Analysis',
          description: 'Comprehensive evaluation of current operations'
        },
        {
          title: 'Process Optimization',
          description: 'Streamline workflows and reduce waste'
        },
        {
          title: 'Cost Reduction',
          description: 'Identify savings opportunities'
        },
        {
          title: 'Network Design',
          description: 'Optimize distribution network'
        },
        {
          title: 'Technology Implementation',
          description: 'Deploy the right solutions'
        },
        {
          title: 'Performance Metrics',
          description: 'KPI development and monitoring'
        }
      ],
      benefits: [
        'Expert guidance',
        'Data-driven decisions',
        'Cost savings',
        'Improved efficiency',
        'Risk mitigation',
        'Competitive advantage'
      ],
      process: [
        { step: '1', title: 'Assessment', description: 'Current state analysis' },
        { step: '2', title: 'Strategy', description: 'Develop optimization plan' },
        { step: '3', title: 'Implementation', description: 'Execute improvements' },
        { step: '4', title: 'Monitoring', description: 'Track performance metrics' },
        { step: '5', title: 'Optimization', description: 'Continuous improvement' }
      ]
    },
    'integrated-solutions': {
      title: 'Integrated Solutions',
      subtitle: 'End-to-end logistics management',
      description: 'Our integrated solutions combine all our services into a seamless, customized logistics operation. We manage your entire supply chain from procurement to final delivery, giving you more time to focus on your core business.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200',
      features: [
        {
          title: 'Customized Solutions',
          description: 'Tailored to your specific requirements'
        },
        {
          title: 'End-to-End Management',
          description: 'Complete supply chain oversight'
        },
        {
          title: 'Technology Integration',
          description: 'Seamless system connectivity'
        },
        {
          title: 'Account Management',
          description: 'Dedicated support team'
        },
        {
          title: 'Scalability',
          description: 'Grow with your business'
        },
        {
          title: 'Analytics',
          description: 'Comprehensive reporting and insights'
        }
      ],
      benefits: [
        'Single point of contact',
        'Simplified operations',
        'Cost efficiency',
        'Improved visibility',
        'Faster response times',
        'Strategic partnership'
      ],
      process: [
        { step: '1', title: 'Consultation', description: 'Understand your needs' },
        { step: '2', title: 'Design', description: 'Create custom solution' },
        { step: '3', title: 'Integration', description: 'Connect systems' },
        { step: '4', title: 'Execution', description: 'Manage operations' },
        { step: '5', title: 'Optimization', description: 'Continuous improvement' }
      ]
    },
    'customs-clearance': {
      title: 'Customs Clearance',
      subtitle: 'Expert customs and trade compliance services',
      description: 'Our customs clearance specialists ensure smooth and compliant international trade operations. We handle all documentation, regulations, and procedures to expedite your shipments through customs.',
      image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200',
      features: [
        {
          title: 'Import/Export Documentation',
          description: 'Complete documentation preparation and filing'
        },
        {
          title: 'Customs Compliance',
          description: 'Ensure adherence to all regulations'
        },
        {
          title: 'Tariff Classification',
          description: 'Accurate HS code determination'
        },
        {
          title: 'Duty Drawback Services',
          description: 'Recover duties on exported goods'
        },
        {
          title: 'Trade Compliance Consulting',
          description: 'Expert guidance on trade regulations'
        },
        {
          title: 'Regulatory Updates',
          description: 'Stay informed of changing requirements'
        }
      ],
      benefits: [
        'Faster clearance times',
        'Reduced compliance risks',
        'Cost savings on duties',
        'Expert regulatory guidance',
        'Penalty avoidance',
        '24/7 customs support'
      ],
      process: [
        { step: '1', title: 'Documentation', description: 'Prepare required documents' },
        { step: '2', title: 'Classification', description: 'Determine tariff codes' },
        { step: '3', title: 'Filing', description: 'Submit to customs authorities' },
        { step: '4', title: 'Clearance', description: 'Coordinate with customs' },
        { step: '5', title: 'Delivery', description: 'Release for final delivery' }
      ]
    },
    'risk-management': {
      title: 'Risk Management',
      subtitle: 'Comprehensive supply chain risk mitigation',
      description: 'Our risk management services identify, assess, and mitigate potential threats to your supply chain. We develop strategies to protect your operations from disruptions and ensure business continuity.',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200',
      features: [
        {
          title: 'Risk Assessment & Analysis',
          description: 'Identify vulnerabilities in your supply chain'
        },
        {
          title: 'Insurance Coordination',
          description: 'Comprehensive cargo and liability coverage'
        },
        {
          title: 'Cargo Security Solutions',
          description: 'Advanced security measures and monitoring'
        },
        {
          title: 'Business Continuity Planning',
          description: 'Prepare for disruptions and emergencies'
        },
        {
          title: 'Vendor Risk Evaluation',
          description: 'Assess and monitor supplier reliability'
        },
        {
          title: 'Compliance & Regulatory Risk',
          description: 'Navigate complex regulatory landscapes'
        }
      ],
      benefits: [
        'Reduced operational risks',
        'Enhanced security',
        'Business continuity',
        'Cost protection',
        'Regulatory compliance',
        'Peace of mind'
      ],
      process: [
        { step: '1', title: 'Assessment', description: 'Identify potential risks' },
        { step: '2', title: 'Analysis', description: 'Evaluate impact and likelihood' },
        { step: '3', title: 'Strategy', description: 'Develop mitigation plans' },
        { step: '4', title: 'Implementation', description: 'Deploy risk controls' },
        { step: '5', title: 'Monitoring', description: 'Continuous risk tracking' }
      ]
    }
  };

  const service = servicesData[serviceId];

  if (!service) {
    return (
      <div className="min-h-screen pt-32 pb-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Link to="/services" className="text-primary-600 hover:underline">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
        </div>
        <div className="container-custom relative z-10">
          <Link to="/services" className="inline-flex items-center space-x-2 text-blue-300 hover:text-white mb-6 transition-colors">
            <FaArrowLeft />
            <span>Back to Services</span>
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">{service.title}</h1>
            <p className="text-2xl text-blue-200 mb-8">{service.subtitle}</p>
            <p className="text-lg text-gray-300 max-w-3xl">{service.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Benefits You'll Experience
              </h2>
              <div className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <FaCheckCircle className="text-green-500 flex-shrink-0" size={24} />
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <img 
                src={service.image} 
                alt={service.title}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            How It Works
          </h2>
          <div className="grid md:grid-cols-5 gap-6">
            {service.process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how {service.title.toLowerCase()} can benefit your business
            </p>
            <Link to="/contact" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2 shadow-xl">
              <span>Request a Quote</span>
              <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
