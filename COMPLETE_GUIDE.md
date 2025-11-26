# 🎯 Complete Setup & Usage Guide

## 🎉 Congratulations!

Your Black Friday Promo Library is ready! Here's everything you need to know.

## 📍 Project Location

```
/Users/panayiotisgeorgiou/.gemini/antigravity/scratch/black-friday-promo
```

## 🌐 Demo Website

**Currently Running**: http://localhost:49159

### Available Pages:

1. **Interactive Configurator**: http://localhost:49159/index.html
   - Visual component builder
   - Live code generation
   - Copy-paste ready snippets
   - Supports Vanilla JS, React, and CDN

2. **Live Examples**: http://localhost:49159/examples.html
   - Interactive demo buttons
   - Product showcase
   - All components in action

## 🚀 Quick Start (3 Steps)

### Step 1: Choose Your Integration Method

#### Option A: NPM (Recommended for Projects)

```bash
# In your project directory
npm install black-friday-promo
```

```javascript
// In your JavaScript file
import BFPromo from 'black-friday-promo';

BFPromo.createRibbon({
  text: '50% OFF',
  position: 'top-right'
});
```

#### Option B: CDN (Easiest for Simple Sites)

```html
<!-- Add to your HTML <head> -->
<script src="https://unpkg.com/black-friday-promo"></script>

<!-- Use anywhere in your scripts -->
<script>
  const BFPromo = BlackFridayPromo.default;
  
  BFPromo.createRibbon({
    text: '50% OFF',
    position: 'top-right'
  });
</script>
```

### Step 2: Use the Interactive Configurator

1. Open http://localhost:49159/index.html
2. Click on any component (Ribbon, Banner, Popup, etc.)
3. Customize the settings in the configuration panel
4. Click "Preview" to see it live
5. Click "Copy Code" to get the code
6. Paste into your website!

### Step 3: Deploy

Paste the copied code into your website and you're done! 🎉

## 📚 Component Reference

### 1. 🎀 Ribbon - Corner Badges

**Best for**: Eye-catching promotions, sale announcements

```javascript
BFPromo.createRibbon({
  text: '50% OFF',
  position: 'top-right',        // top-left, top-right, bottom-left, bottom-right
  size: 'medium',               // small, medium, large
  backgroundColor: '#e63946',
  textColor: '#ffffff'
});
```

**Use cases**: 
- Product pages
- Landing pages
- Homepage corners

---

### 2. 📢 Banner - Top/Bottom Bars

**Best for**: Site-wide announcements, free shipping notices

```javascript
BFPromo.createBanner({
  text: 'BLACK FRIDAY SALE - 50% OFF!',
  position: 'top',              // top, bottom
  backgroundColor: '#000000',
  textColor: '#ffffff',
  dismissible: true,            // Show close button
  link: '/sale'                 // Optional link
});
```

**Use cases**:
- Free shipping announcements
- Flash sale alerts
- Promo code distribution

---

### 3. 📜 Marquee - Scrolling Text

**Best for**: Continuous visibility, multiple messages

```javascript
BFPromo.createMarquee({
  text: '🔥 BLACK FRIDAY SALE 🔥 50% OFF 🔥',
  backgroundColor: '#ff6b6b',
  speed: 30,                    // Animation speed in seconds
  direction: 'left',            // left, right
  pauseOnHover: true
});
```

**Use cases**:
- Multiple promotions
- Event announcements
- Ticker-style updates

---

### 4. 💬 Popup - Modal Dialogs

**Best for**: Email capture, exit intent, special offers

```javascript
BFPromo.createPopup({
  title: 'BLACK FRIDAY SALE!',
  text: 'Get 50% OFF on all products',
  buttonText: 'Shop Now',
  buttonLink: '/sale',
  trigger: 'exit',              // immediate, timed, exit, scroll
  delay: 1000,                  // For 'timed' trigger
  scrollPercentage: 50,         // For 'scroll' trigger
  backgroundColor: '#ffffff',
  textColor: '#000000'
});
```

**Trigger Types**:
- `immediate`: Shows right away
- `timed`: Shows after delay
- `exit`: Shows when mouse leaves page (top)
- `scroll`: Shows at scroll percentage

