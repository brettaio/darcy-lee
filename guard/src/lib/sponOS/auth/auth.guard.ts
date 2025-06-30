import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { take, map } from 'rxjs/operators';
import { AuthService } from '../../../../../service/src/services';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  return auth.currentPlayer$.pipe(
    take(1),
    map(player => 
      player ? true : router.createUrlTree(['/login'])
    )
  );
};
