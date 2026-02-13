# 🎨 Visions in Paint LLC

A stunning millennial art-themed website for showcasing and selling original artwork, featuring modern artistic trends blended with clean, functional design.

## 🖼️ Millennial Art Design Philosophy

This website embodies contemporary millennial aesthetics while maintaining modern web usability. The design incorporates:

### **Modern Millennial Influences**
- **Pastel Color Palette**: Soft, trendy colors including blush pink, mint green, coral, and lavender with bold electric blue and lime accents
- **Hand-drawn Typography**: Brushstroke-style fonts (Caveat Brush, Kalam) mixed with clean sans-serif (Poppins, Inter)
- **Instagram Aesthetic**: Selfie-inspired frames, polaroid-style overlays, and social media-inspired design elements
- **Abstract Doodles**: Playful, modern geometric shapes and patterns throughout

### **Typography**
- **Caveat Brush & Kalam**: Hand-drawn, brushstroke-style fonts for headings and artistic elements
- **Poppins & Inter**: Modern, clean sans-serif fonts for body text and navigation
- Perfect blend of artistic expression and readability

### **Millennial Color Palette**
- Blush pink (#FFB6C1) - Primary pastel tone
- Mint green (#B2E0D8) - Secondary pastel tone
- Coral (#FF7F66) - Warm accent color
- Lavender (#E6E6FA) - Soft highlight color
- Electric blue (#00D9FF) - Bold contrast accent
- Lime (#D4FF00) - Energetic highlight
- Modern dark gray (#2D2D2D) - Clean text color

### **Design Elements**
- Selfie-inspired corner brackets and camera emoji accents
- Instagram-like polaroid frames with soft shadows
- Abstract doodle patterns and geometric shapes
- Subtle brush textures and digital pattern overlays
- Smooth fade-in animations and hover effects
- Shimmer effects on gallery items
- Clean, rounded buttons with gradient fills

## 🚀 Features

- **Visually Striking Gallery** - 6 unique artworks with millennial-inspired presentation
- **Modern Millennial Aesthetics** - Pastel colors, hand-drawn fonts, and Instagram-like design
- **Smooth Animations** - Fade-in effects, hover pops, and shimmer animations on gallery items
- **Hand-drawn Typography** - Brushstroke fonts (Caveat Brush, Kalam) mixed with clean sans-serif (Poppins, Inter)
- **Pastel Color Palette** - Blush pink, mint green, coral, lavender with electric blue and lime accents
- **Instagram-Inspired Design** - Selfie frames, polaroid overlays, and social media aesthetics
- **Abstract Doodles** - Playful geometric shapes and modern patterns throughout
- **Responsive Design** - Seamless viewing on mobile, tablet, and desktop devices
- **Smooth Scroll Effects** - Enhanced user experience with smooth scrolling
- **Stripe Payment Integration** - Secure payments using Stripe Payment Links
- **Disqus Comments** - User feedback and engagement on gallery page
- **Cross-Browser Compatible** - Works seamlessly across all modern browsers
- **Static Website** - Fast loading with no backend required
- **GitHub Pages Ready** - Easy deployment

## 📸 Pages

- **Home** (`index.html`) - Welcome page with featured artwork
- **Gallery** (`gallery.html`) - Full art gallery with Disqus comments
- **Shop** (`shop.html`) - Purchase artwork with Stripe integration
- **Success** (`success.html`) - Payment confirmation page

## ⚙️ Setup

### Quick Start (Static Site)

Simply open `index.html` in a web browser or serve with any static file server:

```bash
# Using Python
python3 -m http.server 8000

# Using Node.js
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

### Jekyll Setup (Optional)

```bash
git clone https://github.com/yourusername/visions-in-paint.git
cd visions-in-paint
bundle install
bundle exec jekyll serve
```

## 💳 Stripe Integration Setup

1. Create a [Stripe account](https://stripe.com)
2. Go to Products → Create products for each artwork
3. Create Payment Links for each product
4. Update the `STRIPE_PAYMENT_LINKS` object in `shop.html` with your links
5. Test with Stripe test card: `4242 4242 4242 4242`

See detailed instructions in `shop.html`.

## 💬 Disqus Comments Setup

1. Create a [Disqus account](https://disqus.com)
2. Register your site and get a shortname
3. Replace `'visions-in-paint'` in `gallery.html` with your shortname

See detailed instructions in `gallery.html`.

## 🎨 Customization

### Colors
Edit CSS variables in `assets/css/style.css` to customize the millennial color palette:
- `--blush-pink`: Primary pastel tone (#FFB6C1)
- `--mint-green`: Secondary pastel tone (#B2E0D8)
- `--coral`: Warm accent color (#FF7F66)
- `--lavender`: Soft highlight color (#E6E6FA)
- `--electric-blue`: Bold contrast accent (#00D9FF)
- `--lime`: Energetic highlight (#D4FF00)

### Typography
The site uses two font families for the millennial aesthetic:
- **Caveat Brush & Kalam**: Hand-drawn, brushstroke-style fonts for artistic headings
- **Poppins & Inter**: Modern, clean sans-serif for body text and navigation

### Animations
All animations are optimized for performance:
- **Fade-in**: Gallery items fade in with staggered delays
- **Hover Pop**: Gallery items scale up and shimmer on hover
- **Smooth Scroll**: Enhanced scrolling experience
- **Shimmer Effect**: Continuous shimmer animation on hover

### Images
Replace SVG files in `assets/images/` with your own artwork. Current SVGs feature:
- Pastel gradient backgrounds
- Selfie-inspired corner frames
- Abstract doodle elements
- Polaroid-style overlays

### Content
Update HTML files with your artwork details and descriptions

## 📁 Project Structure

```
.
├── index.html              # Home page
├── gallery.html            # Gallery with comments
├── shop.html               # Shop with Stripe
├── success.html            # Payment success page
├── assets/
│   ├── css/
│   │   └── style.css      # Artistic styling
│   └── images/
│       ├── art1.svg       # Artwork images
│       ├── art2.svg
│       └── ...
├── _config.yml            # Jekyll config (optional)
└── README.md
```

## 🌟 Live Demo

Visit the live site: [https://rappinmic.github.io/https-github.com-RappinMic-VISIONS-IN-PAINT-LLC/](https://rappinmic.github.io/https-github.com-RappinMic-VISIONS-IN-PAINT-LLC/)

## 📝 License

© 2024 Visions in Paint LLC. All rights reserved.
