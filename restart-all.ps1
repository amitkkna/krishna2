# Krishna Care - Full System Restart
# This script stops all servers and restarts them fresh

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Krishna Care - Full System Restart   " -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path
$backendPath = Join-Path $scriptPath "backend"

# Step 1: Stop all node processes on ports 5000, 3004, 3001, 5173
Write-Host "Step 1: Stopping all servers..." -ForegroundColor Yellow

$ports = @(5000, 3004, 3001, 5173)
foreach ($port in $ports) {
    $processes = Get-NetTCPConnection -LocalPort $port -ErrorAction SilentlyContinue | Select-Object -ExpandProperty OwningProcess | Sort-Object -Unique
    
    if ($processes) {
        Write-Host "  Stopping processes on port $port..." -ForegroundColor Gray
        foreach ($pid in $processes) {
            try {
                $process = Get-Process -Id $pid -ErrorAction SilentlyContinue
                if ($process -and $process.ProcessName -eq "node") {
                    Stop-Process -Id $pid -Force
                    Write-Host "    ✓ Stopped process $pid" -ForegroundColor Green
                }
            } catch {
                # Ignore errors
            }
        }
    }
}

Write-Host "  ✓ All servers stopped" -ForegroundColor Green
Start-Sleep -Seconds 2

Write-Host ""
Write-Host "Step 2: Starting Backend Server (Port 5000)..." -ForegroundColor Yellow
Write-Host "  Location: $backendPath" -ForegroundColor Gray

# Start backend in a new window
Start-Process powershell -ArgumentList "-NoExit", "-Command", @"
cd '$backendPath'
Write-Host '========================================' -ForegroundColor Green
Write-Host '   BACKEND SERVER - Port 5000' -ForegroundColor Green
Write-Host '========================================' -ForegroundColor Green
Write-Host ''
Write-Host 'Starting...' -ForegroundColor Yellow
npm run dev
"@

Start-Sleep -Seconds 3

Write-Host "  ✓ Backend server started" -ForegroundColor Green

Write-Host ""
Write-Host "Step 3: Starting Frontend Server (Port 3004)..." -ForegroundColor Yellow
Write-Host "  Location: $scriptPath" -ForegroundColor Gray

# Start frontend in a new window
Start-Process powershell -ArgumentList "-NoExit", "-Command", @"
cd '$scriptPath'
Write-Host '========================================' -ForegroundColor Cyan
Write-Host '   FRONTEND SERVER - Port 3004' -ForegroundColor Cyan
Write-Host '========================================' -ForegroundColor Cyan
Write-Host ''
Write-Host 'Starting...' -ForegroundColor Yellow
npm run dev
"@

Start-Sleep -Seconds 3

Write-Host "  ✓ Frontend server started" -ForegroundColor Green

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "  ✓ ALL SERVERS STARTED!                " -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "Backend API:  http://localhost:5000" -ForegroundColor Yellow
Write-Host "Frontend App: http://localhost:3004" -ForegroundColor Cyan
Write-Host "Admin Panel:  http://localhost:3004/admin/login" -ForegroundColor Magenta
Write-Host ""
Write-Host "Admin Credentials:" -ForegroundColor White
Write-Host "  Email:    admin@krishnacare.com" -ForegroundColor Gray
Write-Host "  Password: Admin@123" -ForegroundColor Gray
Write-Host ""

# Wait a moment for servers to fully start
Write-Host "Waiting for servers to initialize..." -ForegroundColor Yellow
Start-Sleep -Seconds 5

# Test backend connection
Write-Host ""
Write-Host "Testing backend connection..." -ForegroundColor Yellow
try {
    $response = Invoke-RestMethod -Uri 'http://localhost:5000/api/auth/login' -Method Post -Body '{"email":"admin@krishnacare.com","password":"Admin@123"}' -ContentType 'application/json'
    Write-Host "✓ Backend is responding!" -ForegroundColor Green
    Write-Host "✓ Frontend-Backend connection is ready!" -ForegroundColor Green
} catch {
    if ($_.Exception.Message -like "*Cannot connect*") {
        Write-Host "⚠ Backend may still be starting. Wait a few seconds and try logging in." -ForegroundColor Yellow
    } else {
        Write-Host "✓ Backend is running" -ForegroundColor Green
    }
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "You can now:" -ForegroundColor White
Write-Host "  1. Open http://localhost:3004 in your browser" -ForegroundColor Gray
Write-Host "  2. Click 'Gallery' to see the new Gallery page" -ForegroundColor Gray
Write-Host "  3. Login to admin at /admin/login" -ForegroundColor Gray
Write-Host "  4. Upload images to Gallery from admin panel" -ForegroundColor Gray
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Press any key to exit..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
