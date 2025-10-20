import { FaUsers, FaTrophy, FaHeart, FaRocket, FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { number: '15+', label: 'Years of Experience' },
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
      bio: '20+ years in logistics and supply chain management',
      linkedin: '#'
    },
    {
      name: 'Priya Sharma',
      position: 'COO',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
      bio: 'Expert in operational excellence and process optimization',
      linkedin: '#'
    },
    {
      name: 'Amit Patel',
      position: 'CTO',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400',
      bio: 'Technology innovator with focus on AI and IoT',
      linkedin: '#'
    },
    {
      name: 'Sneha Reddy',
      position: 'VP Sales',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
      bio: 'Building strong client relationships for 15 years',
      linkedin: '#'
    }
  ];

  const milestones = [
    {
      year: '1990s',
      title: 'The Formative Decades',
      subtitle: 'Diversification & Expertise',
      event: 'Our journey began over 25 years ago in Raipur, C.G., focusing on establishing robust Clearing & Forwarding operations.',
      highlights: [
        'Strategically diversified across Pesticides & Fertilizer, Pharma, and FMCG sectors',
        'Built specialized expertise for each division',
        'Established deep industry relationships and understanding of unique logistical demands'
      ]
    },
    {
      year: 'Mid 2000s',
      title: 'Strategic Expansion',
      subtitle: 'Visionary Leadership',
      event: 'The dynamic leadership of Dr. Manoj Kumar Agrawal as Managing Director marked a pivotal phase in our expansion.',
      highlights: [
        'Extended reach into Seed, Paint, and Electronics divisions',
        'Became a major market player through strategic alliances',
        'Vision to establish Krishna Care as "A Global C&F" company'
      ]
    },
    {
      year: '2010s',
      title: 'Infrastructure Excellence',
      subtitle: 'World-Class Facilities',
      event: 'Parallel to market growth, we continually invested in cutting-edge infrastructure.',
      highlights: [
        'Developed 73,000+ sq/ft modern warehouses in Gondwara and Tatibhand, Raipur',
        '100,000 sq/ft fully computerized Head Office complex',
        'Integrated high-capacity lifts and conveyor systems',
        'Installed 100 KV solar power plant for sustainability'
      ]
    },
    {
      year: '2020s',
      title: 'Operational Excellence',
      subtitle: 'Security & Performance',
      event: 'Achieved consistent same-day dispatch rates exceeding 90%, reaching 100% in peak months.',
      highlights: [
        '24x7 CCTV surveillance and manned security',
        'Comprehensive fire safety systems',
        'Trusted by TATA Rallis, Wipro, Godrej, and FMC India Pvt. Ltd.',
        'Maintained unwavering commitment to product integrity'
      ]
    },
    {
      year: 'Present',
      title: 'The Road Ahead',
      subtitle: 'Building Global Partnerships',
      event: 'Planned expansion of another 100,000 sq/ft state-of-the-art warehouse.',
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
      <section className="gradient-bg text-white pt-40 pb-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-yellow-400">Krishna Care</span>
            </h1>
            <p className="text-lg text-gray-200">
              Pioneering the future of logistics with technology, innovation, and unwavering commitment to excellence
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  Every great journey begins with a clear vision. Two and a half decades ago, Krishna Care was founded by
                  <span className="font-semibold text-primary-700"> Mr. Krishna Kumar Agrawal</span>, with the profound commitment to deliver nothing less than
                  <span className="font-semibold">'total service satisfaction.'</span> From its inception, the company was envisioned not just as a logistics provider,
                  but as a genuine partner, dedicated to proactively identifying and meticulously fulfilling the evolving needs of its clients.
                </p>
                <p>
                  This foundational philosophy, deeply rooted in quality and unwavering reliability, quickly established Krishna Care as a trusted name.
                  Central to this ethos is the firm belief that our employees are our greatest strength.
                </p>
                <p>
                  Mr. Agrawal instilled a culture where continuous involvement and hard work of every team member are not just valued, but are essential
                  to achieving our collective organizational objectives. This people-first approach has fostered a dedicated workforce that carries the
                  company's commitment to excellence in every task.
                </p>
                <p>
                  With this solid foundation, Krishna Care embarked on a path of strategic growth, laying the groundwork for the comprehensive C&F and
                  distribution powerhouse it is today.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800" 
                alt="Our Team" 
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
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
                  <div className="h-96 relative">
                    <img
                      src="/images/leadership/chairman.png"
                      alt="Mr. Krishna Kumar Agrawal - Chairman"
                      className="absolute inset-0 w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                      style={{objectPosition: 'center center'}}
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
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                    {/* Name overlay on image */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
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
                  <div className="h-96 relative">
                    <img
                      src="/images/leadership/managing-director.png"
                      alt="Dr. Manoj Kumar Agrawal - Managing Director"
                      className="absolute inset-0 w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                      style={{objectPosition: 'center center'}}
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
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                    {/* Name overlay on image */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
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
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  <a 
                    href={member.linkedin} 
                    className="inline-flex items-center justify-center w-10 h-10 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Key milestones in our growth story</p>
          </div>
          <div className="max-w-5xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-6 mb-10 last:mb-0"
              >
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-2xl flex items-center justify-center font-bold shadow-lg text-sm text-center p-2">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-1 bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                  {/* Title and Subtitle */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-primary-900 mb-1">{milestone.title}</h3>
                    <p className="text-lg font-semibold text-primary-600">{milestone.subtitle}</p>
                  </div>

                  {/* Event Description */}
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    {milestone.event}
                  </p>

                  {/* Highlights */}
                  {milestone.highlights && milestone.highlights.length > 0 && (
                    <ul className="space-y-2">
                      {milestone.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start text-gray-600">
                          <span className="text-primary-600 mr-3 mt-1 flex-shrink-0">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </span>
                          <span className="leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
