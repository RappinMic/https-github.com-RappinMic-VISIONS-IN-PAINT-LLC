# 🎨 Visions in Paint LLC

A stunning artistic-themed website for showcasing and selling original artwork, inspired by the great masters of Renaissance and Baroque art including Leonardo da Vinci, Rembrandt, and other classical painters.

## 🖼️ Artistic Design Philosophy

This website embodies the timeless elegance of Renaissance and Baroque art masters while maintaining modern web usability. The design incorporates:

### **Leonardo da Vinci & Rembrandt Influences**
- **Chiaroscuro Technique**: Dramatic interplay of light and shadow creates depth and dimension throughout the site
- **Color Theory**: Warm, rich earth tones inspired by Renaissance palettes (siennas, ochres, umbers, and golds)
- **Golden Ratio**: Layout proportions and spacing follow classical compositional principles
- **Sfumato Effect**: Subtle gradients and soft transitions create atmospheric depth

### **Classical Typography**
- **Playfair Display**: Elegant serif headings reminiscent of classical inscriptions
- **Cormorant Garamond**: Refined body text with Renaissance character
- **Cinzel**: Roman-inspired font for navigation and buttons, evoking ancient elegance

### **Renaissance Color Palette**
- Deep umber shadows (#2C1810) - Rembrandt's signature darkness
- Sienna earth tones (#8B4513) - da Vinci's natural pigments
- Warm ochre (#CD853F) - Classical warmth
- Renaissance gold (#DAA520) - Illuminated manuscript accents
- Antique canvas (#F5E6D3) - Aged parchment background

### **Design Elements**
- Ornamental borders inspired by Renaissance frames
- Canvas texture overlays for authentic artistic feel
- Vignette effects creating focused viewing areas
- Decorative flourishes and classical dividers
- Layered shadows for dimensional depth

## 🚀 Features

- **Visually Striking Gallery** - 6 unique artworks with Renaissance-inspired presentation
- **Classical Design Aesthetics** - Influenced by Leonardo da Vinci, Rembrandt, and Baroque masters
- **Chiaroscuro Effects** - Dramatic light and shadow play throughout the design
- **Elegant Typography** - Classical serif fonts (Playfair Display, Cormorant Garamond, Cinzel)
- **Rich Color Palette** - Warm earth tones, siennas, ochres, and Renaissance golds
- **Canvas Textures** - Subtle overlays creating authentic artistic atmosphere
- **Golden Ratio Layouts** - Classical compositional principles in design
- **Ornamental Frames** - Gallery items feature Renaissance-style borders
- **Stripe Payment Integration** - Secure payments using Stripe Payment Links
- **Disqus Comments** - User feedback and engagement on gallery page
- **Responsive Design** - Looks elegant on all devices (desktop, tablet, mobile)
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
Edit CSS variables in `assets/css/style.css` to customize the Renaissance color palette:
- `--primary-color`: Sienna earth tone
- `--secondary-color`: Warm ochre
- `--accent-color`: Renaissance gold
- `--dark-color`: Deep umber (Rembrandt's shadows)
- `--light-color`: Antique canvas/parchment

### Typography
The site uses three classical font families:
- **Playfair Display**: Elegant headings with Italian Renaissance character
- **Cormorant Garamond**: Refined body text, inspired by Claude Garamond
- **Cinzel**: Navigation and buttons, based on Roman inscriptions

### Images
Replace SVG files in `assets/images/` with your own artwork

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

Visit the live site: [Your GitHub Pages URL]

## 📝 License

© 2024 Visions in Paint LLC. All rights reserved.
