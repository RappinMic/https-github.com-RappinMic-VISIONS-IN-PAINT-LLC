# 🎨 Visions in Paint LLC

A stunning artistic-themed website for showcasing and selling original artwork with a sophisticated paint studio aesthetic.

## 🖼️ Artistic Design Philosophy

This website embodies the spirit of a professional art gallery meets creative studio, featuring rich, harmonious colors and paint-themed design elements throughout.

### **Sophisticated Color Palette**
- **Teal (#008080)** - Primary accent color bringing freshness and creativity
- **Ultramarine Blue (#120A8F)** - Bold, deep highlights for dramatic impact
- **Indian Summer (#D2691E)** - Warm burnt orange adding artistic warmth
- **Gold (#FFD700)** - Premium details and highlights for elegance
- **Burnt Umber (#8B4513)** - Rich earth tones grounding the design
- **Dark Plum (#5C3A6B)** - DARKER plum providing depth and sophistication
- **Grape Leaves (#3C3D37)** - Sophisticated dark accents for contrast
- **Canvas White (#F8F5F0)** - Warm off-white like artist canvas
- **Cream (#FFF8DC)** - Soft backgrounds for comfort

### **Typography**
- **Playfair Display**: Elegant serif for headings with artistic flair
- **Cinzel**: Classical serif for titles and branding
- **Lato**: Clean, modern sans-serif for body text
- **Great Vibes**: Artistic cursive script for special accents
- Perfect balance of elegance and readability

### **Paint-Themed Design Elements**
- 🎨 **Paint Brush Icons** - Animated brush strokes in header and footer
- 💧 **Paint Drop Effects** - Decorative paint droplets throughout
- 🖼️ **Artist Palette Icons** - Gallery and artwork markers
- **Canvas-Style Borders** - Textured borders mimicking canvas frames
- **Artistic Gradients** - Smooth color transitions with paint-flow animations
- **Hover Effects** - Interactive transformations on gallery items and buttons
- **Professional Gallery Layout** - Grid system with sophisticated spacing
- **Creative Flourishes** - Subtle decorative elements enhancing the artistic feel

## 🚀 Features

- **Visually Striking Gallery** - 6 unique artworks with professional presentation
- **Paint Studio Aesthetic** - Rich color palette with sophisticated paint-themed design
- **Artistic Animations** - Smooth transitions, hover effects, and paint-flow animations
- **Modern Typography** - Elegant serif fonts balanced with clean sans-serif
- **Sophisticated Colors** - Harmonious palette of teal, plum, burnt umber, and gold
- **Paint-Themed Icons** - 🎨 Brush, 💧 drops, and 🖼️ palette icons throughout
- **Canvas-Style Borders** - Professional framing effects on content containers
- **Creative Flourishes** - Decorative elements enhancing the artistic atmosphere
- **Responsive Design** - Seamless viewing on mobile, tablet, and desktop devices
- **Interactive Elements** - Engaging hover effects with smooth transformations
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
- `--teal`: Primary accent (#008080)
- `--ultramarine`: Bold highlights (#120A8F)
- `--indian-summer`: Warm burnt orange (#D2691E)
- `--gold`: Premium details (#FFD700)
- `--burnt-umber`: Rich earth tones (#8B4513)
- `--dark-plum`: Darker plum complement (#5C3A6B)
- `--grape-leaves`: Sophisticated dark accents (#3C3D37)
- `--canvas-white`: Warm off-white (#F8F5F0)
- `--cream`: Soft cream backgrounds (#FFF8DC)

### Typography
The site uses elegant font families for the artistic aesthetic:
- **Playfair Display**: Elegant serif for headings with artistic character
- **Cinzel**: Classical serif for titles and branding elements
- **Lato**: Clean, modern sans-serif for body text
- **Great Vibes**: Artistic cursive script for special decorative elements

### Animations
All animations are optimized for performance:
- **Paint Flow**: Animated gradients with smooth color transitions
- **Brush Stroke**: Rotating paint brush animations in header
- **Drop Paint**: Subtle paint droplet animations on hover
- **Canvas Border**: Layered border effects mimicking canvas frames
- **Fade In Up**: Smooth entrance animations for gallery items
- **Hover Transformations**: Elegant scaling and shadow effects

### Images
Replace SVG files in `assets/images/` with your own artwork. The artistic theme features:
- Professional gallery presentation with hover effects
- Canvas-style borders and elegant frames
- Paint-themed decorative icons
- Sophisticated color-coordinated borders

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
