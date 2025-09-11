# Changelog

On this page, you will find all about Arura Theme updates, including frequent updates, bug fixes, new features, and deprecated elements. We will be displaying only released updates on [Arura Theme's ChangeLog](https://github.com/masindustrys/Aura-Theme/blob/main/CHANGELOG.md) here on GitHub

> 📝 Note
> 
> Make sure to visit this page regularly for updates before working on your Theme based on Arura, as we will be documenting any notable changes here.

> ℹ️ Info
>The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

# 🚀 [2.0.0] - Arura Advanced Theme Launch (11-09-2025)

## Major Transformation from Theme Raed to Arura

This is a complete transformation of the original Salla Theme Raed into an advanced, modern e-commerce theme called **Arura**. This release represents a comprehensive overhaul with cutting-edge features and enhanced user experience.

### ✨ New Features

#### 🎨 **Advanced Theme System**
- **Complete Rebranding**: Transformed from "Raed" to "Arura" with new identity
- **Modern Design Language**: Contemporary, visually striking interface
- **Advanced Color Schemes**: 6 predefined color palettes (Modern Blue, Nature Green, Royal Purple, Warm Orange, Bold Red, Elegant Gray)
- **Enhanced CSS Architecture**: Comprehensive CSS custom properties and advanced styling system

#### 🏠 **Enhanced Homepage Components**
- **Advanced Hero Section**: Dynamic slider with advanced animations and call-to-action buttons
- **Products Carousel Advanced**: Enhanced product display with best sellers, new arrivals, and custom selections
- **Interactive Banners**: Customizable promotional banners with enhanced visual effects
- **Smart Navigation**: Improved navigation with enhanced hover effects and transitions

#### 🛒 **Shopping Experience Enhancements**
- **Quick View Modal**: Instant product preview without page reload with full functionality
- **Enhanced Product Cards**: Advanced hover effects, quick actions, and improved layout
- **Advanced Wishlist**: Enhanced wishlist functionality with improved user experience
- **Smart Search**: Advanced search capabilities with enhanced filtering (framework ready)

#### 📱 **Social & Engagement Features**
- **Social Media Integration**: Comprehensive social platform connectivity
- **Social Sharing**: Advanced sharing widgets for WhatsApp, Telegram, Twitter, Facebook
- **Newsletter Integration**: Enhanced email collection with modern UI
- **Floating Share Button**: Mobile-optimized social sharing

#### 🌐 **Localization & Accessibility**
- **Enhanced RTL Support**: Improved right-to-left layout optimization
- **Arabic Font Optimization**: Beautiful Arabic typography with enhanced rendering
- **Accessibility Features**: WCAG compliant design with keyboard navigation support
- **High Contrast Support**: Enhanced visibility options
- **Reduced Motion Support**: Respects user preferences for animations

#### 🎭 **Advanced UI/UX**
- **Dark Mode Support**: Optional dark theme toggle (configurable)
- **Advanced Animations**: Smooth transitions and micro-interactions
- **Loading States**: Enhanced loading indicators and progress feedback
- **Responsive Design**: Optimized for all devices with mobile-first approach

#### ⚙️ **Technical Enhancements**
- **Modular JavaScript Architecture**: Organized codebase with Arura-specific modules
- **Performance Optimizations**: Lazy loading, image optimization, and code splitting
- **Progressive Enhancement**: Enhanced functionality that works without JavaScript
- **Advanced Build System**: Improved webpack configuration and asset optimization

### 🔧 **Configuration Enhancements**

#### **New Theme Settings**
- Quick View enable/disable toggle
- Advanced animations control
- Social sharing configuration
- Arabic font optimization toggle
- Dark mode enablement
- Animation speed control
- Color scheme selection

#### **Enhanced Components**
- Hero Section Advanced with configurable slides and animations
- Products Carousel Advanced with multiple display options
- Social Integration with platform-specific configurations
- Enhanced testimonials with improved styling

### 📱 **Mobile Optimizations**
- Enhanced mobile navigation
- Touch-optimized interactions
- Mobile-specific social sharing
- Improved mobile product cards
- Responsive image optimization

### 🔒 **Security & Performance**
- Enhanced input validation
- XSS prevention measures
- Optimized asset loading
- Improved caching strategies
- Reduced bundle sizes

### 📊 **Developer Experience**
- **Enhanced Documentation**: Comprehensive guides and API documentation
- **Deployment Guide**: Step-by-step deployment instructions
- **Component Library**: Reusable components with clear documentation
- **Development Tools**: Improved build process and debugging capabilities

### 🌍 **Internationalization**
- Enhanced Arabic language support
- Improved RTL layout handling
- Cultural design considerations
- Localized component configurations

### 📦 **Dependencies Updates**
- Updated to latest Salla Twilight components
- Enhanced build dependencies
- Optimized package bundle
- Improved compatibility

### 🚀 **Performance Improvements**
- **Faster Load Times**: Optimized asset loading and code splitting
- **Enhanced Caching**: Improved browser caching strategies
- **Image Optimization**: WebP support and responsive images
- **JavaScript Optimization**: Lazy loading and progressive enhancement

### 🎯 **Breaking Changes**
- Theme name changed from "theme-raed" to "arura-theme"
- New component structure for advanced features
- Enhanced CSS architecture (backward compatible)
- New JavaScript module system

### 📋 **Migration Notes**
- This is a complete transformation, not an update
- New installation required for existing Raed theme users
- Enhanced features require new configuration
- Improved documentation available for migration

### 🔗 **Repository Changes**
- **New Repository**: github.com/masindustrys/Aura-Theme
- **New Author**: masindustrys
- **Enhanced README**: Comprehensive documentation and feature overview
- **Deployment Guide**: Detailed deployment and customization instructions

### 📞 **Support & Community**
- **Enhanced Support**: Comprehensive documentation and community support
- **GitHub Issues**: Dedicated issue tracking and feature requests
- **Community Resources**: Integration with Salla developer community

---

## Previous Raed Theme History

*The following entries represent the history of the original Theme Raed before the Arura transformation:*

#  🫆 [1.229.0](https://github.com/SallaApp/theme-raed/compare/1.228.0...1.229.0) (03-08-2025)

### Bug Fixes

- Avoid Casting a Cart Item to an integer

#  ⚙️ [1.228.0](https://github.com/SallaApp/theme-raed/compare/1.227.0...1.228.0) (30-07-2025)

### Enhancements & Required Updates

- Standardized ID usage as strings in JavaScript calls across theme files to avoid parsing issues.

#### Code changes:

- File: `src/views/pages/cart.twig`

- From:
   - salla.cart.deleteItem({{ item.id }}).then(() => document.querySelector('#item-{{ item.id }}').remove())

- To:
   - salla.cart.deleteItem('{{ item.id }}').then(() => document.querySelector('#item-{{ item.id }}').remove())

- File: `src/views/pages/customer/orders/single.twig`

- From:
   - salla.event.dispatch('rating::edit', {type: 'product', feedback_id: {{item.rating.id}} })
   - salla.event.dispatch('rating::delete', {feedback_id: {{item.rating.id}} })
   - salla.event.dispatch('rating::edit', {type: 'store', feedback_id: {{order.rating.store.id}} })
   - salla.event.dispatch('rating::delete', {feedback_id: {{order.rating.store.id}} })
   - salla.event.dispatch('rating::edit', {type: 'shipping', feedback_id: {{order.rating.shipping.id}} })
   - salla.event.dispatch('rating::delete', {feedback_id: {{order.rating.shipping.id}} })


- To:
   - salla.event.dispatch('rating::edit', {type: 'product', feedback_id: '{{item.rating.id}}' })
   - salla.event.dispatch('rating::delete', {feedback_id: '{{item.rating.id}}' })
   - salla.event.dispatch('rating::edit', {type: 'store', feedback_id: '{{order.rating.store.id}}' })
   - salla.event.dispatch('rating::delete', {feedback_id: '{{order.rating.store.id}}' })
   - salla.event.dispatch('rating::edit', {type: 'shipping', feedback_id: '{{order.rating.shipping.id}}' })
   - salla.event.dispatch('rating::delete', {feedback_id: '{{order.rating.shipping.id}}' })


- File: `src/views/pages/product/single.twig`

- From:
   - salla.wishlist.toggle({{ product.id }})
   - salla.event.dispatch('scopes::open', {mode: 'availability', product_id: {{ product.id }} })

- To:
   - salla.wishlist.toggle('{{ product.id }}')
   - salla.event.dispatch('scopes::open', {mode: 'availability', product_id: '{{ product.id }}' })

- File: `src/views/pages/thank-you.twig`

- From:
   - <salla-button onclick="salla.order.show({order_id:{{ order.id }}, url:'{{ order.url }}'})">

- To:
   - <salla-button onclick="salla.order.show({order_id:'{{ order.id }}', url:'{{ order.url }}'})">

# 📦 [1.227.0](https://github.com/SallaApp/theme-raed/compare/1.226.0...1.227.0)(23-06-2025)
### Enhancements
- Enhance default content for the `customize-testimonials` block

# 🌅 [1.226.0](https://github.com/SallaApp/theme-raed/compare/1.224.0...1.226.0)(23-06-2025)
### Bug Fixes
- Support the product sale within price in cart

# ⛲️ [1.224.0](https://github.com/SallaApp/theme-raed/compare/1.223.0...1.224.0)(17-06-2025)
### Enhancements
- Upgrade outdated packages

# 🪁 [1.223.0](https://github.com/SallaApp/theme-raed/compare/1.222.0...1.223.0)(25-05-2025)
### Bug Fixes
- Add image alternative information for thumbnails in the product details' slider.

# 🥊 [1.222.0](https://github.com/SallaApp/theme-raed/compare/1.220.0...1.222.0)(18-05-2025)
### Enhancements
- Enhanced slider note in options.
- Enhanced preview images for inside blocks.

# ✨ [1.220.0](https://github.com/SallaApp/theme-raed/compare/1.214.0...1.220.0)(13-05-2025)
### Enhancements
- Update default content for homepage elements.

# 🪐 [1.214.0](https://github.com/SallaApp/theme-raed/compare/1.212.0...1.214.0)(21-04-2025)
### Enhancements
- Update preview images to enhance content display and user experience.

# 🎩 [1.212.0](https://github.com/SallaApp/theme-raed/compare/1.210.0...1.212.0)(16-04-2025)
### Bug Fixes
- Show custom fields in a user profile.

# 🧶[1.210.0](https://github.com/SallaApp/theme-raed/compare/1.208.0...1.210.0)(15-04-2025)

### Enhancements
- Support custom testimonials component.

# ⛓️‍💥 [1.218.0](https://github.com/SallaApp/theme-raed/compare/1.208.0...1.218.0)(05-05-2025)
### Enhancement
- Support a new option to select bg-size in square-photos section.



# 🎩 [1.208.0](https://github.com/SallaApp/theme-raed/compare/1.190.0...1.208.0)(12-03-2025)
  ### Bug Fixes
  - Tax amount issue in cart.

# 🏅 [1.190.0](https://github.com/SallaApp/theme-raed/compare/1.189.0...1.190.0)(23-02-2025)
### Feature
- Support the new SAR currency symbol.

# ⛵ [1.189.0](https://github.com/SallaApp/theme-raed/compare/1.187.0...1.189.0)(29-12-2024)
### Feature

- Support the `is_default` property for homepage components as well as default data for some components.
- Add preview images for each component in Theme Raed using the image key in the `twilight.json` file.

# 🧶 [1.187.0](https://github.com/SallaApp/theme-raed/compare/1.185.0...1.187.0)(17-12-2024)
### Enhancement

- Upgrade the `twilight-components` to fix the style of product's options.

# 🪐 [1.185.0](https://github.com/SallaApp/theme-raed/compare/1.184.0...1.185.0)(09-10-2024)
### Enhancement
- Update Preview Images

# 🌪️ [1.184.0](https://github.com/SallaApp/theme-raed/compare/1.183.0...1.184.0)(25-09-2024)
### Feature
- Support Blog Interaction with Comments and Likes:
  - Support for liking and unliking on the blog single page.
  - Display likes count and comments count on blog cards.
  - Enable comments and replies on the blog post page. 

# 🌂 [1.183.0](https://github.com/SallaApp/theme-raed/compare/1.182.0...1.183.0)(25-09-2024)
### Feature
- Support comments and like in the Merchant blog.

# 🎓 [1.182.0](https://github.com/SallaApp/theme-raed/compare/1.181.0...1.182.0)(24-09-2024)
### Bug Fixes
- Display rating in the `product-card`.

# 👔 [1.181.0](https://github.com/SallaApp/theme-raed/compare/1.180.0...1.181.0)(24-09-2024)
### Bug Fixes
- Display rating in the `product-card`.

# 💈 [1.180.0](https://github.com/SallaApp/theme-raed/compare/1.179.0...1.180.0)(31-08-2024)
### Enhancement
- Enhancements in the Menus.

# 🪡 [1.179.0](https://github.com/SallaApp/theme-raed/compare/1.178.0...1.179.0)(30-08-2024)
### Bug Fixes
- Avoid storing menu items in the browser.

# 👣 [1.178.0](https://github.com/SallaApp/theme-raed/compare/1.177.0...1.178.0)(29-08-2024)
### Bug Fixes
- Fix align of text in the My Account page.


# 🃏 [1.177.0](https://github.com/SallaApp/theme-raed/compare/1.176.0...1.177.0)(19-08-2024)
### Bug Fixes
-  Fix memory leak error in the `product-card`.

# 🔅 [1.176.0](https://github.com/SallaApp/theme-raed/compare/1.175.0...1.176.0)(12-08-2024)
### Bug Fixes
- Fix the error message style when a user uploads an avatar with size more than **2MB**.

# 🧮 [1.175.0](https://github.com/SallaApp/theme-raed/compare/1.174.0...1.175.0)(08-08-2024)
### Enhancement
- Enhance the reviews system.

# 📊 [1.174.0](https://github.com/SallaApp/theme-raed/compare/1.173.0...1.174.0)(06-08-2024)
### Bug Fixes
- Fix unavailable options.

# 🪞 [1.173.0](https://github.com/SallaApp/theme-raed/compare/1.172.0...1.173.0)(05-08-2024)
### Bug Fixes
- Update Product Price with unavailable option.

# 🔮 [1.172.0](https://github.com/SallaApp/theme-raed/compare/1.171.0...1.172.0)(01-08-2024)
### Bug Fixes
- Upgrade to the `twilight-components`.

# 🖼️ [1.171.0](https://github.com/SallaApp/theme-raed/compare/1.170.0...1.171.0)(01-08-2024)
### Bug Fixes
- Fix the product's image in the product's details page.

# 🔦 [1.170.0](https://github.com/SallaApp/theme-raed/compare/1.169.0...1.170.0)(25-07-2024)
### Bug Fixes
- Upgrade twilight-components package.


# 🖲️ [1.169.0](https://github.com/SallaApp/theme-raed/compare/1.168.0...1.169.0)(23-07-2024)
### Enhancements 
- Upgrade Twilight & Twilight components.

#💈[1.168.0](https://github.com/SallaApp/theme-raed/compare/1.167.0...1.168.0)(17-07-2024)
### Enhancements 
- Handle protected digital files.

# ⛓️‍💥 [1.167.0](https://github.com/SallaApp/theme-raed/compare/1.165.0...1.167.0)(10-07-2024)
### Features
- Support digital product option.

# 💈 [1.165.0](https://github.com/SallaApp/theme-raed/compare/1.164.0...1.165.0)(02-07-2024)
### Enhancements
- Support order option book appointment field in the `salla-booking-field` JS Web Component.

# 🖼️ [1.164.0](https://github.com/SallaApp/theme-raed/compare/1.163.0...1.164.0)(29-06-2024)
### Bug Fixes
- Update price based on product's options.
  
# 🛎️ [1.163.0](https://github.com/SallaApp/theme-raed/compare/1.162.0...1.163.0)(27-06-2024)
### Bug Fixes
- Fix the product options validation.

# 🎁 [1.162.0](https://github.com/SallaApp/theme-raed/compare/1.161.0...1.162.0)(12-06-2024)
### Bug Fixes
- Fix console errors due to hover action on the `menu-item` variable.

# 🎈 [1.161.0](https://github.com/SallaApp/theme-raed/compare/1.160.0...1.161.0)(12-06-2024)
### Bug Fixes
- Fix Style of the product's description.

# 📎 [1.160.0](https://github.com/SallaApp/theme-raed/compare/1.160.0...1.161.0)(20-06-2024)
### Enhancements
- Enhancements for the Testimonials Page.

# 🧲 [1.158.0](https://github.com/SallaApp/theme-raed/compare/1.154.0...1.158.0)(29-05-2024)
### Bug Fixes
 - Eager Loading on the `WishlistCard`.

# 🏷️ [1.154.0](https://github.com/SallaApp/theme-raed/compare/1.150.0...1.154.0)(23-05-2024)
### Enhancements
 - Support the [`salla-comments`](https://docs.salla.dev/doc-482455/?nav=01HNFTE06J4QC24T0D5BPRYKMD) JS Web component in the product single page.
 - Use the [`salla-products-list`](https://docs.salla.dev/doc-422719/?nav=01HNFTE06J4QC24T0D5BPRYKMD) JS Web component on the Wishlist page using custom components.
 - Cart options fixes and enhancements.
 
### Features
 - Support new component, the [`salla-conditional-offer`](https://docs.salla.dev/doc-537931/?nav=01HNFTE06J4QC24T0D5BPRYKMD) JS Web component.
   
# 📰 [1.149.0](https://github.com/SallaApp/theme-raed/compare/1.149.0...1.150.0)(21-05-2024)
### Enhancement
- Custom Component enabled for the Product Card on the Wishlist page.
### Bug Fixes
- Typographical error found on the Wishlist page.

# 💎 [1.148.0](https://github.com/SallaApp/theme-raed/compare/1.148.0...1.150.0)(21-05-2024)
### Features
- Support the [`salla-comments`](https://docs.salla.dev/doc-482455/?nav=01HNFTE06J4QC24T0D5BPRYKMD) JS Web Component.
- Support cart options total on both cart and order pages.
### Bug Fixes
- Fix the cart options price issue on the order page.

# 🏹 [1.147.0](https://github.com/SallaApp/theme-raed/compare/1.147.0...1.150.0)(16-05-2024)
### Enhancements
- Unused files removed
  - Footer's files 
    - contacts.twig
    - menu.twig
    - mobile-apps.twig
    - payment-methods.twig
    - social.twig
  - Header's files 
    - menu-item.twig
    - breadcrumbs.twig
    - menu.twig
  - Product's file
    - offer.twig
      
# 🛠 [1.146.0](https://github.com/SallaApp/theme-raed/compare/1.145.0...1.147.1)(06-05-2024)
### Bug Fixes
- Fixes and enhancements on the [`salla-reviews`](https://docs.salla.dev/doc-508226/?nav=01HNFTE06J4QC24T0D5BPRYKMD) JS Web component
- Support `salla-notifications` component

# ✨ [1.145.0](https://github.com/SallaApp/theme-raed/compare/1.143.0...1.145.0)(29-04-2024)
### Features:
- Support `main menus` via API
- Support the [`salla-reviews`](https://docs.salla.dev/doc-508226/?nav=01HNFTE06J4QC24T0D5BPRYKMD) JS Web component
- Support the [`salla-breadcrumb`](https://docs.salla.dev/doc-482370/?nav=01HNFTE06J4QC24T0D5BPRYKMD) JS Web component
- Support the [`salla-order`](https://docs.salla.dev/doc-508225/?nav=01HNFTE06J4QC24T0D5BPRYKMD) JS Web component

# 🏎️ 1.144.0 (2024-04-25)
### Features
- Validate all product options before updating the price request with better words such as "`Don't call update price request unless all product options are valid.`"
- Make quantity input as `readonly` when the maximum quantity is equal to the value `1`
  
# 🖌️ [1.143.0](https://github.com/SallaApp/theme-raed/compare/1.142.0...1.143.0) (27-03-2024)
### Features
- Support new Twilight Components using `salla.config` and Ajax requests.

# 🚀 [1.142.0](https://github.com/SallaApp/theme-raed/compare/1.141.0...1.142.0) (21-03-2024)
### Features
- Support the [`salla-offer`](https://docs.salla.dev/doc-440408/?nav=01HNFTE06J4QC24T0D5BPRYKMD) JS Web component

# 🌟 [1.141.0](https://github.com/SallaApp/theme-raed/compare/1.140.8...1.141.0) (19-03-2024)
### Features
- Support product specifications.

# 🔖 [1.140.8](https://github.com/SallaApp/theme-raed/compare/1.140.2...1.140.8) (13-02-2024)
### Features
- Support infinite scroll in the wishlist.
- Replace 'images/s-empty.png' asset to 'images/s-empty.png' CDN.
- Disable loading on the submit button and open the login modal directly if the user is a guest on the cart page.
### Bug Fixes
- Cover missed case of price update on the Product details page.
- Fix off-screen dropdown sub-menus.
  
# ⚡ [1.140.2](https://github.com/SallaApp/theme-raed/compare/1.140.0...1.140.2) (05-03-2024)
### Features
- Enhance best practices score for SEO.

# 🗳️ [1.140.0](https://github.com/SallaApp/theme-raed/compare/1.139.0...1.140.0) (15-02-2024)
### Bug Fixes
- Fix product option price with discount.

# 📜 [1.139.0](https://github.com/SallaApp/theme-raed/compare/1.138.7...1.139.0) (14-02-2024)
### Enhancements
- Enhance Cart options.

# 🔧 [1.138.7](https://github.com/SallaApp/theme-raed/compare/1.138.3...1.138.7) (11-02-2024)
### Features
- Twilight Upgrade, supporting Apple Pay with required shipping property.

# 🌐 [1.138.3](https://github.com/SallaApp/theme-raed/compare/1.138.0...1.138.3) (08-02-2024)
### Features
- Card options feature released.

<!-- # 🔥 [1.137.43](https://github.com/SallaApp/theme-raed/compare/1.137.39...1.137.43) (07-02-2024)
### Added
- Release New Feature: Card options. -->

# 🔄 [1.137.39](https://github.com/SallaApp/theme-raed/compare/1.8.0...1.137.39) (29-01-2024)
### Features
- Start of documentation
