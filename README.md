# 🎨 Visions in Paint LLC

A sophisticated art gallery and museum website showcasing original artwork with modern interactive features and e-commerce capabilities.

## 🖼️ Museum Design Philosophy (2026)

This website embodies the elegance of a world-class art museum with contemporary interactive features, featuring a dark sophisticated palette and museum-quality presentation.

### **Museum Color Palette**
- **Deep Charcoal (#1a1a1a)** - Primary background creating gallery atmosphere
- **Warm Ivory (#f5f0e8)** - Secondary background and text for contrast
- **Museum Gold (#c9a96e)** - Premium accent color for highlights and borders
- **Frame Shadow (rgba(0, 0, 0, 0.4))** - Professional artwork framing

### **Typography**
- **Playfair Display**: Elegant serif for headings (400, 700 weights)
- **Inter**: Clean modern sans-serif for body text (300, 400 weights)
- Perfect balance of sophistication and readability

### **2026 Modern Features**
- **Scroll-Triggered Animations** - IntersectionObserver reveals artwork with staggered delays
- **Parallax Scrolling** - Hero and exhibition banners with fixed background attachment
- **Hover Micro-interactions** - Image scale(1.08), brightness boost, golden frame glow
- **CTA Button Animations** - ::before pseudo-element fill animation with scaleX
- **Cursor Spotlight Effect** - Radial gradient follows mouse movement
- **Museum-Style Frames** - 8px solid borders with gold accent on hover
- **Shopping Cart System** - Add/remove items, localStorage persistence, sliding drawer
- **Responsive Mobile Design** - Hamburger menu, single-column grids, optimized layouts

## 🚀 Features

- **Museum Art Gallery** - 6 unique artworks with professional museum-style frames
- **Interactive Shopping Cart** - Add to cart, view items, localStorage persistence, cart badge
- **Scroll Animations** - IntersectionObserver triggers staggered artwork reveals
- **Parallax Effects** - Background images with fixed attachment on hero and banners
- **Hover Effects** - Image scaling, brightness adjustments, golden border glow
- **Mobile Navigation** - Hamburger menu with smooth slide-in animation
- **Stripe Ready** - Cart system ready for Stripe payment integration
- **Disqus Comments** - User engagement on gallery page
- **Responsive Design** - Seamless experience across all devices
- **Dark Museum Theme** - Sophisticated dark palette with gold accents
- **Accessibility** - Focus-visible outlines, prefers-reduced-motion support
- **GitHub Pages Ready** - Jekyll-powered static site generation

## 📸 Pages

- **Home** (`index.html`) - Hero section, featured artwork collection, parallax banner
- **Gallery** (`gallery.html`) - Full art gallery with scroll animations and Disqus comments
- **Shop** (`shop.html`) - Museum shop with shopping cart system and 6 products
- **Success** (`success.html`) - Payment confirmation page with animated checkmark

## ⚙️ Setup

### Quick Start (Jekyll)

```bash
git clone https://github.com/RappinMic/https-github.com-RappinMic-VISIONS-IN-PAINT-LLC.git
cd https-github.com-RappinMic-VISIONS-IN-PAINT-LLC
bundle install
bundle exec jekyll serve
```

Then visit `http://localhost:4000` in your browser.

### GitHub Pages Deployment

Push to the main branch and GitHub Pages will automatically build and deploy your site.

## 🛒 Shopping Cart Features

The shopping cart system includes:
- **Add to Cart** - Products can be added with name, price, and image
- **Cart Badge** - Shows item count on cart icon
- **Cart Drawer** - Slides in from right side with cart contents
- **Remove Items** - Delete items from cart individually
- **Subtotal Calculation** - Automatic total calculation
- **localStorage** - Cart persists across page reloads
- **Responsive** - Full-width drawer on mobile devices

### Stripe Integration (Future Enhancement)

1. Create a [Stripe account](https://stripe.com)
2. Go to Products → Create products for each artwork
3. Create Payment Links for each product
4. Update the checkout button in `assets/js/main.js` to redirect to Stripe
5. Test with Stripe test card: `4242 4242 4242 4242`

## 💬 Disqus Comments Setup

1. Create a [Disqus account](https://disqus.com)
2. Register your site and get a shortname
3. Replace `'visions-in-paint'` in `gallery.html` with your shortname

## 🎨 Customization

### Colors
Edit CSS variables in `assets/css/style.css`:
```css
:root {
  --bg-primary: #1a1a1a;
  --bg-secondary: #f5f0e8;
  --text-light: #f5f0e8;
  --text-dark: #1a1a1a;
  --accent: #c9a96e;
  --frame-shadow: rgba(0, 0, 0, 0.4);
}
```

### Images
Replace SVG files in `assets/images/` with your own artwork:
- `art1.svg` through `art6.svg`
- Maintain aspect ratio for best results
- Museum frames automatically apply to all images

### Content
Update HTML files with your artwork details, prices, and descriptions.

## 📁 Project Structure

```
.
├── index.html              # Home page with hero and featured works
├── gallery.html            # Full gallery with comments
├── shop.html               # Shop with cart system
├── success.html            # Payment success page
├── _config.yml             # Jekyll configuration
├── _layouts/
│   └── default.html        # Main layout template
├── _includes/
│   ├── header.html         # Museum-styled navigation
│   └── footer.html         # Footer with links
├── assets/
│   ├── css/
│   │   └── style.css       # Museum theme CSS (500+ lines)
│   ├── js/
│   │   └── main.js         # Interactive features & cart system
│   └── images/
│       ├── art1.svg        # Artwork images
│       └── ...
└── README.md
```

## 🌟 Live Demo

Visit: [https://rappinmic.github.io/https-github.com-RappinMic-VISIONS-IN-PAINT-LLC/](https://rappinmic.github.io/https-github.com-RappinMic-VISIONS-IN-PAINT-LLC/)

## 📝 License

© 2026 Visions in Paint LLC. All rights reserved.
