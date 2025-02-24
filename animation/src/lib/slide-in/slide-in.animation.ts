import { Component, Input, HostListener } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'animation-slide-in',
  template: `
    <div
      [@slideInOut]="isVisible ? 'in' : 'out'"
      class="relative w-full h-full"
    >
      <ng-content></ng-content>
    </div>
  `,
  animations: [
    trigger('slideInOut', [
      state('out', style({ transform: 'translateX(-100%)', opacity: 0 })),
      state('in', style({ transform: 'translateX(0)', opacity: 1 })),
      transition('out => in', animate('0.5s ease-out')),
      transition('in => out', animate('0.5s ease-in')),
    ]),
  ],
  standalone: true,
})
export class SlideInAnimationComponent {
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
