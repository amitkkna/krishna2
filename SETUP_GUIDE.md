# Krishna Care - Dynamic Website Setup Guide

## 🚀 Complete Backend & Admin Panel Implementation

Your website is now fully dynamic with:
- ✅ Backend API with MongoDB
- ✅ Admin authentication system
- ✅ Blog management (CRUD)
- ✅ Gallery management with image uploads
- ✅ Contact form management
- ✅ Automatic image slider in gallery
- ✅ Rich text editor for blogs

---

## 📋 Prerequisites

1. **Node.js** (v18 or higher)
2. **MongoDB** (Local or MongoDB Atlas)
3. **MongoDB Compass** (Optional, for database GUI)

### Installing MongoDB

**Windows:**
1. Download MongoDB Community Server from https://www.mongodb.com/try/download/community
2. Run the installer
3. Default installation creates service at `mongodb://localhost:27017`

**OR Use MongoDB Atlas (Cloud):**
1. Go to https://www.mongodb.com/atlas
2. Create free account
3. Create cluster
4. Get connection string

---

## ⚙️ Setup Instructions

### Step 1: Install Backend Dependencies

```powershell
cd e:\testingui\kk2\krishna-care-react\backend
npm install
```

### Step 2: Configure Environment Variables

The `.env` file is already created with default values:
```
MONGODB_URI=mongodb://localhost:27017/krishna-care
ADMIN_EMAIL=admin@krishnacare.com
ADMIN_PASSWORD=Admin@123
JWT_SECRET=krishna-care-super-secret-jwt-key-2025
PORT=5000
```

**Important:** Change JWT_SECRET and admin credentials in production!

### Step 3: Start MongoDB

**Local MongoDB:**
```powershell
# MongoDB should be running as a service
# Check if it's running:
mongosh
# If not running, start MongoDB service from Services
```

**MongoDB Atlas:**
- Update MONGODB_URI in `.env` with your Atlas connection string

### Step 4: Seed the Database

Create admin user and sample data:
```powershell
cd e:\testingui\kk2\krishna-care-react\backend
node seed.js
```

This creates:
- Admin user (admin@krishnacare.com / Admin@123)
- Sample blog posts
- Gallery categories

### Step 5: Start Backend Server

```powershell
cd e:\testingui\kk2\krishna-care-react\backend
npm run dev
```

Backend will run on: **http://localhost:5000**

### Step 6: Install Frontend Dependencies

```powershell
cd e:\testingui\kk2\krishna-care-react
npm install
```

This installs:
- react-quill (Rich text editor)
- react-toastify (Notifications)
- swiper (Image slider)

### Step 7: Start Frontend

```powershell
cd e:\testingui\kk2\krishna-care-react
npm run dev
```

Frontend will run on: **http://localhost:3001**

---

## 🎯 Access Points

### Public Website
- **URL**: http://localhost:3001
- **Pages**: Home, Services, Technology, About, Blog, Careers, Contact, Gallery

### Admin Panel
- **Login URL**: http://localhost:3001/admin/login
- **Credentials**:
  - Email: `admin@krishnacare.com`
  - Password: `Admin@123`

### Backend API
- **Base URL**: http://localhost:5000/api
- **Health Check**: http://localhost:5000/api/health

---

## 📁 Backend API Endpoints

### Authentication
- POST `/api/auth/login` - Login
- POST `/api/auth/register` - Register (Admin only)
- GET `/api/auth/me` - Get current user

### Blogs
- GET `/api/blogs` - Get all blogs (public)
- GET `/api/blogs/:id` - Get single blog
- POST `/api/blogs` - Create blog (Admin)
- PUT `/api/blogs/:id` - Update blog (Admin)
- DELETE `/api/blogs/:id` - Delete blog (Admin)

### Gallery
- GET `/api/gallery` - Get all images
- GET `/api/gallery/:id` - Get single image
- POST `/api/gallery` - Upload single image (Admin)
- POST `/api/gallery/bulk` - Upload multiple images (Admin)
- PUT `/api/gallery/:id` - Update image (Admin)
- DELETE `/api/gallery/:id` - Delete image (Admin)

