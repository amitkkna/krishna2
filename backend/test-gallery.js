// Test Gallery API
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/krishna-care';

async function testGallery() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('✅ MongoDB Connected\n');

    const Gallery = mongoose.model('Gallery', new mongoose.Schema({}, { strict: false }), 'galleries');

    console.log('Fetching all gallery images...');
    const images = await Gallery.find({}).limit(10);
    
    console.log(`\n📊 Total images found: ${images.length}\n`);
    
    if (images.length > 0) {
      images.forEach((img, index) => {
        console.log(`${index + 1}. Image:`);
        console.log(`   ID: ${img._id}`);
        console.log(`   Title: ${img.title || 'No title'}`);
        console.log(`   Category: ${img.category || 'No category'}`);
        console.log(`   URL: ${img.imageUrl || 'No URL'}`);
        console.log(`   Active: ${img.isActive !== false ? 'Yes' : 'No'}`);
        console.log(`   Created: ${img.createdAt || 'Unknown'}`);
        console.log('');
      });
    } else {
      console.log('❌ No images found in database!');
      console.log('   Images may not be saved to database after upload.');
    }

    await mongoose.connection.close();
    console.log('✅ Connection closed');
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

testGallery();
