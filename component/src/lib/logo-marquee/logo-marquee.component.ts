import { CommonModule } from '@angular/common';
import {
  Component,
  AfterViewInit,
  NgZone,
  ElementRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'component-logo-marquee',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="relative flex justify-center bg-black py-6 mx-auto">
      <div class="relative w-[50vw] overflow-hidden mask-fade">
        <div #scrollContainer class="w-full overflow-hidden">
          <div
            #scrollContent
            class="flex items-center gap-10 whitespace-nowrap"
          >
            <img
              *ngFor="let logo of logos"
              [src]="logo"
              alt="Brand Logo"
              class="h-12"
            />
            <!-- Clone logos for seamless effect -->
            <img
              *ngFor="let logo of logos"
              [src]="logo"
              alt="Brand Logo"
              class="h-12"
            />
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }
      .mask-fade {
        -webkit-mask-image: linear-gradient(
          to right,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 1) 20%,
          rgba(0, 0, 0, 1) 80%,
          rgba(0, 0, 0, 0) 100%
        );
        mask-image: linear-gradient(
          to right,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 1) 20%,
          rgba(0, 0, 0, 1) 80%,
          rgba(0, 0, 0, 0) 100%
        );
      }
      .scrolling {
        display: flex;
        animation: marquee linear infinite;
        width: max-content;
      }
      @keyframes marquee {
        from {
          transform: translateX(0);
        }
        to {
          transform: translateX(calc(-100% / 2));
        }
      }
    `,
  ],
})
export class LogoMarqueeComponent implements AfterViewInit {
  @ViewChild('scrollContent', { static: false }) scrollContent!: ElementRef;

  logos = ['/tailwind.png', '/angular.png', '/netlify.png', '/stripe.png'];

  constructor(private ngZone: NgZone) {}

  ngAfterViewInit() {
    this.ngZone.runOutsideAngular(() => {
      const containerWidth = this.scrollContent.nativeElement.scrollWidth / 2;
      this.scrollContent.nativeElement.style.animationDuration = `${
        containerWidth / 100
      }s`;
      this.scrollContent.nativeElement.classList.add('scrolling');
    });
  }
}