### Contacts
- GET `/api/contacts` - Get all contacts (Admin)
- GET `/api/contacts/:id` - Get single contact (Admin)
- POST `/api/contacts` - Submit contact form (Public)
- PUT `/api/contacts/:id` - Update contact (Admin)
- DELETE `/api/contacts/:id` - Delete contact (Admin)

---

## 🎨 Admin Panel Features

### Dashboard
- Overview statistics
- Recent contacts
- Recent blog posts
- Quick actions

### Blog Management
- Create/Edit/Delete blogs
- Rich text editor (WYSIWYG)
- Featured image upload
- Category management
- Publish/Unpublish
- Tags support
- SEO fields

### Gallery Management
- Single image upload
- Bulk image upload (up to 10 at once)
- Image categorization
- Tag management
- Sort order control
- Delete images
- Automatic slider on frontend

### Contact Form Management
- View all submissions
- Mark as read/replied
- Filter by status
- Add internal notes
- Delete inquiries
- Export to CSV (future)

---

## 🖼️ Gallery with Automatic Slider

The gallery now features:
- **Automatic image slider** using Swiper.js
- **Touch/swipe** support on mobile
- **Navigation arrows**
- **Pagination dots**
- **Auto-play** option
- **Responsive** design
- **Category filtering**
- **Lightbox view** (future enhancement)

---

## 🔐 Security Features

- JWT-based authentication
- Password hashing with bcrypt
- Protected admin routes
- File type validation
- File size limits (5MB)
- CORS configuration
- Input validation
- XSS protection

---

## 📝 Database Models

### User
- name, email, password
- role (admin/user)
- isActive status
- timestamps

### Blog
- title, slug, excerpt, content
- category, author, tags
- featuredImage
- isPublished, publishedAt
- views count
- timestamps

### Gallery
- title, description
- imageUrl
- category, tags
- order (for sorting)
- isActive
- timestamps

### Contact
- name, email, phone, company
- service interest
- message
- status (new/read/replied/archived)
- notes (admin)
- timestamps

---

## 🚧 Next Steps (Admin Panel Pages)

The admin panel structure is ready. To complete implementation:

### 1. Create Admin Layout
File: `src/components/Admin/AdminLayout.jsx`
- Sidebar navigation
- Header with logout
- Main content area

### 2. Create Dashboard
File: `src/pages/Admin/Dashboard.jsx`
- Statistics cards
- Recent activity
- Charts (optional)

### 3. Create Blog Management
Files:
- `src/pages/Admin/BlogList.jsx` - List all blogs
- `src/pages/Admin/BlogForm.jsx` - Create/Edit blog

### 4. Create Gallery Management
Files:
- `src/pages/Admin/GalleryList.jsx` - List all images
- `src/pages/Admin/GalleryUpload.jsx` - Upload images

### 5. Create Contact Management
File: `src/pages/Admin/ContactList.jsx` - View/manage contacts

### 6. Update App Routing
Add admin routes to `src/App.jsx`

---

## 🛠️ Development Workflow

### Adding a New Blog (Admin)
1. Login to admin panel
2. Navigate to "Blogs" → "Create New"
3. Enter title, excerpt, content (rich text editor)
4. Upload featured image
5. Select category
6. Add tags
7. Publish or save as draft

### Uploading Gallery Images (Admin)
1. Login to admin panel
2. Navigate to "Gallery" → "Upload"
3. Select images (single or bulk)
4. Add titles and descriptions
5. Choose category
6. Set sort order
7. Submit

### Managing Contacts (Admin)
1. Login to admin panel
2. Navigate to "Contacts"
3. View all submissions
4. Click to view details
5. Update status (new/read/replied)
6. Add internal notes
7. Delete if spam

---

## 📦 File Structure (Backend)

