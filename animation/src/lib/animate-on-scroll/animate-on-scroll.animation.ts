import { Component, ElementRef, AfterViewInit, NgZone } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'animation-animate-on-scroll',
  template: `
    <div [@slideIn]="animationState" class="animate-container">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      .animate-container {
        /* Ensure no parent styles interfere */
        overflow: visible;
      }
    `,
  ],
  animations: [
    trigger('slideIn', [
      state(
        'hidden',
        style({
          opacity: 0,
          transform: 'translateY(20px)',
        }),
      ),
      state(
        'visible',
        style({
          opacity: 1,
          transform: 'translateY(0)',
        }),
      ),
      transition('hidden => visible', animate('600ms ease-out')),
    ]),
  ],
})
export class AnimateOnScrollComponent implements AfterViewInit {
  animationState: 'hidden' | 'visible' = 'hidden';

  constructor(private el: ElementRef, private ngZone: NgZone) {}

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          console.log('Intersection entry:', entry);
          if (entry.isIntersecting) {
            // Run inside Angular zone to trigger change detection
            this.ngZone.run(() => {
              this.animationState = 'visible';
            });
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    observer.observe(this.el.nativeElement);
  }
}
