export interface BasePromoConfig {
    text?: string;
    backgroundColor?: string;
    textColor?: string;
    fontSize?: string;
    fontWeight?: string;
    zIndex?: number;
}
export interface RibbonConfig extends BasePromoConfig {
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    size?: 'small' | 'medium' | 'large';
}
export interface BannerConfig extends BasePromoConfig {
    position?: 'top' | 'bottom';
    height?: string;
    dismissible?: boolean;
    link?: string;
    linkTarget?: '_self' | '_blank';
}
export interface MarqueeConfig extends BasePromoConfig {
    position?: 'top' | 'bottom' | 'inline';
    speed?: number;
    direction?: 'left' | 'right';
    pauseOnHover?: boolean;
}
export interface PopupConfig extends BasePromoConfig {
    trigger?: 'immediate' | 'exit' | 'timed' | 'scroll';
    delay?: number;
    scrollPercentage?: number;
    showCloseButton?: boolean;
    title?: string;
    buttonText?: string;
    buttonLink?: string;
    linkTarget?: '_self' | '_blank';
    width?: string;
    maxWidth?: string;
}
export interface CountdownConfig extends BasePromoConfig {
    endDate: Date | string;
    position?: 'top' | 'bottom' | 'inline';
    showDays?: boolean;
    showHours?: boolean;
    showMinutes?: boolean;
    showSeconds?: boolean;
    onComplete?: () => void;
}
export interface FloatingButtonConfig extends BasePromoConfig {
    position?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
    icon?: string;
    link?: string;
    linkTarget?: '_self' | '_blank';
    pulse?: boolean;
}
export interface ToastConfig extends BasePromoConfig {
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    duration?: number;
    showProgress?: boolean;
}
export interface SideTabConfig extends BasePromoConfig {
    position?: 'left' | 'right';
    expandedContent?: string;
}
export interface BadgeConfig extends BasePromoConfig {
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    shape?: 'circle' | 'square' | 'ribbon';
    size?: string;
}
export declare class BlackFridayPromo {
    private elements;
    createRibbon(config?: RibbonConfig): HTMLElement;
    private getRibbonTransform;
    private setRibbonPosition;
    createBanner(config?: BannerConfig): HTMLElement;
    createMarquee(config?: MarqueeConfig): HTMLElement;
    private addMarqueeAnimation;
    createPopup(config?: PopupConfig): HTMLElement;
    private hidePopup;
    createCountdown(config: CountdownConfig): HTMLElement;
    createFloatingButton(config?: FloatingButtonConfig): HTMLElement;
    private addPulseAnimation;
    createToast(config?: ToastConfig): HTMLElement;
    private addToastProgressAnimation;
    createSideTab(config?: SideTabConfig): HTMLElement;
    createBadge(targetSelector: string, config?: BadgeConfig): HTMLElement | null;
    destroy(): void;
}
declare const _default: BlackFridayPromo;
export default _default;