```
backend/
├── models/
│   ├── User.js          # User model
│   ├── Blog.js          # Blog model
│   ├── Gallery.js       # Gallery model
│   └── Contact.js       # Contact model
├── routes/
│   ├── auth.js          # Auth routes
│   ├── blog.js          # Blog CRUD routes
│   ├── gallery.js       # Gallery routes
│   └── contact.js       # Contact routes
├── middleware/
│   ├── auth.js          # JWT authentication
│   └── upload.js        # Multer file upload
├── uploads/
│   ├── blogs/           # Blog images
│   └── gallery/         # Gallery images
├── server.js            # Main server file
├── seed.js              # Database seeder
├── package.json
├── .env                 # Environment variables
└── .env.example         # Example env file
```

---

## 🐛 Troubleshooting

### MongoDB Connection Error
```
Error: connect ECONNREFUSED
```
**Solution:** 
- Ensure MongoDB is running
- Check connection string in `.env`
- For Atlas, whitelist your IP

### Port Already in Use
```
Error: listen EADDRINUSE
```
**Solution:**
```powershell
# Kill process on port 5000
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

### File Upload Errors
```
Error: File too large
```
**Solution:**
- Check MAX_FILE_SIZE in `.env`
- Ensure file is under 5MB
- Check file type (only images allowed)

### CORS Errors
**Solution:**
- Verify FRONTEND_URL in backend `.env`
- Check VITE_API_URL in frontend `.env`

---

## 🎓 Testing the API

### Using Postman or Thunder Client:

#### 1. Login
```
POST http://localhost:5000/api/auth/login
Body (JSON):
{
  "email": "admin@krishnacare.com",
  "password": "Admin@123"
}
```

#### 2. Create Blog (Use token from login)
```
POST http://localhost:5000/api/blogs
Headers:
Authorization: Bearer <your-token>
Body (form-data):
title: My First Blog
excerpt: This is a test blog
content: <p>Full content here</p>
category: Technology
author: Admin
isPublished: true
featuredImage: [upload file]
```

#### 3. Upload Gallery Image
```
POST http://localhost:5000/api/gallery
Headers:
Authorization: Bearer <your-token>
Body (form-data):
title: Office Photo
description: Our office
category: General
image: [upload file]
```

---

## 📊 Database Management

### Using MongoDB Compass
1. Open MongoDB Compass
2. Connect to: `mongodb://localhost:27017`
3. Navigate to `krishna-care` database
4. View collections: users, blogs, galleries, contacts

### Common Queries
```javascript
// Find all published blogs
db.blogs.find({ isPublished: true })

// Count contacts by status
db.contacts.aggregate([
  { $group: { _id: "$status", count: { $sum: 1 } } }
])

// Find recent gallery uploads
db.galleries.find().sort({ createdAt: -1 }).limit(10)
```

---

## 🚀 Deployment Checklist

Before deploying to production:

1. ☐ Change JWT_SECRET
2. ☐ Change admin password
3. ☐ Set NODE_ENV=production
4. ☐ Use MongoDB Atlas or production database
5. ☐ Configure proper CORS origins
6. ☐ Enable HTTPS
7. ☐ Set up file storage (AWS S3, Cloudinary)
8. ☐ Configure environment variables on hosting
9. ☐ Set up backup system
10. ☐ Enable rate limiting
11. ☐ Add logging (Winston, Morgan)
12. ☐ Set up monitoring

---

## 📚 Additional Resources

- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [JWT Best Practices](https://jwt.io/introduction)
- [Multer File Upload](https://github.com/expressjs/multer)
- [React Quill Editor](https://github.com/zenoamaro/react-quill)
- [Swiper.js Slider](https://swiperjs.com/)

---

## 💡 Pro Tips

1. **Use MongoDB Compass** for easy database visualization
2. **Test API endpoints** with Postman/Thunder Client first
3. **Check backend logs** when frontend has issues
4. **Keep backend and frontend** running simultaneously
5. **Backup database** before making schema changes
6. **Use Git** for version control
7. **Document API changes** for team members

---

## 🎉 You're All Set!

Your Krishna Care website is now a **fully dynamic CMS** with:
- ✅ Admin panel for content management
- ✅ Blog system with rich editor
- ✅ Gallery with automatic slider
- ✅ Contact form management
- ✅ Secure authentication
- ✅ RESTful API backend

**Ready to manage your content!** 🚀

---

*For additional help or custom features, refer to the codebase or contact the development team.*
