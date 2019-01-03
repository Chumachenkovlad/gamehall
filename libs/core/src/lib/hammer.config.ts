import { HammerGestureConfig } from '@angular/platform-browser';

declare var Hammer: any;

export class HammerConfig extends HammerGestureConfig {
  public buildHammer(element: HTMLElement) {
    return new Hammer(element, {
      touchAction: 'pan-y',
      swipe: { velocity: 0.8, threshold: 10 }
    });
  }
}
