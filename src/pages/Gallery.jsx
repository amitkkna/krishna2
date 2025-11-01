import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight, FaSearch } from 'react-icons/fa';
import axios from 'axios';

const Gallery = () => {
  const [folders, setFolders] = useState([]);
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  // Hero slider state
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const categories = ['All', 'General', 'Operations', 'Warehouse', 'Fleet', 'Team', 'Events'];
  
  // Hero slider items - images numbered 1-11 from public/images/gallery/
  const heroSlides = [
    {
      type: 'image',
      src: '/images/gallery/1.png',
      title: 'Krishna Care Operations',
      description: 'Excellence in warehousing and logistics'
    },
    {
      type: 'image',
      src: '/images/gallery/2.png',
      title: 'Modern Warehouse Facilities',
      description: 'State-of-the-art storage solutions'
    },
    {
      type: 'image',
      src: '/images/gallery/3.png',
      title: 'Our Infrastructure',
      description: 'World-class logistics facilities'
    },
    {
      type: 'image',
      src: '/images/gallery/4.jpg',
      title: 'Professional Operations',
      description: 'Efficient warehouse management'
    },
    {
      type: 'image',
      src: '/images/gallery/5.jpg',
      title: 'Our Fleet',
      description: 'Reliable transportation solutions'
    },
    {
      type: 'image',
      src: '/images/gallery/6.jpg',
      title: 'Logistics Excellence',
      description: 'Comprehensive supply chain services'
    },
    {
      type: 'image',
      src: '/images/gallery/7.jpg',
      title: 'Storage Solutions',
      description: 'Advanced warehousing technology'
    },
    {
      type: 'image',
      src: '/images/gallery/8.jpg',
      title: 'Team Operations',
      description: 'Dedicated professionals at work'
    },
    {
      type: 'image',
      src: '/images/gallery/9.jpg',
      title: 'Warehouse Management',
      description: 'Efficient inventory systems'
    },
    {
      type: 'image',
      src: '/images/gallery/10.jpg',
      title: 'Our Facilities',
      description: 'Modern warehouse infrastructure'
    },
    {
      type: 'image',
      src: '/images/gallery/11.jpg',
      title: 'Operations in Action',
      description: 'See how we deliver excellence'
    }
  ];

  useEffect(() => {
    if (selectedFolder) {
      fetchFolderImages(selectedFolder);
    } else {
      fetchGalleryFolders();
    }
  }, [selectedFolder, selectedCategory]);

  const fetchGalleryFolders = async () => {
    try {
      setLoading(true);
      const params = {};
      if (selectedCategory && selectedCategory !== 'All') {
        params.category = selectedCategory;
      }
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/gallery/folders`, { params });
      setFolders(response.data.data || []);
    } catch (error) {
      console.error('Error fetching gallery folders:', error);
      setFolders([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchFolderImages = async (folderName) => {
    try {
      setLoading(true);
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/gallery/folder/${folderName}`);
      setImages(response.data.data || []);
      setFilteredImages(response.data.data || []);
    } catch (error) {
      console.error('Error fetching folder images:', error);
      setImages([]);
      setFilteredImages([]);
    } finally {
      setLoading(false);
    }
  };

  const handleFolderClick = (folderName) => {
    setSelectedFolder(folderName);
    setSearchTerm('');
  };

  const handleBackToFolders = () => {
    setSelectedFolder(null);
    setImages([]);
    setFilteredImages([]);
    setSearchTerm('');
  };

  useEffect(() => {
    let filtered = images;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(img => img.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(img => 
        img.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        img.description?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredImages(filtered);
  }, [selectedCategory, searchTerm, images]);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % filteredImages.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
  };

  const previousImage = () => {
    const prevIndex = (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
  };

  const handleKeyPress = (e) => {
    if (!selectedImage) return;
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') previousImage();
    if (e.key === 'Escape') closeLightbox();
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage, currentImageIndex]);

  // Auto-play slider
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [isAutoPlay]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setIsAutoPlay(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Slider Section */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        {/* Slider Images/Videos */}
        <div className="relative h-full">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {slide.type === 'video' ? (
                <video
                  src={slide.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={slide.src}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              )}

              {/* Light Overlay for text readability - REDUCED darkness */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent"></div>

              {/* Slide Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="container-custom relative z-10 text-center text-white px-4">
                  <motion.h1
                    key={`title-${index}`}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-4xl md:text-6xl font-bold mb-4 font-heading drop-shadow-lg"
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p
                    key={`desc-${index}`}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto drop-shadow-lg"
                  >
                    {slide.description}
                  </motion.p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg transition-all hover:scale-110"
          aria-label="Previous slide"
        >
          <FaChevronLeft className="text-xl" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg transition-all hover:scale-110"
          aria-label="Next slide"
        >
          <FaChevronRight className="text-xl" />
        </button>

        {/* Slider Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all ${
                index === currentSlide
                  ? 'w-8 bg-white'
                  : 'w-3 bg-white/50 hover:bg-white/75'
              } h-3 rounded-full`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white shadow-sm sticky top-16 z-40">
        <div className="container-custom">
          {/* Back to Folders Button */}
          {selectedFolder && (
            <div className="mb-4">
              <button
                onClick={handleBackToFolders}
                className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors"
              >
                <FaChevronLeft />
                <span>Back to Gallery</span>
              </button>
              <h2 className="text-2xl font-bold mt-2">Folder: {selectedFolder.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</h2>
            </div>
          )}

          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Category Filter - Only show when not in folder view */}
            {!selectedFolder && (
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full font-medium transition-all ${
                      selectedCategory === category
                        ? 'bg-primary-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}

            {/* Search Bar - Only show when viewing folder images */}
            {selectedFolder && (
              <div className="relative w-full md:w-64">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search images..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            )}
          </div>

          {/* Results Count - Only show when viewing folder images */}
          {selectedFolder && (
            <div className="mt-4 text-center md:text-left">
              <p className="text-gray-600">
                Showing <span className="font-semibold text-gray-900">{filteredImages.length}</span> {filteredImages.length === 1 ? 'image' : 'images'}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="container-custom">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary-600"></div>
            </div>
          ) : selectedFolder ? (
            /* Show images in selected folder */
            filteredImages.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-6xl text-gray-300 mb-4">📷</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No images found</h3>
                <p className="text-gray-600">
                  {searchTerm ? 'Try adjusting your search term' : 'This folder is empty'}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredImages.map((image, index) => (
                  <motion.div
                    key={image._id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all cursor-pointer"
                    onClick={() => openLightbox(image, index)}
                  >
                    <div className="aspect-w-4 aspect-h-3 bg-gray-200">
                      <img
                        src={`http://localhost:5000${image.imageUrl}`}
                        alt={image.title || 'Gallery image'}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          console.error('Image load error:', image.imageUrl);
                          e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found';
                        }}
                      />
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        {image.title && (
                          <h3 className="text-lg font-semibold mb-1">{image.title}</h3>
                        )}
                        {image.description && (
                          <p className="text-sm text-gray-200 line-clamp-2">{image.description}</p>
                        )}
                        <div className="mt-2">
                          <span className="inline-block px-2 py-1 bg-primary-600 text-xs rounded-full">
                            {image.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )
          ) : (
            /* Show folders */
            folders.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-6xl text-gray-300 mb-4">📁</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No folders found</h3>
                <p className="text-gray-600">
                  Gallery folders will appear here once images are uploaded from the admin panel
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {folders.map((folder, index) => (
                  <motion.div
                    key={folder._id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all cursor-pointer"
                    onClick={() => handleFolderClick(folder._id)}
                  >
                    <div className="aspect-w-4 aspect-h-3 bg-gray-200 relative">
                      <img
                        src={`http://localhost:5000${folder.thumbnail}`}
                        alt={folder.title || 'Folder'}
                        className="w-full h-64 object-cover"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/400x300?text=Folder';
                        }}
                      />
                      {/* Folder Title Overlay */}
                      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center p-4">
                        <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-3">
                          {folder.title ? folder.title.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : folder._id}
                        </h3>
                        <div>
                          <span className="inline-block px-3 py-1 bg-primary-600 text-sm rounded-full text-white">
                            {folder.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-50"
          >
            <FaTimes className="text-3xl" />
          </button>

          {/* Previous Button */}
          {filteredImages.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); previousImage(); }}
              className="absolute left-4 text-white hover:text-gray-300 transition-colors z-50"
            >
              <FaChevronLeft className="text-4xl" />
            </button>
          )}

          {/* Next Button */}
          {filteredImages.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 text-white hover:text-gray-300 transition-colors z-50"
            >
              <FaChevronRight className="text-4xl" />
            </button>
          )}

          {/* Image Container */}
          <div 
            className="max-w-6xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={`http://localhost:5000${selectedImage.imageUrl}`}
              alt={selectedImage.title || 'Gallery image'}
              className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
              onError={(e) => {
                console.error('Lightbox image load error:', selectedImage.imageUrl);
                e.target.src = 'https://via.placeholder.com/800x600?text=Image+Not+Found';
              }}
            />
            
            {/* Image Info */}
            <div className="mt-6 text-center text-white max-w-2xl">
              {selectedImage.title && (
                <h2 className="text-2xl font-bold mb-2">{selectedImage.title}</h2>
              )}
              {selectedImage.description && (
                <p className="text-gray-300 mb-3">{selectedImage.description}</p>
              )}
              <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
                <span className="px-3 py-1 bg-white/10 rounded-full">{selectedImage.category}</span>
                <span>{currentImageIndex + 1} / {filteredImages.length}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
              Want to Learn More About Our Services?
            </h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Discover how Krishna Care can transform your logistics operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/services" className="btn-secondary inline-flex items-center justify-center">
                <span>Explore Services</span>
              </a>
              <a href="/contact" className="btn-outline inline-flex items-center justify-center border-white text-white hover:bg-white hover:text-primary-600">
                <span>Contact Us</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
