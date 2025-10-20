# 🚀 Krishna Care Website - GitHub & Netlify Deployment Guide

This guide will help you deploy your Krishna Care website to GitHub and Netlify with a fully functional backend.

## 📋 Table of Contents
1. [Prerequisites](#prerequisites)
2. [Backend Deployment Options](#backend-deployment-options)
3. [GitHub Setup](#github-setup)
4. [Backend Deployment (Render.com - Recommended)](#backend-deployment-render)
5. [Frontend Deployment (Netlify)](#frontend-deployment-netlify)
6. [Environment Configuration](#environment-configuration)
7. [Testing Deployment](#testing-deployment)

---

## Prerequisites

Before starting, ensure you have:
- ✅ GitHub account (create at [github.com](https://github.com))
- ✅ Netlify account (create at [netlify.com](https://netlify.com))
- ✅ Backend hosting account (Render.com recommended - free tier available)
- ✅ MongoDB Atlas account for cloud database (free tier available)
- ✅ Git installed on your computer

---

## Backend Deployment Options

Since Netlify doesn't support Node.js backend servers, you need to host your backend separately. Here are the best options:

### **Option 1: Render.com (Recommended - Free Tier)**
- ✅ Free tier available
- ✅ Auto-deploys from GitHub
- ✅ Easy MongoDB Atlas integration
- ✅ Automatic HTTPS
- ✅ Good performance

### **Option 2: Railway.app**
- ✅ Free $5/month credit
- ✅ Simple deployment
- ✅ Good documentation

### **Option 3: Heroku**
- ⚠️ No longer has free tier
- ✅ Very reliable
- ✅ Well-documented

**We'll use Render.com in this guide (free & reliable)**

---

## 🗄️ Step 1: Setup MongoDB Atlas (Cloud Database)

### 1.1 Create MongoDB Atlas Account
1. Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Sign up for free account
3. Create a new FREE cluster (M0 tier)
4. Choose a cloud provider and region (closest to your users)
5. Wait 3-5 minutes for cluster to be created

### 1.2 Configure Database Access
1. Click **"Database Access"** in left sidebar
2. Click **"Add New Database User"**
3. Choose **"Password"** authentication
4. Create username: `krishnacare_admin`
5. Generate a strong password (save it securely!)
6. Set user privileges to: **"Read and write to any database"**
7. Click **"Add User"**

### 1.3 Configure Network Access
1. Click **"Network Access"** in left sidebar
2. Click **"Add IP Address"**
3. Click **"Allow Access from Anywhere"** (0.0.0.0/0)
   - ⚠️ This is needed for Render.com and Netlify to connect
4. Click **"Confirm"**

### 1.4 Get Connection String
1. Click **"Database"** in left sidebar
2. Click **"Connect"** button on your cluster
3. Choose **"Connect your application"**
4. Copy the connection string (looks like):
   ```
   mongodb+srv://krishnacare_admin:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
5. Replace `<password>` with your actual database password
6. Add database name before the `?` symbol:
   ```
   mongodb+srv://krishnacare_admin:YourPassword@cluster0.xxxxx.mongodb.net/krishna_care?retryWrites=true&w=majority
   ```
7. **Save this connection string** - you'll need it later!

---

## 📂 Step 2: GitHub Setup

### 2.1 Initialize Git Repository (if not already done)
```powershell
cd E:\testingui\kk2\krishna-care-react
git init
```

### 2.2 Create .gitignore file (if not exists)
Make sure your `.gitignore` includes:
```
# Dependencies
node_modules/
backend/node_modules/

# Environment variables
.env
.env.local
.env.production
backend/.env

# Build files
dist/
build/

# Logs
*.log
npm-debug.log*
backend/uploads/

# OS files
.DS_Store
Thumbs.db
```

### 2.3 Commit Your Code
```powershell
git add .
git commit -m "Initial commit - Krishna Care Website"
```

### 2.4 Create GitHub Repository
1. Go to [github.com](https://github.com)
2. Click **"+"** (top-right) → **"New repository"**
3. Repository name: `krishna-care-website`
4. Description: `Krishna Care C&F and Logistics Website`
5. Choose **"Private"** (recommended) or **"Public"**
6. **DO NOT** initialize with README (you already have code)
7. Click **"Create repository"**

### 2.5 Push to GitHub
```powershell
# Replace YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/krishna-care-website.git
git branch -M main
git push -u origin main
```

---

## 🖥️ Step 3: Backend Deployment (Render.com)

### 3.1 Create Render Account
1. Go to [render.com](https://render.com)
2. Sign up using your GitHub account (easiest)
3. Authorize Render to access your GitHub repositories

### 3.2 Create New Web Service
1. Click **"New +"** → **"Web Service"**
2. Click **"Connect a repository"**
3. Find and select `krishna-care-website`
4. Click **"Connect"**

### 3.3 Configure Web Service
Fill in these settings:

| Setting | Value |
|---------|-------|
| **Name** | `krishna-care-backend` |
| **Region** | Choose closest to India (e.g., Singapore) |
| **Branch** | `main` |
| **Root Directory** | `backend` |
| **Runtime** | `Node` |
| **Build Command** | `npm install` |
| **Start Command** | `npm start` |
| **Instance Type** | `Free` |

### 3.4 Add Environment Variables
Click **"Advanced"** → **"Add Environment Variable"**

Add these variables:

```
MONGODB_URI=mongodb+srv://krishnacare_admin:YourPassword@cluster0.xxxxx.mongodb.net/krishna_care?retryWrites=true&w=majority
PORT=5000
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production_123456
FRONTEND_URL=http://localhost:3001
NODE_ENV=production
```

**Important Notes:**
- Replace `MONGODB_URI` with your actual MongoDB Atlas connection string
- Generate a strong random string for `JWT_SECRET`
- We'll update `FRONTEND_URL` after deploying to Netlify

### 3.5 Deploy Backend
1. Click **"Create Web Service"**
2. Wait 5-10 minutes for deployment
3. Once deployed, you'll see: **"Your service is live 🎉"**
4. Copy your backend URL (looks like): `https://krishna-care-backend.onrender.com`
5. **Save this URL** - you'll need it for frontend!

### 3.6 Test Backend
Open in browser: `https://krishna-care-backend.onrender.com/api/health`

You should see:
```json
{
  "status": "OK",
  "message": "Krishna Care Backend API is running",
  "timestamp": "2025-10-12T..."
}
```

---

## 🌐 Step 4: Frontend Deployment (Netlify)

### 4.1 Create Production Environment File
Create `.env.production` in your project root:

```env
VITE_API_URL=https://krishna-care-backend.onrender.com/api
```

Replace the URL with your actual Render backend URL.

### 4.2 Update API Configuration
Check that your API configuration uses environment variables:

**src/config/api.js** (if it exists) or where you configure axios:
```javascript
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
```

### 4.3 Commit Environment File
```powershell
git add .env.production
git commit -m "Add production environment configuration"
git push
```

### 4.4 Create Netlify Account
1. Go to [netlify.com](https://netlify.com)
2. Sign up using your GitHub account
3. Authorize Netlify to access your repositories

### 4.5 Deploy to Netlify
1. Click **"Add new site"** → **"Import an existing project"**
2. Click **"Deploy with GitHub"**
3. Choose `krishna-care-website` repository
4. Configure build settings:

| Setting | Value |
|---------|-------|
| **Branch to deploy** | `main` |
| **Base directory** | (leave empty) |
| **Build command** | `npm run build` |
| **Publish directory** | `dist` |

5. Click **"Show advanced"** → **"Add environment variable"**
6. Add:
   ```
   VITE_API_URL=https://krishna-care-backend.onrender.com/api
   ```
7. Click **"Deploy site"**

### 4.6 Wait for Deployment
- Build takes 2-5 minutes
- Netlify will show build logs
- Once done, you'll see: **"Site is live"**

### 4.7 Configure Custom Domain (Optional)
1. Click **"Domain settings"**
2. Click **"Add custom domain"**
3. Follow instructions to add your domain (e.g., `krishnacare.com`)
4. Update DNS records as instructed
5. Netlify will automatically provide free HTTPS

### 4.8 Get Your Website URL
Your site will be available at:
```
https://random-name-123456.netlify.app
```

You can change this to a custom subdomain:
1. Click **"Site settings"** → **"Change site name"**
2. Enter: `krishna-care` (if available)
3. Your site becomes: `https://krishna-care.netlify.app`

---

## 🔄 Step 5: Update Backend CORS Settings

### 5.1 Update Backend Environment Variables
Go back to Render.com:
1. Click your backend service
2. Click **"Environment"** tab
3. Update `FRONTEND_URL` variable:
   ```
   FRONTEND_URL=https://krishna-care.netlify.app,http://localhost:3001
   ```
4. Click **"Save Changes"**
5. Backend will automatically redeploy (takes 2-3 minutes)

---

## ✅ Step 6: Testing Your Deployment

### 6.1 Test Frontend
Visit your Netlify URL: `https://krishna-care.netlify.app`

Check these pages:
- ✅ Home page loads
- ✅ Services page displays all services
- ✅ About page shows company info
- ✅ Assets page displays facilities
- ✅ Contact page opens

### 6.2 Test Backend Connection
1. Go to Contact page
2. Fill out contact form
3. Submit
4. Check if "Message sent successfully!" appears

### 6.3 Test Admin Panel
1. Visit: `https://krishna-care.netlify.app/admin/login`
2. Try logging in with default credentials:
   - Email: `admin@krishnacare.com`
   - Password: `Admin@123`
3. If login works, backend is connected! ✅

### 6.4 Test Blog Posts
1. Go to Blog page
2. Click on any blog post
3. Verify content loads correctly

---

## 🔧 Step 7: Create Default Admin User (Important!)

After first deployment, you need to create an admin user in MongoDB:

### Option A: Using MongoDB Compass (GUI Tool)
1. Download [MongoDB Compass](https://www.mongodb.com/products/compass)
2. Connect using your connection string
3. Select `krishna_care` database
4. Create `users` collection
5. Insert document:
```json
{
  "username": "admin",
  "email": "admin@krishnacare.com",
  "password": "$2a$10$XYZ...",
  "role": "admin",
  "isActive": true,
  "createdAt": "2025-10-12T00:00:00.000Z"
}
```

### Option B: Create Seed Script (Recommended)
Create `backend/scripts/createAdmin.js`:

```javascript
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

dotenv.config();

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    
    const User = mongoose.model('User', new mongoose.Schema({
      username: String,
      email: String,
      password: String,
      role: String,
      isActive: Boolean,
      createdAt: Date
    }));

    const hashedPassword = await bcrypt.hash('Admin@123', 10);
    
    await User.create({
      username: 'admin',
      email: 'admin@krishnacare.com',
      password: hashedPassword,
      role: 'admin',
      isActive: true,
      createdAt: new Date()
    });

    console.log('✅ Admin user created successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
};

createAdmin();
```

Run locally:
```powershell
cd backend
node scripts/createAdmin.js
```

---

## 📱 Step 8: Ongoing Updates

### When You Make Changes:

#### Frontend Changes:
```powershell
# Make your changes
git add .
git commit -m "Update: description of changes"
git push

# Netlify will automatically rebuild and deploy (2-3 minutes)
```

#### Backend Changes:
```powershell
# Make your changes in backend folder
git add backend/
git commit -m "Backend update: description"
git push

# Render will automatically rebuild and deploy (3-5 minutes)
```

### Manual Redeploy (if needed):
- **Netlify**: Site settings → Deploys → "Trigger deploy" → "Deploy site"
- **Render**: Service dashboard → "Manual Deploy" → "Deploy latest commit"

---

## 🔐 Security Checklist

Before going live:

- [ ] Change default admin password
- [ ] Use strong JWT_SECRET (32+ random characters)
- [ ] Enable MongoDB Atlas IP whitelist properly
- [ ] Set up regular database backups (MongoDB Atlas)
- [ ] Configure custom domain with HTTPS (Netlify does this automatically)
- [ ] Set up monitoring/alerts (Render has this built-in)
- [ ] Review CORS settings (only allow your actual domain)
- [ ] Add rate limiting to API endpoints (optional but recommended)

---

## 📊 Monitoring & Maintenance

### Render.com Monitoring:
- View logs: Service dashboard → "Logs" tab
- Monitor performance: "Metrics" tab
- Set up alerts: "Notifications" settings

### Netlify Monitoring:
- View build logs: Site → "Deploys" tab
- Analytics: "Analytics" tab (shows traffic)
- Forms submissions: "Forms" tab

### MongoDB Atlas:
- Monitor database: Cluster → "Metrics" tab
- View logs: "Logs" tab
- Set up alerts: "Alerts" tab

---

## 🆘 Troubleshooting

### Issue: Frontend can't connect to backend
**Solution:**
1. Check CORS settings in `backend/server.js`
2. Verify `FRONTEND_URL` in Render environment variables
3. Check browser console for specific error
4. Verify backend is actually running (visit `/api/health`)

### Issue: Build fails on Netlify
**Solution:**
1. Check build logs in Netlify dashboard
2. Verify `package.json` scripts are correct
3. Make sure all dependencies are listed in `package.json`
4. Try building locally: `npm run build`

### Issue: Backend deployment fails on Render
**Solution:**
1. Check logs in Render dashboard
2. Verify `package.json` in backend folder is correct
3. Check MongoDB connection string is correct
4. Make sure all required environment variables are set

### Issue: Admin login not working
**Solution:**
1. Check if admin user exists in MongoDB
2. Verify JWT_SECRET is set in backend environment
3. Check browser console for errors
4. Test backend directly: `POST /api/auth/login`

### Issue: Images not loading
**Solution:**
1. Check if uploads folder exists in backend
2. Verify static file serving in `server.js`
3. Check image URLs in database
4. Consider using cloud storage (Cloudinary, AWS S3)

---

## 🎯 Next Steps

1. **Custom Domain**: Configure your own domain (krishnacare.com)
2. **Email Service**: Set up actual email sending (SendGrid, Mailgun)
3. **Analytics**: Add Google Analytics
4. **SEO**: Add meta tags, sitemap, robots.txt
5. **Cloud Storage**: Move uploads to Cloudinary or AWS S3
6. **CDN**: Use Netlify's built-in CDN (automatic)
7. **Backups**: Set up automated database backups

---

## 📞 Support Resources

- **Render Docs**: [render.com/docs](https://render.com/docs)
- **Netlify Docs**: [docs.netlify.com](https://docs.netlify.com)
- **MongoDB Atlas**: [mongodb.com/docs/atlas](https://www.mongodb.com/docs/atlas/)
- **React + Vite**: [vitejs.dev/guide](https://vitejs.dev/guide/)

---

## 🎉 Congratulations!

Your Krishna Care website is now live and accessible worldwide! 🌍

**Your URLs:**
- Frontend: `https://krishna-care.netlify.app`
- Backend: `https://krishna-care-backend.onrender.com`
- Admin Panel: `https://krishna-care.netlify.app/admin`

Share your website with customers and start managing content through the admin panel!

---

## 💡 Pro Tips

1. **Free SSL**: Both Netlify and Render provide free HTTPS automatically
2. **Custom Domain**: Netlify makes it super easy to add your own domain
3. **Environment Variables**: Never commit `.env` files to Git
4. **Database Backups**: MongoDB Atlas has automatic backups on free tier
5. **Performance**: Render's free tier sleeps after 15 min inactivity (first request might be slow)
6. **Caching**: Netlify CDN caches your static files globally
7. **Logs**: Always check logs first when debugging issues
8. **Testing**: Test everything after each deployment

---

**Need Help?** Check the troubleshooting section or review Render/Netlify documentation.

Good luck with your deployment! 🚀
