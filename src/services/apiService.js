import api from './api';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Create a public API instance without auth interceptors
const publicApi = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const authService = {
  login: async (email, password) => {
    const response = await api.post('/auth/login', { email, password });
    if (response.data.success) {
      localStorage.setItem('token', response.data.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.data));
    }
    return response.data;
  },

  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },

  getCurrentUser: async () => {
    const response = await api.get('/auth/me');
    return response.data;
  },

  getUser: () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },

  isAuthenticated: () => {
    return !!localStorage.getItem('token');
  }
};

export const blogService = {
  // Public method - fetches only published blogs (no auth token)
  getAll: async (params = {}) => {
    const response = await publicApi.get('/blogs', { params });
    return response.data;
  },

  // Admin method - fetches all blogs (with auth token)
  getAllAdmin: async (params = {}) => {
    const response = await api.get('/blogs', { params });
    return response.data;
  },

  getOne: async (id) => {
    const response = await api.get(`/blogs/${id}`);
    return response.data;
  },

  create: async (formData) => {
    const response = await api.post('/blogs', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return response.data;
  },

  update: async (id, formData) => {
    const response = await api.put(`/blogs/${id}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return response.data;
  },

  delete: async (id) => {
    const response = await api.delete(`/blogs/${id}`);
    return response.data;
  }
};

export const galleryService = {
  getAll: async (params = {}) => {
    const response = await api.get('/gallery', { params });
    return response.data;
  },

  getFolders: async (params = {}) => {
    const response = await api.get('/gallery/folders', { params });
    return response.data;
  },

  getByFolder: async (folderName, params = {}) => {
    const response = await api.get(`/gallery/folder/${folderName}`, { params });
    return response.data;
  },

  getOne: async (id) => {
    const response = await api.get(`/gallery/${id}`);
    return response.data;
  },

  uploadSingle: async (formData) => {
    const response = await api.post('/gallery', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return response.data;
  },

  uploadBulk: async (formData) => {
    const response = await api.post('/gallery/bulk', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return response.data;
  },

  update: async (id, formData) => {
    const response = await api.put(`/gallery/${id}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return response.data;
  },

  delete: async (id) => {
    const response = await api.delete(`/gallery/${id}`);
    return response.data;
  }
};

export const contactService = {
  getAll: async (params = {}) => {
    const response = await api.get('/contacts', { params });
    return response.data;
  },

  getOne: async (id) => {
    const response = await api.get(`/contacts/${id}`);
    return response.data;
  },

  submit: async (data) => {
    const response = await api.post('/contacts', data);
    return response.data;
  },

  update: async (id, data) => {
    const response = await api.put(`/contacts/${id}`, data);
    return response.data;
  },

  delete: async (id) => {
    const response = await api.delete(`/contacts/${id}`);
    return response.data;
  }
};

export const newsletterService = {
  subscribe: async (email) => {
    const response = await api.post('/newsletter/subscribe', { email });
    return response.data;
  },

  getAll: async (params = {}) => {
    const response = await api.get('/newsletter', { params });
    return response.data;
  },

  delete: async (id) => {
    const response = await api.delete(`/newsletter/${id}`);
    return response.data;
  },

  toggleStatus: async (id) => {
    const response = await api.put(`/newsletter/${id}/toggle`);
    return response.data;
  },

  exportCSV: async () => {
    const response = await api.get('/newsletter/export/csv', {
      responseType: 'blob'
    });
    return response.data;
  }
};
