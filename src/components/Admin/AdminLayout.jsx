import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { FaChartLine, FaBlog, FaImages, FaEnvelope, FaSignOutAlt, FaBars, FaTimes, FaUser } from 'react-icons/fa';
import { authService } from '../../services/apiService';
import { toast } from 'react-toastify';

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    authService.logout();
    toast.success('Logged out successfully');
    navigate('/admin/login');
  };

  const menuItems = [
    { path: '/admin/dashboard', icon: FaChartLine, label: 'Dashboard' },
    { path: '/admin/blogs', icon: FaBlog, label: 'Blogs' },
    { path: '/admin/gallery', icon: FaImages, label: 'Gallery' },
    { path: '/admin/contacts', icon: FaEnvelope, label: 'Contacts' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? 'w-72' : 'w-20'
        } bg-gradient-to-b from-primary-700 via-primary-800 to-primary-900 text-white transition-all duration-300 flex flex-col shadow-2xl`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-primary-600">
          <div className="flex items-center justify-between">
            {sidebarOpen ? (
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-primary-600 font-bold text-xl">KC</span>
                </div>
                <div>
                  <h2 className="text-xl font-bold">Krishna Care</h2>
                  <p className="text-xs text-primary-200">Admin Panel</p>
                </div>
              </div>
            ) : (
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg mx-auto">
                <span className="text-primary-600 font-bold">KC</span>
              </div>
            )}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-white hover:bg-primary-600 p-2 rounded-lg transition-colors ml-2"
            >
              {sidebarOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-6 px-3">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-4 py-4 mb-2 rounded-xl transition-all duration-200 group ${
                  isActive(item.path) 
                    ? 'bg-white bg-opacity-20 shadow-lg border-l-4 border-yellow-400' 
                    : 'hover:bg-white hover:bg-opacity-10'
                }`}
              >
                <Icon className={`text-2xl ${isActive(item.path) ? 'text-yellow-400' : 'text-white group-hover:text-yellow-300'}`} />
                {sidebarOpen && (
                  <span className={`ml-4 font-medium ${isActive(item.path) ? 'text-white' : 'text-gray-200 group-hover:text-white'}`}>
                    {item.label}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* User Profile & Logout */}
        <div className="p-4 border-t border-primary-600">
          {sidebarOpen && (
            <div className="bg-white bg-opacity-10 rounded-xl p-4 mb-3 backdrop-blur-sm">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-md">
                  <FaUser className="text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-white truncate">Admin User</p>
                  <p className="text-xs text-primary-200 truncate">admin@krishnacare.com</p>
                </div>
              </div>
            </div>
          )}
          <button
            onClick={handleLogout}
            className="flex items-center px-4 py-3 w-full hover:bg-red-500 hover:bg-opacity-20 rounded-xl transition-all duration-200 group"
          >
            <FaSignOutAlt className="text-xl text-red-300 group-hover:text-red-200" />
            {sidebarOpen && <span className="ml-4 font-medium text-red-300 group-hover:text-red-200">Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm z-10 border-b border-gray-200">
          <div className="flex items-center justify-between px-8 py-5">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">
                {menuItems.find((item) => item.path === location.pathname)?.label || 'Admin Panel'}
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                Manage your Krishna Care website content
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-3 bg-gray-50 px-4 py-2 rounded-xl border border-gray-200">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-600 to-primary-700 flex items-center justify-center text-white font-bold shadow-md">
                  <FaUser />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">Admin</p>
                  <p className="text-xs text-gray-500">Super Admin</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-gradient-to-br from-gray-50 to-gray-100 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
