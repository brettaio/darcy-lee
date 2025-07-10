import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { map, filter, first } from 'rxjs/operators';
import { SponOSAuthService } from '../../../../../service/src/services';

export const sponOSAuthGuard: CanActivateFn = (route, state) => {
  const auth = inject(SponOSAuthService);
  const router = inject(Router);

   return auth.currentPlayer$.pipe(
    // skip the “haven’t checked yet” state — make your BehaviorSubject start as undefined
    filter(userOrNull => userOrNull !== undefined),
    first(),  // take that first real value (either Player or null)
    map(user => {
      return user
        ? true
        : (router.parseUrl('/login') as UrlTree);
    })
  );
};