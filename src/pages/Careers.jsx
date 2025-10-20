import { useState } from 'react';
import { FaBriefcase, FaMapMarkerAlt, FaClock, FaArrowRight, FaUsers, FaHeart, FaTrophy } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Careers = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const departments = ['all', 'Operations', 'Technology', 'Sales', 'Finance', 'HR'];

  const benefits = [
    {
      icon: <FaHeart size={32} />,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance for you and your family'
    },
    {
      icon: <FaTrophy size={32} />,
      title: 'Career Growth',
      description: 'Continuous learning and development opportunities'
    },
    {
      icon: <FaUsers size={32} />,
      title: 'Great Culture',
      description: 'Collaborative and inclusive work environment'
    }
  ];

  const openPositions = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      department: 'Technology',
      location: 'Mumbai, India',
      type: 'Full-time',
      description: 'Build and maintain our cutting-edge logistics platform using React, Node.js, and cloud technologies.',
      requirements: ['5+ years of experience', 'React.js expertise', 'Cloud platform knowledge']
    },
    {
      id: 2,
      title: 'Operations Manager',
      department: 'Operations',
      location: 'Delhi, India',
      type: 'Full-time',
      description: 'Oversee daily logistics operations and ensure smooth execution of transportation and warehousing activities.',
      requirements: ['7+ years in logistics', 'Team management experience', 'Process optimization skills']
    },
    {
      id: 3,
      title: 'Data Analyst',
      department: 'Technology',
      location: 'Bangalore, India',
      type: 'Full-time',
      description: 'Analyze supply chain data to derive insights and support decision-making across the organization.',
      requirements: ['3+ years experience', 'SQL and Python proficiency', 'Data visualization skills']
    },
    {
      id: 4,
      title: 'Sales Executive',
      department: 'Sales',
      location: 'Pune, India',
      type: 'Full-time',
      description: 'Build relationships with potential clients and grow our customer base in assigned territories.',
      requirements: ['2+ years in B2B sales', 'Excellent communication', 'Self-motivated']
    },
    {
      id: 5,
      title: 'Warehouse Supervisor',
      department: 'Operations',
      location: 'Chennai, India',
      type: 'Full-time',
      description: 'Manage warehouse operations, inventory control, and team supervision at our distribution center.',
      requirements: ['5+ years warehouse experience', 'WMS knowledge', 'Leadership skills']
    },
    {
      id: 6,
      title: 'HR Business Partner',
      department: 'HR',
      location: 'Mumbai, India',
      type: 'Full-time',
      description: 'Partner with business leaders to align HR strategies with business objectives and drive organizational excellence.',
      requirements: ['6+ years in HR', 'Business partnering experience', 'Change management skills']
    }
  ];

  const filteredPositions = selectedDepartment === 'all' 
    ? openPositions 
    : openPositions.filter(pos => pos.department === selectedDepartment);

  const [applicationData, setApplicationData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    resume: null,
    coverLetter: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Application submitted successfully!');
  };

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
              Join Our <span className="text-yellow-300">Team</span>
            </h1>
            <p className="text-xl text-blue-100">
              Be part of a dynamic team that's shaping the future of logistics in India
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Krishna Care?</h2>
            <p className="text-xl text-gray-600">
              We offer more than just a job—we offer a career with purpose
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, index) => (
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
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary-600 mb-2">200+</div>
                <div className="text-gray-600">Team Members</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-600 mb-2">15+</div>
                <div className="text-gray-600">Years Growing</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-600 mb-2">10+</div>
                <div className="text-gray-600">Office Locations</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-600 mb-2">4.5/5</div>
                <div className="text-gray-600">Employee Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600">Find your perfect role and apply today</p>
          </div>

          {/* Department Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {departments.map(dept => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  selectedDepartment === dept
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {dept.charAt(0).toUpperCase() + dept.slice(1)}
              </button>
            ))}
          </div>

          {/* Job Listings */}
          <div className="space-y-6">
            {filteredPositions.map((position, index) => (
              <motion.div
                key={position.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card hover:shadow-xl transition-shadow"
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
                        <div className="flex items-center space-x-2">
                          <FaBriefcase />
                          <span>{position.department}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <FaMapMarkerAlt />
                          <span>{position.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <FaClock />
                          <span>{position.type}</span>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">{position.description}</p>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                        <ul className="space-y-1">
                          {position.requirements.map((req, idx) => (
                            <li key={idx} className="text-gray-600 flex items-start">
                              <span className="mr-2">•</span>
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="lg:ml-8">
                      <a 
                        href="#apply"
                        className="btn-primary inline-flex items-center space-x-2 w-full lg:w-auto justify-center"
                      >
                        <span>Apply Now</span>
                        <FaArrowRight />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Apply Now</h2>
            <p className="text-xl text-gray-600">
              Fill out the form below and we'll get back to you soon
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Full Name *</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary-500"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Email *</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary-500"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Phone *</label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary-500"
                  placeholder="+91 12345 67890"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Position *</label>
                <select
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary-500"
                >
                  <option value="">Select a position</option>
                  {openPositions.map(pos => (
                    <option key={pos.id} value={pos.title}>{pos.title}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Resume/CV *</label>
              <input
                type="file"
                required
                accept=".pdf,.doc,.docx"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary-500"
              />
              <p className="text-sm text-gray-500 mt-1">PDF, DOC, or DOCX (Max 5MB)</p>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Cover Letter</label>
              <textarea
                rows="6"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary-500"
                placeholder="Tell us why you'd be a great fit..."
              ></textarea>
            </div>

            <button type="submit" className="btn-primary w-full">
              Submit Application
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Careers;
