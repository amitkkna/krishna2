import express from 'express';
import Gallery from '../models/Gallery.js';
import { protect, authorize } from '../middleware/auth.js';
import { upload, handleMulterError } from '../middleware/upload.js';

const router = express.Router();

// @route   GET /api/gallery
// @desc    Get all gallery images
// @access  Public
router.get('/', async (req, res) => {
  try {
    const { category, page = 1, limit = 20 } = req.query;
    
    let query = { isActive: true };
    
    // Filter by category
    if (category && category !== 'all') {
      query.category = category;
    }
    
    const images = await Gallery.find(query)
      .sort({ order: 1, createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .select('-__v');
    
    const count = await Gallery.countDocuments(query);
    
    res.json({
      success: true,
      data: images,
      total: count, // Added for easier access
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

// @route   GET /api/gallery/:id
// @desc    Get single gallery image
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const image = await Gallery.findById(req.params.id);
    
    if (!image) {
      return res.status(404).json({
        success: false,
        message: 'Image not found'
      });
    }
    
    res.json({
      success: true,
      data: image
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// @route   POST /api/gallery
// @desc    Upload new gallery image
// @access  Private (Admin only)
router.post('/', protect, authorize('admin'), upload.single('image'), handleMulterError, async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'Please upload an image'
      });
    }
    
    const imageData = {
      ...req.body,
      imageUrl: `/uploads/gallery/${req.file.filename}`,
      uploadedBy: req.user.id
    };
    
    // Parse tags if it's a string
    if (typeof imageData.tags === 'string') {
      imageData.tags = imageData.tags.split(',').map(tag => tag.trim());
    }
    
    const image = await Gallery.create(imageData);
    
    res.status(201).json({
      success: true,
      data: image
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// @route   POST /api/gallery/bulk
// @desc    Upload multiple images at once
// @access  Private (Admin only)
router.post('/bulk', protect, authorize('admin'), upload.array('images', 10), handleMulterError, async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Please upload at least one image'
      });
    }
    
    const { category = 'General', tags = [] } = req.body;
    const parsedTags = typeof tags === 'string' ? tags.split(',').map(tag => tag.trim()) : tags;
    
    const images = await Promise.all(
      req.files.map((file, index) => 
        Gallery.create({
          title: file.originalname.split('.')[0],
          imageUrl: `/uploads/gallery/${file.filename}`,
          category,
          tags: parsedTags,
          order: index,
          uploadedBy: req.user.id
        })
      )
    );
    
    res.status(201).json({
      success: true,
      data: images,
      count: images.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// @route   PUT /api/gallery/:id
// @desc    Update gallery image
// @access  Private (Admin only)
router.put('/:id', protect, authorize('admin'), upload.single('image'), handleMulterError, async (req, res) => {
  try {
    let image = await Gallery.findById(req.params.id);
    
    if (!image) {
      return res.status(404).json({
        success: false,
        message: 'Image not found'
      });
    }
    
    const updateData = { ...req.body };
    
    // Add new image if uploaded
    if (req.file) {
      updateData.imageUrl = `/uploads/gallery/${req.file.filename}`;
    }
    
    // Parse tags if it's a string
    if (typeof updateData.tags === 'string') {
      updateData.tags = updateData.tags.split(',').map(tag => tag.trim());
    }
    
    image = await Gallery.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );
    
    res.json({
      success: true,
      data: image
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// @route   DELETE /api/gallery/:id
// @desc    Delete gallery image
// @access  Private (Admin only)
router.delete('/:id', protect, authorize('admin'), async (req, res) => {
  try {
    const image = await Gallery.findById(req.params.id);
    
    if (!image) {
      return res.status(404).json({
        success: false,
        message: 'Image not found'
      });
    }
    
    await image.deleteOne();
    
    res.json({
      success: true,
      message: 'Image deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

export default router;
