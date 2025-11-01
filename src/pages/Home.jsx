import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaTruck,
  FaWarehouse,
  FaChartLine,
  FaCogs,
  FaShieldAlt,
  FaArrowRight,
  FaQuoteLeft,
  FaStar,
  FaCheckCircle,
  FaFire,
  FaHome,
  FaClock,
  FaUserShield,
  FaDoorOpen,
  FaFileAlt,
  FaBell,
  FaClipboardList,
  FaIdCard,
  FaBoxes,
  FaMapMarkedAlt,
  FaHeadset,
  FaAward,
  FaVideo,
  FaTools,
  FaTasks
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { homeTranslations } from '../translations/home';
import { commonTranslations } from '../translations/common';
import { navigationTranslations } from '../translations/navigation';
import { blogService } from '../services/apiService';

const Home = () => {
  const { t } = useLanguage();
  const { language } = useLanguage();
  const [recentBlogs, setRecentBlogs] = useState([]);

  const services = [
    {
      icon: <FaWarehouse size={40} />,
      title: t(homeTranslations.services.warehousing.title),
      description: t(homeTranslations.services.warehousing.description),
      link: '/services/warehousing',
      color: 'from-green-500 to-green-600',
      image: '/images/home/warehousing-solution.jpeg'
    },
    {
      icon: <FaTruck size={40} />,
      title: t(homeTranslations.services.transportation.title),
      description: t(homeTranslations.services.transportation.description),
      link: '/services/transportation',
      color: 'from-blue-500 to-blue-600',
      image: '/images/home/primary-transportation.jpeg'
    },
    {
      icon: <FaChartLine size={40} />,
      title: t(homeTranslations.services.supplyChain.title),
      description: t(homeTranslations.services.supplyChain.description),
      link: '/services/supply-chain-management',
      color: 'from-purple-500 to-purple-600',
      image: '/images/home/supplychain-management.jpeg'
    },
    {
      icon: <FaShieldAlt size={40} />,
      title: t(homeTranslations.services.customs.title),
      description: t(homeTranslations.services.customs.description),
      link: '/services/customs-clearance',
      color: 'from-indigo-500 to-indigo-600',
      image: '/images/home/custom-clearance.jpeg'
    },
    {
      icon: <FaCogs size={40} />,
      title: t(homeTranslations.services.integrated.title),
      description: t(homeTranslations.services.integrated.description),
      link: '/services/integrated-solutions',
      color: 'from-orange-500 to-orange-600',
      image: '/images/home/integrated_solutions.jpeg'
    },
    {
      icon: <FaShieldAlt size={40} />,
      title: t(homeTranslations.services.risk.title),
      description: t(homeTranslations.services.risk.description),
      link: '/services/risk-management',
      color: 'from-red-500 to-red-600',
      image: '/images/home/risk-management.jpeg'
    }
  ];

  const technologies = [
    {
      icon: <FaWarehouse size={32} />,
      title: 'Warehouse & Storage Excellence',
      description: 'Our vast 73,000+ sq/ft of existing facilities and a proposed 100,000 sq/ft expansion, designed for optimal storage and product integrity'
    },
    {
      icon: <FaTruck size={32} />,
      title: 'Advanced Logistics & Fleet Management',
      description: 'Our owned fleet with all-India permits, combined with strategic partnerships, ensuring efficient and hassle-free nationwide distribution'
    },
    {
      icon: <FaTools size={32} />,
      title: 'Material Handling & Operational Efficiency',
      description: 'High-capacity lifts, conveyor systems, and dedicated loading zones for rapid, accurate, and safe movement of goods'
    },
    {
      icon: <FaVideo size={32} />,
      title: 'Security & Safety Protocols',
      description: '24x7 CCTV surveillance, manned security, and comprehensive fire safety systems ensuring the utmost protection for your assets'
    }
  ];

  const warehouseExcellence = [
    { icon: <FaFire />, text: 'Fire NOC Certified' },
    { icon: <FaHome />, text: 'Fully Covered Warehouse' },
    { icon: <FaCheckCircle />, text: 'Kota Stone Flooring (No Maintenance Issues)' },
    { icon: <FaUserShield />, text: '24 Hours Security Guards' },
    { icon: <FaDoorOpen />, text: 'Proper In and Out Gates' },
    { icon: <FaFileAlt />, text: 'POD at Same Day of Delivery' },
    { icon: <FaBell />, text: 'Fire Alarm System' },
    { icon: <FaClipboardList />, text: 'Daily Stock Take' },
    { icon: <FaIdCard />, text: 'Bin Cards Maintenance' }
  ];

  const logisticsExcellence = [
    { icon: <FaTruck />, text: 'Owned Vehicle Fleet for Delivery' },
    { icon: <FaMapMarkedAlt />, text: 'Real-time GPS Tracking' },
    { icon: <FaClock />, text: '99.8% On-time Delivery Rate' },
    { icon: <FaHeadset />, text: '24/7 Customer Support' },
    { icon: <FaBoxes />, text: 'Advanced Inventory Management' },
    { icon: <FaAward />, text: 'Industry-leading Technology' },
    { icon: <FaShieldAlt />, text: 'Cargo Insurance Coverage' },
    { icon: <FaChartLine />, text: 'Route Optimization System' },
    { icon: <FaCheckCircle />, text: 'Trained & Professional Drivers' }
  ];

  // Client testimonials (Industrial clients)
  const testimonials = [
    {
      name: 'Nikhilesh Sharma',
      position: 'Logistics Manager',
      company: 'Coromandel International Limited',
      content: 'Krishna Care transformed our logistics operations. Their technology-driven approach reduced our costs by 25% while improving delivery times.',
      rating: 5
    },
    {
      name: 'Remoil Jain',
      position: 'Logistics Manager',
      company: 'Atul Limited',
      content: 'Outstanding service and professionalism. The real-time tracking system has given us complete visibility over our supply chain.',
      rating: 5
    },
    {
      name: 'Hitendra Shah',
      position: 'RCM',
      company: 'Shalimar Paints',
      content: 'A reliable partner for our growing business. Their warehousing solutions and consulting services have been invaluable.',
      rating: 5
    }
  ];

  // Customer testimonials (Agricultural customers)
  const customerTestimonials = [
    {
      name: 'Rahul Ratre',
      position: 'Bilaspur',
      company: 'Ratre Krishi Kendra - Bilha',
      content: 'Excellent logistics support for our agricultural business. Krishna Care has consistently delivered on time with professional service.',
      rating: 5
    },
    {
      name: 'Sudhir Tiwary',
      position: 'Mahasamund',
      company: 'Suvidha Krishi Kendra - Tumgagon',
      content: 'Their warehousing and distribution services have been instrumental in expanding our reach. Highly recommended for agricultural logistics.',
      rating: 5
    },
    {
      name: 'Manish Gupta',
      position: 'Kawardha',
      company: 'Sai Krishi Seva Kendra - Pandatarai',
      content: 'Professional and reliable logistics partner. Their expertise in handling agricultural products has helped our business grow significantly.',
      rating: 5
    }
  ];

  // Fetch recent blogs on component mount
  useEffect(() => {
    const fetchRecentBlogs = async () => {
      try {
        // Backend automatically filters for published blogs for non-admin users
        const response = await blogService.getAll({ page: 1, limit: 3 });
        const blogs = response.data || [];
        setRecentBlogs(blogs);
      } catch (error) {
        console.error('Error fetching recent blogs:', error);
        setRecentBlogs([]);
      }
    };

    fetchRecentBlogs();
  }, []);

  const [currentSlide, setCurrentSlide] = React.useState(0);

  const heroSlides = [
    {
      type: 'video',
      url: '/videos/krishnacare.mp4',
      title: 'Fast, Precise & Trustworthy C&F Warehosing and Logistics Solutions',
      subtitle: 'Comprehensive supply chain solutions with state-of-the-art warehousing and reliable logistics services',
      label: t(navigationTranslations.about).toUpperCase()
    },
    {
      type: 'video',
      url: '/videos/krishnacare2.mp4',
      title: 'Advanced Warehousing Facilities',
      subtitle: 'State-of-the-art storage solutions with 126,000+ sq/ft capacity and modern infrastructure',
      label: 'WAREHOUSING'
    },
    {
      type: 'image',
      url: '/images/home/Integrated_logistics_solution.jpeg',
      title: 'Integrated Logistics Solutions',
      subtitle: 'Nationwide distribution network with real-time tracking and on-time delivery guarantee',
      label: 'LOGISTICS'
    },
    {
      type: 'image',
      url: '/images/home/End-to-endSCM.jpeg',
      title: 'End-to-End Supply Chain Management',
      subtitle: 'From storage to delivery - complete logistics solutions tailored to your business needs',
      label: 'SOLUTIONS'
    }
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Slider */}
      <section className="relative h-[600px] lg:h-[700px] overflow-hidden">
        {/* Slides */}
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image/Video */}
            <div className="absolute inset-0">
              {slide.type === 'image' ? (
                <img
                  src={slide.url}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <video
                  src={slide.url}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              )}
              {/* Light Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0e1a2a]/40 via-transparent to-transparent"></div>
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="w-full px-4 sm:px-6 lg:px-20 xl:px-32">
                <div className="max-w-2xl">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: index === currentSlide ? 1 : 0, y: index === currentSlide ? 0 : 30 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <div className="text-yellow-400 font-bold text-sm mb-4 tracking-wider uppercase">
                      {slide.label}
                    </div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-base md:text-lg text-gray-200 mb-6 leading-relaxed">
                      {slide.subtitle}
                    </p>
                    <div className="flex items-center space-x-2">
                      <Link
                        to="/about"
                        className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-md font-semibold hover:bg-yellow-500 transition-colors inline-flex items-center space-x-2 text-sm uppercase tracking-wide"
                      >
                        <span>{t(commonTranslations.readMore)}</span>
                        <FaArrowRight className="text-xs" />
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center space-x-3 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 ${
                index === currentSlide
                  ? 'w-12 h-3 bg-yellow-400'
                  : 'w-3 h-3 bg-white/50 hover:bg-white/80'
              } rounded-full`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Arrow Navigation */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t(homeTranslations.services.title)}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive Warehousing & Logistics Solutions as a C&F
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.slice(0, 6).map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full"
                >
                  {/* Image Container - Fixed Height */}
                  <div className="relative h-56 overflow-hidden bg-gray-100 flex-shrink-0">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>

                  {/* Content - Flex Grow to Fill Space */}
                  <div className="p-6 flex items-center justify-between flex-grow">
                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-primary-600 transition-colors pr-3">
                      {service.title}
                    </h3>
                    
                    {/* Arrow Button */}
                    <div className="w-10 h-10 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center group-hover:border-primary-600 group-hover:bg-primary-600 transition-all duration-300 flex-shrink-0">
                      <FaArrowRight className="text-gray-600 group-hover:text-white transition-colors text-sm transform group-hover:translate-x-0.5" />
                    </div>
                  </div>

                  {/* Thin Navy Blue Strap at Bottom with Shining Animation */}
                  <div className="h-1 bg-gradient-to-r from-blue-800 via-blue-900 to-blue-950 group-hover:h-1.5 transition-all duration-300 shine-effect"></div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Us / Story Section */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About <span className="text-primary-600">Us</span>
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  We are a leading C&F (Carrying & Forwarding) agency and logistics solutions provider, 
                  offering comprehensive services across the supply chain. With over 25 years of experience 
                  in the industry, Krishna Care has established itself as a trusted partner for businesses 
                  across Chhattisgarh and beyond.
                </p>
                <p>
                  Starting from our flagship facility in Gondwara in 1996, we have been offering 
                  customized logistics solutions and advisory services. Our "Partner First" approach, 
                  quality focus, and commitment to excellence have helped us build lasting relationships 
                  with leading brands across Pharma, Pesticides & Seed, Paints, Electronics, Cosmetics and FMCG sectors.
                </p>
                <p>
                  The trust built over the decades has enabled us to serve 30+ premium brands with 
                  state-of-the-art facilities spanning over 126,000 square feet, equipped with modern 
                  technology and infrastructure to meet the demands of modern logistics operations.
                </p>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-shadow relative overflow-hidden"
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -mr-16 -mt-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full -ml-12 -mb-12"></div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="text-sm font-semibold text-white mb-3">Experience</div>
                    <div className="text-5xl font-bold text-white mb-3">25+</div>
                    <div className="text-sm text-white font-semibold">Years in CFA</div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-shadow relative overflow-hidden"
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-28 h-28 bg-white rounded-full -ml-14 -mt-14"></div>
                    <div className="absolute bottom-0 right-0 w-20 h-20 bg-white rounded-full -mr-10 -mb-10"></div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="text-sm font-semibold text-white mb-3">Trusted Partners</div>
                    <div className="text-5xl font-bold text-white mb-3">30+</div>
                    <div className="text-sm text-white font-semibold">Premium Brands</div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-green-500 via-green-600 to-green-700 rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-shadow relative overflow-hidden"
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-36 h-36 bg-white rounded-full -mr-18 -mt-18"></div>
                    <div className="absolute bottom-0 left-0 w-28 h-28 bg-white rounded-full -ml-14 -mb-14"></div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="text-sm font-semibold text-white mb-3">Full Coverage</div>
                    <div className="text-5xl font-bold text-white mb-3">100%</div>
                    <div className="text-sm text-white font-semibold">Chhattisgarh<br/>State</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/about/warehouse-interior.jpg"
                  alt="About Krishna Care - Modern Warehouse Interior"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary-600 rounded-3xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-yellow-400 rounded-3xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Showcase */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <img
                src="/images/operations/warehouse-logistics.png"
                alt="Krishna Care Operations Gallery - Warehouse and Logistics"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </motion.div>

            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Explore Our <span className="text-primary-600">Operations Gallery</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Take a visual journey through our state-of-the-art facilities, 
                modern fleet, dedicated team, and successful operations across the country.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex space-x-4"
                  >
                    <div className="text-primary-600 flex-shrink-0">
                      {tech.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{tech.title}</h4>
                      <p className="text-gray-600 text-sm">{tech.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Link to="/gallery" className="btn-primary inline-flex items-center space-x-2">
                <span>View Our Gallery</span>
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition - Why Choose Krishna Care */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
        <div className="container-custom">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Why Choose Krishna Care?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-blue-100 max-w-3xl mx-auto"
            >
              Industry-leading infrastructure and dedicated service excellence
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* Warehouse Excellence */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <FaWarehouse className="text-white text-2xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Warehouse Excellence</h3>
                  <p className="text-blue-200 text-sm">World-class storage facilities</p>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid gap-4">
                {warehouseExcellence.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-center space-x-3 bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 group-hover:bg-blue-500/30 transition-colors flex-shrink-0">
                      {feature.icon}
                    </div>
                    <span className="text-white font-medium text-sm leading-snug">{feature.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Accent */}
              <div className="mt-6 h-1 bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-full"></div>
            </motion.div>

            {/* Logistics Excellence */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <FaTruck className="text-white text-2xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Logistics Excellence</h3>
                  <p className="text-blue-200 text-sm">Reliable transportation solutions</p>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid gap-4">
                {logisticsExcellence.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-center space-x-3 bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center text-orange-300 group-hover:bg-orange-500/30 transition-colors flex-shrink-0">
                      {feature.icon}
                    </div>
                    <span className="text-white font-medium text-sm leading-snug">{feature.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Accent */}
              <div className="mt-6 h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 rounded-full"></div>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link 
              to="/assets" 
              className="inline-flex items-center space-x-2 bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span>Explore Our Infrastructure</span>
              <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Client Success Stories</h2>
            <p className="text-xl text-gray-600">
              See what our clients have to say about working with us
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <div className="p-8">
                  <FaQuoteLeft className="text-primary-600 text-3xl mb-4" />
                  <p className="text-gray-700 mb-6 leading-relaxed">{testimonial.content}</p>

                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>

                  <div className="border-t pt-4">
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.position}</div>
                    <div className="text-sm text-primary-600">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Success Stories */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Customer Success Stories</h2>
            <p className="text-xl text-gray-600">
              Real results from real customers who trust Krishna Care
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {customerTestimonials.map((testimonial, index) => (
              <motion.div
                key={`customer-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <div className="p-8">
                  <FaQuoteLeft className="text-primary-600 text-3xl mb-4" />
                  <p className="text-gray-700 mb-6 leading-relaxed">{testimonial.content}</p>

                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>

                  <div className="border-t pt-4">
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.position}</div>
                    <div className="text-sm text-primary-600">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Insights */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Latest Insights</h2>
              <p className="text-xl text-gray-600">
                Stay updated with industry trends and company news
              </p>
            </div>
            <Link to="/blog" className="hidden md:inline-flex btn-outline items-center space-x-2">
              <span>View All</span>
              <FaArrowRight />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {recentBlogs.length > 0 ? (
              recentBlogs.map((post, index) => (
                <motion.article
                  key={post._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card group"
                >
                  <div className="overflow-hidden">
                    <img
                      src={post.featuredImage ? `${import.meta.env.VITE_API_URL.replace('/api', '')}${post.featuredImage}` : '/images/blog/blog_backup.jpg'}
                      alt={post.title?.[language] || post.title?.en || post.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        e.target.src = '/images/blog/blog_backup.jpg';
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500">
                        {new Date(post.publishedAt || post.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {post.title?.[language] || post.title?.en || post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {post.excerpt?.[language] || post.excerpt?.en || post.excerpt}
                    </p>
                    <Link
                      to={`/blog/${post.slug || post._id}`}
                      className="text-primary-600 font-semibold inline-flex items-center space-x-2 hover:space-x-3 transition-all"
                    >
                      <span>Read More</span>
                      <FaArrowRight />
                    </Link>
                  </div>
                </motion.article>
              ))
            ) : (
              <div className="col-span-3 text-center py-12">
                <p className="text-gray-500">No blog posts available yet. Check back soon!</p>
              </div>
            )}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Link to="/blog" className="btn-outline inline-flex items-center space-x-2">
              <span>View All Articles</span>
              <FaArrowRight />
            </Link>
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
              Ready to Transform Your Logistics?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let's discuss how Krishna Care can optimize your supply chain and drive your business forward
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2 shadow-xl">
                <span>Get a Free Consultation</span>
                <FaArrowRight />
              </Link>
              <Link to="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all inline-flex items-center justify-center">
                Learn About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
