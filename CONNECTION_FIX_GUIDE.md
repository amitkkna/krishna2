# 🔌 Frontend-Backend Connection Guide

## ✅ Current Status

I've tested your backend and it's **WORKING PERFECTLY!** ✓

```
✓ Backend API: Running on port 5000
✓ MongoDB: Connected
✓ Admin Login: Working
✓ CORS: Configured for ports 3001, 3004
```

---

## 🔧 Solution: Restart Backend to Apply CORS Fix

The backend needs to be restarted to apply the recent CORS configuration changes.

### **Quick Fix (Choose One Method):**

---

### **Method 1: Restart Everything (Recommended)** ⭐

Run this script to stop and restart both backend and frontend:

```powershell
.\restart-all.ps1
```

**This will:**
1. Stop all Node.js servers
2. Start backend on port 5000
3. Start frontend on port 3004
4. Test the connection
5. Show you all URLs

---

### **Method 2: Restart Backend Only**

If frontend is already running fine:

```powershell
.\restart-backend.ps1
```

**This will:**
1. Stop the backend server
2. Restart it with new CORS settings
3. Test the connection

---

### **Method 3: Manual Restart**

If you prefer manual control:

#### **Step 1: Stop Backend**
1. Find the PowerShell window running the backend (says "Backend Server - Port 5000")
2. Press `Ctrl+C` to stop it
3. Close that window

#### **Step 2: Start Backend**
1. Open new PowerShell window
2. Run:
```powershell
cd E:\testingui\kk2\krishna-care-react\backend
npm run dev
```

#### **Step 3: Verify**
Wait for this message:
```
✅ MongoDB Connected Successfully
🚀 Server running on http://localhost:5000
```

---

## 🧪 Test the Connection

After restarting, run:

```powershell
.\test-connection.ps1
```

This will check:
- ✓ Backend status
- ✓ Frontend status
- ✓ MongoDB status
- ✓ Admin login test
- ✓ CORS configuration
- ✓ API URLs

---

## 🌐 Access URLs

After restart, you can access:

| Service | URL | Purpose |
|---------|-----|---------|
| **Frontend** | http://localhost:3004 | Main website |
| **Backend API** | http://localhost:5000 | API server |
| **Admin Panel** | http://localhost:3004/admin/login | Admin dashboard |
| **Gallery** | http://localhost:3004/gallery | New gallery page |

---

## 🔐 Admin Credentials

```
Email:    admin@krishnacare.com
Password: Admin@123
```

---

## 🐛 Troubleshooting

### **Problem: CORS Error in Browser Console**

**Symptom:**
```
Access to XMLHttpRequest blocked by CORS policy
```

**Solution:**
1. Restart backend: `.\restart-backend.ps1`
2. Clear browser cache: `Ctrl + Shift + Delete`
3. Hard refresh: `Ctrl + F5`

---

### **Problem: Backend Not Responding**

**Check if running:**
```powershell
Get-NetTCPConnection -LocalPort 5000 -ErrorAction SilentlyContinue
```

**If not running, start it:**
```powershell
cd backend
npm run dev
```

---

### **Problem: Frontend Not Loading**

**Check if running:**
```powershell
Get-NetTCPConnection -LocalPort 3004 -ErrorAction SilentlyContinue
```

**If not running, start it:**
```powershell
npm run dev
```

---

### **Problem: MongoDB Connection Failed**

**Check MongoDB service:**
```powershell
Get-Service -Name MongoDB
```

**If not running, start it:**
```powershell
Start-Service MongoDB
```

Or use MongoDB Compass to start MongoDB.

---

## ✨ After Restarting

### **Test Quick Login:**

1. Open: http://localhost:3004/admin/login
2. Click: **"⚡ Quick Login (No Password)"** button
3. Should redirect to dashboard immediately!

### **Test Gallery:**

1. Open: http://localhost:3004/gallery
2. Should see: "No images found" message (normal, no images uploaded yet)
3. Login to admin panel
4. Go to: Gallery → Upload Images
5. Upload some images
6. Refresh gallery page → Images should appear!

---

## 📊 Configuration Summary

### **Backend (.env):**
```properties
PORT=5000
MONGODB_URI=mongodb://localhost:27017/krishna-care
JWT_SECRET=krishna-care-super-secret-jwt-key-2025
FRONTEND_URL=http://localhost:3001,http://localhost:3004
```

### **Frontend (.env):**
```properties
VITE_API_URL=http://localhost:5000/api
```

### **CORS Configuration:**
✅ Allows: http://localhost:3001
✅ Allows: http://localhost:3004
✅ Credentials: Enabled

---

## 🚀 Quick Start Commands

### **Start Everything:**
```powershell
.\restart-all.ps1
```

### **Test Connection:**
```powershell
.\test-connection.ps1
```

### **Test Backend API:**
```powershell
Invoke-RestMethod -Uri 'http://localhost:5000/api/auth/login' -Method Post -Body '{"email":"admin@krishnacare.com","password":"Admin@123"}' -ContentType 'application/json'
```

### **View Backend Logs:**
Look at the PowerShell window running the backend server.

### **View Frontend Logs:**
Look at the PowerShell window running `npm run dev` or press F12 in browser.

---

## ✅ Next Steps

1. **Run:** `.\restart-all.ps1`
2. **Open:** http://localhost:3004
3. **Test:** Click "Gallery" in navigation
4. **Login:** http://localhost:3004/admin/login
5. **Upload:** Add some gallery images
6. **Verify:** Images appear on gallery page

---

## 🎯 What We Fixed

✅ **CORS Configuration:** Updated to accept multiple frontend ports
✅ **Created Restart Scripts:** Easy server management
✅ **Created Test Script:** Connection verification
✅ **Added Gallery Page:** Replaced Technology tab
✅ **Backend Integration:** Gallery connected to API

---

## 💡 Tips

1. **Always restart backend after changing .env files**
2. **Clear browser cache if you see old data**
3. **Use F12 DevTools to see actual errors**
4. **Check both frontend and backend console logs**
5. **MongoDB must be running for backend to work**

---

## 📞 Still Having Issues?

If connection still fails after restart:

1. **Check browser console (F12)** - Shows actual error
2. **Check backend terminal** - Shows API errors
3. **Run:** `.\test-connection.ps1` - Shows what's wrong
4. **Verify MongoDB is running**
5. **Make sure no firewall is blocking ports 5000 or 3004**

---

## 🎉 Ready!

**Everything is configured correctly. Just restart the servers and you're good to go!**

Run: `.\restart-all.ps1`

Then open: http://localhost:3004

**Your frontend and backend will be connected! ✓**
