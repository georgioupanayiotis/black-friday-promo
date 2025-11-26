// Component configurations
const componentConfigs = {
    ribbon: {
        fields: [
            { name: 'text', label: 'Text', type: 'text', default: '50% OFF' },
            { name: 'position', label: 'Position', type: 'select', options: ['top-left', 'top-right', 'bottom-left', 'bottom-right'], default: 'top-right' },
            { name: 'size', label: 'Size', type: 'select', options: ['small', 'medium', 'large'], default: 'medium' },
            { name: 'backgroundColor', label: 'Background Color', type: 'color', default: '#e63946' },
            { name: 'textColor', label: 'Text Color', type: 'color', default: '#ffffff' }
        ]
    },
    banner: {
        fields: [
            { name: 'text', label: 'Text', type: 'text', default: 'BLACK FRIDAY SALE - 50% OFF EVERYTHING!' },
            { name: 'position', label: 'Position', type: 'select', options: ['top', 'bottom'], default: 'top' },
            { name: 'backgroundColor', label: 'Background Color', type: 'color', default: '#000000' },
            { name: 'textColor', label: 'Text Color', type: 'color', default: '#ffffff' },
            { name: 'dismissible', label: 'Dismissible', type: 'checkbox', default: true },
            { name: 'link', label: 'Link URL (optional)', type: 'text', default: '' },
            { name: 'linkTarget', label: 'Open Link In', type: 'select', options: ['_self', '_blank'], default: '_self' }
        ]
    },
    marquee: {
        fields: [
            { name: 'text', label: 'Text', type: 'text', default: '🔥 BLACK FRIDAY SALE 🔥 50% OFF 🔥 LIMITED TIME ONLY 🔥' },
            { name: 'backgroundColor', label: 'Background Color', type: 'color', default: '#ff6b6b' },
            { name: 'textColor', label: 'Text Color', type: 'color', default: '#ffffff' },
            { name: 'speed', label: 'Speed (seconds)', type: 'number', default: 50 },
            { name: 'direction', label: 'Direction', type: 'select', options: ['left', 'right'], default: 'left' },
            { name: 'pauseOnHover', label: 'Pause on Hover', type: 'checkbox', default: true }
        ]
    },
    popup: {
        fields: [
            { name: 'title', label: 'Title', type: 'text', default: 'BLACK FRIDAY SALE!' },
            { name: 'text', label: 'Message', type: 'textarea', default: 'Get 50% OFF on all products' },
            { name: 'buttonText', label: 'Button Text', type: 'text', default: 'Shop Now' },
            { name: 'buttonLink', label: 'Button Link', type: 'text', default: '#' },
            { name: 'linkTarget', label: 'Open Link In', type: 'select', options: ['_self', '_blank'], default: '_self' },
            { name: 'trigger', label: 'Trigger', type: 'select', options: ['immediate', 'timed', 'exit', 'scroll'], default: 'immediate' },
            { name: 'delay', label: 'Delay (ms)', type: 'number', default: 1000 },
            { name: 'backgroundColor', label: 'Background Color', type: 'color', default: '#ffffff' },
            { name: 'textColor', label: 'Text Color', type: 'color', default: '#000000' }
        ]
    },
    countdown: {
        fields: [
            { name: 'endDate', label: 'End Date', type: 'datetime-local', default: getDefaultEndDate() },
            { name: 'position', label: 'Position', type: 'select', options: ['top', 'bottom', 'inline'], default: 'top' },
            { name: 'backgroundColor', label: 'Background Color', type: 'color', default: '#1a1a1a' },
            { name: 'textColor', label: 'Text Color', type: 'color', default: '#ffffff' },
            { name: 'showDays', label: 'Show Days', type: 'checkbox', default: true },
            { name: 'showHours', label: 'Show Hours', type: 'checkbox', default: true },
            { name: 'showMinutes', label: 'Show Minutes', type: 'checkbox', default: true },
            { name: 'showSeconds', label: 'Show Seconds', type: 'checkbox', default: true }
        ]
    },
    fab: {
        fields: [
            { name: 'text', label: 'Text', type: 'text', default: 'SALE' },
            { name: 'icon', label: 'Icon/Emoji', type: 'text', default: '🔥' },
            { name: 'position', label: 'Position', type: 'select', options: ['bottom-right', 'bottom-left', 'top-right', 'top-left'], default: 'bottom-right' },
            { name: 'backgroundColor', label: 'Background Color', type: 'color', default: '#ff6b6b' },
            { name: 'textColor', label: 'Text Color', type: 'color', default: '#ffffff' },
            { name: 'link', label: 'Link URL', type: 'text', default: '#' },
            { name: 'linkTarget', label: 'Open Link In', type: 'select', options: ['_self', '_blank'], default: '_self' },
            { name: 'pulse', label: 'Pulse Animation', type: 'checkbox', default: true }
        ]
    },
    toast: {
        fields: [
            { name: 'text', label: 'Text', type: 'text', default: '🎉 Special offer activated!' },
            { name: 'position', label: 'Position', type: 'select', options: ['top-right', 'top-left', 'bottom-right', 'bottom-left'], default: 'bottom-right' },
            { name: 'backgroundColor', label: 'Background Color', type: 'color', default: '#2d3748' },
            { name: 'textColor', label: 'Text Color', type: 'color', default: '#ffffff' },
            { name: 'duration', label: 'Duration (ms)', type: 'number', default: 5000 },
            { name: 'showProgress', label: 'Show Progress Bar', type: 'checkbox', default: true }
        ]
    },
    sidetab: {
        fields: [
            { name: 'text', label: 'Tab Text', type: 'text', default: 'SALE' },
            { name: 'position', label: 'Position', type: 'select', options: ['left', 'right'], default: 'right' },
            { name: 'backgroundColor', label: 'Background Color', type: 'color', default: '#e63946' },
            { name: 'textColor', label: 'Text Color', type: 'color', default: '#ffffff' },
            { name: 'expandedContent', label: 'Expanded Content', type: 'textarea', default: 'Check out our Black Friday deals!' }
        ]
    },
    badge: {
        fields: [
            { name: 'text', label: 'Text', type: 'text', default: '-50%' },
            { name: 'targetSelector', label: 'Target Element Selector', type: 'text', default: '.product-image' },
            { name: 'position', label: 'Position', type: 'select', options: ['top-right', 'top-left', 'bottom-right', 'bottom-left'], default: 'top-right' },
            { name: 'shape', label: 'Shape', type: 'select', options: ['circle', 'square', 'ribbon'], default: 'circle' },
            { name: 'backgroundColor', label: 'Background Color', type: 'color', default: '#ff6b6b' },
            { name: 'textColor', label: 'Text Color', type: 'color', default: '#ffffff' }
        ]
    }
};

