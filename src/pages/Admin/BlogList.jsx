import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { blogService } from '../../services/apiService';
import { toast } from 'react-toastify';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    search: '',
    category: '',
    page: 1,
    limit: 10,
  });
  const [pagination, setPagination] = useState({});

  useEffect(() => {
    fetchBlogs();
  }, [filters]);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await blogService.getAllAdmin(filters);
      
      // Handle the response structure from backend
      setBlogs(response.data || []);
      setPagination({
        total: response.pagination?.total || 0,
        totalPages: response.pagination?.pages || 0,
        currentPage: response.pagination?.page || 1,
      });
    } catch (error) {
      console.error('Failed to fetch blogs:', error);
      toast.error('Failed to fetch blogs');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this blog?')) return;

    try {
      await blogService.delete(id);
      toast.success('Blog deleted successfully');
      fetchBlogs();
    } catch (error) {
      toast.error('Failed to delete blog');
    }
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Blog Management</h1>
        <Link
          to="/admin/blogs/new"
          className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center space-x-2"
        >
          <span>+</span>
          <span>Create New Blog</span>
        </Link>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Search blogs..."
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value, page: 1 })}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
          <select
            value={filters.category}
            onChange={(e) => setFilters({ ...filters, category: e.target.value, page: 1 })}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="">All Categories</option>
            <option value="Logistics">Logistics</option>
            <option value="Technology">Technology</option>
            <option value="Supply Chain">Supply Chain</option>
            <option value="News">News</option>
            <option value="Case Study">Case Study</option>
          </select>
          <button
            onClick={() => setFilters({ search: '', category: '', page: 1, limit: 10 })}
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Clear Filters
          </button>
        </div>
      </div>

      {/* Blog List */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
        </div>
      ) : blogs.length > 0 ? (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Blog
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Author
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Views
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {blogs.map((blog) => (
                <tr key={blog._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      {blog.featuredImage && (
                        <img
                          src={`${import.meta.env.VITE_API_URL.replace('/api', '')}${blog.featuredImage}`}
                          alt={blog.title}
                          className="w-16 h-16 rounded object-cover"
                          onError={(e) => {
                            console.error('Image load error:', blog.featuredImage);
                            e.target.src = 'https://via.placeholder.com/64x64?text=No+Image';
                          }}
                        />
                      )}
                      <div className="max-w-xs">
                        <div className="font-medium text-gray-900 truncate">{blog.title?.en || blog.title}</div>
                        {blog.title?.hi && (
                          <div className="text-xs text-gray-400 truncate">हिंदी: {blog.title.hi}</div>
                        )}
                        <div className="text-sm text-gray-500 truncate">{blog.excerpt?.en || blog.excerpt}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                      {blog.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {blog.author}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${
                        blog.isPublished
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {blog.isPublished ? 'Published' : 'Draft'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {blog.views || 0}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatDate(blog.createdAt)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <Link
                        to={`/admin/blogs/edit/${blog._id}`}
                        className="text-primary-600 hover:text-primary-900"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(blog._id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md p-12 text-center">
          <p className="text-gray-500 text-lg">No blogs found</p>
          <Link
            to="/admin/blogs/new"
            className="mt-4 inline-block bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
          >
            Create Your First Blog
          </Link>
        </div>
      )}

      {/* Pagination */}
      {pagination.totalPages > 1 && (
        <div className="flex justify-center items-center space-x-2">
          <button
            onClick={() => setFilters({ ...filters, page: filters.page - 1 })}
            disabled={filters.page === 1}
            className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
          >
            Previous
          </button>
          <span className="text-gray-600">
            Page {pagination.currentPage} of {pagination.totalPages}
          </span>
          <button
            onClick={() => setFilters({ ...filters, page: filters.page + 1 })}
            disabled={filters.page === pagination.totalPages}
            className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogList;