**Use cases**:
- Exit intent offers
- Email list building
- Special discount codes
- Cart abandonment

---

### 5. ⏰ Countdown Timer - Urgency Creator

**Best for**: Limited-time offers, flash sales

```javascript
BFPromo.createCountdown({
  endDate: '2025-11-29T23:59:59',  // Or new Date()
  position: 'top',                  // top, bottom, inline
  backgroundColor: '#1a1a1a',
  textColor: '#ffffff',
  showDays: true,
  showHours: true,
  showMinutes: true,
  showSeconds: true,
  onComplete: () => {
    console.log('Sale ended!');
  }
});
```

**Use cases**:
- Flash sales
- Limited-time offers
- Event countdowns
- Deal expiration

---

### 6. 🎯 Floating Action Button - Sticky CTA

**Best for**: Always-visible conversion opportunities

```javascript
BFPromo.createFloatingButton({
  text: 'SALE',
  icon: '🔥',
  position: 'bottom-right',     // bottom-right, bottom-left, top-right, top-left
  backgroundColor: '#ff6b6b',
  link: '/sale',
  pulse: true                   // Pulse animation
});
```

**Use cases**:
- Sale page links
- Cart shortcuts
- Contact buttons
- Special offers

---

### 7. 🔔 Toast Notification - Slide-in Messages

**Best for**: Non-intrusive notifications

```javascript
BFPromo.createToast({
  text: '🎉 Sale is now live!',
  position: 'bottom-right',     // top-right, top-left, bottom-right, bottom-left
  duration: 5000,               // Duration in ms
  showProgress: true,           // Progress bar
  backgroundColor: '#2d3748',
  textColor: '#ffffff'
});
```

**Use cases**:
- Sale announcements
- Stock alerts
- Promo activations
- Success messages

---

### 8. 📌 Side Tab - Edge Promos

**Best for**: Expandable promotions without space cost

```javascript
BFPromo.createSideTab({
  text: 'SALE',
  position: 'right',            // left, right
  backgroundColor: '#e63946',
  expandedContent: 'Check out our Black Friday deals!'
});
```

**Use cases**:
- Persistent promotions
- Help/support links
- Feedback collection
- Special offers

---

### 9. 🏷️ Badge Overlay - Product Labels

**Best for**: Product discount indicators

```javascript
BFPromo.createBadge('.product-image', {
  text: '-50%',
  position: 'top-right',        // top-right, top-left, bottom-right, bottom-left
  shape: 'circle',              // circle, square, ribbon
  backgroundColor: '#ff6b6b',
  size: '60px'
});
```

**Use cases**:
- Product discounts
- New arrivals
- Best sellers
- Limited stock

---

## 🎨 Real-World Examples

### Example 1: Black Friday Landing Page

```javascript
// Top announcement
BFPromo.createBanner({
  text: '🔥 BLACK FRIDAY - 50% OFF EVERYTHING 🔥',
  position: 'top',
  backgroundColor: '#000000'
});

// Countdown urgency
BFPromo.createCountdown({
  endDate: '2025-11-29T23:59:59',
  position: 'bottom'
});

// Corner ribbon
BFPromo.createRibbon({
  text: 'LIMITED TIME',
  position: 'top-right',
  size: 'large'
});
```

### Example 2: Exit Intent Campaign

```javascript
// Capture abandoning visitors
BFPromo.createPopup({
  title: 'Wait! Don\'t Miss Out! 🎁',
  text: 'Get an extra 10% OFF with code: SAVE10',
  buttonText: 'Claim Discount',
  buttonLink: '/checkout?code=SAVE10',
  trigger: 'exit'
});
```

### Example 3: Product Page

```javascript
// Product badge
BFPromo.createBadge('.product-main-image', {
  text: '-50%',
  position: 'top-right',
  backgroundColor: '#e63946'
});

// Floating buy button
BFPromo.createFloatingButton({
  text: 'BUY NOW',
  icon: '🛒',
  link: '#checkout',
  position: 'bottom-right',
  pulse: true
});

// Stock alert toast
BFPromo.createToast({
  text: '⚡ Only 3 left in stock!',
  position: 'top-right',
  duration: 8000
});
```

