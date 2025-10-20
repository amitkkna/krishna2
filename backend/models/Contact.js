import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    lowercase: true,
    trim: true
  },
  phone: {
    type: String,
    trim: true
  },
  company: {
    type: String,
    trim: true
  },
  service: {
    type: String,
    enum: ['transportation', 'warehousing', 'consulting', 'integrated', ''],
    default: ''
  },
  message: {
    type: String,
    required: [true, 'Message is required']
  },
  status: {
    type: String,
    enum: ['new', 'read', 'replied', 'archived'],
    default: 'new'
  },
  notes: {
    type: String,
    default: ''
  },
  ipAddress: {
    type: String
  }
}, {
  timestamps: true
});

// Index for searching
contactSchema.index({ name: 'text', email: 'text', company: 'text' });

export default mongoose.model('Contact', contactSchema);
