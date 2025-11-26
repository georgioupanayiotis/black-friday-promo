# 🚀 Quick Start Guide

## Installation

### Option 1: NPM (Recommended)

```bash
npm install black-friday-promo
```

Then in your JavaScript:

```javascript
import BFPromo from 'black-friday-promo';

BFPromo.createRibbon({
  text: '50% OFF',
  position: 'top-right'
});
```

### Option 2: CDN (Easiest)

Add this to your HTML `<head>`:

```html
<script src="https://unpkg.com/black-friday-promo"></script>
```

Then use it anywhere in your scripts:

```html
<script>
  const BFPromo = BlackFridayPromo.default;
  
  BFPromo.createRibbon({
    text: '50% OFF',
    position: 'top-right'
  });
</script>
```

## 📋 Copy-Paste Examples

### 1. Corner Ribbon

```javascript
BFPromo.createRibbon({
  text: '50% OFF',
  position: 'top-right',
  backgroundColor: '#e63946',
  textColor: '#ffffff'
});
```

### 2. Top Banner

```javascript
BFPromo.createBanner({
  text: 'BLACK FRIDAY SALE - 50% OFF!',
  position: 'top',
  backgroundColor: '#000000',
  textColor: '#ffffff',
  dismissible: true
});
```

### 3. Scrolling Marquee

```javascript
BFPromo.createMarquee({
  text: '🔥 BLACK FRIDAY SALE 🔥 50% OFF 🔥',
  backgroundColor: '#ff6b6b',
  speed: 30
});
```

### 4. Exit Intent Popup

```javascript
BFPromo.createPopup({
  title: 'Wait! Don\'t Miss Out!',
  text: 'Get 50% OFF before you leave',
  buttonText: 'Claim Offer',
  buttonLink: '/sale',
  trigger: 'exit'
});
```

### 5. Countdown Timer

```javascript
BFPromo.createCountdown({
  endDate: '2025-11-29T23:59:59',
  position: 'top',
  backgroundColor: '#000000'
});
```

### 6. Floating Sale Button

```javascript
BFPromo.createFloatingButton({
  text: 'SALE',
  icon: '🔥',
  position: 'bottom-right',
  link: '/sale',
  pulse: true
});
```

### 7. Toast Notification

```javascript
BFPromo.createToast({
  text: '🎉 Sale is now live!',
  duration: 5000
});
```

### 8. Side Tab

```javascript
BFPromo.createSideTab({
  text: 'SALE',
  position: 'right',
  expandedContent: 'Check out our deals!'
});
```

### 9. Product Badge

```javascript
BFPromo.createBadge('.product-image', {
  text: '-50%',
  position: 'top-right',
  shape: 'circle'
});
```

## 🎯 Common Use Cases

### Black Friday Landing Page

```javascript
// Top banner
BFPromo.createBanner({
  text: '🔥 BLACK FRIDAY - 50% OFF EVERYTHING 🔥',
  position: 'top',
  backgroundColor: '#000000'
});

// Countdown timer
BFPromo.createCountdown({
  endDate: '2025-11-29T23:59:59',
  position: 'bottom'
});

// Corner ribbon
BFPromo.createRibbon({
  text: 'LIMITED TIME',
  position: 'top-right'
});
```

### Product Page

```javascript
// Add badge to product image
BFPromo.createBadge('.product-main-image', {
  text: '-50%',
  position: 'top-right',
  backgroundColor: '#e63946'
});

// Floating CTA
BFPromo.createFloatingButton({
  text: 'BUY NOW',
  icon: '🛒',
  link: '#checkout',
  position: 'bottom-right'
});
```

### Exit Intent Campaign

```javascript
BFPromo.createPopup({
  title: 'Wait! Special Offer! 🎁',
  text: 'Get an extra 10% OFF with code: SAVE10',
  buttonText: 'Get Discount',
  buttonLink: '/checkout',
  trigger: 'exit',
  backgroundColor: '#ffffff'
});
```

### Scroll-Triggered Offer

```javascript
BFPromo.createPopup({
  title: 'You\'re Interested! 👀',
  text: 'Here\'s 15% OFF for browsing',
  buttonText: 'Claim Now',
  trigger: 'scroll',
  scrollPercentage: 50
});
```

## 🎨 Customization Tips

### Match Your Brand Colors

```javascript
BFPromo.createRibbon({
  text: 'SALE',
  backgroundColor: '#YOUR_BRAND_COLOR',
  textColor: '#ffffff'
});
```

### Multiple Components

```javascript
// You can use multiple components together
const banner = BFPromo.createBanner({...});
const ribbon = BFPromo.createRibbon({...});
const countdown = BFPromo.createCountdown({...});

// Remove them later if needed
banner.remove();
ribbon.remove();
countdown.remove();
```

### React Integration

```jsx
import { useEffect } from 'react';
import BFPromo from 'black-friday-promo';

function BlackFridayBanner() {
  useEffect(() => {
    const banner = BFPromo.createBanner({
      text: 'BLACK FRIDAY SALE!',
      position: 'top'
    });
    
    return () => banner.remove();
  }, []);
  
  return null;
}
```

## 🔥 Pro Tips

1. **Don't Overdo It**: Use 2-3 elements max
2. **Test on Mobile**: Always check mobile responsiveness
3. **A/B Test**: Try different combinations
4. **Time It Right**: Use exit intent and scroll triggers strategically
5. **Clear CTAs**: Make button text action-oriented

## 📱 Mobile Optimization

All components are mobile-responsive by default, but you can customize:

```javascript
// Smaller ribbon on mobile
const isMobile = window.innerWidth < 768;

BFPromo.createRibbon({
  text: '50% OFF',
  size: isMobile ? 'small' : 'large'
});
```

## 🐛 Troubleshooting

### Component not showing?

1. Check if the script is loaded
2. Open browser console for errors
3. Verify z-index isn't being overridden

### Popup not triggering?

- For 'exit': Move mouse to top of browser
- For 'scroll': Scroll down the page
- For 'timed': Wait for the delay

### Badge not appearing?

- Ensure target element exists
- Check that selector is correct
- Parent element needs `position: relative`

## 📞 Need Help?

- Check the [full documentation](README.md)
- View [live examples](demo/examples.html)
- Use the [interactive configurator](demo/index.html)

---

Happy selling! 🎉
