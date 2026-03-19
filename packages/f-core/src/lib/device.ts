/**
 * Device detection utility.
 * Static helper — no dependency on Angular services.
 */
export class Device {
  private static _isMobile: boolean | undefined;

  static isMobile(): boolean {
    if (this._isMobile === undefined) {
      this._isMobile = /Android|iPhone|iPad|iPod|Windows Phone|IEMobile|Blackberry|WebOS/i.test(
        navigator.userAgent
      );
    }
    return this._isMobile;
  }

  static isDesktop(): boolean {
    return !this.isMobile();
  }

  static isMobileScreen(): boolean {
    return typeof window !== 'undefined' && window.innerWidth < 768;
  }

  static isTouchDevice(): boolean {
    return typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }

  static type(): 'mobile' | 'desktop' {
    return this.isMobile() ? 'mobile' : 'desktop';
  }
}
