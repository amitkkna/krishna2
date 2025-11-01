import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaChartLine, FaBlog, FaImages, FaEnvelope, FaEye, 
  FaArrowUp, FaArrowDown, FaClock, FaCheckCircle,
  FaExclamationCircle, FaUsers, FaTruck, FaChartBar,
  FaPlus, FaEdit, FaFileAlt, FaCamera
} from 'react-icons/fa';
import { 
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from 'recharts';
import { blogService, galleryService, contactService } from '../../services/apiService';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalBlogs: 0,
    publishedBlogs: 0,
    totalGallery: 0,
    totalContacts: 0,
    newContacts: 0,
  });
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [recentContacts, setRecentContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      
      // Fetch blogs with correct response structure (admin sees all blogs)
      const blogsData = await blogService.getAllAdmin({ page: 1, limit: 5 });
      const blogsList = blogsData.data || [];
      const publishedCount = blogsList.filter(b => b.isPublished).length || 0;
      setRecentBlogs(blogsList.slice(0, 5) || []);
      
      // Fetch gallery with correct response structure
      const galleryData = await galleryService.getAll();
      
      // Fetch contacts with correct response structure
      const contactsData = await contactService.getAll({ page: 1, limit: 5 });
      const contactsList = contactsData.data || [];
      const newContactsCount = contactsList.filter(c => c.status === 'new').length || 0;
      setRecentContacts(contactsList.slice(0, 5) || []);
      
      setStats({
        totalBlogs: blogsData.pagination?.total || 0,
        publishedBlogs: publishedCount,
        totalGallery: galleryData.total || 0,
        totalContacts: contactsData.pagination?.total || 0,
        newContacts: newContactsCount,
      });
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  // Mock data for charts
  const trafficData = [
    { name: 'Mon', visits: 2400, pageViews: 4000 },
    { name: 'Tue', visits: 1398, pageViews: 3000 },
    { name: 'Wed', visits: 9800, pageViews: 2000 },
    { name: 'Thu', visits: 3908, pageViews: 2780 },
    { name: 'Fri', visits: 4800, pageViews: 1890 },
    { name: 'Sat', visits: 3800, pageViews: 2390 },
    { name: 'Sun', visits: 4300, pageViews: 3490 },
  ];

  const categoryData = [
    { name: 'Blogs', value: stats.totalBlogs, color: '#3B82F6' },
    { name: 'Gallery', value: stats.totalGallery, color: '#10B981' },
    { name: 'Contacts', value: stats.totalContacts, color: '#F59E0B' },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary-600"></div>
          <p className="mt-4 text-gray-600 text-lg font-medium">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 pb-8">
      {/* Welcome Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 rounded-2xl shadow-xl p-8 text-white"
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2">Welcome back, Admin! 👋</h1>
            <p className="text-primary-100 text-lg">Here's what's happening with your website today</p>
          </div>
          <div className="hidden md:block">
            <div className="text-right">
              <p className="text-sm text-primary-200">Today's Date</p>
              <p className="text-2xl font-bold">{new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          whileHover={{ y: -5, scale: 1.02 }}
        >
          <Link
            to="/admin/blogs"
            className="block bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-white bg-opacity-20 rounded-xl backdrop-blur-sm">
                  <FaBlog className="text-3xl text-white" />
                </div>
                <span className="flex items-center text-sm font-semibold px-3 py-1 rounded-full bg-green-100 text-green-700">
                  <FaArrowUp className="mr-1" /> 12%
                </span>
              </div>
              <div>
                <p className="text-white text-sm font-medium opacity-90 uppercase tracking-wide">Total Blogs</p>
                <p className="text-5xl font-bold text-white mt-2">{stats.totalBlogs}</p>
                <p className="text-sm text-white opacity-80 mt-3">{stats.publishedBlogs} published, {stats.totalBlogs - stats.publishedBlogs} drafts</p>
              </div>
            </div>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          whileHover={{ y: -5, scale: 1.02 }}
        >
          <Link
            to="/admin/gallery"
            className="block bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-white bg-opacity-20 rounded-xl backdrop-blur-sm">
                  <FaImages className="text-3xl text-white" />
                </div>
                <span className="flex items-center text-sm font-semibold px-3 py-1 rounded-full bg-green-100 text-green-700">
                  <FaArrowUp className="mr-1" /> 8%
                </span>
              </div>
              <div>
                <p className="text-white text-sm font-medium opacity-90 uppercase tracking-wide">Gallery Images</p>
                <p className="text-5xl font-bold text-white mt-2">{stats.totalGallery}</p>
                <p className="text-sm text-white opacity-80 mt-3">Total uploaded images</p>
              </div>
            </div>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          whileHover={{ y: -5, scale: 1.02 }}
        >
          <Link
            to="/admin/contacts"
            className="block bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-white bg-opacity-20 rounded-xl backdrop-blur-sm">
                  <FaEnvelope className="text-3xl text-white" />
                </div>
                <span className="flex items-center text-sm font-semibold px-3 py-1 rounded-full bg-green-100 text-green-700">
                  <FaArrowUp className="mr-1" /> {stats.newContacts}
                </span>
              </div>
              <div>
                <p className="text-white text-sm font-medium opacity-90 uppercase tracking-wide">Contact Forms</p>
                <p className="text-5xl font-bold text-white mt-2">{stats.totalContacts}</p>
                <p className="text-sm text-white opacity-80 mt-3">{stats.newContacts} new inquiries</p>
              </div>
            </div>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          whileHover={{ y: -5, scale: 1.02 }}
        >
          <Link
            to="/admin/dashboard"
            className="block bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-white bg-opacity-20 rounded-xl backdrop-blur-sm">
                  <FaChartLine className="text-3xl text-white" />
                </div>
                <span className="flex items-center text-sm font-semibold px-3 py-1 rounded-full bg-green-100 text-green-700">
                  <FaArrowUp className="mr-1" /> 15%
                </span>
              </div>
              <div>
                <p className="text-white text-sm font-medium opacity-90 uppercase tracking-wide">Page Views</p>
                <p className="text-5xl font-bold text-white mt-2">12.5K</p>
                <p className="text-sm text-white opacity-80 mt-3">Last 30 days</p>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Website Traffic Chart */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                <FaChartBar className="mr-3 text-primary-600" />
                Website Traffic
              </h2>
              <p className="text-gray-600 text-sm mt-1">Weekly visitor statistics</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={trafficData}>
              <defs>
                <linearGradient id="colorVisits" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorPageViews" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="name" stroke="#6B7280" />
              <YAxis stroke="#6B7280" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#fff', border: '1px solid #E5E7EB', borderRadius: '8px' }}
              />
              <Legend />
              <Area type="monotone" dataKey="visits" stroke="#3B82F6" fillOpacity={1} fill="url(#colorVisits)" />
              <Area type="monotone" dataKey="pageViews" stroke="#10B981" fillOpacity={1} fill="url(#colorPageViews)" />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Content Distribution */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-2xl shadow-lg p-6"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <FaFileAlt className="mr-3 text-primary-600" />
            Content Distribution
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 space-y-2">
            {categoryData.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }}></div>
                  <span className="text-sm font-medium text-gray-700">{item.name}</span>
                </div>
                <span className="text-sm font-bold text-gray-900">{item.value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-lg p-6"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            to="/admin/blogs/new"
            className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-xl"
          >
            <div className="absolute top-0 right-0 opacity-10">
              <FaPlus className="text-9xl transform translate-x-8 -translate-y-4" />
            </div>
            <div className="relative z-10">
              <FaEdit className="text-4xl mb-3" />
              <h3 className="font-bold text-lg mb-1">Create Blog Post</h3>
              <p className="text-sm text-blue-100">Write and publish new content</p>
            </div>
          </Link>

          <Link
            to="/admin/gallery"
            className="group relative overflow-hidden bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-md hover:shadow-xl"
          >
            <div className="absolute top-0 right-0 opacity-10">
              <FaCamera className="text-9xl transform translate-x-8 -translate-y-4" />
            </div>
            <div className="relative z-10">
              <FaImages className="text-4xl mb-3" />
              <h3 className="font-bold text-lg mb-1">Upload Images</h3>
              <p className="text-sm text-green-100">Add photos to gallery</p>
            </div>
          </Link>

          <Link
            to="/admin/contacts"
            className="group relative overflow-hidden bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-white hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-md hover:shadow-xl"
          >
            <div className="absolute top-0 right-0 opacity-10">
              <FaEnvelope className="text-9xl transform translate-x-8 -translate-y-4" />
            </div>
            <div className="relative z-10">
              <FaEnvelope className="text-4xl mb-3" />
              <h3 className="font-bold text-lg mb-1">View Contacts</h3>
              <p className="text-sm text-orange-100">Manage inquiries</p>
            </div>
          </Link>
        </div>
      </motion.div>

      {/* Recent Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Blogs */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-2xl shadow-lg p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center">
              <FaBlog className="mr-3 text-primary-600" />
              Recent Blogs
            </h2>
            <Link
              to="/admin/blogs"
              className="text-primary-600 hover:text-primary-700 text-sm font-semibold flex items-center"
            >
              View All <span className="ml-1">→</span>
            </Link>
          </div>
          <div className="space-y-4">
            {recentBlogs.length > 0 ? (
              recentBlogs.map((blog, index) => (
                <motion.div
                  key={blog._id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4 p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors border border-gray-100"
                >
                  {blog.featuredImage && (
                    <img
                      src={
                        typeof blog.featuredImage === 'string'
                          ? `${import.meta.env.VITE_API_URL.replace('/api', '')}${blog.featuredImage}`
                          : blog.featuredImage?.en
                            ? `${import.meta.env.VITE_API_URL.replace('/api', '')}${blog.featuredImage.en}`
                            : ''
                      }
                      alt={blog.title?.en || blog.title || 'Blog image'}
                      className="w-20 h-20 rounded-lg object-cover shadow-md"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/80x80?text=No+Image';
                      }}
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 truncate mb-1">
                      {blog.title?.en || blog.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                      {blog.excerpt?.en || blog.excerpt}
                    </p>
                    <div className="flex items-center space-x-2">
                      <span
                        className={`text-xs px-3 py-1 rounded-full font-medium ${
                          blog.isPublished
                            ? 'bg-green-100 text-green-700'
                            : 'bg-yellow-100 text-yellow-700'
                        }`}
                      >
                        {blog.isPublished ? '✓ Published' : '⏳ Draft'}
                      </span>
                      <span className="text-xs px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">
                        {blog.category}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-12">
                <FaBlog className="text-6xl text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 mb-4">No blogs yet</p>
                <Link
                  to="/admin/blogs/new"
                  className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors font-medium"
                >
                  Create Your First Blog
                </Link>
              </div>
            )}
          </div>
        </motion.div>

        {/* Recent Contacts */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-2xl shadow-lg p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center">
              <FaEnvelope className="mr-3 text-primary-600" />
              Recent Contacts
            </h2>
            <Link
              to="/admin/contacts"
              className="text-primary-600 hover:text-primary-700 text-sm font-semibold flex items-center"
            >
              View All <span className="ml-1">→</span>
            </Link>
          </div>
          <div className="space-y-4">
            {recentContacts.length > 0 ? (
              recentContacts.map((contact, index) => (
                <motion.div
                  key={contact._id}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 border-2 border-gray-100 rounded-xl hover:border-primary-300 hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-900">{contact.name}</h3>
                      <p className="text-sm text-gray-600">{contact.email}</p>
                    </div>
                    <span
                      className={`text-xs px-3 py-1 rounded-full font-medium whitespace-nowrap ${
                        contact.status === 'new'
                          ? 'bg-blue-100 text-blue-700'
                          : contact.status === 'read'
                          ? 'bg-yellow-100 text-yellow-700'
                          : contact.status === 'replied'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {contact.status === 'new' && <FaExclamationCircle className="inline mr-1" />}
                      {contact.status === 'replied' && <FaCheckCircle className="inline mr-1" />}
                      {contact.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 line-clamp-2 bg-gray-50 p-3 rounded-lg">
                    {contact.message}
                  </p>
                  <div className="flex items-center text-xs text-gray-500 mt-2">
                    <FaClock className="mr-1" />
                    {new Date(contact.createdAt).toLocaleDateString()}
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-12">
                <FaEnvelope className="text-6xl text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">No contact submissions yet</p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
