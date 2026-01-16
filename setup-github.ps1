# PowerShell script to set up and push to GitHub
# Run this script after installing Git

Write-Host "=== MSN Enerji Xidmətləri - GitHub Setup ===" -ForegroundColor Cyan
Write-Host ""

# Check if git is installed
try {
    $gitVersion = git --version
    Write-Host "✓ Git is installed: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ Git is not installed!" -ForegroundColor Red
    Write-Host "Please install Git from: https://git-scm.com/download/win" -ForegroundColor Yellow
    Write-Host "Or install GitHub Desktop: https://desktop.github.com/" -ForegroundColor Yellow
    exit 1
}

Write-Host ""
Write-Host "Initializing Git repository..." -ForegroundColor Cyan
git init

Write-Host "Adding all files..." -ForegroundColor Cyan
git add .

Write-Host "Creating initial commit..." -ForegroundColor Cyan
git commit -m "Initial commit: MSN Enerji Xidmətləri website - Professional energy audit services website for Azerbaijan"

Write-Host ""
Write-Host "✓ Repository initialized and committed!" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Go to https://github.com/new" -ForegroundColor White
Write-Host "2. Create a new repository (don't initialize with README)" -ForegroundColor White
Write-Host "3. Copy the repository URL" -ForegroundColor White
Write-Host "4. Run these commands:" -ForegroundColor White
Write-Host ""
Write-Host "   git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git" -ForegroundColor Cyan
Write-Host "   git branch -M main" -ForegroundColor Cyan
Write-Host "   git push -u origin main" -ForegroundColor Cyan
Write-Host ""
