(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.BlackFridayPromo = {}));
})(this, (function (exports) { 'use strict';

    // Main class
    class BlackFridayPromo {
        constructor() {
            this.elements = [];
        }
        // Ribbon
        createRibbon(config = {}) {
            const { text = '50% OFF', position = 'top-right', backgroundColor = '#e63946', textColor = '#ffffff', fontSize = '14px', fontWeight = 'bold', size = 'medium', zIndex = 9999 } = config;
            const ribbon = document.createElement('div');
            ribbon.className = `bfp-ribbon bfp-ribbon-${position} bfp-ribbon-${size}`;
            ribbon.textContent = text;
            Object.assign(ribbon.style, {
                position: 'fixed',
                backgroundColor,
                color: textColor,
                fontSize,
                fontWeight,
                zIndex: zIndex.toString(),
                padding: size === 'small' ? '8px 30px' : size === 'large' ? '15px 50px' : '10px 40px',
                width: size === 'small' ? '150px' : size === 'large' ? '250px' : '200px',
                textAlign: 'center',
                transform: this.getRibbonTransform(position),
                boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                whiteSpace: 'nowrap',
                overflow: 'visible'
            });
            this.setRibbonPosition(ribbon, position);
            document.body.appendChild(ribbon);
            this.elements.push(ribbon);
            return ribbon;
        }
        getRibbonTransform(position) {
            switch (position) {
                case 'top-left': return 'rotate(-45deg)';
                case 'top-right': return 'rotate(45deg)';
                case 'bottom-left': return 'rotate(45deg)';
                case 'bottom-right': return 'rotate(-45deg)';
                default: return 'rotate(45deg)';
            }
        }
        setRibbonPosition(element, position) {
            const positions = {
                'top-left': { top: '30px', left: '-50px' },
                'top-right': { top: '30px', right: '-50px' },
                'bottom-left': { bottom: '30px', left: '-50px' },
                'bottom-right': { bottom: '30px', right: '-50px' }
            };
            Object.assign(element.style, positions[position]);
        }
        // Banner
        createBanner(config = {}) {
            const { text = 'BLACK FRIDAY SALE - 50% OFF EVERYTHING!', position = 'top', backgroundColor = '#000000', textColor = '#ffffff', fontSize = '16px', fontWeight = 'bold', height = '50px', dismissible = true, link, linkTarget = '_self', zIndex = 9998 } = config;
            const banner = document.createElement('div');
            banner.className = `bfp-banner bfp-banner-${position}`;
            const content = document.createElement('div');
            content.textContent = text;
            content.style.flex = '1';
            content.style.textAlign = 'center';
            if (link) {
                const linkEl = document.createElement('a');
                linkEl.href = link;
                linkEl.target = linkTarget;
                if (linkTarget === '_blank') {
                    linkEl.rel = 'noopener noreferrer';
                }
                linkEl.textContent = text;
                linkEl.style.color = textColor;
                linkEl.style.textDecoration = 'none';
                content.innerHTML = '';
                content.appendChild(linkEl);
            }
            Object.assign(banner.style, {
                position: 'fixed',
                [position]: '0',
                left: '0',
                right: '0',
                backgroundColor,
                color: textColor,
                fontSize,
                fontWeight,
                height,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0 20px',
                zIndex: zIndex.toString(),
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
            });
            banner.appendChild(content);
            if (dismissible) {
                const closeBtn = document.createElement('button');
                closeBtn.innerHTML = '×';
                closeBtn.style.cssText = `
        background: transparent;
        border: none;
        color: ${textColor};
        font-size: 24px;
        cursor: pointer;
        padding: 0 10px;
        position: absolute;
        right: 10px;
      `;
                closeBtn.onclick = () => banner.remove();
                banner.appendChild(closeBtn);
            }
            document.body.appendChild(banner);
            this.elements.push(banner);
            return banner;
        }
        // Marquee
        createMarquee(config = {}) {
            const { text = '🔥 BLACK FRIDAY SALE 🔥 50% OFF 🔥 LIMITED TIME ONLY 🔥', position = 'inline', backgroundColor = '#ff6b6b', textColor = '#ffffff', fontSize = '18px', fontWeight = 'bold', speed = 50, direction = 'left', pauseOnHover = true, zIndex = 9997 } = config;
            const marquee = document.createElement('div');
            marquee.className = `bfp-marquee bfp-marquee-${position}`;
            const content = document.createElement('div');
            content.className = 'bfp-marquee-content';
            content.textContent = text + ' '.repeat(10) + text;
            const baseStyle = {
                backgroundColor,
                color: textColor,
                fontSize,
                fontWeight,
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                padding: '15px 0',
                zIndex: zIndex.toString()
            };
            if (position === 'inline') {
                baseStyle.position = 'relative';
            }
            else {
                baseStyle.position = 'fixed';
                baseStyle[position] = '0';
                baseStyle.left = '0';
                baseStyle.right = '0';
                baseStyle.width = '100%';
            }
            Object.assign(marquee.style, baseStyle);
            Object.assign(content.style, {
                display: 'inline-block',
                paddingLeft: '100%',
                animation: `bfp-marquee-${direction} ${speed}s linear infinite`
            });
            if (pauseOnHover) {
                marquee.onmouseenter = () => content.style.animationPlayState = 'paused';
                marquee.onmouseleave = () => content.style.animationPlayState = 'running';
            }
            marquee.appendChild(content);
            // Add keyframes
            this.addMarqueeAnimation(direction);
            document.body.appendChild(marquee);
            this.elements.push(marquee);
            return marquee;
        }
        addMarqueeAnimation(direction) {
            const styleId = `bfp-marquee-style-${direction}`;
            if (document.getElementById(styleId))
                return;
            const style = document.createElement('style');
            style.id = styleId;
            style.textContent = `
      @keyframes bfp-marquee-${direction} {
        0% { transform: translate${direction === 'left' ? 'X' : 'X'}(0); }
        100% { transform: translate${direction === 'left' ? 'X' : 'X'}(${direction === 'left' ? '-50%' : '50%'}); }
      }
    `;
            document.head.appendChild(style);
        }
        // Popup
        createPopup(config = {}) {
            const { trigger = 'immediate', delay = 0, scrollPercentage = 50, showCloseButton = true, title = 'BLACK FRIDAY SALE!', text = 'Get 50% OFF on all products', buttonText = 'Shop Now', buttonLink = '#', linkTarget = '_self', backgroundColor = '#ffffff', textColor = '#000000', fontSize = '16px', width = '90%', maxWidth = '500px', zIndex = 10000 } = config;
            const overlay = document.createElement('div');
            overlay.className = 'bfp-popup-overlay';
            const popup = document.createElement('div');
            popup.className = 'bfp-popup';
            Object.assign(overlay.style, {
                position: 'fixed',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                backgroundColor: 'rgba(0,0,0,0.7)',
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: zIndex.toString(),
                opacity: '0',
                transition: 'opacity 0.3s ease'
            });
            Object.assign(popup.style, {
                backgroundColor,
                color: textColor,
                padding: '40px',
                borderRadius: '12px',
                width,
                maxWidth,
                textAlign: 'center',
                position: 'relative',
                boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
                transform: 'scale(0.9)',
                transition: 'transform 0.3s ease'
            });
            const titleEl = document.createElement('h2');
            titleEl.textContent = title;
            titleEl.style.cssText = `margin: 0 0 15px 0; font-size: 28px; font-weight: bold;`;
            const textEl = document.createElement('p');
            textEl.textContent = text || '';
            textEl.style.cssText = `margin: 0 0 25px 0; font-size: ${fontSize}; line-height: 1.6;`;
            const button = document.createElement('a');
            button.href = buttonLink;
            button.target = linkTarget;
            if (linkTarget === '_blank') {
                button.rel = 'noopener noreferrer';
            }
            button.textContent = buttonText;
            button.style.cssText = `
      display: inline-block;
      padding: 15px 40px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      text-decoration: none;
      border-radius: 50px;
      font-weight: bold;
      font-size: 16px;
      transition: transform 0.2s;
    `;
            button.onmouseenter = () => button.style.transform = 'scale(1.05)';
            button.onmouseleave = () => button.style.transform = 'scale(1)';
            if (showCloseButton) {
                const closeBtn = document.createElement('button');
                closeBtn.innerHTML = '×';
                closeBtn.style.cssText = `
        position: absolute;
        top: 15px;
        right: 15px;
        background: transparent;
        border: none;
        font-size: 32px;
        cursor: pointer;
        color: ${textColor};
        opacity: 0.6;
        transition: opacity 0.2s;
      `;
                closeBtn.onmouseenter = () => closeBtn.style.opacity = '1';
                closeBtn.onmouseleave = () => closeBtn.style.opacity = '0.6';
                closeBtn.onclick = () => this.hidePopup(overlay, popup);
                popup.appendChild(closeBtn);
            }
            popup.appendChild(titleEl);
            popup.appendChild(textEl);
            popup.appendChild(button);
            overlay.appendChild(popup);
            document.body.appendChild(overlay);
            this.elements.push(overlay);
            // Trigger logic
            const showPopup = () => {
                overlay.style.display = 'flex';
                setTimeout(() => {
                    overlay.style.opacity = '1';
                    popup.style.transform = 'scale(1)';
                }, 10);
            };
            switch (trigger) {
                case 'immediate':
                    setTimeout(showPopup, delay);
                    break;
                case 'timed':
                    setTimeout(showPopup, delay);
                    break;
                case 'exit':
                    document.addEventListener('mouseout', (e) => {
                        if (e.clientY <= 0)
                            showPopup();
                    }, { once: true });
                    break;
                case 'scroll':
                    window.addEventListener('scroll', () => {
                        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
                        if (scrolled >= scrollPercentage)
                            showPopup();
                    }, { once: true });
                    break;
            }
            overlay.onclick = (e) => {
                if (e.target === overlay)
                    this.hidePopup(overlay, popup);
            };
            return overlay;
        }
        hidePopup(overlay, popup) {
            overlay.style.opacity = '0';
            popup.style.transform = 'scale(0.9)';
            setTimeout(() => overlay.style.display = 'none', 300);
        }
        // Countdown Timer
        createCountdown(config) {
            const { endDate, position = 'inline', backgroundColor = '#1a1a1a', textColor = '#ffffff', fontSize = '24px', showDays = true, showHours = true, showMinutes = true, showSeconds = true, onComplete, zIndex = 9996 } = config;
            const countdown = document.createElement('div');
            countdown.className = `bfp-countdown bfp-countdown-${position}`;
            const baseStyle = {
                backgroundColor,
                color: textColor,
                fontSize,
                fontWeight: 'bold',
                padding: '20px',
                textAlign: 'center',
                fontFamily: 'monospace'
            };
            if (position !== 'inline') {
                Object.assign(baseStyle, {
                    position: 'fixed',
                    [position]: '0',
                    left: '0',
                    right: '0',
                    zIndex: zIndex.toString()
                });
            }
            Object.assign(countdown.style, baseStyle);
            const targetDate = new Date(endDate).getTime();
            const updateCountdown = () => {
                const now = new Date().getTime();
                const distance = targetDate - now;
                if (distance < 0) {
                    countdown.textContent = 'SALE ENDED';
                    if (onComplete)
                        onComplete();
                    return;
                }
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                let timeString = '⏰ ';
                if (showDays)
                    timeString += `${days}d `;
                if (showHours)
                    timeString += `${hours}h `;
                if (showMinutes)
                    timeString += `${minutes}m `;
                if (showSeconds)
                    timeString += `${seconds}s`;
                countdown.textContent = timeString;
            };
            updateCountdown();
            setInterval(updateCountdown, 1000);
            document.body.appendChild(countdown);
            this.elements.push(countdown);
            return countdown;
        }
        // Floating Action Button
        createFloatingButton(config = {}) {
            const { text = '🎁 SALE', position = 'bottom-right', backgroundColor = '#ff6b6b', textColor = '#ffffff', fontSize = '16px', fontWeight = 'bold', icon = '🔥', link = '#', linkTarget = '_self', pulse = true, zIndex = 9995 } = config;
            const fab = document.createElement('a');
            fab.href = link;
            fab.target = linkTarget;
            if (linkTarget === '_blank') {
                fab.rel = 'noopener noreferrer';
            }
            fab.className = `bfp-fab bfp-fab-${position}`;
            fab.innerHTML = `${icon} ${text}`;
            const positions = {
                'bottom-right': { bottom: '30px', right: '30px' },
                'bottom-left': { bottom: '30px', left: '30px' },
                'top-right': { top: '30px', right: '30px' },
                'top-left': { top: '30px', left: '30px' }
            };
            Object.assign(fab.style, Object.assign(Object.assign({ position: 'fixed' }, positions[position]), { backgroundColor, color: textColor, fontSize,
                fontWeight, padding: '15px 25px', borderRadius: '50px', textDecoration: 'none', boxShadow: '0 4px 15px rgba(0,0,0,0.3)', zIndex: zIndex.toString(), transition: 'transform 0.3s ease', animation: pulse ? 'bfp-pulse 2s infinite' : 'none' }));
            if (pulse) {
                this.addPulseAnimation();
            }
            fab.onmouseenter = () => fab.style.transform = 'scale(1.1)';
            fab.onmouseleave = () => fab.style.transform = 'scale(1)';
            document.body.appendChild(fab);
            this.elements.push(fab);
            return fab;
        }
        addPulseAnimation() {
            if (document.getElementById('bfp-pulse-style'))
                return;
            const style = document.createElement('style');
            style.id = 'bfp-pulse-style';
            style.textContent = `
      @keyframes bfp-pulse {
        0%, 100% { box-shadow: 0 4px 15px rgba(0,0,0,0.3); }
        50% { box-shadow: 0 4px 25px rgba(255,107,107,0.6); }
      }
    `;
            document.head.appendChild(style);
        }
        // Toast Notification
        createToast(config = {}) {
            const { text = '🎉 Special offer activated!', position = 'bottom-right', backgroundColor = '#2d3748', textColor = '#ffffff', fontSize = '14px', duration = 5000, showProgress = true, zIndex = 10001 } = config;
            const toast = document.createElement('div');
            toast.className = `bfp-toast bfp-toast-${position}`;
            const positions = {
                'top-right': { top: '20px', right: '20px' },
                'top-left': { top: '20px', left: '20px' },
                'bottom-right': { bottom: '20px', right: '20px' },
                'bottom-left': { bottom: '20px', left: '20px' }
            };
            Object.assign(toast.style, Object.assign(Object.assign({ position: 'fixed' }, positions[position]), { backgroundColor, color: textColor, fontSize, padding: '15px 20px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.3)', zIndex: zIndex.toString(), minWidth: '250px', transform: 'translateX(400px)', transition: 'transform 0.3s ease', overflow: 'hidden' }));
            const textEl = document.createElement('div');
            textEl.textContent = text;
            toast.appendChild(textEl);
            if (showProgress) {
                const progress = document.createElement('div');
                progress.style.cssText = `
        position: absolute;
        bottom: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, #667eea, #764ba2);
        width: 100%;
        animation: bfp-toast-progress ${duration}ms linear;
      `;
                toast.appendChild(progress);
                this.addToastProgressAnimation();
            }
            document.body.appendChild(toast);
            this.elements.push(toast);
            setTimeout(() => toast.style.transform = 'translateX(0)', 10);
            setTimeout(() => {
                toast.style.transform = 'translateX(400px)';
                setTimeout(() => toast.remove(), 300);
            }, duration);
            return toast;
        }
        addToastProgressAnimation() {
            if (document.getElementById('bfp-toast-progress-style'))
                return;
            const style = document.createElement('style');
            style.id = 'bfp-toast-progress-style';
            style.textContent = `
      @keyframes bfp-toast-progress {
        from { width: 100%; }
        to { width: 0%; }
      }
    `;
            document.head.appendChild(style);
        }
        // Side Tab
        createSideTab(config = {}) {
            const { text = 'SALE', position = 'right', backgroundColor = '#e63946', textColor = '#ffffff', fontSize = '14px', fontWeight = 'bold', expandedContent = 'Check out our Black Friday deals!', zIndex = 9994 } = config;
            const tab = document.createElement('div');
            tab.className = `bfp-side-tab bfp-side-tab-${position}`;
            Object.assign(tab.style, {
                position: 'fixed',
                [position]: '0',
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor,
                color: textColor,
                fontSize,
                fontWeight,
                padding: '15px 10px',
                cursor: 'pointer',
                zIndex: zIndex.toString(),
                borderRadius: position === 'left' ? '0 8px 8px 0' : '8px 0 0 8px',
                writingMode: 'vertical-rl',
                textOrientation: 'mixed',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
            });
            tab.textContent = text;
            const expanded = document.createElement('div');
            expanded.style.cssText = `
      position: fixed;
      ${position}: -300px;
      top: 50%;
      transform: translateY(-50%);
      width: 250px;
      background: ${backgroundColor};
      color: ${textColor};
      padding: 20px;
      border-radius: ${position === 'left' ? '0 8px 8px 0' : '8px 0 0 8px'};
      box-shadow: 0 4px 15px rgba(0,0,0,0.3);
      transition: ${position} 0.3s ease;
      z-index: ${zIndex - 1};
    `;
            expanded.textContent = expandedContent;
            tab.onmouseenter = () => {
                expanded.style[position] = '0';
            };
            tab.onmouseleave = () => {
                expanded.style[position] = '-300px';
            };
            document.body.appendChild(expanded);
            document.body.appendChild(tab);
            this.elements.push(tab);
            this.elements.push(expanded);
            return tab;
        }
        // Badge Overlay
        createBadge(targetSelector, config = {}) {
            const target = document.querySelector(targetSelector);
            if (!target)
                return null;
            const { text = '-50%', position = 'top-right', backgroundColor = '#ff6b6b', textColor = '#ffffff', fontSize = '14px', fontWeight = 'bold', shape = 'circle', size = '60px', zIndex = 100 } = config;
            const badge = document.createElement('div');
            badge.className = `bfp-badge bfp-badge-${shape}`;
            const positions = {
                'top-right': { top: '10px', right: '10px' },
                'top-left': { top: '10px', left: '10px' },
                'bottom-right': { bottom: '10px', right: '10px' },
                'bottom-left': { bottom: '10px', left: '10px' }
            };
            Object.assign(badge.style, Object.assign(Object.assign({ position: 'absolute' }, positions[position]), { backgroundColor, color: textColor, fontSize,
                fontWeight, width: size, height: size, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: shape === 'circle' ? '50%' : '8px', zIndex: zIndex.toString(), boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }));
            badge.textContent = text;
            if (target.style.position === '' || target.style.position === 'static') {
                target.style.position = 'relative';
            }
            target.appendChild(badge);
            this.elements.push(badge);
            return badge;
        }
        // Destroy all elements
        destroy() {
            this.elements.forEach(el => el.remove());
            this.elements = [];
        }
    }
    // Export default instance
    var index = new BlackFridayPromo();

    exports.BlackFridayPromo = BlackFridayPromo;
    exports.default = index;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=black-friday-promo.js.map
