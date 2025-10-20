import api from './api';

const contactService = {
  // Submit contact form
  submitContact: async (contactData) => {
    const response = await api.post('/contacts', contactData);
    return response.data;
  },

  // Get all contacts (admin only)
  getAllContacts: async (filters = {}) => {
    const { status, search, page = 1, limit = 20 } = filters;
    const params = new URLSearchParams();
    
    if (status) params.append('status', status);
    if (search) params.append('search', search);
    params.append('page', page);
    params.append('limit', limit);
    
    const response = await api.get(`/contacts?${params.toString()}`);
    return response.data;
  },

  // Get single contact (admin only)
  getContact: async (id) => {
    const response = await api.get(`/contacts/${id}`);
    return response.data;
  },

  // Update contact (admin only)
  updateContact: async (id, updates) => {
    const response = await api.put(`/contacts/${id}`, updates);
    return response.data;
  },

  // Delete contact (admin only)
  deleteContact: async (id) => {
    const response = await api.delete(`/contacts/${id}`);
    return response.data;
  },

  // Bulk delete contacts (admin only)
  bulkDeleteContacts: async (ids) => {
    const response = await api.post('/contacts/bulk-delete', { ids });
    return response.data;
  }
};

export default contactService;
