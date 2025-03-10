import {
  trigger,
  transition,
  state,
  style,
  animate,
  keyframes,
} from '@angular/animations';

export const scaleInAnimation = trigger('scaleIn', [
  state(
    'default',
    style({
      opacity: 0,
      transform: 'scale(0.5)',
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
      '1s ease-out',
      keyframes([
        style({ opacity: 0, transform: 'scale(0.5)', offset: 0 }), // Completely invisible & small
        style({ opacity: 0.3, transform: 'scale(0.75)', offset: 0.5 }), // Halfway: still mostly transparent
        style({ opacity: 0.8, transform: 'scale(0.9)', offset: 0.8 }), // Almost full size, opacity still catching up
        style({ opacity: 1, transform: 'scale(1)', offset: 1 }), // Full size & visibility at the very end
      ]),
    ),
  ]),
  transition('visible => default', [
    animate('0.5s ease-in', style({ opacity: 0, transform: 'scale(0.5)' })), // Reset smoothly when scrolling out
  ]),
]);
