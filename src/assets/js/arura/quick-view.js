/**
 * Arura Quick View Module
 * Handles product quick view functionality
 */

class AruraQuickView {
    constructor() {
        this.isOpen = false;
        this.currentProductId = null;
        this.modal = null;
        this.cache = new Map();
        
        this.init();
    }

    init() {
        this.createModal();
        this.bindEvents();
    }

    createModal() {
        // Check if modal already exists
        this.modal = document.getElementById('arura-quick-view-modal');
        
        if (!this.modal) {
            this.modal = document.createElement('div');
            this.modal.id = 'arura-quick-view-modal';
            this.modal.className = 'arura-quick-view-modal';
            this.modal.innerHTML = this.getModalHTML();
            document.body.appendChild(this.modal);
        }
    }

    getModalHTML() {
        return `
            <div class="modal-backdrop" style="display: none;"></div>
            <div class="modal-container" style="display: none;">
                <div class="modal-content">
                    <button class="close-btn" aria-label="إغلاق">
                        <i class="sicon-close"></i>
                    </button>
                    <div class="modal-body">
                        <div class="loading-state">
                            <div class="loading-spinner"></div>
                            <p>جارٍ التحميل...</p>
                        </div>
                        <div class="product-content" style="display: none;">
                            <!-- Product content will be inserted here -->
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    bindEvents() {
        // Close modal events
        this.modal.querySelector('.close-btn').addEventListener('click', () => this.close());
        this.modal.querySelector('.modal-backdrop').addEventListener('click', () => this.close());
        
        // Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) {
                this.close();
            }
        });

        // Quick view button clicks
        document.addEventListener('click', (e) => {
            const quickViewBtn = e.target.closest('[data-quick-view]');
            if (quickViewBtn) {
                e.preventDefault();
                const productId = quickViewBtn.dataset.productId || quickViewBtn.dataset.quickView;
                this.open(productId);
            }
        });
    }

    async open(productId) {
        if (!productId) return;

        this.currentProductId = productId;
        this.isOpen = true;
        
        // Show modal
        this.modal.querySelector('.modal-backdrop').style.display = 'block';
        this.modal.querySelector('.modal-container').style.display = 'flex';
        
        // Show loading state
        this.showLoading();
        
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
        
        try {
            const productData = await this.fetchProductData(productId);
            this.renderProduct(productData);
        } catch (error) {
            console.error('Failed to load product:', error);
            this.showError('فشل في تحميل بيانات المنتج');
        }
    }

    close() {
        this.isOpen = false;
        this.currentProductId = null;
        
        // Hide modal
        this.modal.querySelector('.modal-backdrop').style.display = 'none';
        this.modal.querySelector('.modal-container').style.display = 'none';
        
        // Restore body scroll
        document.body.style.overflow = '';
        
        // Clear content
        this.modal.querySelector('.product-content').innerHTML = '';
        this.modal.querySelector('.product-content').style.display = 'none';
    }

    showLoading() {
        this.modal.querySelector('.loading-state').style.display = 'flex';
        this.modal.querySelector('.product-content').style.display = 'none';
    }

    hideLoading() {
        this.modal.querySelector('.loading-state').style.display = 'none';
        this.modal.querySelector('.product-content').style.display = 'block';
    }

    showError(message) {
        this.hideLoading();
        this.modal.querySelector('.product-content').innerHTML = `
            <div class="error-state">
                <i class="sicon-info"></i>
                <p>${message}</p>
                <button onclick="arura.getModule('quickView').close()">إغلاق</button>
            </div>
        `;
        this.modal.querySelector('.product-content').style.display = 'block';
    }

    async fetchProductData(productId) {
        // Check cache first
        if (this.cache.has(productId)) {
            return this.cache.get(productId);
        }

        try {
            // Use Salla API to fetch product data
            const response = await salla.api.product.get(productId);
            const productData = response.data;
            
            // Cache the result
            this.cache.set(productId, productData);
            
            return productData;
        } catch (error) {
            throw new Error('Failed to fetch product data');
        }
    }

    renderProduct(product) {
        const productHTML = this.generateProductHTML(product);
        this.modal.querySelector('.product-content').innerHTML = productHTML;
        this.hideLoading();
        
        // Bind product-specific events
        this.bindProductEvents(product);
    }

    generateProductHTML(product) {
        return `
            <div class="quick-view-product">
                <div class="product-images">
                    <div class="main-image">
                        <img src="${product.image?.url || ''}" alt="${product.name}" />
                        ${this.generateBadges(product)}
                    </div>
                    ${this.generateThumbnails(product)}
                </div>
                <div class="product-details">
                    <div class="product-category">${product.category?.name || ''}</div>
                    <h2 class="product-name">${product.name}</h2>
                    ${this.generateRating(product)}
                    ${this.generatePrice(product)}
                    <div class="product-description">${product.description || ''}</div>
                    ${this.generateOptions(product)}
                    ${this.generateQuantitySelector()}
                    ${this.generateActionButtons(product)}
                </div>
            </div>
        `;
    }

    generateBadges(product) {
        let badges = '';
        
        if (product.is_on_sale) {
            badges += '<span class="badge sale-badge">تخفيض</span>';
        }
        
        if (product.is_new) {
            badges += '<span class="badge new-badge">جديد</span>';
        }
        
        return badges ? `<div class="product-badges">${badges}</div>` : '';
    }

    generateThumbnails(product) {
        if (!product.images || product.images.length <= 1) return '';
        
        const thumbnails = product.images.map(image => 
            `<img src="${image.url}" alt="${product.name}" class="thumbnail" onclick="arura.getModule('quickView').setMainImage('${image.url}')">`
        ).join('');
        
        return `<div class="thumbnail-images">${thumbnails}</div>`;
    }

    generateRating(product) {
        if (!product.rating) return '';
        
        const stars = Array.from({length: 5}, (_, i) => 
            `<i class="star sicon-star ${i < product.rating ? 'filled' : ''}"></i>`
        ).join('');
        
        return `
            <div class="product-rating">
                <div class="stars">${stars}</div>
                <span class="rating-count">(${product.reviews_count || 0})</span>
            </div>
        `;
    }

    generatePrice(product) {
        if (product.is_on_sale) {
            return `
                <div class="product-price">
                    <span class="sale-price">${product.sale_price}</span>
                    <span class="original-price">${product.regular_price}</span>
                </div>
            `;
        }
        
        return `<div class="product-price"><span class="regular-price">${product.price}</span></div>`;
    }

    generateOptions(product) {
        if (!product.options || product.options.length === 0) return '';
        
        const optionsHTML = product.options.map(option => `
            <div class="option-group">
                <label>${option.name}</label>
                <select name="option_${option.id}" class="option-select">
                    ${option.values.map(value => 
                        `<option value="${value.id}">${value.name}</option>`
                    ).join('')}
                </select>
            </div>
        `).join('');
        
        return `<div class="product-options">${optionsHTML}</div>`;
    }

    generateQuantitySelector() {
        return `
            <div class="quantity-selector">
                <label>الكمية</label>
                <div class="quantity-input">
                    <button class="qty-btn decrease" onclick="arura.getModule('quickView').decreaseQuantity()">-</button>
                    <input type="number" value="1" min="1" class="qty-field" />
                    <button class="qty-btn increase" onclick="arura.getModule('quickView').increaseQuantity()">+</button>
                </div>
            </div>
        `;
    }

    generateActionButtons(product) {
        const addToCartBtn = product.is_out_of_stock ? 
            '<button class="btn btn-disabled" disabled>غير متوفر</button>' :
            '<button class="btn btn-primary add-to-cart-btn" onclick="arura.getModule(\'quickView\').addToCart()">إضافة للسلة</button>';
        
        return `
            <div class="action-buttons">
                ${addToCartBtn}
                <button class="btn btn-outline wishlist-btn" onclick="arura.getModule('quickView').toggleWishlist()">
                    <i class="sicon-heart"></i> المفضلة
                </button>
                <a href="${product.url}" class="btn btn-outline">عرض التفاصيل</a>
            </div>
        `;
    }

    bindProductEvents(product) {
        // Bind any additional interactive events
        this.currentProduct = product;
    }

    setMainImage(imageUrl) {
        const mainImage = this.modal.querySelector('.main-image img');
        if (mainImage) {
            mainImage.src = imageUrl;
        }
    }

    increaseQuantity() {
        const qtyField = this.modal.querySelector('.qty-field');
        if (qtyField) {
            qtyField.value = parseInt(qtyField.value) + 1;
        }
    }

    decreaseQuantity() {
        const qtyField = this.modal.querySelector('.qty-field');
        if (qtyField && parseInt(qtyField.value) > 1) {
            qtyField.value = parseInt(qtyField.value) - 1;
        }
    }

    async addToCart() {
        if (!this.currentProduct) return;

        const qtyField = this.modal.querySelector('.qty-field');
        const quantity = qtyField ? parseInt(qtyField.value) : 1;
        
        // Get selected options
        const options = {};
        this.modal.querySelectorAll('.option-select').forEach(select => {
            const optionId = select.name.replace('option_', '');
            options[optionId] = select.value;
        });

        try {
            await salla.cart.add({
                product_id: this.currentProduct.id,
                quantity: quantity,
                options: options
            });
            
            salla.notify.success('تمت إضافة المنتج للسلة');
            
            // Optionally close modal
            // this.close();
            
        } catch (error) {
            console.error('Add to cart error:', error);
            salla.notify.error('فشل في إضافة المنتج للسلة');
        }
    }

    async toggleWishlist() {
        if (!this.currentProduct) return;

        try {
            await salla.wishlist.toggle(this.currentProduct.id);
            
            const wishlistBtn = this.modal.querySelector('.wishlist-btn');
            wishlistBtn.classList.toggle('active');
            
            const message = wishlistBtn.classList.contains('active') ? 
                'تمت إضافة المنتج للمفضلة' : 'تم إزالة المنتج من المفضلة';
            
            salla.notify.success(message);
            
        } catch (error) {
            console.error('Wishlist error:', error);
            salla.notify.error('فشل في تحديث المفضلة');
        }
    }
}

export default AruraQuickView;