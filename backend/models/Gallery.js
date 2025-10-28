import mongoose from 'mongoose';

const gallerySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    maxlength: [100, 'Title cannot exceed 100 characters']
  },
  description: {
    type: String,
    trim: true,
    maxlength: [500, 'Description cannot exceed 500 characters']
  },
  imageUrl: {
    type: String,
    required: [true, 'Image URL is required']
  },
  folderName: {
    type: String,
    required: [true, 'Folder name is required'],
    trim: true
  },
  category: {
    type: String,
    default: 'General',
    enum: ['Operations', 'Warehouse', 'Fleet', 'Team', 'Events', 'Technology', 'General']
  },
  tags: [{
    type: String,
    trim: true
  }],
  order: {
    type: Number,
    default: 0
  },
  isActive: {
    type: Boolean,
    default: true
  },
  uploadedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
});

// Index for sorting and folder grouping
gallerySchema.index({ folderName: 1, order: 1, createdAt: -1 });

export default mongoose.model('Gallery', gallerySchema);
