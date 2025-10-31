import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import { contactService } from '../services/apiService';
import { useLanguage } from '../context/LanguageContext';
import { contactTranslations } from '../translations/contact';
import { navigationTranslations } from '../translations/navigation';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    try {
      setLoading(true);
      const response = await contactService.submit(formData);
      console.log('Contact form response:', response);
      
      if (response.success) {
        toast.success(response.message || t(contactTranslations.success.message));
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Contact form error:', error);
      toast.error(error.response?.data?.message || 'Failed to submit contact form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const offices = [
    {
      city: 'Head Office - Gondwara',
      address: 'Krishna Care (Gondwara), Plot No. 12/4, 12/1, Phase no. 108, Near Lingraj Cold Storage, Behind Durga Petrol Pump, Ring Road No., Gondwara Raipur (C.G.)',
      phone: '+91 700965959',
      email: 'info@krishnacare.com',
      type: 'Head Office & Primary Logistics Hub'
    },
    {
      city: 'Corporate Office - Shanker Nagar',
      address: '2,000 sq ft Modern Facility, Shanker Nagar, Raipur, Chhattisgarh, India',
      phone: '+91 700965959',
      email: 'support@krishnacare.com',
      type: 'Corporate Office'
    }
  ];

  const faqs = [
    {
      question: 'What areas do you service?',
      answer: 'We provide logistics services across India with major hubs in Mumbai, Delhi, Bangalore, Chennai, Pune, and Kolkata.'
    },
    {
      question: 'How can I track my shipment?',
      answer: 'You can track your shipment in real-time through our customer portal or mobile app using your tracking number.'
    },
    {
      question: 'What types of goods can you transport?',
      answer: 'We handle a wide range of goods including FMCG, electronics, pharmaceuticals, automotive parts, and more. We also offer temperature-controlled transport for sensitive items.'
    },
    {
      question: 'Do you offer warehousing services?',
      answer: 'Yes, we have state-of-the-art warehousing facilities across major cities with climate control and advanced inventory management systems.'
    }
  ];

  return (
    <div className="min-h-screen">
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
                <FaPaperPlane className="text-[#1a2947] text-6xl relative z-10" />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
            >
              Let's Start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500">Conversation</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-8"
            >
              <p className="text-2xl md:text-3xl font-semibold text-white mb-2 tracking-wide">
                {t(contactTranslations.hero.subtitle)}
              </p>
              <div className="w-32 h-1.5 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full"></div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg md:text-xl text-gray-100 max-w-5xl mx-auto leading-relaxed font-light px-4"
            >
              Have a question or need assistance? We're here to help with <span className="font-semibold text-yellow-400">personalized solutions</span>, <span className="font-semibold text-yellow-400">expert guidance</span>, and <span className="font-semibold text-yellow-400">responsive support</span>.
              Our team is ready to partner with you for logistics excellence.
            </motion.p>
          </motion.div>
        </div>

        {/* Modern Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 100L60 88.3C120 76.7 240 53.3 360 43.3C480 33.3 600 36.7 720 43.3C840 50 960 60 1080 63.3C1200 66.7 1320 63.3 1380 61.7L1440 60V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0Z" fill="url(#wave-gradient-contact)"/>
            <defs>
              <linearGradient id="wave-gradient-contact" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.1"/>
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <FaPhone size={24} />,
                title: t(contactTranslations.info.phone.title),
                details: ['Office: +91 700965959', 'Emergency: 24/7 Available'],
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: <FaEnvelope size={24} />,
                title: t(contactTranslations.info.email.title),
                details: ['info@krishnacare.com', 'support@krishnacare.com'],
                color: 'from-green-500 to-green-600'
              },
              {
                icon: <FaMapMarkerAlt size={24} />,
                title: t(contactTranslations.info.address.title),
                details: ['Krishna Care (Gondwara)', 'Ring Road No., Gondwara Raipur (C.G.)'],
                color: 'from-purple-500 to-purple-600'
              },
              {
                icon: <FaClock size={24} />,
                title: t(contactTranslations.info.hours.title),
                details: ['Business Hours: 9 AM - 6 PM', 'Emergency: 24/7 Available'],
                color: 'from-orange-500 to-orange-600'
              }
            ].map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <div className="p-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-full flex items-center justify-center text-white mx-auto mb-4`}>
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">{t(contactTranslations.form.title)}</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">{t(contactTranslations.form.name.label)} *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary-500"
                      placeholder={t(contactTranslations.form.name.placeholder)}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">{t(contactTranslations.form.email.label)} *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary-500"
                      placeholder={t(contactTranslations.form.email.placeholder)}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">{t(contactTranslations.form.phone.label)}</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary-500"
                      placeholder={t(contactTranslations.form.phone.placeholder)}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">{t(contactTranslations.form.subject.label)}</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary-500"
                      placeholder={t(contactTranslations.form.subject.placeholder)}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Service Interest</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary-500"
                  >
                    <option value="">Select a service</option>
                    <option value="transportation">{t(navigationTranslations.transportation)}</option>
                    <option value="warehousing">{t(navigationTranslations.warehousing)}</option>
                    <option value="consulting">{t(navigationTranslations.supplyChain)}</option>
                    <option value="integrated">{t(navigationTranslations.integrated)}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">{t(contactTranslations.form.message.label)} *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary-500"
                    placeholder={t(contactTranslations.form.message.placeholder)}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className="btn-primary w-full inline-flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <span>{t(contactTranslations.form.sending)}</span>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    </>
                  ) : (
                    <>
                      <span>{t(contactTranslations.form.submit)}</span>
                      <FaPaperPlane />
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">{t(contactTranslations.map.title)}</h2>
              <div className="rounded-2xl overflow-hidden shadow-lg h-96 mb-6 relative">
                <iframe
                  src="https://maps.google.com/maps?q=Plot+No.+12/4,+12/1,+Phase+no.+108,+Near+Lingraj+Cold+Storage,+Behind+Durga+Petrol+Pump,+Ring+Road,+Gondwara,+Raipur,+Chhattisgarh&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Krishna Care - Plot No. 12/4, 12/1, Phase no. 108, Near Lingraj Cold Storage, Gondwara Raipur"
                ></iframe>
                <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-lg shadow-md z-10">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Plot+No.+12%2F4%2C+12%2F1%2C+Phase+no.+108%2C+Near+Lingraj+Cold+Storage%2C+Behind+Durga+Petrol+Pump%2C+Ring+Road+No.%2C+Gondwara+Raipur+Chhattisgarh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center gap-2"
                  >
                    <FaMapMarkerAlt />
                    Open in Google Maps
                  </a>
                </div>
              </div>
              
              <div className="space-y-4">
                {offices.map((office, index) => (
                  <div key={index} className="card">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-semibold text-gray-900">{office.city}</h3>
                        {office.type && (
                          <span className="px-3 py-1 bg-yellow-400 text-gray-900 text-xs font-semibold rounded-full">
                            {office.type}
                          </span>
                        )}
                      </div>
                      <div className="space-y-2 text-gray-600">
                        <p className="flex items-start">
                          <FaMapMarkerAlt className="mt-1 mr-2 text-primary-600 flex-shrink-0" />
                          <span>{office.address}</span>
                        </p>
                        <p className="flex items-center">
                          <FaPhone className="mr-2 text-primary-600" />
                          <span>{office.phone}</span>
                        </p>
                        <p className="flex items-center">
                          <FaEnvelope className="mr-2 text-primary-600" />
                          <span>{office.email}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faq" className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Find answers to common questions</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
