/**
 * VISIONS IN PAINT LLC - Main JavaScript
 * Art Gallery & Museum Theme - 2026
 */

// ========== Shopping Cart System ==========
let cart = JSON.parse(localStorage.getItem('vipCart')) || [];

function saveCart() {
  localStorage.setItem('vipCart', JSON.stringify(cart));
}

function addToCart(name, price, image) {
  // Check if item already exists
  const existingItem = cart.find(item => item.name === name);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      name: name,
      price: price,
      image: image,
      quantity: 1
    });
  }
  
  saveCart();
  updateCartUI();
  
  // Show feedback
  showCartFeedback();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
  updateCartUI();
}

function updateCartUI() {
  const cartBadge = document.getElementById('cartBadge');
  const cartItemsContainer = document.getElementById('cartItems');
  const cartEmpty = document.getElementById('cartEmpty');
  const cartFooter = document.getElementById('cartFooter');
  const subtotalAmount = document.getElementById('subtotalAmount');
  
  // Update badge count
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  if (cartBadge) {
    cartBadge.textContent = totalItems;
  }
  
  // Update cart drawer
  if (cartItemsContainer) {
    if (cart.length === 0) {
      cartEmpty.style.display = 'block';
      cartFooter.style.display = 'none';
      cartItemsContainer.innerHTML = '';
    } else {
      cartEmpty.style.display = 'none';
      cartFooter.style.display = 'block';
      
      cartItemsContainer.innerHTML = cart.map((item, index) => `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.name}" class="cart-item-image">
          <div class="cart-item-details">
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-price">$${item.price}</div>
            <div class="cart-item-quantity">Qty: ${item.quantity}</div>
            <div class="cart-item-remove" onclick="removeFromCart(${index})">Remove</div>
          </div>
        </div>
      `).join('');
      
      // Calculate subtotal
      const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      if (subtotalAmount) {
        subtotalAmount.textContent = `$${subtotal.toFixed(2)}`;
      }
    }
  }
}

function toggleCart() {
  const cartDrawer = document.getElementById('cartDrawer');
  const cartOverlay = document.getElementById('cartOverlay');
  
  if (cartDrawer && cartOverlay) {
    cartDrawer.classList.toggle('open');
    cartOverlay.classList.toggle('active');
  }
}

function showCartFeedback() {
  const cartToggle = document.getElementById('cartToggle');
  if (cartToggle) {
    cartToggle.style.transform = 'scale(1.3)';
    setTimeout(() => {
      cartToggle.style.transform = 'scale(1)';
    }, 300);
  }
}

// ========== Scroll-Triggered Animations ==========
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('[data-animate]');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15
  });
  
  animatedElements.forEach(el => observer.observe(el));
}

// ========== Parallax Effect ==========
function initParallax() {
  const heroSection = document.querySelector('.hero-section');
  
  if (heroSection) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      heroSection.style.backgroundPositionY = `${scrollY * 0.4}px`;
    });
  }
}

// ========== Cursor Spotlight Effect ==========
function initCursorSpotlight() {
  if (window.innerWidth > 768) {
    document.addEventListener('mousemove', (e) => {
      const x = e.clientX;
      const y = e.clientY;
      
      document.body.style.background = `
        radial-gradient(
          circle 600px at ${x}px ${y}px,
          rgba(201, 169, 110, 0.08),
          transparent 50%
        ),
        #1a1a1a
      `;
    });
  }
}

// ========== Mobile Navigation Toggle ==========
function initMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking nav links
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }
}

// ========== Smooth Scroll for Anchor Links ==========
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href !== '#!') {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
}

// ========== Active Navigation Link ==========
function setActiveNavLink() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    if (currentPath.includes(linkPath) || 
        (currentPath.endsWith('/') && linkPath === './') ||
        (currentPath.endsWith('/') && linkPath.includes('index.html'))) {
      link.classList.add('active');
    }
  });
}

// ========== Event Delegation for Add to Cart Buttons ==========
function initCartButtons() {
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-cart-btn')) {
      const productCard = e.target.closest('.product-card');
      if (productCard) {
        const name = productCard.querySelector('.artwork-title').textContent;
        const priceText = productCard.querySelector('.product-price').textContent;
        const price = parseFloat(priceText.replace('$', ''));
        const image = productCard.querySelector('.artwork-image').src;
        
        addToCart(name, price, image);
      }
    }
  });
}

// ========== Cart Toggle Events ==========
function initCartEvents() {
  const cartToggle = document.getElementById('cartToggle');
  const cartOverlay = document.getElementById('cartOverlay');
  const cartClose = document.getElementById('cartClose');
  
  if (cartToggle) {
    cartToggle.addEventListener('click', toggleCart);
  }
  
  if (cartOverlay) {
    cartOverlay.addEventListener('click', toggleCart);
  }
  
  if (cartClose) {
    cartClose.addEventListener('click', toggleCart);
  }
}

// ========== Shop Filter/Sort (Optional Enhancement) ==========
function initShopFilters() {
  const filterButtons = document.querySelectorAll('.filter-button');
  const sortSelect = document.querySelector('.sort-select');
  
  if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        const filter = button.dataset.filter;
        filterProducts(filter);
      });
    });
  }
  
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      sortProducts(e.target.value);
    });
  }
}

function filterProducts(priceRange) {
  const products = document.querySelectorAll('.product-card');
  
  products.forEach(product => {
    const priceText = product.querySelector('.product-price').textContent;
    const price = parseFloat(priceText.replace('$', ''));
    
    let show = true;
    
    if (priceRange === 'under-400') {
      show = price < 400;
    } else if (priceRange === '400-500') {
      show = price >= 400 && price <= 500;
    } else if (priceRange === 'over-500') {
      show = price > 500;
    }
    
    product.style.display = show ? 'block' : 'none';
  });
}

function sortProducts(sortType) {
  const grid = document.querySelector('.gallery-grid');
  if (!grid) return;
  
  const products = Array.from(grid.querySelectorAll('.product-card'));
  
  products.sort((a, b) => {
    if (sortType === 'name-asc') {
      const nameA = a.querySelector('.artwork-title').textContent;
      const nameB = b.querySelector('.artwork-title').textContent;
      return nameA.localeCompare(nameB);
    } else if (sortType === 'price-asc') {
      const priceA = parseFloat(a.querySelector('.product-price').textContent.replace('$', ''));
      const priceB = parseFloat(b.querySelector('.product-price').textContent.replace('$', ''));
      return priceA - priceB;
    } else if (sortType === 'price-desc') {
      const priceA = parseFloat(a.querySelector('.product-price').textContent.replace('$', ''));
      const priceB = parseFloat(b.querySelector('.product-price').textContent.replace('$', ''));
      return priceB - priceA;
    }
    return 0;
  });
  
  products.forEach(product => grid.appendChild(product));
}

// ========== Initialize Everything on DOM Load ==========
document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimations();
  initParallax();
  initCursorSpotlight();
  initMobileNav();
  initSmoothScroll();
  setActiveNavLink();
  initCartButtons();
  initCartEvents();
  initShopFilters();
  updateCartUI();
});
