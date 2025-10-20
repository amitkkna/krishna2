import dotenv from 'dotenv';
import mongoose from 'mongoose';
import User from './models/User.js';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/krishna-care';

async function checkAndFixAdmin() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('✅ MongoDB Connected');

    // Check if admin exists
    let admin = await User.findOne({ email: 'admin@krishnacare.com' });
    
    if (!admin) {
      console.log('❌ Admin user not found. Creating...');
      admin = await User.create({
        name: 'Admin',
        email: 'admin@krishnacare.com',
        password: 'Admin@123',
        role: 'admin',
        isActive: true
      });
      console.log('✅ Admin user created successfully');
    } else {
      console.log('✅ Admin user found');
      console.log('   Email:', admin.email);
      console.log('   Role:', admin.role);
      console.log('   Active:', admin.isActive);
      
      // Reset password to ensure it works
      console.log('\n🔄 Resetting admin password to: Admin@123');
      admin.password = 'Admin@123';
      await admin.save();
      console.log('✅ Password reset successfully');
    }

    console.log('\n📋 Login Credentials:');
    console.log('   Email: admin@krishnacare.com');
    console.log('   Password: Admin@123');
    
    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

checkAndFixAdmin();
