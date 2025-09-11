/**
 * Arura Theme - Advanced JavaScript Enhancements
 * Enhanced version of the base app.js with additional Arura-specific features
 */

import MobileMenu from 'mmenu-light';
import Swal from 'sweetalert2';
import Anime from './partials/anime';
import initTootTip from './partials/tooltip';
import AppHelpers from "./app-helpers";

// Import Arura-specific modules
import AruraQuickView from './arura/quick-view';
import AruraSocialShare from './arura/social-share';
import AruraAnimations from './arura/animations';
import AruraThemeCustomizer from './arura/theme-customizer';
import AruraDarkMode from './arura/dark-mode';
import AruraRTLOptimizer from './arura/rtl-optimizer';

class AruraApp extends AppHelpers {
    constructor() {
        super();
        window.app = this;
        window.arura = this;
        
        // Arura-specific properties
        this.aruraModules = {};
        this.themeSettings = this.getThemeSettings();
        this.isRTL = document.documentElement.dir === 'rtl' || document.body.classList.contains('rtl');
        
        // Initialize Arura components
        this.initializeAruraComponents();
    }

    loadTheApp() {
        // Call original app loading
        this.commonThings();
        this.initiateNotifier();
        this.initiateMobileMenu();
        
        if (header_is_sticky) {
            this.initiateStickyMenu();
        }
        
        this.initAddToCart();
        this.initiateDropdowns();
        this.initiateModals();
        this.initiateCollapse();
        this.initAttachWishlistListeners();
        this.changeMenuDirection();
        initTootTip();
        this.loadModalImgOnclick();

        // Arura-specific initialization
        this.loadAruraFeatures();
        
        salla.comment.event.onAdded(() => window.location.reload());
    }

    /**
     * Initialize Arura-specific components
     */
    initializeAruraComponents() {
        try {
            // Quick View functionality
            if (this.themeSettings.enable_quick_view) {
                this.aruraModules.quickView = new AruraQuickView();
            }

            // Social sharing
            if (this.themeSettings.show_social_sharing) {
                this.aruraModules.socialShare = new AruraSocialShare();
            }

            // Advanced animations
            if (this.themeSettings.enable_advanced_animations) {
                this.aruraModules.animations = new AruraAnimations({
                    speed: this.themeSettings.animation_speed || 'medium'
                });
            }

            // Theme customizer
            this.aruraModules.themeCustomizer = new AruraThemeCustomizer({
                colorScheme: this.themeSettings.primary_color_scheme || 'modern-blue'
            });

            // Dark mode
            if (this.themeSettings.enable_dark_mode) {
                this.aruraModules.darkMode = new AruraDarkMode();
            }

            // RTL optimization
            if (this.isRTL && this.themeSettings.arabic_font_optimization) {
                this.aruraModules.rtlOptimizer = new AruraRTLOptimizer();
            }

        } catch (error) {
            console.error('Error initializing Arura components:', error);
        }
    }

    /**
     * Load Arura-specific features
     */
    loadAruraFeatures() {
        // Enhanced product cards
        this.initializeEnhancedProductCards();
        
        // Advanced search functionality
        this.initializeAdvancedSearch();
        
        // Performance optimizations
        this.initializePerformanceOptimizations();
        
        // Accessibility enhancements
        this.initializeAccessibilityEnhancements();
        
        // Progressive loading
        this.initializeProgressiveLoading();

        // Initialize Alpine.js if not already done
        if (typeof Alpine !== 'undefined' && !Alpine.initialized) {
            Alpine.start();
        }
    }

    /**
     * Enhanced product cards functionality
     */
    initializeEnhancedProductCards() {
        // Add hover effects and enhanced interactions
        document.querySelectorAll('.product-card-enhanced').forEach(card => {
            this.enhanceProductCard(card);
        });

        // Quick view button listeners
        document.addEventListener('click', (e) => {
            if (e.target.closest('.quick-view-btn')) {
                e.preventDefault();
                const productId = e.target.closest('[data-product-id]')?.dataset.productId;
                if (productId && this.aruraModules.quickView) {
                    this.aruraModules.quickView.open(productId);
                }
            }
        });
    }

