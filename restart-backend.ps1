# Krishna Care - Restart Backend Server
# This script stops and restarts the backend server

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Restarting Backend Server            " -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Kill all node processes running on port 5000
Write-Host "Stopping backend server on port 5000..." -ForegroundColor Yellow

# Find process using port 5000
$port = 5000
$processes = Get-NetTCPConnection -LocalPort $port -ErrorAction SilentlyContinue | Select-Object -ExpandProperty OwningProcess | Sort-Object -Unique

if ($processes) {
    foreach ($pid in $processes) {
        try {
            $process = Get-Process -Id $pid -ErrorAction SilentlyContinue
            if ($process -and $process.ProcessName -eq "node") {
                Write-Host "  Stopping process $pid ($($process.ProcessName))..." -ForegroundColor Gray
                Stop-Process -Id $pid -Force
                Write-Host "  ✓ Stopped" -ForegroundColor Green
            }
        } catch {
            Write-Host "  Could not stop process $pid" -ForegroundColor Red
        }
    }
} else {
    Write-Host "  No backend server running on port 5000" -ForegroundColor Gray
}

Start-Sleep -Seconds 2

Write-Host ""
Write-Host "Starting backend server..." -ForegroundColor Yellow

$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path
$backendPath = Join-Path $scriptPath "backend"

# Check if backend directory exists
if (-not (Test-Path $backendPath)) {
    Write-Host "✗ Backend directory not found!" -ForegroundColor Red
    exit 1
}

Write-Host "Location: $backendPath" -ForegroundColor Gray
Write-Host ""

# Start backend in a new PowerShell window
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$backendPath'; Write-Host '========================================' -ForegroundColor Green; Write-Host '   Backend Server - Port 5000' -ForegroundColor Green; Write-Host '========================================' -ForegroundColor Green; Write-Host ''; npm run dev"

Start-Sleep -Seconds 3

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "  Backend Server Restarted!            " -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "Backend API: http://localhost:5000" -ForegroundColor Cyan
Write-Host ""
Write-Host "Testing connection..." -ForegroundColor Yellow

Start-Sleep -Seconds 2

# Test the API
try {
    $response = Invoke-RestMethod -Uri 'http://localhost:5000/api/auth/login' -Method Post -Body '{"email":"admin@krishnacare.com","password":"Admin@123"}' -ContentType 'application/json'
    Write-Host "✓ Backend API is responding!" -ForegroundColor Green
    Write-Host "✓ Successfully connected to backend!" -ForegroundColor Green
} catch {
    if ($_.Exception.Message -like "*Cannot connect*") {
        Write-Host "✗ Backend is not responding yet. Please wait..." -ForegroundColor Yellow
    } else {
        Write-Host "✓ Backend is running (response received)" -ForegroundColor Green
    }
}

Write-Host ""
Write-Host "Press any key to exit..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
