# Krishna Care - Connection Test
# This script tests the connection between frontend and backend

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Testing Frontend-Backend Connection  " -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Test 1: Check if backend is running
Write-Host "Test 1: Checking if backend is running..." -ForegroundColor Yellow
$backendRunning = $false
try {
    $response = Invoke-WebRequest -Uri 'http://localhost:5000/api/auth/login' -Method Post -Body '{"email":"test","password":"test"}' -ContentType 'application/json' -ErrorAction Stop
    $backendRunning = $true
    Write-Host "  ✓ Backend is running on port 5000" -ForegroundColor Green
} catch {
    if ($_.Exception.Response) {
        $backendRunning = $true
        Write-Host "  ✓ Backend is running on port 5000" -ForegroundColor Green
    } else {
        Write-Host "  ✗ Backend is NOT running" -ForegroundColor Red
        Write-Host "    Run: .\restart-backend.ps1" -ForegroundColor Yellow
    }
}

Write-Host ""

# Test 2: Check if frontend is running
Write-Host "Test 2: Checking if frontend is running..." -ForegroundColor Yellow
$frontendPort = $null
$ports = @(3004, 3001, 5173)
foreach ($port in $ports) {
    $conn = Get-NetTCPConnection -LocalPort $port -State Listen -ErrorAction SilentlyContinue
    if ($conn) {
        $frontendPort = $port
        Write-Host "  ✓ Frontend is running on port $port" -ForegroundColor Green
        break
    }
}

if (-not $frontendPort) {
    Write-Host "  ✗ Frontend is NOT running" -ForegroundColor Red
    Write-Host "    Run: npm run dev (in project root)" -ForegroundColor Yellow
}

Write-Host ""

# Test 3: Check MongoDB
Write-Host "Test 3: Checking MongoDB..." -ForegroundColor Yellow
$mongoService = Get-Service -Name MongoDB -ErrorAction SilentlyContinue
if ($mongoService -and $mongoService.Status -eq 'Running') {
    Write-Host "  ✓ MongoDB is running" -ForegroundColor Green
} else {
    Write-Host "  ✗ MongoDB is NOT running" -ForegroundColor Red
    Write-Host "    Start MongoDB service" -ForegroundColor Yellow
}

Write-Host ""

# Test 4: Test actual login
if ($backendRunning) {
    Write-Host "Test 4: Testing admin login..." -ForegroundColor Yellow
    try {
        $body = @{
            email = 'admin@krishnacare.com'
            password = 'Admin@123'
        } | ConvertTo-Json

        $response = Invoke-RestMethod -Uri 'http://localhost:5000/api/auth/login' -Method Post -Body $body -ContentType 'application/json'
        
        if ($response.success -and $response.data.token) {
            Write-Host "  ✓ Admin login successful!" -ForegroundColor Green
            Write-Host "  ✓ Token received: $($response.data.token.Substring(0, 20))..." -ForegroundColor Green
        } else {
            Write-Host "  ✗ Login failed" -ForegroundColor Red
        }
    } catch {
        Write-Host "  ✗ Login request failed: $($_.Exception.Message)" -ForegroundColor Red
    }
}

Write-Host ""

# Test 5: Check CORS settings
Write-Host "Test 5: Checking CORS configuration..." -ForegroundColor Yellow
$envFile = ".\backend\.env"
if (Test-Path $envFile) {
    $corsConfig = Get-Content $envFile | Select-String "FRONTEND_URL"
    if ($corsConfig) {
        Write-Host "  ✓ CORS configured: $corsConfig" -ForegroundColor Green
        if ($corsConfig -like "*3004*") {
            Write-Host "  ✓ Port 3004 is allowed" -ForegroundColor Green
        } else {
            Write-Host "  ⚠ Port 3004 is NOT in CORS config" -ForegroundColor Yellow
        }
    } else {
        Write-Host "  ⚠ FRONTEND_URL not found in .env" -ForegroundColor Yellow
    }
} else {
    Write-Host "  ✗ .env file not found" -ForegroundColor Red
}

Write-Host ""

# Test 6: Check API URL in frontend
Write-Host "Test 6: Checking frontend API configuration..." -ForegroundColor Yellow
$frontendEnv = ".\.env"
if (Test-Path $frontendEnv) {
    $apiUrl = Get-Content $frontendEnv | Select-String "VITE_API_URL"
    if ($apiUrl) {
        Write-Host "  ✓ Frontend API URL: $apiUrl" -ForegroundColor Green
    } else {
        Write-Host "  ⚠ VITE_API_URL not found" -ForegroundColor Yellow
    }
} else {
    Write-Host "  ⚠ Frontend .env not found (using default)" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  CONNECTION TEST SUMMARY               " -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan

if ($backendRunning -and $frontendPort) {
    Write-Host ""
    Write-Host "✓ Backend and Frontend are running!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Access your application:" -ForegroundColor White
    Write-Host "  Frontend: http://localhost:$frontendPort" -ForegroundColor Cyan
    Write-Host "  Backend:  http://localhost:5000" -ForegroundColor Yellow
    Write-Host "  Admin:    http://localhost:$frontendPort/admin/login" -ForegroundColor Magenta
    Write-Host ""
    Write-Host "If you still have connection issues:" -ForegroundColor White
    Write-Host "  1. Run: .\restart-all.ps1" -ForegroundColor Gray
    Write-Host "  2. Clear browser cache (Ctrl+Shift+Delete)" -ForegroundColor Gray
    Write-Host "  3. Open browser DevTools (F12) and check Console" -ForegroundColor Gray
} else {
    Write-Host ""
    Write-Host "⚠ Some services are not running!" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "To fix:" -ForegroundColor White
    Write-Host "  Run: .\restart-all.ps1" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Press any key to exit..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
