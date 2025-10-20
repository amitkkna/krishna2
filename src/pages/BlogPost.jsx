import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaCalendar, FaUser, FaClock, FaShare } from 'react-icons/fa';
import { motion } from 'framer-motion';

const BlogPost = () => {
  const { postId } = useParams();

  // Blog posts database
  const blogPosts = {
    '1': {
      id: '1',
      title: 'The Future of Logistics: AI and Automation',
      category: 'Technology',
      date: 'Oct 5, 2025',
      author: 'Amit Patel',
      authorBio: 'Chief Technology Officer at Krishna Care',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200',
      content: `
        <p class="text-lg leading-relaxed mb-6">
          The logistics industry is on the cusp of a major transformation, driven by advances in artificial intelligence and automation. These technologies are not just improving efficiency—they're fundamentally changing how goods move around the world.
        </p>

        <h2 class="text-3xl font-bold text-gray-900 mt-8 mb-4">The Current State of AI in Logistics</h2>
        <p class="leading-relaxed mb-6">
          Today's logistics operations generate massive amounts of data from various sources: GPS trackers, warehouse sensors, customer orders, and more. AI systems can analyze this data in real-time to make intelligent decisions that would be impossible for humans to process at the same speed and scale.
        </p>

        <h3 class="text-2xl font-semibold text-gray-900 mt-6 mb-3">Key Applications</h3>
        <ul class="list-disc list-inside space-y-2 mb-6 text-gray-700">
          <li>Predictive analytics for demand forecasting</li>
          <li>Dynamic route optimization based on real-time conditions</li>
          <li>Automated warehouse operations with robotic systems</li>
          <li>Smart inventory management with computer vision</li>
          <li>Natural language processing for customer service</li>
        </ul>

        <h2 class="text-3xl font-bold text-gray-900 mt-8 mb-4">Impact on Supply Chain Efficiency</h2>
        <p class="leading-relaxed mb-6">
          Companies implementing AI-driven logistics solutions are seeing remarkable improvements. Route optimization algorithms can reduce fuel consumption by 15-25%, while predictive maintenance systems can decrease vehicle downtime by up to 30%.
        </p>

        <blockquote class="border-l-4 border-primary-600 pl-6 my-8 italic text-xl text-gray-700">
          "AI is not replacing human decision-making in logistics—it's enhancing it. The combination of human expertise and AI-powered insights creates a powerful synergy."
        </blockquote>

        <h2 class="text-3xl font-bold text-gray-900 mt-8 mb-4">Challenges and Considerations</h2>
        <p class="leading-relaxed mb-6">
          While the benefits are clear, implementing AI in logistics comes with challenges. Data quality is paramount—AI systems are only as good as the data they're trained on. There's also the need for significant investment in infrastructure and the challenge of integrating new systems with legacy operations.
        </p>

        <h2 class="text-3xl font-bold text-gray-900 mt-8 mb-4">Looking Ahead</h2>
        <p class="leading-relaxed mb-6">
          The future of logistics will be increasingly automated. Autonomous vehicles, drone deliveries, and fully automated warehouses are no longer science fiction—they're becoming reality. At Krishna Care, we're investing heavily in these technologies to stay ahead of the curve and provide our clients with the best possible service.
        </p>

        <p class="leading-relaxed mb-6">
          The key to success will be balancing automation with the human touch. Technology should enhance, not replace, the expertise and relationships that have always been at the heart of great logistics service.
        </p>
      `
    },
    '2': {
      id: '2',
      title: '5 Ways to Optimize Your Supply Chain',
      category: 'Insights',
      date: 'Oct 1, 2025',
      author: 'Priya Sharma',
      authorBio: 'Supply Chain Director at Krishna Care',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200',
      content: `
        <p class="text-lg leading-relaxed mb-6">
          In today's competitive business environment, an optimized supply chain can be the difference between success and failure. Here are five proven strategies to enhance your supply chain efficiency and reduce costs.
        </p>

        <h2 class="text-3xl font-bold text-gray-900 mt-8 mb-4">1. Implement Real-Time Tracking</h2>
        <p class="leading-relaxed mb-6">
          Visibility is crucial in modern supply chains. By implementing GPS tracking and IoT sensors, you can monitor shipments in real-time, predict delays, and proactively communicate with customers. This level of transparency builds trust and allows for better decision-making.
        </p>

        <h2 class="text-3xl font-bold text-gray-900 mt-8 mb-4">2. Leverage Data Analytics</h2>
        <p class="leading-relaxed mb-6">
          Your supply chain generates vast amounts of data daily. Use analytics tools to identify patterns, forecast demand, and optimize inventory levels. Data-driven insights can reveal inefficiencies you didn't know existed.
        </p>

        <h2 class="text-3xl font-bold text-gray-900 mt-8 mb-4">3. Build Strong Supplier Relationships</h2>
        <p class="leading-relaxed mb-6">
          Your supply chain is only as strong as your weakest link. Invest time in building collaborative relationships with suppliers. Regular communication, fair terms, and mutual respect lead to better service and more flexibility during challenging times.
        </p>

        <blockquote class="border-l-4 border-primary-600 pl-6 my-8 italic text-xl text-gray-700">
          "A well-optimized supply chain doesn't just save money—it creates competitive advantages that drive business growth."
        </blockquote>

        <h2 class="text-3xl font-bold text-gray-900 mt-8 mb-4">4. Automate Where Possible</h2>
        <p class="leading-relaxed mb-6">
          Automation reduces human error and speeds up processes. From automated warehouse systems to AI-powered demand forecasting, technology can handle repetitive tasks while your team focuses on strategic decisions.
        </p>

        <h2 class="text-3xl font-bold text-gray-900 mt-8 mb-4">5. Regularly Review and Adapt</h2>
        <p class="leading-relaxed mb-6">
          Supply chain optimization is not a one-time project. Conduct regular reviews of your processes, stay updated on industry trends, and be willing to adapt. The most successful companies are those that continuously improve their operations.
        </p>
      `
    },
    '3': {
      id: '3',
      title: 'Sustainable Logistics: Our Commitment',
      category: 'Sustainability',
      date: 'Sep 28, 2025',
      author: 'Rajesh Kumar',
      authorBio: 'Sustainability Manager at Krishna Care',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200',
      content: `
        <p class="text-lg leading-relaxed mb-6">
          At Krishna Care, we believe that business success and environmental responsibility go hand in hand. Our commitment to sustainable logistics is not just about compliance—it's about creating a better future for the next generation.
        </p>

        <h2 class="text-3xl font-bold text-gray-900 mt-8 mb-4">Our Green Initiatives</h2>
        <p class="leading-relaxed mb-6">
          We've implemented a comprehensive sustainability program that touches every aspect of our operations. From fuel-efficient vehicles to solar-powered warehouses, we're constantly finding new ways to reduce our environmental footprint.
        </p>

        <h3 class="text-2xl font-semibold text-gray-900 mt-6 mb-3">Key Achievements</h3>
        <ul class="list-disc list-inside space-y-2 mb-6 text-gray-700">
          <li>25% reduction in carbon emissions over the past two years</li>
          <li>100% of new vehicle purchases are BS-VI compliant or electric</li>
          <li>Solar panels installed on 60% of our warehouse facilities</li>
          <li>Zero-waste packaging program with recyclable materials</li>
          <li>Partnership with environmental organizations for tree plantation drives</li>
        </ul>

        <h2 class="text-3xl font-bold text-gray-900 mt-8 mb-4">Route Optimization for Sustainability</h2>
        <p class="leading-relaxed mb-6">
          One of our most effective strategies is using AI-powered route optimization. By reducing unnecessary mileage, we not only save on fuel costs but also significantly reduce emissions. Our smart routing system has helped us cut fuel consumption by 18% while improving delivery times.
        </p>

        <blockquote class="border-l-4 border-primary-600 pl-6 my-8 italic text-xl text-gray-700">
          "Sustainability isn't a cost—it's an investment in our future and a responsibility we owe to our community."
        </blockquote>

        <h2 class="text-3xl font-bold text-gray-900 mt-8 mb-4">Looking Forward</h2>
        <p class="leading-relaxed mb-6">
          We're committed to achieving carbon neutrality by 2030. This ambitious goal drives us to innovate constantly and challenge the status quo. Together with our partners and customers, we're building a greener, more sustainable logistics industry.
        </p>
      `
    },
    '4': {
      id: '4',
      title: 'Case Study: Transforming XYZ Manufacturing',
      category: 'Case Studies',
      date: 'Sep 25, 2025',
      author: 'Sneha Reddy',
      authorBio: 'Account Manager at Krishna Care',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200',
      content: `
        <p class="text-lg leading-relaxed mb-6">
          When XYZ Manufacturing approached us, they were facing significant challenges with their distribution network. High costs, delayed deliveries, and inventory management issues were impacting their bottom line. Here's how we helped them transform their operations.
        </p>

        <h2 class="text-3xl font-bold text-gray-900 mt-8 mb-4">The Challenge</h2>
        <p class="leading-relaxed mb-6">
          XYZ Manufacturing, a leading producer of consumer electronics, was struggling with their logistics operations. Their distribution costs had increased by 40% over three years, while delivery performance declined. They needed a partner who could deliver comprehensive solutions quickly.
        </p>

        <h3 class="text-2xl font-semibold text-gray-900 mt-6 mb-3">Key Issues</h3>
        <ul class="list-disc list-inside space-y-2 mb-6 text-gray-700">
          <li>Multiple small shipments increasing transportation costs</li>
          <li>Poor warehouse utilization leading to storage inefficiencies</li>
          <li>Lack of real-time visibility into inventory and shipments</li>
          <li>Frequent stockouts at retail locations</li>
          <li>High damage rates during transportation</li>
        </ul>

        <h2 class="text-3xl font-bold text-gray-900 mt-8 mb-4">Our Solution</h2>
        <p class="leading-relaxed mb-6">
          We conducted a comprehensive audit of their supply chain and implemented a multi-phase transformation program. Our integrated approach combined warehousing, transportation, and technology solutions.
        </p>

        <h2 class="text-3xl font-bold text-gray-900 mt-8 mb-4">Implementation & Results</h2>
        <p class="leading-relaxed mb-6">
          Within six months of implementation, XYZ Manufacturing saw dramatic improvements across all key metrics:
        </p>

        <ul class="list-disc list-inside space-y-2 mb-6 text-gray-700">
          <li><strong>30% reduction</strong> in overall logistics costs</li>
          <li><strong>98% on-time delivery</strong> rate (up from 78%)</li>
          <li><strong>45% decrease</strong> in damage rates</li>
          <li><strong>60% improvement</strong> in warehouse space utilization</li>
          <li><strong>Real-time visibility</strong> across the entire supply chain</li>
        </ul>

        <blockquote class="border-l-4 border-primary-600 pl-6 my-8 italic text-xl text-gray-700">
          "Krishna Care didn't just solve our immediate problems—they helped us build a logistics system that will support our growth for years to come." - CEO, XYZ Manufacturing
        </blockquote>

        <h2 class="text-3xl font-bold text-gray-900 mt-8 mb-4">Key Takeaways</h2>
        <p class="leading-relaxed mb-6">
          This case study demonstrates the importance of a holistic approach to logistics transformation. By addressing technology, processes, and partnerships simultaneously, we were able to deliver results that exceeded expectations.
        </p>
      `
    },
    '5': {
      id: '5',
      title: 'IoT in Logistics: Real-Time Visibility',
      category: 'Technology',
      date: 'Sep 20, 2025',
      author: 'Amit Patel',
      authorBio: 'Chief Technology Officer at Krishna Care',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=1200',
      content: `
        <p class="text-lg leading-relaxed mb-6">
          The Internet of Things (IoT) is revolutionizing logistics by providing unprecedented visibility into supply chain operations. Smart sensors and connected devices are transforming how we track, monitor, and manage goods in transit.
        </p>

        <h2 class="text-3xl font-bold text-gray-900 mt-8 mb-4">What is IoT in Logistics?</h2>
        <p class="leading-relaxed mb-6">
          IoT in logistics refers to the network of physical devices embedded with sensors, software, and connectivity that enable them to collect and exchange data. These devices can track location, temperature, humidity, shock, and other critical parameters throughout the supply chain.
        </p>

        <h3 class="text-2xl font-semibold text-gray-900 mt-6 mb-3">Key IoT Applications</h3>
        <ul class="list-disc list-inside space-y-2 mb-6 text-gray-700">
          <li>Real-time location tracking with GPS sensors</li>
          <li>Temperature monitoring for sensitive goods</li>
          <li>Predictive maintenance for vehicles and equipment</li>
          <li>Smart warehouse management with RFID tags</li>
          <li>Automated inventory counting and management</li>
        </ul>

        <h2 class="text-3xl font-bold text-gray-900 mt-8 mb-4">Benefits of IoT Implementation</h2>
        <p class="leading-relaxed mb-6">
          Companies implementing IoT solutions see significant improvements in operational efficiency. Real-time data enables proactive problem-solving, reduces losses, and improves customer satisfaction through better communication and reliability.
        </p>

        <blockquote class="border-l-4 border-primary-600 pl-6 my-8 italic text-xl text-gray-700">
          "IoT technology has given us the ability to see and respond to issues before they become problems. It's like having a crystal ball for our supply chain."
        </blockquote>

        <h2 class="text-3xl font-bold text-gray-900 mt-8 mb-4">Challenges and Solutions</h2>
        <p class="leading-relaxed mb-6">
          While IoT offers tremendous benefits, implementation comes with challenges including data security, device management, and integration with existing systems. At Krishna Care, we've developed robust protocols to address these concerns while maximizing the value of IoT technology.
        </p>

        <h2 class="text-3xl font-bold text-gray-900 mt-8 mb-4">The Future is Connected</h2>
        <p class="leading-relaxed mb-6">
          As 5G networks expand and sensor costs decrease, IoT adoption in logistics will accelerate. We're investing in this technology to ensure our clients benefit from the most advanced supply chain visibility available.
        </p>
      `
    },
    '6': {
      id: '6',
      title: 'The Rise of E-Commerce Logistics in India',
      category: 'Industry News',
      date: 'Sep 15, 2025',
      author: 'Priya Sharma',
      authorBio: 'Supply Chain Director at Krishna Care',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200',
      content: `
        <p class="text-lg leading-relaxed mb-6">
          India's e-commerce sector is experiencing explosive growth, and with it comes unprecedented challenges and opportunities in logistics. Understanding this landscape is crucial for businesses looking to succeed in the digital economy.
        </p>

        <h2 class="text-3xl font-bold text-gray-900 mt-8 mb-4">The E-Commerce Boom</h2>
        <p class="leading-relaxed mb-6">
          India's e-commerce market is projected to reach $200 billion by 2026. This growth is driven by increasing internet penetration, smartphone adoption, and changing consumer preferences. But rapid growth brings logistical challenges that require innovative solutions.
        </p>

        <h3 class="text-2xl font-semibold text-gray-900 mt-6 mb-3">Key Market Trends</h3>
        <ul class="list-disc list-inside space-y-2 mb-6 text-gray-700">
          <li>Tier 2 and Tier 3 cities driving significant growth</li>
          <li>Increasing demand for same-day and next-day delivery</li>
          <li>Rise of hyperlocal delivery services</li>
          <li>Growing focus on reverse logistics and returns management</li>
          <li>Sustainability becoming a key differentiator</li>
        </ul>

        <h2 class="text-3xl font-bold text-gray-900 mt-8 mb-4">Unique Indian Challenges</h2>
        <p class="leading-relaxed mb-6">
          India's diverse geography, varying infrastructure quality, and complex address systems create unique challenges for e-commerce logistics. Success requires local expertise, flexible operations, and technology-enabled solutions.
        </p>

        <blockquote class="border-l-4 border-primary-600 pl-6 my-8 italic text-xl text-gray-700">
          "E-commerce logistics in India isn't just about speed—it's about reliability, flexibility, and understanding the unique needs of different regions."
        </blockquote>

        <h2 class="text-3xl font-bold text-gray-900 mt-8 mb-4">Krishna Care's E-Commerce Solutions</h2>
        <p class="leading-relaxed mb-6">
          We've developed specialized e-commerce logistics solutions that address these challenges. Our network spans across Chhattisgarh with facilities strategically located for optimal coverage and quick delivery times.
        </p>

        <h2 class="text-3xl font-bold text-gray-900 mt-8 mb-4">Looking Ahead</h2>
        <p class="leading-relaxed mb-6">
          The future of e-commerce logistics in India is bright. As infrastructure improves and technology evolves, we'll see even faster deliveries, better tracking, and more sustainable operations. Krishna Care is committed to being at the forefront of this evolution.
        </p>
      `
    }
  };

  // Get the post based on postId, or show a default
  const post = blogPosts[postId] || blogPosts['1'];

  const relatedPosts = [
    {
      id: '5',
      title: 'IoT in Logistics: Real-Time Visibility',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=400'
    },
    {
      id: '2',
      title: '5 Ways to Optimize Your Supply Chain',
      category: 'Insights',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="relative h-96 bg-gray-900">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover opacity-70"
        />
      </div>

      {/* Article Content */}
      <article className="container-custom max-w-4xl -mt-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-2xl p-8 md:p-12"
        >
          {/* Back Button */}
          <Link 
            to="/blog" 
            className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 mb-6 transition-colors"
          >
            <FaArrowLeft />
            <span>Back to Blog</span>
          </Link>

          {/* Category Badge */}
          <span className="inline-block text-xs font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full mb-4">
            {post.category}
          </span>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 pb-8 border-b">
            <div className="flex items-center space-x-2">
              <FaUser />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaCalendar />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaClock />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Content */}
          <div 
            className="prose prose-lg max-w-none text-gray-700"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Author Bio */}
          <div className="mt-12 pt-8 border-t">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                {post.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg">{post.author}</h3>
                <p className="text-gray-600">{post.authorBio}</p>
              </div>
            </div>
          </div>

          {/* Share Buttons */}
          <div className="mt-8 pt-8 border-t">
            <div className="flex items-center justify-between">
              <span className="text-gray-700 font-medium">Share this article:</span>
              <div className="flex space-x-3">
                <button className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors">
                  <FaShare />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </article>

      {/* Related Posts */}
      <section className="section-padding bg-gray-50 mt-20">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {relatedPosts.map((relatedPost) => (
              <Link 
                key={relatedPost.id}
                to={`/blog/${relatedPost.id}`}
                className="card group"
              >
                <div className="overflow-hidden">
                  <img 
                    src={relatedPost.image} 
                    alt={relatedPost.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                    {relatedPost.category}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 mt-3 group-hover:text-primary-600 transition-colors">
                    {relatedPost.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
