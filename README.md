<div id="top"></div>
<br />
<div align="center"> 
  <a href="https://salla.dev"> 
    <img src="https://salla.dev/wp-content/uploads/2023/03/1-Light.png" alt="Logo"> 
  </a>
  <h1 align="center">Arura Advanced Theme</h1>
  <p align="center">
    Arura is an advanced, modern Salla theme featuring cutting-edge e-commerce functionality and exceptional Arabic language support.
    <br />
    <a href="https://salla.dev/"><strong>Explore Salla Platform »</strong></a>
    <br />
    <a href="https://github.com/masindustrys/Aura-Theme/issues/new">Report Bug</a> · 
    <a href="https://github.com/masindustrys/Aura-Theme/discussions/new">Request Feature</a> · <a href="https://t.me/salladev">&lt;/Salla Developers&gt;</a> · <a href="https://docs.salla.dev/?nav=01HNFTD5Y5ESFQS3P9MJ0721VM">Official Documentation</a> 
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details open>
  <summary>Table of Contents</summary>
<ol>
<li><a href="#overview">Overview</a></li>
<li><a href="#features">Advanced Features</a></li>
<li><a href="#getting-started">Getting Started</a>
<ul>
<li><a href="#prerequisite">Prerequisites</a></li>
<li><a href="#install">Installation</a></li>
</ul>
</li>
<li>
<a href="#usage">Usage</a>
<ul>
<li><a href="#directory-structure">Directory Structure</a></li>
<li><a href="#theme-preview">Theme Preview</a></li>
<li><a href="#deployment">Deployment</a></li>
</ul>
</li>
<li><a href="#components">Theme Components</a></li>
<li><a href="#customization">Customization</a></li>
<li><a href="#support">Support</a></li>
<li><a href="#contributing">Contributing</a></li>
<li><a href="#license">License</a></li>
</ol>
</details>

<br>

## Overview

