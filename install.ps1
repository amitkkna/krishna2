# Krishna Care - Complete Installation Script
# Run this script to install all dependencies and set up the project

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Krishna Care Website - Installation  " -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Get the script directory
$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path
$projectRoot = $scriptPath

# Function to check if a command exists
function Test-Command($command) {
    try {
        if (Get-Command $command -ErrorAction Stop) {
            return $true
        }
    } catch {
        return $false
    }
}

# Check Node.js
Write-Host "[1/5] Checking Node.js..." -ForegroundColor Yellow
if (Test-Command "node") {
    $nodeVersion = node --version
    Write-Host "  ✓ Node.js found: $nodeVersion" -ForegroundColor Green
} else {
    Write-Host "  ✗ Node.js not found!" -ForegroundColor Red
    Write-Host "  Please install Node.js from https://nodejs.org/" -ForegroundColor Red
    exit 1
}

# Check npm
if (Test-Command "npm") {
    $npmVersion = npm --version
    Write-Host "  ✓ npm found: v$npmVersion" -ForegroundColor Green
} else {
    Write-Host "  ✗ npm not found!" -ForegroundColor Red
    exit 1
}

Write-Host ""

# Install Frontend Dependencies
Write-Host "[2/5] Installing Frontend Dependencies..." -ForegroundColor Yellow
Set-Location $projectRoot
if (Test-Path "package.json") {
    npm install
    if ($LASTEXITCODE -eq 0) {
        Write-Host "  ✓ Frontend dependencies installed successfully" -ForegroundColor Green
    } else {
        Write-Host "  ✗ Frontend installation failed" -ForegroundColor Red
        exit 1
    }
} else {
    Write-Host "  ✗ package.json not found in root directory" -ForegroundColor Red
    exit 1
}

Write-Host ""

# Install Backend Dependencies
Write-Host "[3/5] Installing Backend Dependencies..." -ForegroundColor Yellow
$backendPath = Join-Path $projectRoot "backend"
if (Test-Path $backendPath) {
    Set-Location $backendPath
    if (Test-Path "package.json") {
        npm install
        if ($LASTEXITCODE -eq 0) {
            Write-Host "  ✓ Backend dependencies installed successfully" -ForegroundColor Green
        } else {
            Write-Host "  ✗ Backend installation failed" -ForegroundColor Red
            exit 1
        }
    } else {
        Write-Host "  ✗ package.json not found in backend directory" -ForegroundColor Red
        exit 1
    }
} else {
    Write-Host "  ✗ Backend directory not found" -ForegroundColor Red
    exit 1
}

Write-Host ""

# Check MongoDB
Write-Host "[4/5] Checking MongoDB..." -ForegroundColor Yellow
if (Test-Command "mongosh") {
    Write-Host "  ✓ MongoDB Shell found" -ForegroundColor Green
    Write-Host "  Checking MongoDB connection..." -ForegroundColor Gray
    
    # Try to connect to MongoDB
    $mongoTest = & mongosh --eval "db.version()" --quiet 2>&1
    if ($LASTEXITCODE -eq 0) {
        Write-Host "  ✓ MongoDB is running and accessible" -ForegroundColor Green
    } else {
        Write-Host "  ⚠ MongoDB is not running" -ForegroundColor Yellow
        Write-Host "  Please start MongoDB service or use MongoDB Atlas" -ForegroundColor Yellow
    }
} else {
    Write-Host "  ⚠ MongoDB Shell not found" -ForegroundColor Yellow
    Write-Host "  You can:" -ForegroundColor Gray
    Write-Host "    - Install MongoDB locally: https://www.mongodb.com/try/download/community" -ForegroundColor Gray
    Write-Host "    - Use MongoDB Atlas (cloud): https://www.mongodb.com/atlas" -ForegroundColor Gray
}

Write-Host ""

# Environment Files Check
Write-Host "[5/5] Checking Environment Files..." -ForegroundColor Yellow
$frontendEnv = Join-Path $projectRoot ".env"
$backendEnv = Join-Path $backendPath ".env"

if (Test-Path $frontendEnv) {
    Write-Host "  ✓ Frontend .env file found" -ForegroundColor Green
} else {
    Write-Host "  ⚠ Frontend .env file not found" -ForegroundColor Yellow
}

if (Test-Path $backendEnv) {
    Write-Host "  ✓ Backend .env file found" -ForegroundColor Green
} else {
    Write-Host "  ⚠ Backend .env file not found (will use defaults)" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Installation Complete!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "Next Steps:" -ForegroundColor Yellow
Write-Host ""
Write-Host "1. Seed the Database:" -ForegroundColor White
Write-Host "   cd backend" -ForegroundColor Gray
Write-Host "   node seed.js" -ForegroundColor Gray
Write-Host ""
Write-Host "2. Start Backend Server:" -ForegroundColor White
Write-Host "   cd backend" -ForegroundColor Gray
Write-Host "   npm run dev" -ForegroundColor Gray
Write-Host "   (Runs on http://localhost:5000)" -ForegroundColor Gray
Write-Host ""
Write-Host "3. Start Frontend (in new terminal):" -ForegroundColor White
Write-Host "   npm run dev" -ForegroundColor Gray
Write-Host "   (Runs on http://localhost:3001)" -ForegroundColor Gray
Write-Host ""
Write-Host "4. Admin Panel:" -ForegroundColor White
Write-Host "   URL: http://localhost:3001/admin/login" -ForegroundColor Gray
Write-Host "   Email: admin@krishnacare.com" -ForegroundColor Gray
Write-Host "   Password: Admin@123" -ForegroundColor Gray
Write-Host ""
Write-Host "For detailed documentation, see SETUP_GUIDE.md" -ForegroundColor Cyan
Write-Host ""

# Return to project root
Set-Location $projectRoot
