# Krishna Care - Start Development Servers
# This script starts both backend and frontend servers

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Krishna Care - Starting Servers      " -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path
$projectRoot = $scriptPath
$backendPath = Join-Path $projectRoot "backend"

# Check if backend directory exists
if (-not (Test-Path $backendPath)) {
    Write-Host "✗ Backend directory not found!" -ForegroundColor Red
    exit 1
}

# Check if node_modules exist
if (-not (Test-Path (Join-Path $projectRoot "node_modules"))) {
    Write-Host "⚠ Frontend dependencies not installed. Run install.ps1 first!" -ForegroundColor Yellow
    exit 1
}

if (-not (Test-Path (Join-Path $backendPath "node_modules"))) {
    Write-Host "⚠ Backend dependencies not installed. Run install.ps1 first!" -ForegroundColor Yellow
    exit 1
}

Write-Host "Starting Backend Server..." -ForegroundColor Yellow
Write-Host "Location: $backendPath" -ForegroundColor Gray
Write-Host ""

# Start backend in a new PowerShell window
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$backendPath'; Write-Host 'Backend Server (Port 5000)' -ForegroundColor Green; npm run dev"

# Wait a moment
Start-Sleep -Seconds 2

Write-Host "Starting Frontend Server..." -ForegroundColor Yellow
Write-Host "Location: $projectRoot" -ForegroundColor Gray
Write-Host ""

# Start frontend in a new PowerShell window
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$projectRoot'; Write-Host 'Frontend Server (Port 3001)' -ForegroundColor Green; npm run dev"

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "  Servers Starting!                     " -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "Backend:  http://localhost:5000" -ForegroundColor Cyan
Write-Host "Frontend: http://localhost:3001" -ForegroundColor Cyan
Write-Host "Admin:    http://localhost:3001/admin/login" -ForegroundColor Yellow
Write-Host ""
Write-Host "Login Credentials:" -ForegroundColor White
Write-Host "  Email:    admin@krishnacare.com" -ForegroundColor Gray
Write-Host "  Password: Admin@123" -ForegroundColor Gray
Write-Host ""
Write-Host "Press any key to close this window..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