**Arura** is a cutting-edge, advanced Salla theme designed for modern e-commerce stores. Built on the powerful [Salla Twilight engine](https://docs.salla.dev/?nav=01HNFTD5Y5ESFQS3P9MJ0721VM), Arura provides merchants with a comprehensive suite of advanced features to create exceptional shopping experiences.

### ✨ What Makes Arura Special

- **🎨 Modern Design**: Contemporary, visually striking interface
- **🚀 Advanced Features**: Comprehensive e-commerce functionality
- **🌍 Full RTL Support**: Optimized for Arabic language and culture
- **📱 Mobile-First**: Responsive design for all devices
- **⚡ Performance**: Optimized for speed and user experience

<p align="right">(<a href="#top">back to top</a>)</p>

## Advanced Features

### 🏠 **Enhanced Homepage Components**
- **Custom Hero Section**: Dynamic slider with advanced animations
- **Product Carousels**: Dedicated sections for best sellers and new arrivals
- **Interactive Banners**: Customizable promotional banners
- **Quick Links**: Smart navigation to key store sections

### 🛒 **Shopping Experience**
- **Quick View**: Instant product preview without page reload
- **Advanced Wishlist**: Enhanced wishlist functionality with user accounts
- **Smart Search**: Advanced search with filtering capabilities
- **Product Reviews**: Comprehensive rating and review system

### 📱 **Social & Engagement**
- **Social Media Integration**: Seamless social platform connectivity
- **Customer Testimonials**: Advanced testimonial management
- **Blog/News Section**: Content management for store updates
- **Newsletter Integration**: Customer engagement tools

### 🌐 **Localization & Accessibility**
- **Complete RTL Support**: Native right-to-left layout
- **Arabic Font Optimization**: Beautiful Arabic typography
- **Multi-language Ready**: Full localization support
- **Accessibility Features**: WCAG compliant design

### 🎨 **Customization**
- **Theme Settings**: Extensive customization options
- **Color Schemes**: Multiple color palette options
- **Layout Variants**: Different layout styles
- **Component Flexibility**: Mix and match components

<p align="right">(<a href="#top">back to top</a>)</p>

## Getting Started

### Prerequisites
- Basic understanding of HTML, CSS, JS, and [Twig Template Engine](https://twig.symfony.com/)
- Partner account at [Salla Partners Portal](https://salla.partners/)
- [Node.js](https://nodejs.org/) (v16 or higher)
- [PNPM](https://pnpm.io/) package manager
- [Salla CLI](https://www.npmjs.com/package/@salla.sa/cli)

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/masindustrys/Aura-Theme.git
   cd Aura-Theme
   ```

2. **Install Dependencies**
   ```bash
   npm install -g pnpm
   pnpm install
   ```

3. **Build the Theme**
   ```bash
   # Development build
   pnpm run development
   
   # Production build
   pnpm run production
   
   # Watch mode for development
   pnpm run watch
   ```

4. **Install via Salla CLI**
   ```bash
   # Install Salla CLI
   npm install -g @salla.sa/cli
   
   # Preview theme
   salla theme preview
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

## Usage

### Directory Structure
```
Aura-Theme/
├── src/
│   ├── assets/
│   │   ├── images/         # Theme images and icons
│   │   ├── js/            # JavaScript modules
│   │   └── styles/        # SCSS stylesheets
│   ├── locales/
│   │   ├── ar.json        # Arabic translations
│   │   └── en.json        # English translations
│   └── views/
│       ├── components/    # Reusable components
│       ├── layouts/       # Page layouts
│       └── pages/         # Page templates
├── public/                # Compiled assets
├── twilight.json         # Theme configuration
├── package.json          # Dependencies
└── webpack.config.js     # Build configuration
```

### Theme Preview
Use the Salla CLI to preview your theme during development:

```bash
salla theme preview
```

The preview command launches a local development server where you can see live changes.

### Deployment

#### Via Salla Partners Portal
1. Log into your [Salla Partners Portal](https://salla.partners/)
2. Navigate to Themes section
3. Upload the theme files or sync from GitHub
4. Configure theme settings
5. Publish to your demo store

#### Via Salla CLI
```bash
# Deploy to Salla store
salla theme publish
```

<p align="right">(<a href="#top">back to top</a>)</p>

## Theme Components

### Pre-Built Components
| Component | Description |
|-----------|-------------|
| **Enhanced Hero Slider** | Dynamic hero section with advanced animations |
| **Product Carousels** | Best sellers and new arrivals sections |
| **Quick View Modal** | Instant product preview functionality |
| **Advanced Search** | Smart search with filtering |
| **Wishlist Manager** | Enhanced wishlist with user accounts |
| **Review System** | Product ratings and reviews |
| **Social Integration** | Social media connectivity |
| **Custom Banners** | Flexible promotional banners |
| **Blog Section** | Content management system |
| **Testimonials** | Customer testimonial showcase |

### Custom Components
All components are fully customizable through the Salla admin panel with extensive configuration options.

<p align="right">(<a href="#top">back to top</a>)</p>

## Customization

### Theme Settings
Access theme customization through your Salla admin panel:

1. **Colors & Branding**: Customize color schemes and brand elements
2. **Layout Options**: Choose from different layout styles
3. **Component Settings**: Configure individual component behavior
4. **Typography**: Select fonts and text styling
5. **Mobile Settings**: Mobile-specific configurations

### Advanced Customization
For developers wanting to customize further:

1. **SCSS Variables**: Modify `src/assets/styles/01-settings/`
2. **Component Templates**: Edit Twig files in `src/views/components/`
3. **JavaScript Functionality**: Extend `src/assets/js/` modules
4. **Build Configuration**: Adjust `webpack.config.js` and `tailwind.config.js`

<p align="right">(<a href="#top">back to top</a>)</p>

## Support

Need help with Arura theme? We're here to assist:

- **Issues & Bugs**: [GitHub Issue Tracker](https://github.com/masindustrys/Aura-Theme/issues)
- **Feature Requests**: [GitHub Discussions](https://github.com/masindustrys/Aura-Theme/discussions)
- **Salla Support**: [Telegram Bot](https://t.me/SallaSupportBot)
- **Developer Community**: [Telegram Group](https://t.me/salladev)
- **Documentation**: [Official Salla Docs](https://docs.salla.dev/?nav=01HNFTD5Y5ESFQS3P9MJ0721VM)

<p align="right">(<a href="#top">back to top</a>)</p>

## Contributing

We welcome contributions to make Arura even better! Here's how you can help:

1. **Fork the Project**
2. **Create Feature Branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit Changes** (`git commit -m 'Add AmazingFeature'`)
4. **Push to Branch** (`git push origin feature/AmazingFeature`)
5. **Open Pull Request**

Please ensure your code follows our style guidelines and includes appropriate tests.

<p align="right">(<a href="#top">back to top</a>)</p>

## License

Distributed under the MIT License. See `LICENSE.md` for more information.

---

<div align="center">
  <p>Made with ❤️ by <a href="https://github.com/masindustrys">masindustrys</a></p>
  <p>Powered by <a href="https://salla.sa">Salla Platform</a></p>
</div>

<p align="right">(<a href="#top">back to top</a>)</p>