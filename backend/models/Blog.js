import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  title: {
    en: {
      type: String,
      required: [true, 'English title is required'],
      trim: true,
      maxlength: [200, 'Title cannot exceed 200 characters']
    },
    hi: {
      type: String,
      trim: true,
      maxlength: [200, 'Title cannot exceed 200 characters']
    }
  },
  slug: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true
  },
  excerpt: {
    en: {
      type: String,
      required: [true, 'English excerpt is required'],
      maxlength: [500, 'Excerpt cannot exceed 500 characters']
    },
    hi: {
      type: String,
      maxlength: [500, 'Excerpt cannot exceed 500 characters']
    }
  },
  content: {
    en: {
      type: String,
      required: [true, 'English content is required']
    },
    hi: {
      type: String
    }
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: ['Logistics', 'Technology', 'Supply Chain', 'News', 'Case Study']
  },
  author: {
    type: String,
    required: true,
    default: 'Krishna Care Team'
  },
  authorBio: {
    type: String,
    default: ''
  },
  featuredImage: {
    type: String,
    default: ''
  },
  tags: [{
    type: String,
    trim: true
  }],
  readTime: {
    type: String,
    default: '5 min read'
  },
  isPublished: {
    type: Boolean,
    default: false
  },
  publishedAt: {
    type: Date
  },
  views: {
    type: Number,
    default: 0
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
});

// Create slug from title before saving
blogSchema.pre('save', function(next) {
  if (this.isModified('title.en')) {
    this.slug = this.title.en
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }

  if (this.isModified('isPublished') && this.isPublished && !this.publishedAt) {
    this.publishedAt = new Date();
  }

  next();
});

// Index for search (updated for bilingual fields)
blogSchema.index({ 'title.en': 'text', 'title.hi': 'text', 'excerpt.en': 'text', 'excerpt.hi': 'text', 'content.en': 'text', 'content.hi': 'text' });

export default mongoose.model('Blog', blogSchema);
