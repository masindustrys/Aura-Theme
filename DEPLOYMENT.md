# Arura Theme - Deployment Guide

## Overview

Arura is an advanced, modern Salla theme featuring cutting-edge e-commerce functionality with exceptional Arabic language support. This guide will walk you through the deployment process.

## 📋 Prerequisites

Before deploying Arura theme, ensure you have:

- Active Salla store or demo store
- Access to [Salla Partners Portal](https://salla.partners/)
- [Salla CLI](https://www.npmjs.com/package/@salla.sa/cli) installed
- [Node.js](https://nodejs.org/) (v16 or higher)
- [PNPM](https://pnpm.io/) package manager

## 🚀 Quick Start

### 1. Setup Development Environment

```bash
# Clone the repository
git clone https://github.com/masindustrys/Aura-Theme.git
cd Aura-Theme

# Install dependencies
npm install -g pnpm
pnpm install

# Build the theme
pnpm run production
```

### 2. Install Salla CLI

```bash
# Install Salla CLI globally
npm install -g @salla.sa/cli

# Login to your Salla account
salla login
```

### 3. Deploy to Salla Store

```bash
# Navigate to your theme directory
cd Aura-Theme

# Deploy to your Salla store
salla theme publish

# Or preview locally
salla theme preview
```

## 📁 Project Structure

```
Aura-Theme/
├── src/
│   ├── assets/
│   │   ├── images/         # Theme images and icons
│   │   ├── js/            # JavaScript modules
│   │   │   ├── arura/     # Arura-specific modules
│   │   │   └── partials/  # Helper modules
│   │   └── styles/        # SCSS stylesheets
│   │       ├── arura-enhanced.scss  # Arura enhancements
│   │       └── ...
│   ├── locales/
│   │   ├── ar.json        # Arabic translations
│   │   └── en.json        # English translations
│   └── views/
│       ├── components/    # Reusable components
│       │   ├── home/      # Homepage components
│       │   ├── quick-view-modal.twig
│       │   └── social-integration.twig
│       ├── layouts/       # Page layouts
│       └── pages/         # Page templates
├── public/                # Compiled assets (auto-generated)
├── twilight.json         # Theme configuration
├── package.json          # Dependencies and scripts
└── webpack.config.js     # Build configuration
```

## ⚙️ Configuration

### Theme Settings

Arura theme can be customized through the Salla admin panel. Key settings include:

#### Advanced Settings
- **Quick View**: Enable/disable product quick view functionality
- **Advanced Animations**: Control animation speed and effects
- **Social Sharing**: Enable social media sharing buttons
- **Arabic Font Optimization**: Enhanced Arabic typography
- **Dark Mode**: Optional dark theme toggle
- **Color Schemes**: Multiple predefined color palettes

#### Component Configuration
- **Hero Section**: Advanced slider with call-to-action buttons
- **Product Carousels**: Best sellers, new arrivals, custom selections
- **Social Integration**: Social media links and sharing
- **Newsletter Signup**: Email collection functionality

### Color Schemes

Choose from predefined color schemes:
- Modern Blue (default)
- Nature Green
- Royal Purple
- Warm Orange
- Bold Red
- Elegant Gray

## 🎨 Customization

### CSS Customization

Arura uses CSS custom properties for easy customization:

```css
:root {
  --arura-primary: #2563eb;
  --arura-secondary: #7c3aed;
  --arura-font-arabic: 'Cairo', sans-serif;
  /* ... more variables */
}
```

### Component Customization

Edit Twig templates in `src/views/components/` to modify component behavior:

- `hero-section-advanced.twig` - Advanced hero slider
- `products-carousel-advanced.twig` - Product carousels
- `quick-view-modal.twig` - Product quick view
- `social-integration.twig` - Social media integration

### JavaScript Customization

Extend functionality by modifying files in `src/assets/js/arura/`:

- `quick-view.js` - Quick view functionality
- `social-share.js` - Social sharing features
- `animations.js` - Enhanced animations
- `theme-customizer.js` - Theme customization options

## 🔧 Build Process

### Development Build

```bash
# Development build with watch mode
pnpm run watch

# One-time development build
pnpm run development
```

### Production Build

```bash
# Production build (optimized)
pnpm run production
```

### Available Scripts

- `pnpm run development` - Development build
- `pnpm run production` - Production build
- `pnpm run watch` - Watch mode for development

## 📱 Testing

### Local Testing

```bash
# Start local preview
salla theme preview

# Preview with specific store
salla theme preview --store=your-store-name
```

### Browser Testing

Test the theme across different browsers and devices:
- Chrome, Firefox, Safari, Edge
- Mobile devices (iOS Safari, Chrome Mobile)
- Tablet devices
- Desktop resolutions

### Accessibility Testing

Arura includes accessibility enhancements:
- Keyboard navigation support
- Screen reader compatibility
- High contrast mode support
- Reduced motion preferences

## 🌐 Localization

### Arabic Language Support

Arura is optimized for Arabic language:
- RTL layout support
- Arabic font optimization
- Proper text rendering
- Cultural design considerations

### Adding Translations

Update translation files:
- `src/locales/ar.json` - Arabic translations
- `src/locales/en.json` - English translations

## 🚀 Performance Optimization

Arura includes several performance optimizations:

### Image Optimization
- Lazy loading for images
- WebP format support
- Responsive image sizes

### JavaScript Optimization
- Code splitting
- Lazy module loading
- Progressive enhancement

### CSS Optimization
- Critical CSS inlining
- Unused CSS removal
- Optimized font loading

## 🔒 Security Considerations

- Input validation for all forms
- XSS prevention measures
- Secure API communication
- Content Security Policy compliance

## 📊 Analytics Integration

Arura supports popular analytics platforms:
- Google Analytics 4
- Facebook Pixel
- Salla Analytics (built-in)

## 🛠️ Troubleshooting

### Common Issues

#### Build Errors
```bash
# Clear node modules and reinstall
rm -rf node_modules
pnpm install

# Clear webpack cache
rm -rf .cache
```

#### Deployment Issues
```bash
# Verify Salla CLI login
salla auth:check

# Re-login if needed
salla login
```

#### Theme Not Showing
1. Ensure theme is published to correct store
2. Check theme activation in Salla admin
3. Verify build completed successfully

### Support Resources

- [Salla Documentation](https://docs.salla.dev/)
- [Salla Developer Community](https://t.me/salladev)
- [GitHub Issues](https://github.com/masindustrys/Aura-Theme/issues)

## 📝 Best Practices

### Development
- Use semantic commit messages
- Test on multiple devices
- Validate HTML and CSS
- Optimize images before adding

### Deployment
- Always test in staging environment
- Backup current theme before deployment
- Monitor site performance after deployment
- Test all functionality post-deployment

### Maintenance
- Keep dependencies updated
- Monitor for security vulnerabilities
- Regular performance audits
- User feedback incorporation

## 🔄 Updates

To update Arura theme:

```bash
# Pull latest changes
git pull origin main

# Install new dependencies
pnpm install

# Rebuild theme
pnpm run production

# Deploy updated theme
salla theme publish
```

## 📞 Support

For support and questions:

- **Documentation**: [Theme Documentation](https://github.com/masindustrys/Aura-Theme)
- **Issues**: [GitHub Issues](https://github.com/masindustrys/Aura-Theme/issues)
- **Community**: [Salla Developers](https://t.me/salladev)
- **Email**: support@masindustrys.com

## 📄 License

Arura theme is licensed under the MIT License. See `LICENSE.md` for details.

---

**Made with ❤️ by [masindustrys](https://github.com/masindustrys)**