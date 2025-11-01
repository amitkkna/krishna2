import { useState, useEffect } from 'react';
import { galleryService } from '../../services/apiService';
import { toast } from 'react-toastify';

const GalleryList = () => {
  const [folders, setFolders] = useState([]);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploadMode, setUploadMode] = useState(false);
  const [uploadToFolderMode, setUploadToFolderMode] = useState(false);
  const [filters, setFilters] = useState({ category: '' });
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [showImageViewer, setShowImageViewer] = useState(false);

  // Bulk upload
  const [bulkImages, setBulkImages] = useState([]);
  const [bulkPreviews, setBulkPreviews] = useState([]);
  const [bulkCategory, setBulkCategory] = useState('General');
  const [bulkTitle, setBulkTitle] = useState('');

  // Upload to existing folder
  const [folderUploadImages, setFolderUploadImages] = useState([]);
  const [folderUploadPreviews, setFolderUploadPreviews] = useState([]);

  useEffect(() => {
    if (selectedFolder) {
      fetchFolderImages(selectedFolder);
    } else {
      fetchFolders();
    }
  }, [filters, selectedFolder]);

  const fetchFolders = async () => {
    try {
      setLoading(true);
      const response = await galleryService.getFolders(filters);
      setFolders(response.data || []);
    } catch (error) {
      console.error('Failed to fetch folders:', error);
      toast.error('Failed to fetch folders');
    } finally {
      setLoading(false);
    }
  };

  const fetchFolderImages = async (folderName) => {
    try {
      setLoading(true);
      const response = await galleryService.getByFolder(folderName);
      setImages(response.data || []);
    } catch (error) {
      console.error('Failed to fetch folder images:', error);
      toast.error('Failed to fetch folder images');
    } finally {
      setLoading(false);
    }
  };

  const handleFolderClick = (folderName) => {
    setSelectedFolder(folderName);
  };

  const handleBackToFolders = () => {
    setSelectedFolder(null);
    setImages([]);
    setUploadToFolderMode(false);
  };

  const handleFolderUploadImagesChange = (e) => {
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

    setFolderUploadImages(validFiles);
    setFolderUploadPreviews(validFiles.map(file => URL.createObjectURL(file)));
  };

  const handleUploadToFolder = async (e) => {
    e.preventDefault();

    if (folderUploadImages.length === 0) {
      toast.error('Please select images');
      return;
    }

    try {
      const formData = new FormData();
      folderUploadImages.forEach(image => {
        formData.append('images', image);
      });

      // Get the category and title from the first image in the folder
      const firstImage = images[0];
      formData.append('category', firstImage?.category || 'General');
      formData.append('title', selectedFolder);

      await galleryService.uploadBulk(formData);
      toast.success(`${folderUploadImages.length} images uploaded to folder successfully`);

      // Reset
      setFolderUploadImages([]);
      setFolderUploadPreviews([]);
      setUploadToFolderMode(false);
      fetchFolderImages(selectedFolder);
    } catch (error) {
      toast.error('Failed to upload images to folder');
    }
  };

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setShowImageViewer(true);
  };

  const handleCloseImageViewer = () => {
    setShowImageViewer(false);
    setSelectedImageIndex(null);
  };

  const handleNextImage = () => {
    if (selectedImageIndex < images.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  const handlePrevImage = () => {
    if (selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
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

  const handleBulkUpload = async (e) => {
    e.preventDefault();

    if (bulkImages.length === 0) {
      toast.error('Please select images');
      return;
    }

    if (!bulkTitle) {
      toast.error('Please enter a folder title');
      return;
    }

    try {
      const formData = new FormData();
      bulkImages.forEach(image => {
        formData.append('images', image);
      });
      formData.append('category', bulkCategory);
      formData.append('title', bulkTitle);

      await galleryService.uploadBulk(formData);
      toast.success(`${bulkImages.length} images uploaded successfully`);

      // Reset
      setBulkImages([]);
      setBulkPreviews([]);
      setBulkCategory('General');
      setBulkTitle('');
      setUploadMode(false);
      fetchFolders();
    } catch (error) {
      toast.error('Failed to upload images');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this image?')) return;

    try {
      await galleryService.delete(id);
      toast.success('Image deleted successfully');
      if (selectedFolder) {
        fetchFolderImages(selectedFolder);
      } else {
        fetchFolders();
      }
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
          onClick={() => setUploadMode(!uploadMode)}
          className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
        >
          {uploadMode ? 'View Gallery' : '+ Upload Images'}
        </button>
      </div>

      {/* Upload Section */}
      {uploadMode && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-6">Bulk Upload Images</h2>

          {/* Bulk Upload Form */}
          <form onSubmit={handleBulkUpload} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Folder Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={bulkTitle}
                  onChange={(e) => setBulkTitle(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Enter folder name (e.g., Company Event 2025)"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">All bulk images will be stored in this folder</p>
              </div>

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
        ) : selectedFolder ? (
          /* Show images in selected folder */
          <div>
            <div className="flex justify-between items-center mb-4">
              <button
                onClick={handleBackToFolders}
                className="flex items-center text-primary-600 hover:text-primary-700"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Folders
              </button>
              <button
                onClick={() => setUploadToFolderMode(!uploadToFolderMode)}
                className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
              >
                {uploadToFolderMode ? 'Cancel Upload' : '+ Add More Images'}
              </button>
            </div>
            <h2 className="text-xl font-semibold mb-4">Folder: {selectedFolder}</h2>

            {/* Upload to Folder Form */}
            {uploadToFolderMode && (
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-lg font-bold mb-4">Add Images to This Folder</h3>
                <form onSubmit={handleUploadToFolder} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select Images (Max 10) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleFolderUploadImagesChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      required
                    />
                    {folderUploadPreviews.length > 0 && (
                      <div className="mt-4 grid grid-cols-3 md:grid-cols-5 gap-2">
                        {folderUploadPreviews.map((preview, idx) => (
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

                  <button
                    type="submit"
                    className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700"
                  >
                    Upload {folderUploadImages.length} Images to Folder
                  </button>
                </form>
              </div>
            )}
            {images.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((image, index) => (
                  <div key={image._id} className="bg-white rounded-lg shadow-md overflow-hidden group">
                    <div className="relative cursor-pointer" onClick={() => handleImageClick(index)}>
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
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDelete(image._id);
                          }}
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
                <p className="text-gray-500 text-lg">No images in this folder</p>
              </div>
            )}
          </div>
        ) : folders.length > 0 ? (
          /* Show folders */
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {folders.map((folder) => (
              <div
                key={folder._id}
                onClick={() => handleFolderClick(folder._id)}
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow group"
              >
                <div className="relative">
                  <img
                    src={`${import.meta.env.VITE_API_URL.replace('/api', '')}${folder.thumbnail}`}
                    alt={folder.title}
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/400x300?text=Folder';
                    }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <svg className="w-16 h-16 text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="font-medium text-gray-900 truncate">
                    {folder.title || folder._id}
                  </h3>
                  <p className="text-sm text-gray-500">{folder.count} image{folder.count !== 1 ? 's' : ''}</p>
                  <span className="inline-block mt-2 px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">
                    {folder.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <p className="text-gray-500 text-lg">No folders found</p>
            <button
              onClick={() => setUploadMode(true)}
              className="mt-4 bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700"
            >
              Upload Your First Image
            </button>
          </div>
        )
      )}

      {/* Image Viewer Modal */}
      {showImageViewer && selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center" onClick={handleCloseImageViewer}>
          <button
            onClick={handleCloseImageViewer}
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300"
          >
            &times;
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); handlePrevImage(); }}
            disabled={selectedImageIndex === 0}
            className={`absolute left-4 text-white text-4xl hover:text-gray-300 ${selectedImageIndex === 0 ? 'opacity-30 cursor-not-allowed' : ''}`}
          >
            &#8249;
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); handleNextImage(); }}
            disabled={selectedImageIndex === images.length - 1}
            className={`absolute right-4 text-white text-4xl hover:text-gray-300 ${selectedImageIndex === images.length - 1 ? 'opacity-30 cursor-not-allowed' : ''}`}
          >
            &#8250;
          </button>
          <div className="max-w-5xl max-h-screen p-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={`${import.meta.env.VITE_API_URL.replace('/api', '')}${images[selectedImageIndex].imageUrl}`}
              alt={images[selectedImageIndex].title}
              className="max-w-full max-h-screen object-contain"
            />
            <div className="text-white text-center mt-4">
              <h3 className="text-xl font-semibold">{images[selectedImageIndex].title}</h3>
              <p className="text-gray-300">{images[selectedImageIndex].description}</p>
              <p className="text-sm text-gray-400 mt-2">
                {selectedImageIndex + 1} / {images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryList;
