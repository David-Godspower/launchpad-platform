# 🛠 Setup Guide - Launchpad Internship Platform

This guide provides step-by-step instructions to set up and run the Launchpad platform locally.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 16.0 or higher)
  - Check version: `node --version`
  - Download: [nodejs.org](https://nodejs.org/)

- **npm** or **yarn** (package manager)
  - npm comes with Node.js
  - Check version: `npm --version`
  - Or install yarn: `npm install -g yarn`

- **Git** (for version control)
  - Check version: `git --version`
  - Download: [git-scm.com](https://git-scm.com/)

- **Code Editor** (recommended)
  - VS Code: [code.visualstudio.com](https://code.visualstudio.com/)
  - WebStorm, Sublime Text, or any editor of choice

## 🚀 Quick Start

### Option 1: Using npm

```bash
# 1. Navigate to project directory
cd launchpad-platform

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open browser to http://localhost:3000
```

### Option 2: Using yarn

```bash
# 1. Navigate to project directory
cd launchpad-platform

# 2. Install dependencies
yarn install

# 3. Start development server
yarn dev

# 4. Open browser to http://localhost:3000
```

## 📦 Detailed Installation Steps

### Step 1: Clone or Download

**If using Git:**
```bash
git clone <repository-url>
cd launchpad-platform
```

**If downloaded as ZIP:**
1. Extract the ZIP file
2. Open terminal/command prompt
3. Navigate to extracted folder: `cd path/to/launchpad-platform`

### Step 2: Install Dependencies

This will install all required packages listed in `package.json`:

```bash
npm install
```

**Expected output:**
```
added 245 packages, and audited 246 packages in 15s
...
found 0 vulnerabilities
```

**Troubleshooting installation issues:**

If you encounter errors:

1. **Clear npm cache:**
```bash
npm cache clean --force
```

2. **Delete node_modules and reinstall:**
```bash
rm -rf node_modules package-lock.json
npm install
```

3. **Use legacy peer deps (if needed):**
```bash
npm install --legacy-peer-deps
```

### Step 3: Start Development Server

```bash
npm run dev
```

**Expected output:**
```
  VITE v5.0.8  ready in 432 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

The application will automatically open in your default browser at `http://localhost:3000`

### Step 4: Verify Everything Works

You should see:
- ✅ The Launchpad homepage with hero section
- ✅ Navigation menu (Home, Browse, Dashboard, Profile)
- ✅ Smooth animations on page load
- ✅ Responsive design (try resizing browser)

## 🔧 Available Scripts

### Development

```bash
npm run dev
# Starts Vite development server with hot module replacement (HMR)
# Access at http://localhost:3000
```

### Production Build

```bash
npm run build
# Creates optimized production build in /dist folder
# Minified, tree-shaken, and ready for deployment
```

### Preview Production

```bash
npm run preview
# Serves the production build locally for testing
# Access at http://localhost:4173
```

### Code Linting

```bash
npm run lint
# Checks code quality and style issues
```

## 🏗 Project Structure Explained

```
launchpad-platform/
│
├── public/                    # Static assets (if any)
│
├── src/                       # Source code
│   ├── App.jsx               # Main React component (all pages)
│   ├── main.jsx              # React entry point
│   └── index.css             # Global CSS + Tailwind directives
│
├── index.html                # HTML template
├── package.json              # Dependencies and scripts
├── vite.config.js            # Vite build configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── postcss.config.js         # PostCSS configuration
├── .gitignore                # Git ignore rules
└── README.md                 # Project documentation
```

## 🎨 Customization Guide

### Changing Colors

Edit `src/App.jsx` to modify the color scheme:

```jsx
// Find gradient definitions like:
className="bg-gradient-to-r from-purple-600 to-pink-600"

// Change to your preferred colors:
className="bg-gradient-to-r from-blue-600 to-green-600"
```

### Modifying Content

All content is in `src/App.jsx`:

1. **Hero text**: Search for "Launch Your Career Journey"
2. **Internship data**: Look for the `internships` array
3. **Stats**: Find the stats section in `HomePage`

### Adding New Pages

1. Create a new page component in `App.jsx`
2. Add navigation item to `navigation` array
3. Add conditional rendering in the main return statement

## 🌐 Deployment Guide

### Deploy to Vercel (Recommended)

1. **Push to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Vite settings
   - Click "Deploy"

3. **Done!** Your site is live at `your-project.vercel.app`

### Deploy to Netlify

1. **Build the project:**
```bash
npm run build
```

2. **Deploy to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `dist` folder
   - Or connect to GitHub for auto-deployment

### Deploy to GitHub Pages

1. **Install gh-pages:**
```bash
npm install --save-dev gh-pages
```

2. **Add to package.json:**
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. **Deploy:**
```bash
npm run deploy
```

## ❓ Troubleshooting

### Port Already in Use

If port 3000 is occupied:

```bash
# Kill process on port 3000 (macOS/Linux)
lsof -ti:3000 | xargs kill -9

# Or change port in vite.config.js
server: {
  port: 3001  // Use different port
}
```

### Module Not Found Errors

```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### CSS Not Loading

Ensure Tailwind is configured:
1. Check `tailwind.config.js` exists
2. Verify `index.css` has Tailwind directives
3. Restart dev server

### Build Errors

```bash
# Clear Vite cache
rm -rf node_modules/.vite
npm run dev
```

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Vite Guide](https://vitejs.dev/guide/)
- [Lucide Icons](https://lucide.dev)

## 🆘 Getting Help

If you encounter issues:

1. Check this SETUP.md file
2. Review the main README.md
3. Search existing issues on GitHub
4. Create a new issue with:
   - Error message
   - Steps to reproduce
   - Your environment (OS, Node version)

## 🎉 Next Steps

Once setup is complete:

1. ✅ Explore all four pages (Home, Browse, Dashboard, Profile)
2. ✅ Test responsive design (resize browser)
3. ✅ Try filtering internships by category
4. ✅ Save/favorite internships (heart icon)
5. ✅ Review the code structure
6. ✅ Start customizing!

Happy coding! 🚀