function getDefaultEndDate() {
    const date = new Date();
    date.setDate(date.getDate() + 3);
    return date.toISOString().slice(0, 16);
}

// State
let currentComponent = 'ribbon';
let currentConfig = {};
let currentPreview = null;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    setupComponentSelector();
    renderConfigForm();
    updateCode();
    setupCodeTabs();
});

// Component selector
function setupComponentSelector() {
    const cards = document.querySelectorAll('.component-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            cards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            currentComponent = card.dataset.component;
            renderConfigForm();
            updateCode();
            if (currentPreview) {
                clearPreview();
            }
        });
    });
}

// Render configuration form
function renderConfigForm() {
    const container = document.getElementById('configOptions');
    const config = componentConfigs[currentComponent];

    container.innerHTML = '';
    currentConfig = {};

    config.fields.forEach(field => {
        const group = document.createElement('div');
        group.className = 'config-group';

        const label = document.createElement('label');
        label.className = 'config-label';
        label.textContent = field.label;

        let input;

        switch (field.type) {
            case 'text':
            case 'color':
            case 'number':
            case 'datetime-local':
                input = document.createElement('input');
                input.type = field.type;
                input.className = 'config-input';
                input.value = field.default;
                input.addEventListener('input', (e) => {
                    currentConfig[field.name] = e.target.value;
                    updateCode();
                });
                break;

            case 'select':
                input = document.createElement('select');
                input.className = 'config-select';
                field.options.forEach(option => {
                    const opt = document.createElement('option');
                    opt.value = option;
                    opt.textContent = option;
                    input.appendChild(opt);
                });
                input.value = field.default;
                input.addEventListener('change', (e) => {
                    currentConfig[field.name] = e.target.value;
                    updateCode();
                });
                break;

            case 'textarea':
                input = document.createElement('textarea');
                input.className = 'config-textarea';
                input.value = field.default;
                input.addEventListener('input', (e) => {
                    currentConfig[field.name] = e.target.value;
                    updateCode();
                });
                break;

            case 'checkbox':
                const checkGroup = document.createElement('div');
                checkGroup.className = 'config-checkbox-group';
                input = document.createElement('input');
                input.type = 'checkbox';
                input.className = 'config-checkbox';
                input.checked = field.default;
                input.addEventListener('change', (e) => {
                    currentConfig[field.name] = e.target.checked;
                    updateCode();
                });
                checkGroup.appendChild(input);
                checkGroup.appendChild(label);
                container.appendChild(checkGroup);
                currentConfig[field.name] = field.default;
                return;
        }

        group.appendChild(label);
        group.appendChild(input);
        container.appendChild(group);

        currentConfig[field.name] = field.default;
    });
}

