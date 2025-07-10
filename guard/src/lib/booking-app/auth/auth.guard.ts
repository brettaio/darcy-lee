import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { take, map } from 'rxjs/operators';
import { BookingAppAuthService } from '../../../../../service/src/services';

export const BookingAppAuthGuard: CanActivateFn = (route, state) => {
  const auth = inject(BookingAppAuthService);
  const router = inject(Router);

  return auth.currentUser$.pipe(
    take(1),
    map(user => 
      user ? true : router.createUrlTree(['/login'])
    )
  );
};
