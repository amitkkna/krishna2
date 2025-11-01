import { useState, useEffect } from 'react';
import { contactService } from '../../services/apiService';
import { toast } from 'react-toastify';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedContact, setSelectedContact] = useState(null);
  const [filters, setFilters] = useState({ status: '', page: 1, limit: 20 });
  const [pagination, setPagination] = useState({});

  useEffect(() => {
    fetchContacts();
  }, [filters]);

  const fetchContacts = async () => {
    try {
      setLoading(true);
      const response = await contactService.getAll(filters);
      
      // Handle the response structure from backend
      setContacts(response.data || []);
      setPagination({
        total: response.pagination?.total || 0,
        totalPages: response.pagination?.pages || 0,
        currentPage: response.pagination?.page || 1,
      });
    } catch (error) {
      console.error('Failed to fetch contacts:', error);
      toast.error('Failed to fetch contacts');
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (id, status) => {
    try {
      await contactService.update(id, { status });
      toast.success('Status updated successfully');
      fetchContacts();
      if (selectedContact?._id === id) {
        setSelectedContact({ ...selectedContact, status });
      }
    } catch (error) {
      toast.error('Failed to update status');
    }
  };

  const handleAddNote = async (id, notes) => {
    try {
      await contactService.update(id, { notes });
      toast.success('Note added successfully');
      fetchContacts();
      if (selectedContact?._id === id) {
        setSelectedContact({ ...selectedContact, notes });
      }
    } catch (error) {
      toast.error('Failed to add note');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this contact?')) return;

    try {
      await contactService.delete(id);
      toast.success('Contact deleted successfully');
      fetchContacts();
      if (selectedContact?._id === id) {
        setSelectedContact(null);
      }
    } catch (error) {
      toast.error('Failed to delete contact');
    }
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'new':
        return 'bg-blue-100 text-blue-800';
      case 'read':
        return 'bg-yellow-100 text-yellow-800';
      case 'replied':
        return 'bg-green-100 text-green-800';
      case 'archived':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const ContactDetailModal = ({ contact, onClose }) => {
    const [notes, setNotes] = useState(contact.notes || '');

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
            <h2 className="text-2xl font-bold">Contact Details</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>
          </div>

          <div className="p-6 space-y-4">
            {/* Status */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
              <select
                value={contact.status}
                onChange={(e) => handleStatusUpdate(contact._id, e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              >
                <option value="new">New</option>
                <option value="read">Read</option>
                <option value="replied">Replied</option>
                <option value="archived">Archived</option>
              </select>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <p className="mt-1 text-gray-900">{contact.name}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <p className="mt-1 text-gray-900">{contact.email}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <p className="mt-1 text-gray-900">{contact.phone || 'N/A'}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Company</label>
                <p className="mt-1 text-gray-900">{contact.company || 'N/A'}</p>
              </div>
            </div>

            {/* Service */}
            {contact.service && (
              <div>
                <label className="block text-sm font-medium text-gray-700">Service Interest</label>
                <p className="mt-1 text-gray-900">{contact.service}</p>
              </div>
            )}

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <p className="mt-1 text-gray-900 whitespace-pre-wrap bg-gray-50 p-4 rounded-lg">
                {contact.message}
              </p>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Internal Notes
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="Add internal notes here..."
              />
              <button
                onClick={() => handleAddNote(contact._id, notes)}
                className="mt-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700"
              >
                Save Notes
              </button>
            </div>

            {/* Timestamp */}
            <div className="text-sm text-gray-500">
              Submitted: {formatDate(contact.createdAt)}
            </div>

            {/* Actions */}
            <div className="flex space-x-2 pt-4 border-t">
              <a
                href={`mailto:${contact.email}`}
                className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 text-center"
              >
                Reply via Email
              </a>
              <button
                onClick={() => handleDelete(contact._id)}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Contact Form Management</h1>
        <div className="text-sm text-gray-600">
          Total: {pagination.total || 0} contacts
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setFilters({ ...filters, status: '', page: 1 })}
            className={`px-4 py-2 rounded-lg ${
              filters.status === ''
                ? 'bg-primary-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            All
          </button>
          {['new', 'read', 'replied', 'archived'].map((status) => (
            <button
              key={status}
              onClick={() => setFilters({ ...filters, status, page: 1 })}
              className={`px-4 py-2 rounded-lg capitalize ${
                filters.status === status
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Contacts List */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
        </div>
      ) : contacts.length > 0 ? (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Message
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Date
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {contacts.map((contact) => (
                <tr
                  key={contact._id}
                  className="hover:bg-gray-50 cursor-pointer"
                  onClick={() => setSelectedContact(contact)}
                >
                  <td className="px-6 py-4">
                    <div>
                      <div className="font-medium text-gray-900">{contact.name}</div>
                      <div className="text-sm text-gray-500">{contact.email}</div>
                      {contact.phone && (
                        <div className="text-sm text-gray-500">{contact.phone}</div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-gray-900 line-clamp-2 max-w-md">
                      {contact.message}
                    </p>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full capitalize ${getStatusColor(
                        contact.status
                      )}`}
                    >
                      {contact.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatDate(contact.createdAt)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedContact(contact);
                      }}
                      className="text-primary-600 hover:text-primary-900 mr-3"
                    >
                      View
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(contact._id);
                      }}
                      className="text-red-600 hover:text-red-900"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md p-12 text-center">
          <p className="text-gray-500 text-lg">No contacts found</p>
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

      {/* Detail Modal */}
      {selectedContact && (
        <ContactDetailModal contact={selectedContact} onClose={() => setSelectedContact(null)} />
      )}
    </div>
  );
};

export default ContactList;