// Generate code
function generateCode(type = 'vanilla') {
    const methodMap = {
        ribbon: 'createRibbon',
        banner: 'createBanner',
        marquee: 'createMarquee',
        popup: 'createPopup',
        countdown: 'createCountdown',
        fab: 'createFloatingButton',
        toast: 'createToast',
        sidetab: 'createSideTab',
        badge: 'createBadge'
    };

    const method = methodMap[currentComponent];
    const configStr = JSON.stringify(currentConfig, null, 2);

    if (type === 'vanilla') {
        return `// Import the library
import BFPromo from 'black-friday-promo';

// Create your ${currentComponent}
const promo = BFPromo.${method}(${configStr});

// Optional: Remove it later
// promo.remove();`;
    } else if (type === 'react') {
        return `import { useEffect } from 'react';
import BFPromo from 'black-friday-promo';

function MyComponent() {
  useEffect(() => {
    const promo = BFPromo.${method}(${configStr});
    
    // Cleanup on unmount
    return () => promo.remove();
  }, []);
  
  return <div>Your content here</div>;
}`;
    } else if (type === 'cdn') {
        return `<!-- Add this to your HTML head -->
<script src="https://unpkg.com/black-friday-promo"></script>

<!-- Add this script before closing body tag -->
<script>
  const promo = BlackFridayPromo.default.${method}(${configStr});
</script>`;
    }
}

// Update code display
function updateCode() {
    const activeTab = document.querySelector('.code-tab.active');
    const type = activeTab ? activeTab.dataset.tab : 'vanilla';
    const code = generateCode(type);
    document.getElementById('codeContent').textContent = code;
}

// Code tabs
function setupCodeTabs() {
    const tabs = document.querySelectorAll('.code-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            updateCode();
        });
    });
}

// Copy code
document.getElementById('copyBtn').addEventListener('click', async () => {
    const code = document.getElementById('codeContent').textContent;
    const btn = document.getElementById('copyBtn');
    const text = document.getElementById('copyText');

    try {
        await navigator.clipboard.writeText(code);
        text.textContent = '✓ Copied!';
        btn.style.background = 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)';

        setTimeout(() => {
            text.textContent = 'Copy Code';
            btn.style.background = '';
        }, 2000);
    } catch (err) {
        console.error('Failed to copy:', err);
    }
});

// Preview
document.getElementById('previewBtn').addEventListener('click', () => {
    clearPreview();

    const methodMap = {
        ribbon: 'createRibbon',
        banner: 'createBanner',
        marquee: 'createMarquee',
        popup: 'createPopup',
        countdown: 'createCountdown',
        fab: 'createFloatingButton',
        toast: 'createToast',
        sidetab: 'createSideTab',
        badge: 'createBadge'
    };

    const method = methodMap[currentComponent];

    try {
        if (currentComponent === 'badge') {
            // For badge, we need to create a demo element first
            let demoEl = document.querySelector('.product-image');
            if (!demoEl) {
                demoEl = document.createElement('div');
                demoEl.className = 'product-image';
                demoEl.style.cssText = 'width: 200px; height: 200px; background: #ccc; margin: 20px auto; position: relative; border-radius: 8px;';
                document.body.appendChild(demoEl);
            }
            currentPreview = BlackFridayPromo.default[method]('.product-image', currentConfig);
        } else {
            currentPreview = BlackFridayPromo.default[method](currentConfig);
        }
    } catch (err) {
        console.error('Preview error:', err);
        alert('Preview error: ' + err.message);
    }
});

function clearPreview() {
    if (currentPreview) {
        currentPreview.remove();
        currentPreview = null;
    }
    // Also clean up any demo elements
    const demoEl = document.querySelector('.product-image');
    if (demoEl && !demoEl.hasAttribute('data-original')) {
        demoEl.remove();
    }
}
