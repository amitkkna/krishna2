import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Blog from './models/Blog.js';

dotenv.config();

const seedBlogs = [
  {
    title: "The Future of Logistics: AI and Automation",
    slug: "future-of-logistics-ai-automation",
    content: `
      <p>Discover how artificial intelligence is revolutionizing the logistics industry and what it means for the future of supply chain management.</p>
      
      <h2>Introduction</h2>
      <p>The logistics industry is undergoing a massive transformation, driven by advances in artificial intelligence and automation technologies. These innovations are reshaping how goods are transported, stored, and delivered across the globe.</p>
      
      <h2>AI in Route Optimization</h2>
      <p>Machine learning algorithms are now capable of analyzing vast amounts of data to determine the most efficient delivery routes, considering factors like traffic patterns, weather conditions, and fuel costs.</p>
      
      <h2>Automated Warehouses</h2>
      <p>Modern warehouses are increasingly adopting robotic systems for picking, packing, and inventory management, significantly improving efficiency and reducing errors.</p>
      
      <h2>The Road Ahead</h2>
      <p>As technology continues to evolve, we can expect even more innovative solutions that will make logistics faster, more efficient, and environmentally sustainable.</p>
    `,
    excerpt: "Discover how artificial intelligence is revolutionizing the logistics industry and what it means for the future of supply chain management.",
    featuredImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800",
    category: "Technology",
    tags: ["AI", "Automation", "Technology", "Innovation"],
    author: "Amit Patel",
    isPublished: true,
    readTime: 5
  },
  {
    title: "5 Ways to Optimize Your Supply Chain",
    slug: "5-ways-optimize-supply-chain",
    content: `
      <p>Learn practical strategies to improve efficiency and reduce costs in your supply chain operations.</p>
      
      <h2>1. Implement Real-Time Tracking</h2>
      <p>Visibility across your supply chain is crucial. Real-time tracking systems allow you to monitor shipments and identify potential delays before they become problems.</p>
      
      <h2>2. Automate Inventory Management</h2>
      <p>Automated inventory systems reduce human error and ensure optimal stock levels, preventing both overstocking and stockouts.</p>
      
      <h2>3. Build Strong Supplier Relationships</h2>
      <p>Collaborative partnerships with suppliers lead to better communication, improved reliability, and cost savings.</p>
      
      <h2>4. Use Data Analytics</h2>
      <p>Leverage data to make informed decisions about demand forecasting, route optimization, and resource allocation.</p>
      
      <h2>5. Embrace Sustainability</h2>
      <p>Sustainable practices not only benefit the environment but also improve brand reputation and can lead to cost savings.</p>
    `,
    excerpt: "Learn practical strategies to improve efficiency and reduce costs in your supply chain operations.",
    featuredImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800",
    category: "Insights",
    tags: ["Supply Chain", "Optimization", "Strategy", "Efficiency"],
    author: "Priya Sharma",
    isPublished: true,
    readTime: 7
  },
  {
    title: "Sustainable Logistics: Our Commitment",
    slug: "sustainable-logistics-commitment",
    content: `
      <p>How Krishna Care is leading the way in environmentally responsible logistics solutions.</p>
      
      <h2>Our Green Vision</h2>
      <p>At Krishna Care, we believe that sustainable logistics is not just good for the planet—it's good for business. We're committed to reducing our carbon footprint while maintaining exceptional service quality.</p>
      
      <h2>Electric Fleet Initiative</h2>
      <p>We're gradually transitioning our fleet to electric and hybrid vehicles, significantly reducing emissions in urban delivery areas.</p>
      
      <h2>Eco-Friendly Packaging</h2>
      <p>We use biodegradable and recyclable packaging materials whenever possible, minimizing waste and environmental impact.</p>
      
      <h2>Carbon Offset Programs</h2>
      <p>For emissions we cannot eliminate, we participate in verified carbon offset programs that support renewable energy and reforestation projects.</p>
      
      <h2>Join Us in Making a Difference</h2>
      <p>Together with our partners and clients, we're building a more sustainable future for logistics.</p>
    `,
    excerpt: "How Krishna Care is leading the way in environmentally responsible logistics solutions.",
    featuredImage: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800",
    category: "Sustainability",
    tags: ["Sustainability", "Environment", "Green Logistics", "CSR"],
    author: "Rajesh Kumar",
    isPublished: true,
    readTime: 4
  },
  {
    title: "Case Study: Transforming XYZ Manufacturing",
    slug: "case-study-xyz-manufacturing",
    content: `
      <p>How we helped a leading manufacturer reduce logistics costs by 30% while improving delivery times.</p>
      
      <h2>The Challenge</h2>
      <p>XYZ Manufacturing was facing increasing logistics costs and frequent delivery delays. Their existing supply chain was inefficient, with multiple touchpoints and poor visibility.</p>
      
      <h2>Our Solution</h2>
      <p>We implemented an integrated logistics solution that included:</p>
      <ul>
        <li>Centralized warehouse management</li>
        <li>Real-time tracking and monitoring</li>
        <li>Optimized route planning</li>
        <li>Automated inventory management</li>
      </ul>
      
      <h2>The Results</h2>
      <p>Within six months, XYZ Manufacturing saw remarkable improvements:</p>
      <ul>
        <li>30% reduction in logistics costs</li>
        <li>25% faster delivery times</li>
        <li>98% on-time delivery rate</li>
        <li>Significant reduction in inventory holding costs</li>
      </ul>
      
      <h2>Client Testimonial</h2>
      <p>"Krishna Care transformed our logistics operations. The results exceeded our expectations, and their team was professional and responsive throughout the process." - CEO, XYZ Manufacturing</p>
    `,
    excerpt: "How we helped a leading manufacturer reduce logistics costs by 30% while improving delivery times.",
    featuredImage: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800",
    category: "Case Studies",
    tags: ["Case Study", "Manufacturing", "Success Story", "ROI"],
    author: "Sneha Reddy",
    isPublished: true,
    readTime: 8
  },
  {
    title: "IoT in Logistics: Real-Time Visibility",
    slug: "iot-logistics-real-time-visibility",
    content: `
      <p>Exploring how Internet of Things technology provides unprecedented supply chain transparency.</p>
      
      <h2>What is IoT in Logistics?</h2>
      <p>The Internet of Things (IoT) refers to the network of connected devices that collect and share data. In logistics, IoT sensors can track location, temperature, humidity, and other critical parameters in real-time.</p>
      
      <h2>Key Benefits</h2>
      <h3>Real-Time Tracking</h3>
      <p>Know exactly where your shipments are at any moment, with precise GPS coordinates and estimated arrival times.</p>
      
      <h3>Condition Monitoring</h3>
      <p>For sensitive cargo, IoT sensors monitor environmental conditions to ensure products remain within acceptable parameters.</p>
      
      <h3>Predictive Maintenance</h3>
      <p>Vehicle sensors can predict maintenance needs before breakdowns occur, reducing downtime and costs.</p>
      
      <h2>Implementation at Krishna Care</h2>
      <p>We've equipped our entire fleet with IoT devices, providing our clients with unparalleled visibility and peace of mind.</p>
    `,
    excerpt: "Exploring how Internet of Things technology provides unprecedented supply chain transparency.",
    featuredImage: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800",
    category: "Technology",
    tags: ["IoT", "Technology", "Tracking", "Innovation"],
    author: "Amit Patel",
    isPublished: true,
    readTime: 6
  },
  {
    title: "The Rise of E-Commerce Logistics in India",
    slug: "rise-ecommerce-logistics-india",
    content: `
      <p>Understanding the challenges and opportunities in the booming e-commerce logistics sector.</p>
      
      <h2>The E-Commerce Boom</h2>
      <p>India's e-commerce market is growing at an unprecedented rate, with millions of new online shoppers joining every year. This growth has created enormous opportunities—and challenges—for logistics providers.</p>
      
      <h2>Key Challenges</h2>
      <h3>Last-Mile Delivery</h3>
      <p>Delivering to diverse geographic locations, from metro cities to remote villages, requires innovative solutions and extensive networks.</p>
      
      <h3>Cash on Delivery</h3>
      <p>Managing COD transactions adds complexity to logistics operations but remains crucial for market penetration.</p>
      
      <h3>Return Management</h3>
      <p>E-commerce generates high return rates, requiring efficient reverse logistics systems.</p>
      
      <h2>Krishna Care's E-Commerce Solutions</h2>
      <p>We offer specialized e-commerce logistics services designed to handle high volumes, fast delivery requirements, and seamless returns processing.</p>
      
      <h2>The Future</h2>
      <p>As e-commerce continues to grow, we're investing in technology and infrastructure to stay ahead of demand and deliver exceptional service.</p>
    `,
    excerpt: "Understanding the challenges and opportunities in the booming e-commerce logistics sector.",
    featuredImage: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800",
    category: "Industry News",
    tags: ["E-Commerce", "India", "Logistics", "Trends"],
    author: "Priya Sharma",
    isPublished: true,
    readTime: 5
  }
];

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB Connected');

    // Clear existing blogs
    await Blog.deleteMany({});
    console.log('🗑️  Cleared existing blogs');

    // Insert seed data
    const createdBlogs = await Blog.insertMany(seedBlogs);
    
    console.log('\n✅ Successfully seeded blogs!');
    console.log(`📝 Created ${createdBlogs.length} blog posts:\n`);
    
    createdBlogs.forEach((blog, index) => {
      console.log(`${index + 1}. ${blog.title}`);
      console.log(`   Category: ${blog.category}`);
      console.log(`   Author: ${blog.author}`);
      console.log(`   Read Time: ${blog.readTime} min`);
      console.log(`   Slug: ${blog.slug}\n`);
    });

    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
