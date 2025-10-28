import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { blogService } from '../../services/apiService';
import { toast } from 'react-toastify';

const BlogForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = !!id;
  const [activeTab, setActiveTab] = useState('en'); // 'en' or 'hi'

  const [formData, setFormData] = useState({
    title: { en: '', hi: '' },
    excerpt: { en: '', hi: '' },
    content: { en: '', hi: '' },
    category: 'Logistics',
    author: 'Admin',
    tags: '',
    isPublished: false,
  });
  const [featuredImage, setFeaturedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [loading, setLoading] = useState(false);
  const [fetchingBlog, setFetchingBlog] = useState(false);

  useEffect(() => {
    if (isEditMode) {
      fetchBlog();
    }
  }, [id]);

  const fetchBlog = async () => {
    try {
      setFetchingBlog(true);
      const response = await blogService.getOne(id);
      console.log('Fetched blog response:', response);

      // Handle the response structure from backend
      const blog = response.data || response;

      setFormData({
        title: {
          en: blog.title?.en || '',
          hi: blog.title?.hi || ''
        },
        excerpt: {
          en: blog.excerpt?.en || '',
          hi: blog.excerpt?.hi || ''
        },
        content: {
          en: blog.content?.en || '',
          hi: blog.content?.hi || ''
        },
        category: blog.category || 'Logistics',
        author: blog.author || 'Admin',
        tags: blog.tags?.join(', ') || '',
        isPublished: blog.isPublished || false,
      });
      if (blog.featuredImage) {
        setImagePreview(`${import.meta.env.VITE_API_URL.replace('/api', '')}${blog.featuredImage}`);
      }
    } catch (error) {
      console.error('Failed to fetch blog:', error);
      toast.error('Failed to fetch blog');
      navigate('/admin/blogs');
    } finally {
      setFetchingBlog(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleBilingualChange = (field, lang, value) => {
    setFormData({
      ...formData,
      [field]: {
        ...formData[field],
        [lang]: value
      }
    });
  };

  const handleContentChange = (value, lang) => {
    setFormData({
      ...formData,
      content: {
        ...formData.content,
        [lang]: value
      }
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error('Image size must be less than 5MB');
        return;
      }
      setFeaturedImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title.en || !formData.excerpt.en || !formData.content.en) {
      toast.error('Please fill in all required English fields');
      return;
    }

    try {
      setLoading(true);
      const submitData = new FormData();

      // Append bilingual fields
      submitData.append('title.en', formData.title.en);
      submitData.append('title.hi', formData.title.hi);
      submitData.append('excerpt.en', formData.excerpt.en);
      submitData.append('excerpt.hi', formData.excerpt.hi);
      submitData.append('content.en', formData.content.en);
      submitData.append('content.hi', formData.content.hi);

      submitData.append('category', formData.category);
      submitData.append('author', formData.author);
      submitData.append('isPublished', formData.isPublished);

      if (formData.tags) {
        submitData.append('tags', formData.tags);
      }

      if (featuredImage) {
        submitData.append('featuredImage', featuredImage);
      }

      if (isEditMode) {
        await blogService.update(id, submitData);
        toast.success('Blog updated successfully');
      } else {
        await blogService.create(submitData);
        toast.success('Blog created successfully');
      }

      navigate('/admin/blogs');
    } catch (error) {
      console.error('Submit error:', error);
      toast.error(error.response?.data?.message || `Failed to ${isEditMode ? 'update' : 'create'} blog`);
    } finally {
      setLoading(false);
    }
  };

  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ color: [] }, { background: [] }],
      ['link', 'image'],
      ['clean'],
    ],
  };

  if (fetchingBlog) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6">
          {isEditMode ? 'Edit Blog' : 'Create New Blog'}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Language Tabs */}
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                type="button"
                onClick={() => setActiveTab('en')}
                className={`${
                  activeTab === 'en'
                    ? 'border-primary-600 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                English <span className="text-red-500">*</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('hi')}
                className={`${
                  activeTab === 'hi'
                    ? 'border-primary-600 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                हिन्दी (Hindi)
              </button>
            </nav>
          </div>

          {/* English Content */}
          {activeTab === 'en' && (
            <div className="space-y-6">
              {/* Title (English) */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title (English) <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.title.en}
                  onChange={(e) => handleBilingualChange('title', 'en', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Enter blog title in English"
                  required
                />
              </div>

              {/* Excerpt (English) */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Excerpt (English) <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={formData.excerpt.en}
                  onChange={(e) => handleBilingualChange('excerpt', 'en', e.target.value)}
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Brief description of the blog in English"
                  required
                />
              </div>

              {/* Content (English) */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Content (English) <span className="text-red-500">*</span>
                </label>
                <div className="bg-white rounded-lg border border-gray-300">
                  <ReactQuill
                    theme="snow"
                    value={formData.content.en}
                    onChange={(value) => handleContentChange(value, 'en')}
                    modules={quillModules}
                    className="h-64"
                    placeholder="Write your blog content here in English..."
                  />
                </div>
              </div>
            </div>
          )}

          {/* Hindi Content */}
          {activeTab === 'hi' && (
            <div className="space-y-6">
              {/* Title (Hindi) */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  शीर्षक (Title in Hindi)
                </label>
                <input
                  type="text"
                  value={formData.title.hi}
                  onChange={(e) => handleBilingualChange('title', 'hi', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="हिंदी में ब्लॉग का शीर्षक दर्ज करें"
                />
              </div>

              {/* Excerpt (Hindi) */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  सारांश (Excerpt in Hindi)
                </label>
                <textarea
                  value={formData.excerpt.hi}
                  onChange={(e) => handleBilingualChange('excerpt', 'hi', e.target.value)}
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="हिंदी में ब्लॉग का संक्षिप्त विवरण"
                />
              </div>

              {/* Content (Hindi) */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  सामग्री (Content in Hindi)
                </label>
                <div className="bg-white rounded-lg border border-gray-300">
                  <ReactQuill
                    theme="snow"
                    value={formData.content.hi}
                    onChange={(value) => handleContentChange(value, 'hi')}
                    modules={quillModules}
                    className="h-64"
                    placeholder="अपनी ब्लॉग सामग्री यहाँ हिंदी में लिखें..."
                  />
                </div>
              </div>
            </div>
          )}

          {/* Common Fields (shown regardless of tab) */}
          <div className="pt-6 mt-20 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">General Settings</h3>

            {/* Category and Author Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="Logistics">Logistics</option>
                  <option value="Technology">Technology</option>
                  <option value="Supply Chain">Supply Chain</option>
                  <option value="News">News</option>
                  <option value="Case Study">Case Study</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Author</label>
                <input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Author name"
                />
              </div>
            </div>

            {/* Tags */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tags <span className="text-gray-500 text-xs">(comma separated)</span>
              </label>
              <input
                type="text"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="e.g., logistics, supply chain, technology"
              />
            </div>

            {/* Featured Image */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Featured Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              {imagePreview && (
                <div className="mt-4">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full max-w-md h-48 object-cover rounded-lg"
                  />
                </div>
              )}
            </div>

            {/* Published Checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                name="isPublished"
                checked={formData.isPublished}
                onChange={handleChange}
                className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
              />
              <label className="ml-2 text-sm font-medium text-gray-700">
                Publish immediately
              </label>
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="flex space-x-4 pt-4">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Saving...' : isEditMode ? 'Update Blog' : 'Create Blog'}
            </button>
            <button
              type="button"
              onClick={() => navigate('/admin/blogs')}
              className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogForm;
