# 🎨 Visions in Paint LLC

A stunning **Art Gallery & Museum** themed website showcasing original artwork with a sophisticated 2026 design featuring modern animations, interactive elements, and a fully functional e-commerce store.

## 🖼️ Museum-Inspired Design Philosophy

This website brings the elegance and atmosphere of a world-class art museum to the web with:

### **Museum Aesthetic**
- **Dark, sophisticated color palette**: Deep charcoal (#1a1a1a), warm ivory (#f5f0e8), and museum gold (#c9a96e)
- **Minimalist layouts**: Clean spaces that let the artwork breathe, like a real gallery wall
- **Museum-style frames**: Artwork displayed with box-shadows and subtle inner borders that glow gold on hover
- **Track lighting simulation**: Cursor spotlight effect creates a radial gradient that follows your mouse

### **Modern Typography (2026)**
- **Playfair Display**: Elegant serif font for headings and titles
- **Inter**: Clean, modern sans-serif for body text
- Animated text entries with fade-slide-up effects
- Careful letter-spacing and text-transform for an upscale feel

### **2026 Animations & Graphics**
- **Scroll-triggered reveals**: Artworks fade and slide into view as you scroll using IntersectionObserver
- **Parallax scrolling**: Hero sections and exhibition banners move at different speeds for depth
- **Hover micro-interactions**: Images scale up, brightness increases, and gold frames glow
- **Animated CTA buttons**: Fill animations with pseudo-elements on hover
- **Smooth scroll**: Site-wide smooth scrolling behavior
- **Mobile-responsive**: Hamburger menu and touch-friendly interactions

## 🚀 Features

- **Art Gallery with Museum Frames** - 6 unique artworks with sophisticated presentation
- **Fully Functional Store** - Shopping cart with localStorage persistence
- **Stripe Integration** - Payment Links for secure checkout
- **Disqus Comments** - Community engagement on gallery page
- **Scroll Animations** - IntersectionObserver-powered reveals with staggered delays
- **Parallax Effects** - Background images move slower than foreground
- **Cursor Spotlight** - Radial gradient follows mouse for museum track lighting effect
- **Shopping Cart Drawer** - Slide-in cart with add/remove items, quantity tracking
- **Product Filtering** - Filter by price range and sort alphabetically
- **Responsive Design** - Mobile-first with hamburger navigation
- **Accessibility** - Focus-visible outlines and reduced-motion support
- **Jekyll/GitHub Pages** - Static site generator for easy deployment

## 📸 Pages

- **Home** (`index.html`) - Hero section, featured collection, parallax banner
- **Gallery** (`gallery.html`) - Full art gallery with hover overlays and Disqus comments
- **Shop** (`shop.html`) - E-commerce store with cart system and Stripe integration
- **Success** (`success.html`) - Payment confirmation with animated checkmark

## ⚙️ Setup

### Quick Start (GitHub Pages)

This site is configured for GitHub Pages deployment:

1. Fork or clone this repository
2. Enable GitHub Pages in repository Settings → Pages
3. Set source to `main` branch, `/` (root)
4. Your site will be live at `https://[username].github.io/[repo-name]/`

### Local Development with Jekyll

```bash
git clone https://github.com/RappinMic/https-github.com-RappinMic-VISIONS-IN-PAINT-LLC.git
cd https-github.com-RappinMic-VISIONS-IN-PAINT-LLC
bundle install
bundle exec jekyll serve
```

Visit `http://localhost:4000` in your browser.

### Static File Server (No Jekyll)

You can also serve as a static site:

```bash
# Using Python
python3 -m http.server 8000

# Using Node.js
npx http-server

# Using PHP
php -S localhost:8000
```

## 💳 Stripe Integration Setup

1. Create a [Stripe account](https://stripe.com)
2. Navigate to **Products** in your Dashboard
3. Create products for each artwork with these prices:
   - Abstract Dreams: $450
   - Geometric Harmony: $380
   - Prismatic Vision: $520
   - Flowing Energy: $290
   - Celestial Rings: $410
   - Modern Mosaic: $350
4. Create a **Payment Link** for each product
5. Set success URL to: `https://[your-site]/success.html`
6. Replace placeholder URLs in `shop.html` with your actual Payment Links
7. Test with card: `4242 4242 4242 4242` (expires: any future date, CVC: any 3 digits)

See detailed instructions with HTML comments in `shop.html`.

## 💬 Disqus Comments Setup

1. Create a [Disqus account](https://disqus.com)
2. Register your site and get your shortname
3. Replace `'visions-in-paint'` in `gallery.html` with your shortname (line 82)

See detailed instructions on the Gallery page.

## 🎨 Customization

### Colors

Edit CSS variables in `assets/css/style.css`:

```css
:root {
  --bg-primary: #1a1a1a;      /* Dark charcoal */
  --bg-secondary: #f5f0e8;    /* Warm ivory */
  --accent: #c9a96e;          /* Museum gold */
  --frame-border: #2a2a2a;    /* Frame color */
}
```

### Typography

Google Fonts are loaded in `_layouts/default.html`:
- **Playfair Display**: Headings and titles
- **Inter**: Body text and UI elements

### Animations

All animations can be customized in `assets/css/style.css`. Key animations:
- `fadeSlideUp`: Hero section entrance
- Scroll-triggered reveals with staggered delays
- Hover effects on artwork frames
- CTA button fill animations

### Images

Replace SVG files in `assets/images/` with your own artwork:
- `art1.svg` through `art6.svg`
- Maintain consistent naming for automatic integration

## 📁 Project Structure

```
.
├── index.html              # Home page with hero and featured collection
├── gallery.html            # Gallery with Disqus comments
├── shop.html               # Store with cart and Stripe integration
├── success.html            # Payment success page
├── _config.yml             # Jekyll configuration
├── _layouts/
│   └── default.html        # Main layout template
├── _includes/
│   ├── header.html         # Site header with navigation
│   └── footer.html         # Site footer
├── assets/
│   ├── css/
│   │   └── style.css       # Complete museum theme styling
│   ├── js/
│   │   └── main.js         # Interactivity (cart, animations, etc.)
│   └── images/
│       ├── art1.svg        # Artwork files
│       └── ...
├── Gemfile                 # Jekyll dependencies
└── README.md
```

## 🌟 Live Demo

Visit the live site: [https://rappinmic.github.io/https-github.com-RappinMic-VISIONS-IN-PAINT-LLC/](https://rappinmic.github.io/https-github.com-RappinMic-VISIONS-IN-PAINT-LLC/)

## 🛠️ Technologies

- **Jekyll** - Static site generator
- **Vanilla JavaScript** - No frameworks needed
- **CSS3** - Custom properties, Grid, Flexbox, animations
- **IntersectionObserver API** - Scroll-triggered animations
- **localStorage API** - Shopping cart persistence
- **Stripe Payment Links** - Secure payment processing
- **Disqus** - Comment system
- **GitHub Pages** - Free hosting

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Focus-visible outlines for keyboard navigation
- Reduced-motion media query support
- Alt text on all images

## 📝 License

© 2026 Visions in Paint LLC. All rights reserved.

## 🤝 Contributing

This is a personal art portfolio site. For issues or suggestions, please open an issue on GitHub.

---

**Built with passion for art and modern web design** 🎨✨
