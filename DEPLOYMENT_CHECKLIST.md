# 🚀 Quick Deployment Checklist

Use this checklist to ensure smooth deployment of your Krishna Care website.

## ☁️ Pre-Deployment Setup

### MongoDB Atlas
- [ ] Create free MongoDB Atlas account
- [ ] Create M0 (free) cluster
- [ ] Create database user with password
- [ ] Allow access from anywhere (0.0.0.0/0)
- [ ] Copy connection string
- [ ] Test connection locally

### GitHub Repository
- [ ] Create GitHub account
- [ ] Initialize git repository locally
- [ ] Create `.gitignore` (exclude node_modules, .env, uploads)
- [ ] Commit all code
- [ ] Create new repository on GitHub
- [ ] Push code to GitHub

---

## 🖥️ Backend Deployment (Render.com)

- [ ] Create Render.com account (use GitHub login)
- [ ] Connect GitHub repository
- [ ] Create new Web Service
- [ ] Configure settings:
  - Name: `krishna-care-backend`
  - Root Directory: `backend`
  - Build Command: `npm install`
  - Start Command: `npm start`
  - Instance Type: Free
- [ ] Add environment variables:
  - `MONGODB_URI`
  - `JWT_SECRET`
  - `PORT=5000`
  - `FRONTEND_URL=http://localhost:3001`
  - `NODE_ENV=production`
- [ ] Deploy service
- [ ] Wait for deployment (5-10 minutes)
- [ ] Copy backend URL
- [ ] Test: Visit `https://your-backend.onrender.com/api/health`
- [ ] Create admin user (run `node scripts/createAdmin.js`)

---

## 🌐 Frontend Deployment (Netlify)

- [ ] Create Netlify account (use GitHub login)
- [ ] Update `.env.production` with backend URL
- [ ] Commit and push changes
- [ ] Import project from GitHub
- [ ] Configure build settings:
  - Build Command: `npm run build`
  - Publish Directory: `dist`
- [ ] Add environment variable:
  - `VITE_API_URL=https://your-backend.onrender.com/api`
- [ ] Deploy site
- [ ] Wait for build (2-5 minutes)
- [ ] Copy frontend URL
- [ ] Test: Visit your Netlify URL

---

## 🔄 Connect Frontend & Backend

- [ ] Go back to Render.com backend service
- [ ] Update `FRONTEND_URL` environment variable with Netlify URL
- [ ] Save changes (backend will redeploy)
- [ ] Wait for redeployment (2-3 minutes)

---

## ✅ Testing

### Frontend Tests
- [ ] Home page loads correctly
- [ ] Services page displays all 6 services
- [ ] Service detail pages work
- [ ] About page shows company information
- [ ] Assets page displays facilities
- [ ] Blog page lists all posts
- [ ] Blog post pages show content
- [ ] Contact page loads form
- [ ] Gallery page displays images (if applicable)

### Backend Tests
- [ ] Contact form submission works
- [ ] Admin login page loads
- [ ] Can login with admin credentials
- [ ] Admin dashboard displays
- [ ] Can view blog posts in admin
- [ ] Can view gallery in admin
- [ ] Can view contact messages in admin

### Integration Tests
- [ ] API calls from frontend work
- [ ] No CORS errors in browser console
- [ ] Images load correctly
- [ ] Forms submit successfully
- [ ] Redirects work properly

---

## 🔐 Security

- [ ] Change default admin password
- [ ] Generate strong JWT_SECRET (32+ characters)
- [ ] Verify MongoDB IP whitelist
- [ ] Enable MongoDB Atlas backups
- [ ] Review CORS settings
- [ ] Remove console.logs from production code
- [ ] Verify environment variables are not exposed

---

## 📱 Optional Enhancements

- [ ] Configure custom domain in Netlify
- [ ] Set up DNS records for custom domain
- [ ] Enable Netlify Analytics
- [ ] Add Google Analytics
- [ ] Set up monitoring alerts
- [ ] Configure email service (SendGrid/Mailgun)
- [ ] Move uploads to cloud storage (Cloudinary/S3)
- [ ] Add sitemap.xml
- [ ] Add robots.txt
- [ ] Optimize images

---

## 📊 Post-Deployment

- [ ] Test all functionality on production URLs
- [ ] Share website URL with team
- [ ] Document admin panel access
- [ ] Set up regular database backups
- [ ] Monitor error logs (Render & Netlify)
- [ ] Check website performance (PageSpeed Insights)
- [ ] Test on different devices/browsers
- [ ] Update documentation with production URLs

---

## 🆘 If Something Goes Wrong

### Build Fails on Netlify
1. Check build logs in Netlify dashboard
2. Verify all dependencies are in package.json
3. Test build locally: `npm run build`
4. Check environment variables are set

### Backend Not Responding
1. Check Render logs for errors
2. Verify MongoDB connection string
3. Test database connectivity
4. Check all environment variables

### CORS Errors
1. Verify FRONTEND_URL in backend
2. Check CORS configuration in server.js
3. Clear browser cache
4. Check browser console for exact error

### Admin Login Not Working
1. Verify admin user exists in database
2. Check JWT_SECRET is set
3. Test backend login endpoint directly
4. Check network tab in browser

---

## 📞 Resources

- **Render Docs**: https://render.com/docs
- **Netlify Docs**: https://docs.netlify.com
- **MongoDB Atlas**: https://www.mongodb.com/docs/atlas/
- **Full Deployment Guide**: See `DEPLOYMENT_TO_PRODUCTION.md`

---

## 🎉 Success!

Once all checkboxes are complete, your website is live!

**Your Production URLs:**
- Frontend: `https://krishna-care.netlify.app`
- Backend: `https://krishna-care-backend.onrender.com`
- Admin: `https://krishna-care.netlify.app/admin`

**Next Steps:**
1. Share URLs with stakeholders
2. Train team on admin panel
3. Begin content management
4. Monitor performance and errors
5. Plan for custom domain setup

---

**Date Deployed**: _______________
**Deployed By**: _______________
**Frontend URL**: _______________
**Backend URL**: _______________
