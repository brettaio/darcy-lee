import {
  trigger,
  transition,
  style,
  animate,
  keyframes,
  state,
} from '@angular/animations';

export const popBounceAnimation = trigger('popBounce', [
  state(
    'default',
    style({
      opacity: 0,
      transform: 'scale(1)',
    }),
  ),
  state(
    'visible',
    style({
      opacity: 1,
      transform: 'scale(1)',
    }),
  ),
  transition('default => visible', [
    animate(
      '0.8s ease-out',
      keyframes([
        style({ transform: 'scale(1)', opacity: 0, offset: 0 }), // Start hidden
        style({ transform: 'scale(1.8)', opacity: 1, offset: 0.3 }), // Quick expand (1.8x)
        style({ transform: 'scale(0.9)', offset: 0.5 }), // Shrink slightly
        style({ transform: 'scale(1.1)', offset: 0.65 }), // Small bounce
        style({ transform: 'scale(0.95)', offset: 0.75 }), // Settle
        style({ transform: 'scale(1)', offset: 1 }), // Back to normal
      ]),
    ),
  ]),
  transition('visible => default', [
    animate('0.3s ease-in', style({ opacity: 0, transform: 'scale(1)' })), // Reset when scrolling out
  ]),
]);
