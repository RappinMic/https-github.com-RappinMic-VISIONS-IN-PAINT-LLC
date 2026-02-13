# 🎨 Visions in Paint LLC

A stunning artistic-themed website for showcasing and selling original artwork, featuring influences from the great masters: Picasso, Salvador Dalí, and Leonardo da Vinci.

## 🖼️ Artistic Design Philosophy

This website embodies the essence of three legendary artists while maintaining modern web usability. The design incorporates:

### **Master Artist Influences**
- **Picasso**: Bold, vibrant colors (cubist blues, yellows, reds) with geometric shapes and patterns
- **Salvador Dalí**: Surreal and dreamlike elements with melting effects and mysterious gradients
- **Leonardo da Vinci**: Classical elegance, symmetry, and the golden ratio (1.618) in proportions

### **Typography**
- **Cinzel & Playfair Display**: Classical serif fonts for da Vinci's Renaissance elegance
- **Cormorant Garamond**: Sophisticated serif for body text with artistic flair
- **Montserrat & Bebas Neue**: Bold geometric fonts for Picasso-inspired headers
- Perfect blend of classical refinement and modern boldness

### **Artistic Color Palette**
- Picasso Blue (#0E4C92) - Bold primary tone
- Dalí Gold (#D4AF37) - Surreal accent color
- Picasso Red (#D71920) - Vibrant emphasis
- Vinci Sepia (#704214) - Classical depth
- Picasso Yellow (#FDB827) - Energetic highlight
- Dalí Violet (#9B59B6) - Dreamlike mystery
- Vinci Ivory (#FFFFF0) - Classical elegance

### **Design Elements**
- Geometric patterns inspired by Picasso's Cubism
- Surreal melting effects and dreamlike animations from Dalí
- Classical symmetry and golden ratio proportions from da Vinci
- Bold geometric borders with vibrant artistic gradients
- Dramatic shadows and depth for artistic dimension
- Smooth transformations with perspective effects
- Renaissance-inspired background textures
- Classical frame overlays on gallery items

## 🚀 Features

- **Visually Striking Gallery** - 6 unique artworks with artistic presentation
- **Master Artist Aesthetics** - Picasso, Dalí, and da Vinci influences throughout
- **Dramatic Animations** - Surreal melting effects, geometric rotations, and golden ratio transitions
- **Classical Typography** - Elegant serif fonts mixed with bold geometric typefaces
- **Bold Artistic Colors** - Cubist blues, surreal golds, and Renaissance earth tones
- **Geometric Patterns** - Picasso-inspired cubist shapes and angular designs
- **Surreal Effects** - Dalí-inspired dreamlike animations and morphing shapes
- **Golden Ratio Layout** - da Vinci's classical proportions and symmetry
- **Responsive Design** - Seamless viewing on mobile, tablet, and desktop devices
- **Smooth Perspective Effects** - Enhanced 3D transformations
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
Edit CSS variables in `assets/css/style.css` to customize the artistic color palette:
- `--picasso-blue`: Bold primary tone (#0E4C92)
- `--dali-gold`: Surreal accent color (#D4AF37)
- `--picasso-red`: Vibrant emphasis (#D71920)
- `--vinci-sepia`: Classical depth (#704214)
- `--picasso-yellow`: Energetic highlight (#FDB827)
- `--dali-violet`: Dreamlike mystery (#9B59B6)

### Typography
The site uses three font families for the artistic aesthetic:
- **Cinzel & Playfair Display**: Classical elegance for da Vinci influence
- **Cormorant Garamond**: Refined serif for body text
- **Montserrat & Bebas Neue**: Bold geometric fonts for Picasso-inspired elements

### Animations
All animations are optimized for performance:
- **Melting Dream**: Dalí-inspired surreal morphing effects
- **Geometric Float**: Picasso-inspired cubist rotations
- **Golden Ratio Transitions**: Classical da Vinci proportions in motion
- **Perspective 3D**: Enhanced depth and dimension
- **Artistic Pulse**: Continuous subtle enhancement on hover

### Images
Replace SVG files in `assets/images/` with your own artwork. The artistic theme features:
- Bold geometric patterns and cubist shapes
- Surreal gradient backgrounds
- Classical frame overlays
- Dramatic artistic shadows

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
