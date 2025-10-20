import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Contact from './models/Contact.js';

dotenv.config();

const testContacts = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB Connected');

    // Get all contacts
    const contacts = await Contact.find().sort({ createdAt: -1 });
    
    console.log('\n📧 CONTACT SUBMISSIONS:');
    console.log('=====================');
    console.log(`Total Contacts: ${contacts.length}\n`);

    contacts.forEach((contact, index) => {
      console.log(`${index + 1}. ${contact.name}`);
      console.log(`   Email: ${contact.email}`);
      console.log(`   Phone: ${contact.phone || 'N/A'}`);
      console.log(`   Company: ${contact.company || 'N/A'}`);
      console.log(`   Service: ${contact.service || 'N/A'}`);
      console.log(`   Message: ${contact.message.substring(0, 50)}...`);
      console.log(`   Status: ${contact.status}`);
      console.log(`   Submitted: ${contact.createdAt}`);
      console.log(`   ID: ${contact._id}\n`);
    });

    console.log('✅ Test completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
};

testContacts();
