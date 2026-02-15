/* ============================================
   VISIONS IN PAINT LLC - MUSEUM THEME 2026
   Main JavaScript - Interactive Features
   ============================================ */

// ============================================
// INTERSECTION OBSERVER - Scroll-triggered Reveals
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all artwork cards with data-animate attribute
  const artworkCards = document.querySelectorAll('[data-animate], .artwork-card');
  artworkCards.forEach(card => observer.observe(card));
});

// ============================================
// PARALLAX SCROLLING EFFECT
// ============================================
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll('.hero, .parallax-banner');
  
  parallaxElements.forEach(element => {
    const speed = 0.5;
    element.style.backgroundPositionY = `${scrolled * speed}px`;
  });
});

// ============================================
// CURSOR SPOTLIGHT EFFECT
// ============================================
let spotlightActive = false;

document.addEventListener('mousemove', (e) => {
  if (window.innerWidth > 768) { // Only on desktop
    const spotlight = document.createElement('div');
    spotlight.style.cssText = `
      position: fixed;
      width: 600px;
      height: 600px;
      background: radial-gradient(circle, rgba(201, 169, 110, 0.15) 0%, transparent 70%);
      pointer-events: none;
      z-index: 9999;
      transform: translate(-50%, -50%);
      transition: opacity 0.3s ease;
      left: ${e.clientX}px;
      top: ${e.clientY}px;
    `;
    
    if (!spotlightActive) {
      document.body.appendChild(spotlight);
      spotlightActive = true;
      
      setTimeout(() => {
        if (spotlight.parentNode) {
          spotlight.remove();
        }
        spotlightActive = false;
      }, 100);
    }
  }
});

// ============================================
// MOBILE NAVIGATION TOGGLE
// ============================================
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('header nav');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    nav.classList.toggle('open');
  });

  // Close menu when clicking nav links
  const navLinks = nav.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      nav.classList.remove('open');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
      menuToggle.classList.remove('active');
      nav.classList.remove('open');
    }
  });
}

// ============================================
// SHOPPING CART SYSTEM
// ============================================

// Cart state
let cart = [];

// Load cart from localStorage on page load
function loadCart() {
  const savedCart = localStorage.getItem('visions-cart');
  if (savedCart) {
    cart = JSON.parse(savedCart);
    updateCartUI();
  }
}

// Save cart to localStorage
function saveCart() {
  localStorage.setItem('visions-cart', JSON.stringify(cart));
}

// Add item to cart
function addToCart(name, price, image) {
  const item = {
    name: name,
    price: price,
    image: image,
    id: Date.now()
  };
  
  cart.push(item);
  saveCart();
  updateCartUI();
  
  // Show feedback
  showCartFeedback('Item added to cart!');
  
  // Auto-open cart drawer briefly
  const cartDrawer = document.querySelector('.cart-drawer');
  if (cartDrawer) {
    cartDrawer.classList.add('open');
    setTimeout(() => {
      cartDrawer.classList.remove('open');
    }, 2000);
  }
}

// Remove item from cart
function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
  updateCartUI();
  showCartFeedback('Item removed from cart');
}

// Update cart UI
function updateCartUI() {
  const cartItemsContainer = document.querySelector('.cart-items');
  const cartBadge = document.querySelector('.cart-badge');
  const cartSubtotal = document.querySelector('.cart-subtotal span:last-child');
  
  // Update badge count
  if (cartBadge) {
    cartBadge.textContent = cart.length;
    cartBadge.style.display = cart.length > 0 ? 'flex' : 'none';
  }
  
  // Update cart items display
  if (cartItemsContainer) {
    if (cart.length === 0) {
      cartItemsContainer.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
    } else {
      cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.name}">
          <div class="cart-item-info">
            <h4>${item.name}</h4>
            <div class="cart-item-price">$${item.price.toFixed(2)}</div>
          </div>
          <button class="remove-item" onclick="removeFromCart(${item.id})" aria-label="Remove item">
            ×
          </button>
        </div>
      `).join('');
    }
  }
  
  // Update subtotal
  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
  if (cartSubtotal) {
    cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
  }
}

// Toggle cart drawer
function toggleCart() {
  const cartDrawer = document.querySelector('.cart-drawer');
  if (cartDrawer) {
    cartDrawer.classList.toggle('open');
  }
}

// Close cart
function closeCart() {
  const cartDrawer = document.querySelector('.cart-drawer');
  if (cartDrawer) {
    cartDrawer.classList.remove('open');
  }
}

// Show cart feedback message
function showCartFeedback(message) {
  const feedback = document.createElement('div');
  feedback.textContent = message;
  feedback.style.cssText = `
    position: fixed;
    top: 100px;
    right: 110px;
    background-color: #c9a96e;
    color: #1a1a1a;
    padding: 1rem 2rem;
    border-radius: 5px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
    z-index: 10000;
    font-weight: 600;
    animation: slideInRight 0.3s ease-out, slideOutRight 0.3s ease-in 2s;
  `;
  
  document.body.appendChild(feedback);
  
  setTimeout(() => {
    feedback.remove();
  }, 2500);
}

// Add CSS animations for feedback
const style = document.createElement('style');
style.textContent = `
  @keyframes slideInRight {
    from {
      transform: translateX(400px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOutRight {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(400px);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// Setup cart event listeners
document.addEventListener('DOMContentLoaded', () => {
  loadCart();
  
  // Cart icon click
  const cartIcon = document.querySelector('.cart-icon');
  if (cartIcon) {
    cartIcon.addEventListener('click', toggleCart);
  }
  
  // Close cart button
  const closeCartBtn = document.querySelector('.close-cart');
  if (closeCartBtn) {
    closeCartBtn.addEventListener('click', closeCart);
  }
  
  // Close cart when clicking outside
  const cartDrawer = document.querySelector('.cart-drawer');
  if (cartDrawer) {
    document.addEventListener('click', (e) => {
      if (!cartDrawer.contains(e.target) && !cartIcon.contains(e.target)) {
        closeCart();
      }
    });
  }
  
  // Checkout button
  const checkoutBtn = document.querySelector('.checkout-btn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (cart.length === 0) {
        alert('Your cart is empty!');
      } else {
        alert('Checkout functionality: Integrate with Stripe Payment Links here!');
        // TODO: Redirect to Stripe checkout or success page
      }
    });
  }
});

// Make functions globally available
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.toggleCart = toggleCart;
window.closeCart = closeCart;

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && href !== '#!') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});

// ============================================
// LAZY LOADING IMAGES
// ============================================
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// ============================================
// HERO ANIMATION ON LOAD
// ============================================
window.addEventListener('load', () => {
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    heroContent.style.opacity = '0';
    setTimeout(() => {
      heroContent.style.transition = 'opacity 1s ease-out';
      heroContent.style.opacity = '1';
    }, 100);
  }
});

// ============================================
// PERFORMANCE: Debounce scroll events
// ============================================
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Apply debouncing to scroll-heavy operations
const debouncedScroll = debounce(() => {
  // Any additional scroll operations can go here
}, 10);

window.addEventListener('scroll', debouncedScroll);

console.log('Visions in Paint LLC - Museum Theme 2026 loaded successfully');
