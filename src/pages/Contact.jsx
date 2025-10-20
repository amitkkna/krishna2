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
      <section className="gradient-bg text-white pt-40 pb-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t(contactTranslations.hero.title)} <span className="text-yellow-400">{t(contactTranslations.hero.touch)}</span>
            </h1>
            <p className="text-lg text-gray-200">
              {t(contactTranslations.hero.subtitle)}
            </p>
          </motion.div>
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

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">{t(contactTranslations.map.title)}</h2>
              <div className="bg-gray-300 rounded-2xl h-96 mb-6 flex items-center justify-center">
                <p className="text-gray-600">Map Integration (Google Maps/Mapbox)</p>
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
