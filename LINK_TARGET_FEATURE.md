# Link Target Feature

## Overview
Added the ability to control whether links open in the same tab or a new tab for components that support links.

## Components Updated

### 1. **Banner**
```javascript
BFPromo.createBanner({
  text: 'BLACK FRIDAY SALE!',
  link: 'https://www.google.com',
  linkTarget: '_blank'  // Opens in new tab
});
```

### 2. **Popup**
```javascript
BFPromo.createPopup({
  title: 'Special Offer!',
  buttonText: 'Shop Now',
  buttonLink: 'https://www.google.com',
  linkTarget: '_blank'  // Opens in new tab
});
```

### 3. **Floating Button**
```javascript
BFPromo.createFloatingButton({
  text: 'SALE',
  link: 'https://www.google.com',
  linkTarget: '_blank'  // Opens in new tab
});
```

## Options

- **`_self`** (default): Opens link in the same tab/window
- **`_blank`**: Opens link in a new tab/window

## Security

When using `_blank`, the library automatically adds `rel="noopener noreferrer"` for security best practices.

## Demo

The interactive demo at `demo/index.html` now includes a dropdown to select "Open Link In" with options:
- `_self` (Same Tab)
- `_blank` (New Tab)

## Usage Example

```javascript
// Open in new tab
BFPromo.createBanner({
  text: 'Visit our store!',
  link: 'https://example.com',
  linkTarget: '_blank'
});

// Open in same tab (default)
BFPromo.createBanner({
  text: 'Visit our store!',
  link: 'https://example.com',
  linkTarget: '_self'
});

// Or omit linkTarget (defaults to _self)
BFPromo.createBanner({
  text: 'Visit our store!',
  link: 'https://example.com'
});
```
