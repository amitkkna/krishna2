# 🚀 Krishna Care - Dynamic Logistics Website

A modern, dynamic logistics website with a complete **Admin Panel** for managing blogs, gallery, and contact forms.

## ✨ Key Features

- ✅ **Dynamic Content Management** - Full admin panel for content control
- ✅ **Blog System** - Create, edit, and publish blog posts with rich text editor
- ✅ **Gallery Management** - Upload single/bulk images with automatic slider
- ✅ **Contact Form Management** - Receive and manage customer inquiries
- ✅ **Secure Authentication** - JWT-based admin authentication
- ✅ **Responsive Design** - Works on all devices
- ✅ **Modern UI/UX** - Built with React and Tailwind CSS
- ✅ **Performance Optimized** - Fast loading with Vite

## 🛠️ Technology Stack

**Frontend:**
- React.js 18 + Vite 5
- React Router DOM v6
- Tailwind CSS 3
- React Quill (Rich Text Editor)
- React Toastify (Notifications)
- Swiper.js (Image Slider)
- Framer Motion (Animations)
- Axios (HTTP Client)

**Backend:**
- Node.js + Express
- MongoDB + Mongoose
- JWT Authentication
- Multer (File Uploads)
- bcryptjs (Password Hashing)

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (Local or MongoDB Atlas)

### Automated Installation (Recommended)

Run the installation script in PowerShell:
```powershell
.\install.ps1
```

### Manual Installation

1. Install frontend dependencies:
```powershell
npm install
```

2. Install backend dependencies:
```powershell
cd backend
npm install
```

3. Seed the database:
```powershell
cd backend
node seed.js
```

### Starting the Application

**Option 1 - Automated (Recommended):**
```powershell
.\start.ps1
```

**Option 2 - Manual:**

Terminal 1 - Backend:
```powershell
cd backend
npm run dev
```

Terminal 2 - Frontend:
```powershell
npm run dev
```

### Access Points

- **Website:** http://localhost:3001
- **Admin Panel:** http://localhost:3001/admin/login
- **Backend API:** http://localhost:5000/api

**Admin Credentials:**
- Email: `admin@krishnacare.com`
- Password: `Admin@123`

## 📁 Project Structure

```
krishna-care-react/
├── backend/                 # Backend API
│   ├── models/             # Database models (User, Blog, Gallery, Contact)
│   ├── routes/             # API routes (auth, blog, gallery, contact)
│   ├── middleware/         # Auth & upload middleware
│   ├── uploads/            # Uploaded images
│   ├── server.js           # Express server
│   ├── seed.js             # Database seeder
│   └── .env                # Backend configuration
├── src/
│   ├── components/
│   │   ├── Admin/          # Admin panel components
│   │   └── Layout/         # Public website layout
│   ├── pages/
│   │   ├── Admin/          # Admin pages (Dashboard, Blog, Gallery, Contacts)
│   │   └── [Public Pages]  # Website pages
│   ├── services/
│   │   ├── api.js          # Axios configuration
│   │   └── apiService.js   # API service functions
│   └── App.jsx             # Main app with routing
├── install.ps1             # Automated installation script
├── start.ps1               # Start both servers script
├── SETUP_GUIDE.md          # Detailed documentation
└── README.md               # This file
```

## 🎯 Admin Panel Features

### 📝 Blog Management
- Create/edit blog posts with rich text editor (WYSIWYG)
- Upload featured images
- Add categories, tags, and author info
- Publish immediately or save as draft
- View count tracking
- Delete posts

### 🖼️ Gallery Management
- Upload single images with details
- Bulk upload (up to 10 images at once)
- Organize by categories (Operations, Warehouse, Fleet, Team, Events, Technology)
- Automatic slider display on frontend
- Delete images
- Tag and search functionality

### 📧 Contact Management
- View all contact form submissions
- Update status (new, read, replied, archived)
- Add internal notes
- Reply directly via email
- Filter by status
- Delete old inquiries

### 📊 Dashboard
- Overview statistics
- Recent blog posts
- Recent contact submissions
- Quick action buttons

## 📚 Documentation

- **Quick Start:** This file
- **Detailed Setup Guide:** `SETUP_GUIDE.md` (comprehensive documentation)
- **API Documentation:** See `SETUP_GUIDE.md` for all API endpoints

## 🐛 Common Issues & Solutions

### MongoDB Connection Error
- Ensure MongoDB is running
- Or use MongoDB Atlas connection string

### Port Already in Use
```powershell
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

### File Upload Errors
- Check file size (max 5MB)
- Ensure only image files
- Check backend/uploads permissions

See `SETUP_GUIDE.md` for more troubleshooting.

## 🔒 Security Notes

⚠️ **Before Production:**
1. Change `JWT_SECRET` in backend/.env
2. Change admin password
3. Use HTTPS
4. Set up proper CORS
5. Enable rate limiting
6. Use MongoDB Atlas with access controls

## 🎉 You're Ready!

Start managing your content at: **http://localhost:3001/admin/login**

For detailed instructions, see **SETUP_GUIDE.md**

---

**Built with ❤️ for Krishna Care Logistics**
