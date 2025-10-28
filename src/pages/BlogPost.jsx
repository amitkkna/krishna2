import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaCalendar, FaUser, FaClock, FaShare } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { blogService } from '../services/apiService';
import { toast } from 'react-toastify';

const BlogPost = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlog();
  }, [postId]);

  const fetchBlog = async () => {
    try {
      setLoading(true);
      const response = await blogService.getOne(postId);
      const blogData = response.data || response;
      setPost(blogData);
    } catch (error) {
      console.error('Failed to fetch blog:', error);
      toast.error('Blog post not found');
      navigate('/blog');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString(language === 'hi' ? 'hi-IN' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (!post) {
    return null;
  }

  // Get content in the selected language, fallback to English
  const displayTitle = post.title?.[language] || post.title?.en || post.title;
  const displayContent = post.content?.[language] || post.content?.en || post.content;
  const displayExcerpt = post.excerpt?.[language] || post.excerpt?.en || post.excerpt;
  const imageUrl = post.featuredImage
    ? `${import.meta.env.VITE_API_URL.replace('/api', '')}${post.featuredImage}`
    : 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200';

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="relative h-96 bg-gray-900">
        <img
          src={imageUrl}
          alt={displayTitle}
          className="w-full h-full object-cover opacity-70"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200';
          }}
        />
      </div>

      {/* Article Content */}
      <article className="container-custom max-w-4xl -mt-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-2xl p-8 md:p-12"
        >
          {/* Back Button */}
          <Link
            to="/blog"
            className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 mb-6 transition-colors"
          >
            <FaArrowLeft />
            <span>{language === 'hi' ? 'ब्लॉग पर वापस जाएं' : 'Back to Blog'}</span>
          </Link>

          {/* Category Badge */}
          <span className="inline-block text-xs font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full mb-4">
            {post.category}
          </span>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {displayTitle}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 pb-8 border-b">
            <div className="flex items-center space-x-2">
              <FaUser />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaCalendar />
              <span>{formatDate(post.publishedAt || post.createdAt)}</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaClock />
              <span>{post.readTime || '5 min read'}</span>
            </div>
          </div>

          {/* Content */}
          <div
            className="prose prose-lg max-w-none text-gray-700"
            dangerouslySetInnerHTML={{ __html: displayContent }}
          />

          {/* Author Bio */}
          {post.authorBio && (
            <div className="mt-12 pt-8 border-t">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  {post.author?.split(' ').map(n => n[0]).join('') || 'A'}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">{post.author}</h3>
                  <p className="text-gray-600">{post.authorBio}</p>
                </div>
              </div>
            </div>
          )}

          {/* Share Buttons */}
          <div className="mt-8 pt-8 border-t">
            <div className="flex items-center justify-between">
              <span className="text-gray-700 font-medium">
                {language === 'hi' ? 'इस लेख को साझा करें:' : 'Share this article:'}
              </span>
              <div className="flex space-x-3">
                <button className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors">
                  <FaShare />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </article>
    </div>
  );
};

export default BlogPost;
