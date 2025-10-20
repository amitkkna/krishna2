# 🚀 Krishna Care - Quick Start Deployment Script

Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host "   KRISHNA CARE WEBSITE - DEPLOYMENT PREP    " -ForegroundColor Cyan
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host ""

# Check if git is installed
Write-Host "🔍 Checking prerequisites..." -ForegroundColor Yellow
try {
    $gitVersion = git --version
    Write-Host "✅ Git is installed: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Git is not installed! Please install Git first." -ForegroundColor Red
    Write-Host "   Download from: https://git-scm.com/download/win" -ForegroundColor Yellow
    exit
}

Write-Host ""
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host "STEP 1: Initialize Git Repository" -ForegroundColor Cyan
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host ""

# Check if already a git repository
if (Test-Path .git) {
    Write-Host "✅ Git repository already initialized" -ForegroundColor Green
} else {
    Write-Host "🔄 Initializing git repository..." -ForegroundColor Yellow
    git init
    Write-Host "✅ Git repository initialized" -ForegroundColor Green
}

Write-Host ""
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host "STEP 2: Check .gitignore" -ForegroundColor Cyan
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host ""

if (Test-Path .gitignore) {
    Write-Host "✅ .gitignore file exists" -ForegroundColor Green
} else {
    Write-Host "⚠️  .gitignore not found!" -ForegroundColor Yellow
    Write-Host "   Creating basic .gitignore..." -ForegroundColor Yellow
    @"
node_modules/
backend/node_modules/
.env
.env.local
backend/.env
dist/
backend/uploads/
*.log
.DS_Store
Thumbs.db
"@ | Out-File -FilePath .gitignore -Encoding UTF8
    Write-Host "✅ .gitignore created" -ForegroundColor Green
}

Write-Host ""
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host "STEP 3: Commit Code" -ForegroundColor Cyan
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host ""

Write-Host "🔄 Staging all files..." -ForegroundColor Yellow
git add .

$commitMessage = "Initial commit - Krishna Care Website ready for deployment"
Write-Host "🔄 Committing: $commitMessage" -ForegroundColor Yellow
git commit -m $commitMessage

Write-Host "✅ Code committed" -ForegroundColor Green

Write-Host ""
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host "STEP 4: GitHub Setup" -ForegroundColor Cyan
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host ""

Write-Host "📝 Next Steps for GitHub:" -ForegroundColor Yellow
Write-Host ""
Write-Host "1. Go to https://github.com/new" -ForegroundColor White
Write-Host "2. Create a new repository named: krishna-care-website" -ForegroundColor White
Write-Host "3. Choose Private or Public" -ForegroundColor White
Write-Host "4. DO NOT initialize with README" -ForegroundColor White
Write-Host "5. Click 'Create repository'" -ForegroundColor White
Write-Host ""

$username = Read-Host "Enter your GitHub username"

if ($username) {
    Write-Host ""
    Write-Host "🔄 Configuring Git remote..." -ForegroundColor Yellow
    
    try {
        git remote remove origin 2>$null
    } catch {}
    
    $repoUrl = "https://github.com/$username/krishna-care-website.git"
    git remote add origin $repoUrl
    
    Write-Host "✅ Remote configured: $repoUrl" -ForegroundColor Green
    Write-Host ""
    Write-Host "🚀 Ready to push! Run these commands:" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "   git branch -M main" -ForegroundColor Cyan
    Write-Host "   git push -u origin main" -ForegroundColor Cyan
    Write-Host ""
}

Write-Host ""
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host "STEP 5: Environment Setup" -ForegroundColor Cyan
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host ""

if (Test-Path .env.production) {
    Write-Host "✅ .env.production file exists" -ForegroundColor Green
    Write-Host "⚠️  Remember to update VITE_API_URL after deploying backend!" -ForegroundColor Yellow
} else {
    Write-Host "📝 Creating .env.production template..." -ForegroundColor Yellow
    @"
# Replace with your actual backend URL from Render.com
VITE_API_URL=https://krishna-care-backend.onrender.com/api
"@ | Out-File -FilePath .env.production -Encoding UTF8
    Write-Host "✅ .env.production created" -ForegroundColor Green
}

Write-Host ""
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host "📚 DEPLOYMENT GUIDE" -ForegroundColor Cyan
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host ""

Write-Host "📖 Complete deployment instructions:" -ForegroundColor Yellow
Write-Host "   - Full Guide: DEPLOYMENT_TO_PRODUCTION.md" -ForegroundColor White
Write-Host "   - Checklist: DEPLOYMENT_CHECKLIST.md" -ForegroundColor White
Write-Host ""

Write-Host "🎯 Quick Deployment Steps:" -ForegroundColor Yellow
Write-Host ""
Write-Host "1️⃣  MongoDB Atlas (Database):" -ForegroundColor Cyan
Write-Host "   • Sign up: https://www.mongodb.com/cloud/atlas" -ForegroundColor White
Write-Host "   • Create free M0 cluster" -ForegroundColor White
Write-Host "   • Get connection string" -ForegroundColor White
Write-Host ""

Write-Host "2️⃣  Render.com (Backend):" -ForegroundColor Cyan
Write-Host "   • Sign up: https://render.com" -ForegroundColor White
Write-Host "   • Connect GitHub repository" -ForegroundColor White
Write-Host "   • Deploy backend folder" -ForegroundColor White
Write-Host "   • Add environment variables" -ForegroundColor White
Write-Host ""

Write-Host "3️⃣  Netlify (Frontend):" -ForegroundColor Cyan
Write-Host "   • Sign up: https://netlify.com" -ForegroundColor White
Write-Host "   • Connect GitHub repository" -ForegroundColor White
Write-Host "   • Configure build settings" -ForegroundColor White
Write-Host "   • Deploy site" -ForegroundColor White
Write-Host ""

Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host "✅ PREPARATION COMPLETE!" -ForegroundColor Green
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host ""

Write-Host "📋 Your code is ready for deployment!" -ForegroundColor Green
Write-Host ""
Write-Host "📚 Read the deployment guide:" -ForegroundColor Yellow
Write-Host "   DEPLOYMENT_TO_PRODUCTION.md" -ForegroundColor Cyan
Write-Host ""
Write-Host "🚀 Follow the checklist:" -ForegroundColor Yellow
Write-Host "   DEPLOYMENT_CHECKLIST.md" -ForegroundColor Cyan
Write-Host ""

Write-Host "💡 Pro Tip: Open both files side-by-side for easy reference!" -ForegroundColor Magenta
Write-Host ""
