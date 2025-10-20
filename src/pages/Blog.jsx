import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaSearch, FaCalendar, FaUser } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['all', 'Technology', 'Insights', 'Case Studies', 'Sustainability', 'Industry News'];

  const blogPosts = [
    {
      id: '1',
      title: 'The Future of Logistics: AI and Automation',
      excerpt: 'Discover how artificial intelligence is revolutionizing the logistics industry and what it means for businesses.',
      category: 'Technology',
      date: 'Oct 5, 2025',
      author: 'Amit Patel',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800',
      readTime: '5 min read'
    },
    {
      id: '2',
      title: '5 Ways to Optimize Your Supply Chain',
      excerpt: 'Learn practical strategies to improve efficiency and reduce costs in your supply chain operations.',
      category: 'Insights',
      date: 'Oct 1, 2025',
      author: 'Priya Sharma',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800',
      readTime: '7 min read'
    },
    {
      id: '3',
      title: 'Sustainable Logistics: Our Commitment',
      excerpt: 'How Krishna Care is leading the way in environmentally responsible logistics practices.',
      category: 'Sustainability',
      date: 'Sep 28, 2025',
      author: 'Rajesh Kumar',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800',
      readTime: '4 min read'
    },
    {
      id: '4',
      title: 'Case Study: Transforming XYZ Manufacturing',
      excerpt: 'How we helped a leading manufacturer reduce logistics costs by 30% while improving delivery times.',
      category: 'Case Studies',
      date: 'Sep 25, 2025',
      author: 'Sneha Reddy',
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800',
      readTime: '8 min read'
    },
    {
      id: '5',
      title: 'IoT in Logistics: Real-Time Visibility',
      excerpt: 'Exploring how Internet of Things technology provides unprecedented supply chain visibility.',
      category: 'Technology',
      date: 'Sep 20, 2025',
      author: 'Amit Patel',
      image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800',
      readTime: '6 min read'
    },
    {
      id: '6',
      title: 'The Rise of E-Commerce Logistics in India',
      excerpt: 'Understanding the challenges and opportunities in the booming e-commerce logistics sector.',
      category: 'Industry News',
      date: 'Sep 15, 2025',
      author: 'Priya Sharma',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
      readTime: '5 min read'
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg text-white pt-40 pb-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Insights & <span className="text-yellow-400">Articles</span>
            </h1>
            <p className="text-lg text-gray-200">
              Stay updated with the latest trends, insights, and news from the logistics industry
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b sticky top-20 z-40">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary-500 transition-colors"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">No articles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card group"
                >
                  <Link to={`/blog/${post.id}`}>
                    <div className="overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                        <span className="text-sm text-gray-500">{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                      
                      <div className="flex items-center justify-between pt-4 border-t">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <FaUser size={12} />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <FaCalendar size={12} />
                            <span>{post.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Get the latest insights and industry news delivered to your inbox
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                />
                <button type="submit" className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors whitespace-nowrap inline-flex items-center justify-center space-x-2">
                  <span>Subscribe</span>
                  <FaArrowRight />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
