import { useState, useEffect } from 'react';
import { galleryService } from '../../services/apiService';
import { toast } from 'react-toastify';

const GalleryList = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploadMode, setUploadMode] = useState(false);
  const [bulkMode, setBulkMode] = useState(false);
  const [filters, setFilters] = useState({ category: '' });

  // Single upload form
  const [singleForm, setSingleForm] = useState({
    title: '',
    description: '',
    category: 'General',
    tags: '',
  });
  const [singleImage, setSingleImage] = useState(null);
  const [singlePreview, setSinglePreview] = useState('');

  // Bulk upload
  const [bulkImages, setBulkImages] = useState([]);
  const [bulkPreviews, setBulkPreviews] = useState([]);
  const [bulkCategory, setBulkCategory] = useState('General');

  useEffect(() => {
    fetchImages();
  }, [filters]);

  const fetchImages = async () => {
    try {
      setLoading(true);
      const response = await galleryService.getAll(filters);
      console.log('Gallery API Response:', response); // Debug log
      setImages(response.data || []);
    } catch (error) {
      console.error('Failed to fetch images:', error);
      toast.error('Failed to fetch images');
    } finally {
      setLoading(false);
    }
  };

  const handleSingleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error('Image size must be less than 5MB');
        return;
      }
      setSingleImage(file);
      setSinglePreview(URL.createObjectURL(file));
    }
  };

  const handleBulkImagesChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 10) {
      toast.error('You can upload maximum 10 images at once');
      return;
    }
    
    const validFiles = files.filter(file => {
      if (file.size > 5 * 1024 * 1024) {
        toast.error(`${file.name} is too large (max 5MB)`);
        return false;
      }
      return true;
    });

    setBulkImages(validFiles);
    setBulkPreviews(validFiles.map(file => URL.createObjectURL(file)));
  };

  const handleSingleUpload = async (e) => {
    e.preventDefault();
    
    if (!singleImage) {
      toast.error('Please select an image');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('image', singleImage);
      formData.append('title', singleForm.title);
      formData.append('description', singleForm.description);
      formData.append('category', singleForm.category);
      
      if (singleForm.tags) {
        const tagsArray = singleForm.tags.split(',').map(tag => tag.trim()).filter(tag => tag);
        tagsArray.forEach(tag => formData.append('tags[]', tag));
      }

      await galleryService.uploadSingle(formData);
      toast.success('Image uploaded successfully');
      
      // Reset form
      setSingleForm({ title: '', description: '', category: 'General', tags: '' });
      setSingleImage(null);
      setSinglePreview('');
      setUploadMode(false);
      fetchImages();
    } catch (error) {
      toast.error('Failed to upload image');
    }
  };

  const handleBulkUpload = async (e) => {
    e.preventDefault();
    
    if (bulkImages.length === 0) {
      toast.error('Please select images');
      return;
    }

    try {
      const formData = new FormData();
      bulkImages.forEach(image => {
        formData.append('images', image);
      });
      formData.append('category', bulkCategory);

      await galleryService.uploadBulk(formData);
      toast.success(`${bulkImages.length} images uploaded successfully`);
      
      // Reset
      setBulkImages([]);
      setBulkPreviews([]);
      setBulkCategory('General');
      setBulkMode(false);
      setUploadMode(false);
      fetchImages();
    } catch (error) {
      toast.error('Failed to upload images');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this image?')) return;

    try {
      await galleryService.delete(id);
      toast.success('Image deleted successfully');
      fetchImages();
    } catch (error) {
      toast.error('Failed to delete image');
    }
  };

  const categories = ['General', 'Operations', 'Warehouse', 'Fleet', 'Team', 'Events', 'Technology'];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Gallery Management</h1>
        <button
          onClick={() => {
            setUploadMode(!uploadMode);
            setBulkMode(false);
          }}
          className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
        >
          {uploadMode ? 'View Gallery' : '+ Upload Images'}
        </button>
      </div>

      {/* Upload Section */}
      {uploadMode && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex space-x-4 mb-6">
            <button
              onClick={() => setBulkMode(false)}
              className={`px-4 py-2 rounded-lg ${
                !bulkMode
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Single Upload
            </button>
            <button
              onClick={() => setBulkMode(true)}
              className={`px-4 py-2 rounded-lg ${
                bulkMode
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Bulk Upload (Max 10)
            </button>
          </div>

          {!bulkMode ? (
            /* Single Upload Form */
            <form onSubmit={handleSingleUpload} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Image <span className="text-red-500">*</span>
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleSingleImageChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  required
                />
                {singlePreview && (
                  <img
                    src={singlePreview}
                    alt="Preview"
                    className="mt-4 w-full max-w-md h-48 object-cover rounded-lg"
                  />
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                  <input
                    type="text"
                    value={singleForm.title}
                    onChange={(e) => setSingleForm({ ...singleForm, title: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    placeholder="Image title"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    value={singleForm.category}
                    onChange={(e) => setSingleForm({ ...singleForm, category: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  >
                    {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  value={singleForm.description}
                  onChange={(e) => setSingleForm({ ...singleForm, description: e.target.value })}
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Image description"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tags <span className="text-gray-500 text-xs">(comma separated)</span>
                </label>
                <input
                  type="text"
                  value={singleForm.tags}
                  onChange={(e) => setSingleForm({ ...singleForm, tags: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="e.g., warehouse, modern, facility"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700"
              >
                Upload Image
              </button>
            </form>
          ) : (
            /* Bulk Upload Form */
            <form onSubmit={handleBulkUpload} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Images (Max 10) <span className="text-red-500">*</span>
                </label>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleBulkImagesChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  required
                />
                {bulkPreviews.length > 0 && (
                  <div className="mt-4 grid grid-cols-3 md:grid-cols-5 gap-2">
                    {bulkPreviews.map((preview, idx) => (
                      <img
                        key={idx}
                        src={preview}
                        alt={`Preview ${idx + 1}`}
                        className="w-full h-24 object-cover rounded-lg"
                      />
                    ))}
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category (applies to all)
                </label>
                <select
                  value={bulkCategory}
                  onChange={(e) => setBulkCategory(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                >
                  {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700"
              >
                Upload {bulkImages.length} Images
              </button>
            </form>
          )}
        </div>
      )}

      {/* Filter */}
      {!uploadMode && (
        <div className="bg-white p-4 rounded-lg shadow-md">
          <select
            value={filters.category}
            onChange={(e) => setFilters({ category: e.target.value })}
            className="px-4 py-2 border border-gray-300 rounded-lg"
          >
            <option value="">All Categories</option>
            {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </select>
        </div>
      )}

      {/* Gallery Grid */}
      {!uploadMode && (
        loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
          </div>
        ) : images.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image) => (
              <div key={image._id} className="bg-white rounded-lg shadow-md overflow-hidden group">
                <div className="relative">
                  <img
                    src={`${import.meta.env.VITE_API_URL.replace('/api', '')}${image.imageUrl}`}
                    alt={image.title}
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      console.error('Image load error:', image.imageUrl);
                      e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found';
                    }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <button
                      onClick={() => handleDelete(image._id)}
                      className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="font-medium text-gray-900 truncate">
                    {image.title || 'Untitled'}
                  </h3>
                  <p className="text-sm text-gray-500 truncate">{image.description}</p>
                  <span className="inline-block mt-2 px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">
                    {image.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <p className="text-gray-500 text-lg">No images found</p>
            <button
              onClick={() => setUploadMode(true)}
              className="mt-4 bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700"
            >
              Upload Your First Image
            </button>
          </div>
        )
      )}
    </div>
  );
};

export default GalleryList;
