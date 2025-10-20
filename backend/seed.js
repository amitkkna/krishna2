import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/User.js';
import Blog from './models/Blog.js';

dotenv.config();

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB Connected');

    // Clear existing data (optional - comment out if you want to keep existing data)
    // await User.deleteMany();
    // await Blog.deleteMany();
    // console.log('🗑️  Cleared existing data');

    // Create admin user
    const adminExists = await User.findOne({ email: process.env.ADMIN_EMAIL || 'admin@krishnacare.com' });
    
    if (!adminExists) {
      await User.create({
        name: 'Admin',
        email: process.env.ADMIN_EMAIL || 'admin@krishnacare.com',
        password: process.env.ADMIN_PASSWORD || 'Admin@123',
        role: 'admin'
      });
      console.log('✅ Admin user created');
      console.log(`   Email: ${process.env.ADMIN_EMAIL || 'admin@krishnacare.com'}`);
      console.log(`   Password: ${process.env.ADMIN_PASSWORD || 'Admin@123'}`);
    } else {
      console.log('ℹ️  Admin user already exists');
    }

    // Create sample blog posts
    const blogCount = await Blog.countDocuments();
    if (blogCount === 0) {
      const sampleBlogs = [
        {
          title: 'The Future of Logistics: AI and Automation',
          excerpt: 'Discover how artificial intelligence is revolutionizing the logistics industry and what it means for businesses.',
          content: '<p>The logistics industry is experiencing a transformative shift driven by artificial intelligence and automation...</p>',
          category: 'Technology',
          author: 'Amit Patel',
          authorBio: 'Chief Technology Officer at Krishna Care',
          featuredImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800',
          tags: ['AI', 'Automation', 'Technology', 'Innovation'],
          readTime: '5 min read',
          isPublished: true,
          publishedAt: new Date()
        },
        {
          title: '5 Ways to Optimize Your Supply Chain',
          excerpt: 'Learn practical strategies to improve efficiency and reduce costs in your supply chain operations.',
          content: '<p>Supply chain optimization is critical for business success in today\'s competitive market...</p>',
          category: 'Insights',
          author: 'Priya Sharma',
          authorBio: 'Chief Operations Officer at Krishna Care',
          featuredImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800',
          tags: ['Supply Chain', 'Optimization', 'Business', 'Strategy'],
          readTime: '7 min read',
          isPublished: true,
          publishedAt: new Date()
        },
        {
          title: 'Sustainable Logistics: Our Commitment',
          excerpt: 'How Krishna Care is leading the way in environmentally responsible logistics practices.',
          content: '<p>Sustainability is at the core of our operations. We are committed to reducing our carbon footprint...</p>',
          category: 'Sustainability',
          author: 'Rajesh Kumar',
          authorBio: 'CEO at Krishna Care',
          featuredImage: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800',
          tags: ['Sustainability', 'Environment', 'Green Logistics', 'CSR'],
          readTime: '4 min read',
          isPublished: true,
          publishedAt: new Date()
        }
      ];

      await Blog.insertMany(sampleBlogs);
      console.log('✅ Sample blogs created');
    } else {
      console.log('ℹ️  Blogs already exist');
    }

    console.log('\n🎉 Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
