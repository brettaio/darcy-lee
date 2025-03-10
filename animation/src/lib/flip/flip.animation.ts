import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

export const flipAnimation = trigger('flipState', [
  state(
    'default',
    style({
      transform: 'rotateY(180deg)', // Start flipped (hidden side)
      opacity: 0, // Hide initially
    }),
  ),
  state(
    'visible',
    style({
      transform: 'rotateY(0)', // Flip to front
      opacity: 1,
    }),
  ),
  transition('default => visible', [animate('0.8s ease-out')]),
]);
