# GitHub Setup Guide

This guide will help you push this project to your GitHub account.

## Prerequisites

1. **Install Git** (if not already installed):
   - Download from: https://git-scm.com/download/win
   - Or install GitHub Desktop: https://desktop.github.com/

2. **GitHub Account**: Make sure you're logged into your GitHub account

## Option 1: Using Git Command Line

### Step 1: Initialize Git Repository

Open PowerShell or Command Prompt in this directory and run:

```bash
git init
```

### Step 2: Add All Files

```bash
git add .
```

### Step 3: Create Initial Commit

```bash
git commit -m "Initial commit: MSN Enerji Xidmətləri website"
```

### Step 4: Create Repository on GitHub

1. Go to https://github.com/new
2. Repository name: `msn-enerji-xidmetleri` (or your preferred name)
3. Description: "Professional website for MSN Enerji Xidmətləri MMC - Energy audit services in Azerbaijan"
4. Choose **Private** or **Public**
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

### Step 5: Connect and Push

After creating the repository, GitHub will show you commands. Use these:

```bash
git remote add origin https://github.com/YOUR_USERNAME/msn-enerji-xidmetleri.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Option 2: Using GitHub Desktop (Easier)

1. **Install GitHub Desktop**: https://desktop.github.com/
2. Open GitHub Desktop
3. Click **File** → **Add Local Repository**
4. Browse to this folder: `C:\Users\Zenbook\Desktop\ms-enerji`
5. Click **Add Repository**
6. Click **Publish repository** button
7. Choose repository name and visibility
8. Click **Publish Repository**

## Option 3: Using VS Code

1. Open this folder in VS Code
2. Click the **Source Control** icon (left sidebar)
3. Click **Initialize Repository**
4. Stage all files (click **+** next to "Changes")
5. Enter commit message: "Initial commit: MSN Enerji Xidmətləri website"
6. Click **✓ Commit**
7. Click **...** menu → **Publish to GitHub**
8. Follow the prompts to create and push to GitHub

## After Pushing

Once pushed, you can:
- View your code on GitHub
- Set up GitHub Pages for hosting
- Connect to deployment services (Vercel, Netlify, etc.)

## Important Notes

- All sensitive files are already in `.gitignore`
- The repository is ready for public/private use
- All code is production-ready
