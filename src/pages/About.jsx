import { FaUsers, FaTrophy, FaHeart, FaRocket, FaBuilding } from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { number: '25+', label: 'Years of Experience' },
    { number: '500+', label: 'Active Clients' },
    { number: '50K+', label: 'Monthly Deliveries' },
    { number: '200+', label: 'Team Members' },
  ];

  const values = [
    {
      icon: <FaTrophy size={40} />,
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of our operations, continuously improving our services.'
    },
    {
      icon: <FaHeart size={40} />,
      title: 'Customer First',
      description: 'Our clients\' success is our success. We go above and beyond to meet their needs.'
    },
    {
      icon: <FaRocket size={40} />,
      title: 'Innovation',
      description: 'We embrace technology and innovation to stay ahead in the logistics industry.'
    },
    {
      icon: <FaUsers size={40} />,
      title: 'Teamwork',
      description: 'Collaboration and respect form the foundation of our workplace culture.'
    }
  ];

  const team = [
    {
      name: 'Rajesh Kumar',
      position: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400',
      bio: '20+ years in logistics and supply chain management'
    },
    {
      name: 'Priya Sharma',
      position: 'COO',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
      bio: 'Expert in operational excellence and process optimization'
    },
    {
      name: 'Amit Patel',
      position: 'CTO',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400',
      bio: 'Technology innovator with focus on AI and IoT'
    },
    {
      name: 'Sneha Reddy',
      position: 'VP Sales',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
      bio: 'Building strong client relationships for 15 years'
    }
  ];

  const milestones = [
    {
      year: '2000',
      title: 'The Foundation',
      subtitle: 'Establishing Excellence in C&F',
      event: 'Krishna Care began its journey in Raipur, C.G., with a clear vision to deliver total service satisfaction through robust Carrying & Forwarding operations.',
      highlights: [
        'Established operations in Raipur, Chhattisgarh',
        'Focused on building strong foundations in logistics and distribution',
        'Committed to quality service and customer satisfaction from day one'
      ]
    },
    {
      year: '2005-2010',
      title: 'Strategic Diversification',
      subtitle: 'Multi-Sector Expertise',
      event: 'Strategically expanded across critical sectors, building specialized expertise and establishing ourselves as a trusted partner.',
      highlights: [
        'Diversified across Pesticides & Fertilizer, Pharma, and FMCG sectors',
        'Built specialized expertise for each division',
        'Established deep industry relationships and understanding of unique logistical demands'
      ]
    },
    {
      year: '2010-2015',
      title: 'Visionary Leadership',
      subtitle: 'Strategic Growth & Expansion',
      event: 'Under the dynamic leadership of Dr. Manoj Kumar Agrawal as Managing Director, Krishna Care entered a pivotal phase of strategic expansion.',
      highlights: [
        'Extended reach into Seed, Paint, and Electronics divisions',
        'Became a major market player through strategic alliances',
        'Vision to establish Krishna Care as "A Global C&F" company'
      ]
    },
    {
      year: '2015-2020',
      title: 'Infrastructure Excellence',
      subtitle: 'World-Class Facilities',
      event: 'Major investments in cutting-edge infrastructure to support our growing operations and commitment to excellence.',
      highlights: [
        'Developed 73,000+ sq/ft modern warehouses in Gondwara and Tatibhand, Raipur',
        '100,000 sq/ft fully computerized Head Office complex',
        'Integrated high-capacity lifts and conveyor systems',
        'Installed 100 KV solar power plant for sustainability'
      ]
    },
    {
      year: '2020-2025',
      title: 'Operational Excellence',
      subtitle: 'Security & Performance',
      event: 'Achieved industry-leading operational standards with consistent same-day dispatch rates exceeding 90%, reaching 100% in peak months.',
      highlights: [
        '24x7 CCTV surveillance and manned security',
        'Comprehensive fire safety systems',
        'Trusted by TATA Rallis, Wipro, Godrej, and FMC India Pvt. Ltd.',
        'Maintained unwavering commitment to product integrity'
      ]
    },
    {
      year: '2025 & Beyond',
      title: 'The Road Ahead',
      subtitle: 'Building Global Partnerships',
      event: 'Embarking on ambitious expansion plans with a proposed 100,000 sq/ft state-of-the-art warehouse.',
      highlights: [
        'Dedicated to employee empowerment culture',
        'Delivering unparalleled service to partners',
        'Striving towards becoming a truly global leader in C&F',
        'Building sustainable and healthier business relationships worldwide'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0f1729] via-[#1a2947] to-[#2d3f5f] text-white pt-40 pb-32">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-5xl mx-auto"
          >
            {/* Icon */}
            <div className="mb-8 flex justify-center">
              <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-2xl">
                <FaBuilding size={48} className="text-white" />
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              About <span className="text-yellow-400">Krishna Care</span>
            </h1>

            {/* Subtitle with underline */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-200 inline-block border-b-4 border-yellow-400 pb-2">
                Pioneering Excellence in C&F, Warehousing and Logistics
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              With <span className="text-yellow-400 font-semibold">25+ years of experience</span>, Krishna Care has established itself as a{' '}
              <span className="text-yellow-400 font-semibold">trusted leader</span> in warehousing, logistics and supply chain solutions.
              We combine <span className="text-yellow-400 font-semibold">cutting-edge technology</span>, <span className="text-yellow-400 font-semibold">innovation</span>,
              and unwavering commitment to deliver <span className="text-yellow-400 font-semibold">total service satisfaction</span> to our valued clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="grid lg:grid-cols-2 lg:grid-rows-1">
              {/* Left Side - Image */}
              <div className="relative h-[350px] lg:h-auto">
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80"
                  alt="Krishna Care Team Collaboration"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Gradient Overlay for smooth transition */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-[#c75d2c]/30"></div>
              </div>

              {/* Right Side - Content with Orange Background */}
              <div className="bg-gradient-to-br from-[#c75d2c] via-[#d97439] to-[#e89056] p-8 md:p-10 lg:p-12 flex flex-col justify-center min-h-[500px]">
                {/* Main Heading */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5">
                  Our Story
                </h2>

                {/* Content */}
                <div className="space-y-4 text-white text-sm md:text-base lg:text-lg leading-relaxed">
                  <p>
                    Every great journey begins with a clear vision. Two and a half decades ago, Krishna Care was founded by{' '}
                    <span className="font-semibold">Mr. Krishna Kumar Agrawal</span>, with the profound commitment to deliver nothing less than{' '}
                    <span className="font-semibold">'total service satisfaction.'</span>
                  </p>
                  <p>
                    From its inception, the company was envisioned not just as a logistics provider, but as a genuine partner,
                    dedicated to proactively identifying and meticulously fulfilling the evolving needs of its clients.
                  </p>
                  <p>
                    This foundational philosophy, deeply rooted in{' '}
                    <span className="font-semibold">quality</span> and{' '}
                    <span className="font-semibold">unwavering reliability</span>, quickly established Krishna Care as a trusted name.
                    Central to this ethos is the firm belief that our{' '}
                    <span className="font-semibold">employees are our greatest strength</span>.
                  </p>
                  <p>
                    Mr. Agrawal instilled a culture where{' '}
                    <span className="font-semibold">continuous involvement</span> and{' '}
                    <span className="font-semibold">hard work</span> of every team member are essential
                    to achieving our collective organizational objectives.
                  </p>
                  <p>
                    With this solid foundation, Krishna Care embarked on a path of{' '}
                    <span className="font-semibold">strategic growth</span>, laying the groundwork for the comprehensive{' '}
                    <span className="font-semibold">C&F and distribution powerhouse</span> it is today.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision, Mission & Values */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-gray-900"
            >
              Vision, Mission & Values
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                {/* Image */}
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop" 
                    alt="Vision"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Vision</h3>
                  <p className="text-gray-800 leading-relaxed">
                    To be the leader in C&F and logistics business across Chhattisgarh, 
                    consistently delivering superior value to stakeholders through highly 
                    engaged employees, with a strong commitment towards sustainability and our values.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                {/* Image */}
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1530099486328-e021101a494a?w=600&h=400&fit=crop" 
                    alt="Mission"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Mission</h3>
                  <p className="text-gray-800 leading-relaxed">
                    To enhance prosperity of our partners through quality logistics solutions 
                    with sustainable value for all stakeholders, ensuring excellence in every 
                    aspect of our operations.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Values Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                {/* Image */}
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop" 
                    alt="Values & Belief"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Values & Belief</h3>
                  <p className="text-gray-800 leading-relaxed">
                    The fundamental principle of economic activity is that no transaction 
                    you make will result in loss for anyone involved. Fair dealings and 
                    mutual growth drive every partnership.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Chairman & Managing Director - Side by Side */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold text-gray-900 mb-4">Our Leadership</h2>
              <p className="text-xl text-gray-600">Visionaries driving our mission forward</p>
            </motion.div>
          </div>

          {/* Side by Side Grid - Equal Heights */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto items-stretch">
            {/* Chairman */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                {/* Photo */}
                <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                  <div className="h-[500px] relative">
                    <img
                      src="/images/leadership/chairman.png"
                      alt="Mr. Krishna Kumar Agrawal - Chairman"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      onError={(e) => {
                        if (e.target.src.includes('.png')) {
                          e.target.src = '/images/leadership/chairman.jpg';
                        } else {
                          e.target.style.display = 'none';
                          e.target.nextElementSibling.style.display = 'flex';
                        }
                      }}
                    />
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary-900/30 to-transparent flex items-center justify-center" style={{display: 'none'}}>
                      <FaUsers size={80} className="text-white" />
                    </div>
                    {/* Overlay gradient - only at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent"></div>

                    {/* Name overlay on image */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                      <h3 className="text-3xl font-bold mb-1">Mr. Krishna Kumar Agrawal</h3>
                      <p className="text-lg font-semibold text-yellow-400">Chairman & Founder</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex-1 flex flex-col">
                  <div className="space-y-4 flex-1">
                    <p className="text-gray-700 leading-relaxed">
                      Mr. Krishna Kumar Agrawal is the esteemed Chairman and Founder of the Krishna Care group. As a foundational pillar of the organization, his leadership and vision have been the primary architects of the company's enduring success and sterling reputation in the logistics and C&F industry. With a career spanning over two decades, he has cultivated a business ethos centered on an unwavering commitment to excellence and stakeholder satisfaction.
                    </p>

                    <div>
                      <h4 className="text-xl font-bold text-primary-900 mb-3">Core Philosophy: The Pursuit of Total Service Satisfaction</h4>
                      <p className="text-gray-700 leading-relaxed mb-3">
                        At the heart of Mr. Agrawal's business philosophy is the principle of total service satisfaction. He views this not merely as a goal but as the absolute cornerstone of the company's quality service framework. This commitment goes beyond simply meeting contractual obligations; it is a proactive and dynamic process.
                      </p>
                      <ul className="space-y-2 ml-4">
                        <li className="text-gray-700 leading-relaxed flex items-start">
                          <span className="text-primary-600 mr-2 mt-1">•</span>
                          <span><strong>Anticipating Client Needs:</strong> He has instilled a culture of proactively identifying the evolving service-oriented needs of clients, often before they are explicitly stated.</span>
                        </li>
                        <li className="text-gray-700 leading-relaxed flex items-start">
                          <span className="text-primary-600 mr-2 mt-1">•</span>
                          <span><strong>Translating Needs into Quality:</strong> His leadership ensures that these identified needs are meticulously translated into tangible, high-quality service offerings that deliver measurable value and build long-term trust.</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-primary-900 mb-3">Leadership Style: Empowering People for Collective Success</h4>
                      <p className="text-gray-700 leading-relaxed">
                        Mr. Agrawal firmly believes that the organization's most valuable asset is its people. He plans to achieve his strategic goals by leveraging the strength of the company's employees. This employee-centric approach is fundamental to the company's operational model. He recognizes that the organization's success is a direct result of the hard work and continuous involvement of its team.
                      </p>
                      <p className="text-gray-700 leading-relaxed mt-3">
                        This leadership style has fostered a culture of ownership, responsibility, and mutual respect throughout the organization. By empowering his workforce, he ensures that every member of the Krishna Care team is aligned with and actively contributing to the overarching objective of achieving exceptional service quality.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-primary-900 mb-3">Legacy and Impact</h4>
                      <p className="text-gray-700 leading-relaxed">
                        Under Mr. Agrawal's guidance, Krishna Care has grown from a vision into a formidable enterprise with state-of-the-art infrastructure, a prestigious client portfolio, and a reputation for reliability. His foundational principles of prioritizing both customer satisfaction and employee empowerment remain the driving force behind the group's continued growth and market leadership. He has not just built a company; he has built a legacy of quality and integrity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Managing Director */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                {/* Photo */}
                <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                  <div className="h-[500px] relative">
                    <img
                      src="/images/leadership/managing-director.png"
                      alt="Dr. Manoj Kumar Agrawal - Managing Director"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      onError={(e) => {
                        if (e.target.src.includes('.png')) {
                          e.target.src = '/images/leadership/managing-director.jpg';
                        } else {
                          e.target.style.display = 'none';
                          e.target.nextElementSibling.style.display = 'flex';
                        }
                      }}
                    />
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-l from-primary-900/30 to-transparent flex items-center justify-center" style={{display: 'none'}}>
                      <FaRocket size={80} className="text-white" />
                    </div>
                    {/* Overlay gradient - only at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent"></div>

                    {/* Name overlay on image */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                      <h3 className="text-3xl font-bold mb-1">Dr. Manoj Kumar Agrawal</h3>
                      <p className="text-lg font-semibold text-yellow-400">Managing Director & Founding Member</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex-1 flex flex-col">
                  <div className="space-y-4 flex-1">
                    <p className="text-gray-700 leading-relaxed">
                      Dr. Manoj Kumar Agrawal, the Managing Director and a Founding Member of Krishna Care, is a pivotal force behind the company's strategic direction and sustained growth. His leadership is characterized by a deep understanding of complex supply chains and a forward-thinking approach to business development. Dr. Agrawal's insights have been instrumental in shaping Krishna Care into the industry leader it is today.
                    </p>

                    <div>
                      <h4 className="text-xl font-bold text-primary-900 mb-3">Deep Industry Expertise</h4>
                      <p className="text-gray-700 leading-relaxed mb-3">
                        Dr. Agrawal brings to the organization a wealth of specialized experience in the Pharmaceutical, Agriculture, and Paints industries, particularly within Clearing and Forwarding Agent (CFA) operations. This hands-on expertise allows him to understand the unique logistical challenges and regulatory nuances of each sector.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        This deep knowledge has enabled Krishna Care to offer highly tailored, efficient, and compliant solutions that meet the stringent demands of its diverse clientele. His sector-specific insights ensure that the company stays ahead of industry trends and regulatory requirements.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-primary-900 mb-3">The Architect of Growth</h4>
                      <p className="text-gray-700 leading-relaxed">
                        As the primary driver of the company's expansion, Dr. Agrawal is the prime mover behind various strategic alliances and ambitious growth plans. His dynamic leadership has been the catalyst for transforming the company into a major player within its key markets.
                      </p>
                      <p className="text-gray-700 leading-relaxed mt-3">
                        He excels at identifying new opportunities, forging powerful partnerships, and executing strategies that enhance market presence and drive operational excellence. His strategic acumen has positioned Krishna Care as a preferred logistics partner across multiple industry verticals.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-primary-900 mb-3">A Vision for the Future: "A Global C&F"</h4>
                      <p className="text-gray-700 leading-relaxed">
                        Dr. Agrawal's ultimate vision is to establish Krishna Care as "A Global C&F" company. This ambitious goal is not merely about expanding the company's geographical footprint. It is rooted in a profound commitment to fostering healthier and more sustainable business partnerships worldwide.
                      </p>
                      <p className="text-gray-700 leading-relaxed mt-3">
                        He aims to build a global logistics network that operates on principles of integrity, transparency, and mutual growth, setting a new standard for what a modern, responsible C&F partner can be. His leadership continues to steer the company towards this inspiring future, ensuring Krishna Care remains at the forefront of the logistics industry.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Management Team</h2>
            <p className="text-xl text-gray-600">Meet the people driving our success</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card group"
              >
                <div className="overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline - Premium Design */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-primary-100/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-yellow-100/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container-custom relative z-10">
          {/* Enhanced Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              viewport={{ once: true }}
              className="inline-block mb-6"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary-400/20 blur-xl rounded-full"></div>
                <span className="relative inline-flex items-center gap-2 text-primary-700 font-bold text-sm uppercase tracking-widest bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border-2 border-primary-200 shadow-lg">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                  </svg>
                  25 Years of Excellence
                </span>
              </div>
            </motion.div>

            <h2 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-900 via-primary-700 to-blue-600 mb-8 leading-tight">
              Our Journey
            </h2>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "6rem" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="h-2 bg-gradient-to-r from-primary-600 via-yellow-400 to-primary-600 mx-auto rounded-full mb-8"
            ></motion.div>

            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              A remarkable story of growth, innovation, and unwavering commitment to excellence
            </p>
          </motion.div>

          {/* Timeline Container */}
          <div className="relative max-w-7xl mx-auto">
            {/* Animated Central Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 transform -translate-x-1/2 hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-300 to-transparent opacity-50"></div>
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="absolute top-0 left-0 right-0 bg-gradient-to-b from-primary-600 via-yellow-400 to-primary-600"
              ></motion.div>
            </div>

            {/* Timeline Items */}
            <div className="space-y-24">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 50
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col gap-8 lg:gap-0`}
                >
                  {/* Year Circle - Center (Between Cards) */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.2 + 0.3,
                      type: "spring"
                    }}
                    viewport={{ once: true }}
                    className="hidden lg:flex lg:w-40 flex-shrink-0 justify-center items-center z-20"
                  >
                    <div className="relative">
                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-yellow-400 rounded-full blur-2xl opacity-60 animate-pulse"></div>

                      {/* Circle */}
                      <div className="relative w-32 h-32 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 rounded-full shadow-2xl flex items-center justify-center ring-8 ring-white">
                        <div className="text-center">
                          <div className="text-white font-bold text-lg leading-tight">{milestone.year}</div>
                        </div>

                        {/* Animated Ring */}
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0 rounded-full"
                          style={{
                            background: 'conic-gradient(from 0deg, transparent 0%, rgba(250, 204, 21, 0.4) 50%, transparent 100%)'
                          }}
                        ></motion.div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Content Card */}
                  <div className="w-full lg:w-[calc(50%-80px)]">
                    <motion.div
                      whileHover={{ scale: 1.03, rotateY: 2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="group relative"
                    >
                      {/* Card Background Glow */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-yellow-400 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>

                      {/* Card */}
                      <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 hover:border-primary-200 transition-all duration-500">
                        {/* Card Header */}
                        <div className="relative h-3 bg-gradient-to-r from-primary-600 via-yellow-400 to-primary-600 overflow-hidden">
                          <motion.div
                            animate={{ x: ["0%", "100%"] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          ></motion.div>
                        </div>

                        {/* Year Badge for Mobile */}
                        <div className="lg:hidden bg-gradient-to-r from-primary-600 to-primary-700 px-6 py-4">
                          <h3 className="text-2xl font-bold text-white">{milestone.year}</h3>
                        </div>

                        <div className="p-8 lg:p-10">
                          {/* Icon */}
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                            className="w-16 h-16 bg-gradient-to-br from-primary-100 to-yellow-50 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow"
                          >
                            <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </motion.div>

                          {/* Title */}
                          <h4 className="text-3xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                            {milestone.title}
                          </h4>

                          <p className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-yellow-600 mb-6">
                            {milestone.subtitle}
                          </p>

                          {/* Description */}
                          <p className="text-gray-700 text-lg leading-relaxed mb-8">
                            {milestone.event}
                          </p>

                          {/* Highlights */}
                          {milestone.highlights && (
                            <div className="space-y-4">
                              {milestone.highlights.map((highlight, idx) => (
                                <motion.div
                                  key={idx}
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                                  viewport={{ once: true }}
                                  className="flex items-start gap-4 group/highlight"
                                >
                                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center shadow-md group-hover/highlight:scale-110 transition-transform">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                    </svg>
                                  </div>
                                  <span className="flex-1 text-gray-600 leading-relaxed group-hover/highlight:text-gray-900 transition-colors">
                                    {highlight}
                                  </span>
                                </motion.div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Closing Statement */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-32"
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-yellow-400 blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-primary-600 via-primary-700 to-primary-900 text-white px-12 py-6 rounded-2xl shadow-2xl">
                <div className="flex items-center gap-4">
                  <motion.svg
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="w-8 h-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </motion.svg>
                  <span className="text-2xl font-bold">The Journey Continues...</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
