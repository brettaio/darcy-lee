import { Component, Input, HostListener } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'animation-slide-out',
  template: `
    <div
      [@slideOut]="isVisible ? 'out' : 'void'"
      class="relative w-full h-full"
    >
      <ng-content></ng-content>
    </div>
  `,
  animations: [
    trigger('slideOut', [
      state('void', style({ transform: 'translateX(0)', opacity: 1 })),
      state('out', style({ transform: 'translateX(100%)', opacity: 0 })),
      transition('void => out', [animate('0.5s ease-in')]),
      transition('out => void', [animate('0.5s ease-out')]),
    ]),
  ],
  standalone: true,
})
export class SlideOutAnimationComponent {
  isVisible = false;

  @HostListener('window:scroll', [])
  onScroll() {
    const element = document.querySelector('animation-slide-in');
    if (element) {
      const rect = element.getBoundingClientRect();
      const inView = rect.top <= window.innerHeight && rect.bottom >= 0;
      this.isVisible = inView;
    }
  }
}
