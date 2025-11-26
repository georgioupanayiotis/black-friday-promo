# 🔥 Black Friday Promo Library

A comprehensive, lightweight JavaScript library for creating stunning Black Friday promotional elements. Zero dependencies, fully customizable, and framework-agnostic.

![npm version](https://img.shields.io/npm/v/black-friday-promo)
![bundle size](https://img.shields.io/bundlephobia/minzip/black-friday-promo)
![license](https://img.shields.io/npm/l/black-friday-promo)

## ✨ Features

- 🎀 **Ribbons** - Eye-catching corner badges
- 📢 **Banners** - Top/bottom announcement bars
- 📜 **Marquee** - Scrolling promotional text
- 💬 **Popups** - Modal dialogs with multiple triggers
- ⏰ **Countdown Timers** - Create urgency with deal expiration
- 🎯 **Floating Action Buttons** - Sticky promotional CTAs
- 🔔 **Toast Notifications** - Non-intrusive slide-in messages
- 📌 **Side Tabs** - Edge-mounted expandable promos
- 🏷️ **Badge Overlays** - Product discount labels

## 🚀 Quick Start

### Installation

```bash
npm install black-friday-promo
```

### CDN

```html
<script src="https://unpkg.com/black-friday-promo"></script>
```

### Basic Usage

```javascript
import BFPromo from 'black-friday-promo';

// Create a ribbon
BFPromo.createRibbon({
  text: '50% OFF',
  position: 'top-right',
  backgroundColor: '#e63946',
  textColor: '#ffffff'
});

// Create a countdown timer
BFPromo.createCountdown({
  endDate: '2025-11-29T23:59:59',
  position: 'top',
  backgroundColor: '#000000'
});

// Create a popup
BFPromo.createPopup({
  title: 'BLACK FRIDAY SALE!',
  text: 'Get 50% OFF on all products',
  buttonText: 'Shop Now',
  buttonLink: '/sale',
  trigger: 'exit'
});
```

## 📖 API Documentation

### Ribbon

Create corner ribbons to highlight promotions.

```javascript
BFPromo.createRibbon({
  text: '50% OFF',                    // Ribbon text
  position: 'top-right',              // 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  size: 'medium',                     // 'small' | 'medium' | 'large'
  backgroundColor: '#e63946',
  textColor: '#ffffff',
  fontSize: '14px',
  fontWeight: 'bold',
  zIndex: 9999
});
```

### Banner

Create top or bottom announcement bars.

```javascript
BFPromo.createBanner({
  text: 'BLACK FRIDAY SALE - 50% OFF!',
  position: 'top',                    // 'top' | 'bottom'
  backgroundColor: '#000000',
  textColor: '#ffffff',
  height: '50px',
  dismissible: true,                  // Show close button
  link: '/sale',                      // Optional link
  linkTarget: '_self',                // '_self' | '_blank' (new tab)
  zIndex: 9998
});
```

### Marquee

Create scrolling text announcements.

```javascript
BFPromo.createMarquee({
  text: '🔥 BLACK FRIDAY SALE 🔥 50% OFF 🔥',
  position: 'inline',                 // 'top' | 'bottom' | 'inline'
  backgroundColor: '#ff6b6b',
  textColor: '#ffffff',
  speed: 50,                          // Animation speed in seconds
  direction: 'left',                  // 'left' | 'right'
  pauseOnHover: true,
  zIndex: 9997
});
```

### Popup

Create modal popups with various triggers.

```javascript
BFPromo.createPopup({
  title: 'BLACK FRIDAY SALE!',
  text: 'Get 50% OFF on all products',
  buttonText: 'Shop Now',
  buttonLink: '#',
  linkTarget: '_self',                // '_self' | '_blank' (new tab)
  trigger: 'immediate',               // 'immediate' | 'timed' | 'exit' | 'scroll'
  delay: 1000,                        // Delay in ms (for 'timed')
  scrollPercentage: 50,               // Trigger at % scroll (for 'scroll')
  showCloseButton: true,
  backgroundColor: '#ffffff',
  textColor: '#000000',
  width: '90%',
  maxWidth: '500px',
  zIndex: 10000
});
```

### Countdown Timer

Create urgency with countdown timers.

```javascript
BFPromo.createCountdown({
  endDate: '2025-11-29T23:59:59',     // Date string or Date object
  position: 'top',                    // 'top' | 'bottom' | 'inline'
  backgroundColor: '#1a1a1a',
  textColor: '#ffffff',
  fontSize: '24px',
  showDays: true,
  showHours: true,
  showMinutes: true,
  showSeconds: true,
  onComplete: () => {                 // Callback when countdown ends
    console.log('Sale ended!');
  },
  zIndex: 9996
});
```

### Floating Action Button

Create sticky promotional buttons.

```javascript
BFPromo.createFloatingButton({
  text: 'SALE',
  icon: '🔥',
  position: 'bottom-right',           // 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left'
  backgroundColor: '#ff6b6b',
  textColor: '#ffffff',
  link: '/sale',
  linkTarget: '_self',                // '_self' | '_blank' (new tab)
  pulse: true,                        // Pulse animation
  zIndex: 9995
});
```

### Toast Notification

Create slide-in notifications.

```javascript
BFPromo.createToast({
  text: '🎉 Special offer activated!',
  position: 'bottom-right',           // 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
  backgroundColor: '#2d3748',
  textColor: '#ffffff',
  duration: 5000,                     // Duration in ms
  showProgress: true,                 // Show progress bar
  zIndex: 10001
});
```

### Side Tab

Create expandable side tabs.

```javascript
BFPromo.createSideTab({
  text: 'SALE',
  position: 'right',                  // 'left' | 'right'
  backgroundColor: '#e63946',
  textColor: '#ffffff',
  expandedContent: 'Check out our Black Friday deals!',
  zIndex: 9994
});
```

### Badge Overlay

Add discount badges to product images.

```javascript
BFPromo.createBadge('.product-image', {
  text: '-50%',
  position: 'top-right',              // 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
  shape: 'circle',                    // 'circle' | 'square' | 'ribbon'
  backgroundColor: '#ff6b6b',
  textColor: '#ffffff',
  size: '60px',
  zIndex: 100
});
```

## 🎨 Interactive Demo

Visit our [interactive demo site](demo/index.html) to:
- Configure components visually
- Generate copy-paste code
- Preview components in real-time
- Get code for Vanilla JS, React, and CDN

## 🔧 Framework Integration

### React

```jsx
import { useEffect } from 'react';
import BFPromo from 'black-friday-promo';

function App() {
  useEffect(() => {
    const ribbon = BFPromo.createRibbon({
      text: '50% OFF',
      position: 'top-right'
    });
    
    return () => ribbon.remove();
  }, []);
  
  return <div>Your app</div>;
}
```

### Vue

```vue
<script setup>
import { onMounted, onUnmounted } from 'vue';
import BFPromo from 'black-friday-promo';

let promo;

onMounted(() => {
  promo = BFPromo.createRibbon({
    text: '50% OFF',
    position: 'top-right'
  });
});

onUnmounted(() => {
  if (promo) promo.remove();
});
</script>
```

### Angular

```typescript
import { Component, OnInit, OnDestroy } from '@angular/core';
import BFPromo from 'black-friday-promo';

@Component({
  selector: 'app-root',
  template: '<div>Your app</div>'
})
export class AppComponent implements OnInit, OnDestroy {
  private promo: any;
  
  ngOnInit() {
    this.promo = BFPromo.createRibbon({
      text: '50% OFF',
      position: 'top-right'
    });
  }
  
  ngOnDestroy() {
    if (this.promo) this.promo.remove();
  }
}
```

## 💡 Best Practices

1. **Don't Overdo It** - Use 2-3 promotional elements max to avoid overwhelming users
2. **Mobile First** - Test on mobile devices to ensure good UX
3. **Performance** - Remove elements when not needed using `.remove()`
4. **A/B Testing** - Test different combinations to see what converts best
5. **Accessibility** - Ensure sufficient color contrast and keyboard navigation

## 🌟 2025 Marketing Trends

This library includes components based on proven 2025 e-commerce trends:

- **Exit Intent Popups** - Capture abandoning visitors
- **Countdown Timers** - Create FOMO (Fear of Missing Out)
- **Floating CTAs** - Always-visible conversion opportunities
- **Toast Notifications** - Non-intrusive engagement
- **Marquee Banners** - Continuous visibility without space cost

## 📦 Bundle Size

- **Minified**: ~5KB
- **Gzipped**: ~2KB
- **Zero dependencies**

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - feel free to use in commercial projects!

## 🔗 Links

- [Demo Site](demo/index.html)
- [GitHub Repository](#)
- [NPM Package](#)
- [Report Issues](#)

---

Made with ❤️ for Black Friday 2025
