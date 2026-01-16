# MSN Enerji Xidmətləri MMC - Website

Professional website for MSN Enerji Xidmətləri MMC, an energy audit services company based in Azerbaijan.

## 🚀 Features

- Modern, responsive design with smooth animations
- Professional sections: Hero, Services, Projects, News, Careers, and Contact
- Contact form integration with Formspree
- SEO optimized with proper meta tags
- Accessible and user-friendly interface
- Built with modern web technologies

## 🛠️ Technologies

- **Vite** - Fast build tool and dev server
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality component library
- **React Router** - Client-side routing
- **Lucide React** - Icon library

## 📦 Installation

### Prerequisites

- Node.js 18+ and npm (or bun)
- Git (for cloning)

### Setup

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/msn-enerji-xidmetleri.git

# Navigate to project directory
cd msn-enerji-xidmetleri

# Install dependencies
npm install
# or
bun install
```

## 🏃 Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm test
```

The development server will start at `http://localhost:8080`

## 📁 Project Structure

```
ms-enerji/
├── public/          # Static assets
├── src/
│   ├── assets/      # Images and other assets
│   ├── components/  # React components
│   │   ├── ui/      # shadcn/ui components
│   │   └── ...      # Section components
│   ├── pages/       # Page components
│   ├── hooks/       # Custom React hooks
│   └── lib/         # Utility functions
├── index.html       # HTML entry point
└── package.json     # Dependencies and scripts
```

## 🖼️ Adding News Images

To add images for news articles:

1. Place the image file in `src/assets/` directory
2. Name it appropriately (e.g., `news-meeting.jpg`)
3. Import and use it in `src/components/NewsSection.tsx`

Example:
```typescript
import newsImage from "@/assets/news-meeting.jpg";
```

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Deploy Options

- **Vercel**: Connect your GitHub repository and deploy automatically
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions to build and deploy
- **Any static hosting**: Upload the `dist` folder contents

## 📝 License

© 2025 MSN Enerji Xidmətləri MMC. All rights reserved.

## 📧 Contact

- **Email**: msnenerjixidmatlari@gmail.com
- **Phone**: +994 50 990 43 73
- **LinkedIn**: [MSN Enerji Xidmətləri MMC](https://www.linkedin.com/company/msn-enerji-xidm%C9%99tl%C9%99ri-mmc/)
