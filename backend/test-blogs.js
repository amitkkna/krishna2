import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Blog from './models/Blog.js';

dotenv.config();

const testBlogs = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB Connected');

    // Get all blogs
    const blogs = await Blog.find().sort({ createdAt: -1 });
    
    console.log('\n📝 BLOG POSTS:');
    console.log('=====================');
    console.log(`Total Blogs: ${blogs.length}\n`);

    blogs.forEach((blog, index) => {
      console.log(`${index + 1}. ${blog.title}`);
      console.log(`   Slug: ${blog.slug}`);
      console.log(`   Author: ${blog.author}`);
      console.log(`   Category: ${blog.category}`);
      console.log(`   Status: ${blog.status || 'published'}`);
      console.log(`   Tags: ${blog.tags?.join(', ') || 'None'}`);
      console.log(`   Image: ${blog.featuredImage || 'No image'}`);
      console.log(`   Created: ${blog.createdAt}`);
      console.log(`   Views: ${blog.views || 0}`);
      console.log(`   ID: ${blog._id}\n`);
    });

    console.log('✅ Test completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
};

testBlogs();
