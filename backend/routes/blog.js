import express from 'express';
import Blog from '../models/Blog.js';
import { protect, authorize, optionalAuth } from '../middleware/auth.js';
import { upload, handleMulterError } from '../middleware/upload.js';

const router = express.Router();

// @route   GET /api/blogs
// @desc    Get all published blogs (public) or all blogs (admin)
// @access  Public
router.get('/', optionalAuth, async (req, res) => {
  try {
    const { category, search, page = 1, limit = 10 } = req.query;

    let query = {};

    // Non-admin users only see published blogs
    if (!req.user || req.user.role !== 'admin') {
      query.isPublished = true;
    } else {
    }
    
    // Filter by category
    if (category && category !== 'all') {
      query.category = category;
    }
    
    // Search
    if (search) {
      query.$text = { $search: search };
    }
    
    const blogs = await Blog.find(query)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .select('-__v');
    
    const count = await Blog.countDocuments(query);
    
    res.json({
      success: true,
      data: blogs,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total: count,
        pages: Math.ceil(count / limit)
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// @route   GET /api/blogs/:id
// @desc    Get single blog by ID or slug
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const paramId = req.params.id;
    let blog;

    // Check if the param is a valid ObjectId format (24 hex characters)
    const isValidObjectId = /^[0-9a-fA-F]{24}$/.test(paramId);

    if (isValidObjectId) {
      // Try finding by ID or slug
      blog = await Blog.findOne({
        $or: [
          { _id: paramId },
          { slug: paramId }
        ]
      });
    } else {
      // Only search by slug if not a valid ObjectId
      blog = await Blog.findOne({ slug: paramId });
    }

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found'
      });
    }

    // Increment views - use findByIdAndUpdate to avoid validation issues with old data
    try {
      await Blog.findByIdAndUpdate(blog._id, { $inc: { views: 1 } }, { runValidators: false });
    } catch (viewError) {
      console.error('Error incrementing views:', viewError);
      // Continue even if view increment fails
    }

    res.json({
      success: true,
      data: blog
    });
  } catch (error) {
    console.error('Error fetching blog:', error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// @route   POST /api/blogs
// @desc    Create new blog
// @access  Private (Admin only)
router.post('/', protect, authorize('admin'), upload.single('featuredImage'), handleMulterError, async (req, res) => {
  try {
    const blogData = {
      title: {
        en: req.body['title.en'],
        hi: req.body['title.hi'] || ''
      },
      excerpt: {
        en: req.body['excerpt.en'],
        hi: req.body['excerpt.hi'] || ''
      },
      content: {
        en: req.body['content.en'],
        hi: req.body['content.hi'] || ''
      },
      category: req.body.category,
      author: req.body.author,
      authorBio: req.body.authorBio || '',
      readTime: req.body.readTime || '5 min read',
      isPublished: req.body.isPublished === 'true',
      createdBy: req.user.id
    };

    // Add image URL if uploaded
    if (req.file) {
      blogData.featuredImage = `/uploads/blogs/${req.file.filename}`;
    }

    // Parse tags if provided
    if (req.body.tags) {
      if (typeof req.body.tags === 'string') {
        blogData.tags = req.body.tags.split(',').map(tag => tag.trim()).filter(tag => tag);
      } else if (Array.isArray(req.body.tags)) {
        blogData.tags = req.body.tags;
      }
    }

    const blog = await Blog.create(blogData);

    res.status(201).json({
      success: true,
      data: blog
    });
  } catch (error) {
    console.error('Blog creation error:', error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// @route   PUT /api/blogs/:id
// @desc    Update blog
// @access  Private (Admin only)
router.put('/:id', protect, authorize('admin'), upload.single('featuredImage'), handleMulterError, async (req, res) => {
  try {
    let blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found'
      });
    }

    const updateData = {
      title: {
        en: req.body['title.en'],
        hi: req.body['title.hi'] || ''
      },
      excerpt: {
        en: req.body['excerpt.en'],
        hi: req.body['excerpt.hi'] || ''
      },
      content: {
        en: req.body['content.en'],
        hi: req.body['content.hi'] || ''
      },
      category: req.body.category,
      author: req.body.author,
      authorBio: req.body.authorBio || '',
      readTime: req.body.readTime || '5 min read',
      isPublished: req.body.isPublished === 'true'
    };

    // Add new image if uploaded
    if (req.file) {
      updateData.featuredImage = `/uploads/blogs/${req.file.filename}`;
    }

    // Parse tags if provided
    if (req.body.tags) {
      if (typeof req.body.tags === 'string') {
        updateData.tags = req.body.tags.split(',').map(tag => tag.trim()).filter(tag => tag);
      } else if (Array.isArray(req.body.tags)) {
        updateData.tags = req.body.tags;
      }
    }

    blog = await Blog.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );

    res.json({
      success: true,
      data: blog
    });
  } catch (error) {
    console.error('Blog update error:', error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// @route   DELETE /api/blogs/:id
// @desc    Delete blog
// @access  Private (Admin only)
router.delete('/:id', protect, authorize('admin'), async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found'
      });
    }
    
    await blog.deleteOne();
    
    res.json({
      success: true,
      message: 'Blog deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

export default router;