    /**
     * Enhance individual product card
     */
    enhanceProductCard(card) {
        if (!card) return;

        // Add intersection observer for lazy loading
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        observer.observe(card);

        // Enhanced wishlist functionality
        const wishlistBtn = card.querySelector('.wishlist-btn');
        if (wishlistBtn) {
            wishlistBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.handleEnhancedWishlist(e.target);
            });
        }

        // Enhanced cart functionality
        const cartBtn = card.querySelector('.add-to-cart-btn');
        if (cartBtn) {
            cartBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.handleEnhancedAddToCart(e.target);
            });
        }
    }

    /**
     * Enhanced wishlist handling
     */
    handleEnhancedWishlist(button) {
        const productCard = button.closest('.product-card-enhanced');
        const productId = productCard?.dataset.productId;
        
        if (!productId) return;

        // Add loading state
        button.classList.add('loading');
        button.disabled = true;

        // Animate heart icon
        const heartIcon = button.querySelector('i');
        if (heartIcon) {
            heartIcon.style.transform = 'scale(1.3)';
            setTimeout(() => {
                heartIcon.style.transform = 'scale(1)';
            }, 200);
        }

        // Toggle wishlist state
        salla.wishlist.toggle(productId)
            .then(() => {
                button.classList.toggle('active');
                
                // Show success animation
                if (this.aruraModules.animations) {
                    this.aruraModules.animations.celebrateWishlist(button);
                }
            })
            .catch(error => {
                console.error('Wishlist error:', error);
                salla.notify.error('حدث خطأ في إضافة المنتج للمفضلة');
            })
            .finally(() => {
                button.classList.remove('loading');
                button.disabled = false;
            });
    }

    /**
     * Enhanced add to cart handling
     */
    handleEnhancedAddToCart(button) {
        const productCard = button.closest('.product-card-enhanced');
        const productId = productCard?.dataset.productId;
        
        if (!productId) return;

        // Add loading state
        button.classList.add('loading');
        button.disabled = true;
        
        const originalText = button.textContent;
        button.textContent = 'جارٍ الإضافة...';

        // Add to cart
        salla.cart.add({
            product_id: productId,
            quantity: 1
        })
        .then(() => {
            // Success animation
            if (this.aruraModules.animations) {
                this.aruraModules.animations.celebrateAddToCart(button);
            }
            
            button.textContent = 'تمت الإضافة ✓';
            setTimeout(() => {
                button.textContent = originalText;
            }, 2000);
        })
        .catch(error => {
            console.error('Add to cart error:', error);
            salla.notify.error('حدث خطأ في إضافة المنتج للسلة');
            button.textContent = originalText;
        })
        .finally(() => {
            button.classList.remove('loading');
            button.disabled = false;
        });
    }

    /**
     * Advanced search initialization
     */
    initializeAdvancedSearch() {
        const searchInputs = document.querySelectorAll('.search-input-advanced');
        
        searchInputs.forEach(input => {
            let searchTimeout;
            
            input.addEventListener('input', (e) => {
                clearTimeout(searchTimeout);
                searchTimeout = setTimeout(() => {
                    this.performAdvancedSearch(e.target.value);
                }, 300);
            });
        });
    }

    /**
     * Perform advanced search with filtering
     */
    performAdvancedSearch(query) {
        if (query.length < 2) return;

        // Show search results with enhanced UI
        console.log('Advanced search for:', query);
        
        // This would integrate with Salla's search API
        // For now, we'll just demonstrate the enhanced UI
    }

    /**
     * Performance optimizations
     */
    initializePerformanceOptimizations() {
        // Lazy load images
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }

        // Optimize font loading
        if (this.themeSettings.arabic_font_optimization) {
            this.optimizeArabicFonts();
        }
    }

    /**
     * Optimize Arabic fonts
     */
    optimizeArabicFonts() {
        // Preload Arabic fonts
        const arabicFonts = [
            '/assets/fonts/arabic-modern.woff2',
            '/assets/fonts/arabic-display.woff2'
        ];

        arabicFonts.forEach(font => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = font;
            link.as = 'font';
            link.type = 'font/woff2';
            link.crossOrigin = 'anonymous';
            document.head.appendChild(link);
        });
    }

    /**
     * Accessibility enhancements
     */
    initializeAccessibilityEnhancements() {
        // Add ARIA labels where missing
        document.querySelectorAll('button:not([aria-label])').forEach(button => {
            if (button.textContent.trim()) {
                button.setAttribute('aria-label', button.textContent.trim());
            }
        });

        // Keyboard navigation enhancements
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-navigation');
            }
        });

        document.addEventListener('mousedown', () => {
            document.body.classList.remove('keyboard-navigation');
        });

        // Skip to content link
        this.addSkipToContentLink();
    }

    /**
     * Add skip to content link for accessibility
     */
    addSkipToContentLink() {
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.textContent = 'تخطي إلى المحتوى الرئيسي';
        skipLink.className = 'skip-to-content';
        skipLink.style.cssText = `
            position: absolute;
            top: -40px;
            left: 6px;
            background: var(--color-primary);
            color: white;
            padding: 8px;
            text-decoration: none;
            z-index: 9999;
            border-radius: 4px;
            transition: top 0.3s;
        `;

        skipLink.addEventListener('focus', () => {
            skipLink.style.top = '6px';
        });

        skipLink.addEventListener('blur', () => {
            skipLink.style.top = '-40px';
        });

        document.body.insertBefore(skipLink, document.body.firstChild);
    }

    /**
     * Progressive loading
     */
    initializeProgressiveLoading() {
        // Load non-critical components after initial page load
        window.addEventListener('load', () => {
            setTimeout(() => {
                this.loadNonCriticalComponents();
            }, 100);
        });
    }

    /**
     * Load non-critical components
     */
    loadNonCriticalComponents() {
        // Load social widgets
        if (this.aruraModules.socialShare) {
            this.aruraModules.socialShare.loadSocialWidgets();
        }

        // Load analytics and tracking
        this.loadAnalytics();
    }

    /**
     * Load analytics (placeholder)
     */
    loadAnalytics() {
        // This would load Google Analytics, Facebook Pixel, etc.
        console.log('Loading analytics...');
    }

    /**
     * Get theme settings from configuration
     */
    getThemeSettings() {
        // This would typically come from Salla's theme settings
        return {
            enable_quick_view: true,
            show_social_sharing: true,
            enable_advanced_animations: true,
            primary_color_scheme: 'modern-blue',
            enable_dark_mode: false,
            arabic_font_optimization: true,
            animation_speed: 'medium'
        };
    }

    /**
     * Public API for external access
     */
    getModule(moduleName) {
        return this.aruraModules[moduleName];
    }

    /**
     * Update theme settings dynamically
     */
    updateThemeSettings(newSettings) {
        this.themeSettings = { ...this.themeSettings, ...newSettings };
        
        // Reinitialize affected modules
        if (newSettings.enable_quick_view !== undefined) {
            if (newSettings.enable_quick_view && !this.aruraModules.quickView) {
                this.aruraModules.quickView = new AruraQuickView();
            }
        }

        // Apply theme customizations
        if (this.aruraModules.themeCustomizer) {
            this.aruraModules.themeCustomizer.updateSettings(newSettings);
        }
    }
}

// Initialize the Arura app
const aruraApp = new AruraApp();

// Start the app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => aruraApp.loadTheApp());
} else {
    aruraApp.loadTheApp();
}

// Export for external access
window.AruraApp = AruraApp;
export default aruraApp;