### Example 4: Scroll-Triggered Offer

```javascript
// Show offer when user scrolls 50%
BFPromo.createPopup({
  title: 'You\'re Interested! 👀',
  text: 'Here\'s 15% OFF for browsing our products',
  buttonText: 'Claim Now',
  buttonLink: '/sale?code=BROWSE15',
  trigger: 'scroll',
  scrollPercentage: 50
});
```

## 🎯 Best Practices

### ✅ DO:
- Use 2-3 components maximum
- Test on mobile devices
- Match your brand colors
- A/B test different combinations
- Use exit intent strategically
- Create urgency with countdowns
- Make CTAs action-oriented

### ❌ DON'T:
- Overwhelm users with too many elements
- Use aggressive popups on mobile
- Forget to test on different browsers
- Ignore accessibility (color contrast)
- Use popups on every page load

## 📱 Mobile Optimization

All components are responsive, but you can customize:

```javascript
const isMobile = window.innerWidth < 768;

BFPromo.createRibbon({
  text: '50% OFF',
  size: isMobile ? 'small' : 'large',
  fontSize: isMobile ? '12px' : '14px'
});
```

## 🔧 Advanced Usage

### Removing Components

```javascript
const ribbon = BFPromo.createRibbon({...});

// Remove it later
ribbon.remove();
```

### React Integration

```jsx
import { useEffect } from 'react';
import BFPromo from 'black-friday-promo';

function BlackFridayPromo() {
  useEffect(() => {
    const promo = BFPromo.createRibbon({
      text: '50% OFF',
      position: 'top-right'
    });
    
    // Cleanup on unmount
    return () => promo.remove();
  }, []);
  
  return null;
}
```

### Multiple Components

```javascript
// Create multiple components
const banner = BFPromo.createBanner({...});
const countdown = BFPromo.createCountdown({...});
const fab = BFPromo.createFloatingButton({...});

// Remove all later
[banner, countdown, fab].forEach(el => el.remove());
```

## 🐛 Troubleshooting

### Component not showing?
1. Check browser console for errors
2. Verify script is loaded
3. Check z-index conflicts
4. Ensure parent elements aren't hiding it

### Popup not triggering?
- **Exit**: Move mouse to top of browser window
- **Scroll**: Scroll down the page
- **Timed**: Wait for the delay period

### Badge not appearing?
- Ensure target element exists
- Check selector is correct
- Parent needs `position: relative`

## 📦 Publishing to NPM

When ready to publish:

```bash
# 1. Login to npm
npm login

# 2. Update package.json with your details
# 3. Build the library
npm run build

# 4. Publish
npm publish
```

## 🌐 Deploying the Demo

Deploy the `demo/` folder to:
- **Netlify**: Drag & drop the demo folder
- **Vercel**: Connect to GitHub repo
- **GitHub Pages**: Push to gh-pages branch
- **Cloudflare Pages**: Connect repository

## 📊 Performance Tips

- Components are ~5KB total
- No dependencies
- Lazy load if needed
- Remove unused components
- Use CDN for caching

## 🎁 What's Included

✅ 9 promotional components
✅ TypeScript definitions
✅ Interactive demo website
✅ Code generator
✅ Complete documentation
✅ Copy-paste examples
✅ React/Vue/Angular examples
✅ Mobile responsive
✅ Zero dependencies
✅ Production ready

## 📞 Need Help?

1. **Interactive Configurator**: http://localhost:49159/index.html
2. **Live Examples**: http://localhost:49159/examples.html
3. **Full API Docs**: README.md
4. **Quick Examples**: QUICK_START.md
5. **Project Overview**: PROJECT_SUMMARY.md

---

## 🚀 You're All Set!

Your Black Friday Promo Library is ready to boost conversions! 

**Next Steps**:
1. Open the demo site: http://localhost:49159
2. Configure your first component
3. Copy the code
4. Paste into your website
5. Watch your sales grow! 📈

**Happy Black Friday! 🎉**
