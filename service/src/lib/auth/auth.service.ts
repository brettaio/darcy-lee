import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, switchMap, tap, map, catchError, of } from 'rxjs';
import { Player } from '../../../../model/src/model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private currentPlayerSubject = new BehaviorSubject<Player|null>(null);
  public currentPlayer$ = this.currentPlayerSubject.asObservable();

  constructor(
    private http: HttpClient, 
    private router: Router, 
    @Inject(PLATFORM_ID) private platformId: Object
  ) { 
    if (isPlatformBrowser(this.platformId)) {
    const stored = this.loadPlayer();
    if (stored) { 
      //Verify on the eserver that the session is still valid
      this.http
        .get<Player>('/api/player', {withCredentials: true })
        .pipe(
          tap(player => {
        //normalise & push
        this.currentPlayerSubject.next(player);
        localStorage.setItem('currentPlayer', JSON.stringify(player));
      }),
    catchError(err => {
      //if 401 or anything else, clear out
      this.clearAuth();
      return of(null);
    })
  )
  .subscribe();
    }
  } 
}

private clearAuth() {
  this.currentPlayerSubject.next(null);
  localStorage.removeItem('currentPlayer');
}

  /** Helper: load from storage on service init */
  private loadPlayer(): Player|null {
    try {
      const json = localStorage.getItem('currentPlayer');
      return json ? JSON.parse(json) as Player : null;
    } catch {
      return null;
    }
    
  }


  /**
   * 
   * Login flow: 
   *  - GET CSRF cookie
   *  - POST credentials
   *  - GET authenticated player
   *  - store in Behavior Subject + localStorage
   */

  login(email: string, password: string): Observable<void> {
    return this.http.get('/sanctum/csrf-cookie', { withCredentials: true})
    .pipe(
      switchMap(() =>
        this.http.post<void>('api/login', { email, password }, {withCredentials: true })
      ),
      switchMap(() =>
        this.http.get<Player>('/api/player', { withCredentials: true })
      ),
     map(player => ({
      ...player,
      player_accolades: typeof player.player_accolades === 'string'
        ? JSON.parse(player.player_accolades)
        : player.player_accolades || [],
      sponsorship_perks: typeof player.sponsorship_perks === 'string'
        ? JSON.parse(player.sponsorship_perks)
        : player.sponsorship_perks || [],
    })),
      tap(player => {
        this.currentPlayerSubject.next(player);
        localStorage.setItem('currentPlayer', JSON.stringify(player));
      }),
      map(() => void 0)
    );
}

/**
 * Logout flow:
 * - POST /logout
 * - clear BehaviourSubject + localStorage
 * - redirect to /login
 */

  logout(): Observable<void> {
    return this.http
    //1 get a fresh XSRF-TOKEN cookie 
    .get<void>('/sanctum/csrf-cookie', { withCredentials: true }).pipe(
      //2) then call your Laravel logout route
      switchMap(() => 
        this.http.post<void>('/api/logout', {}, { withCredentials: true })
      ),
      //3) on success, clear state & navigate
      tap(() => {
        this.currentPlayerSubject.next(null);
        localStorage.removeItem('currentPlayer');
        this.router.navigate(['/']);
      }),
      map(() => void 0)
    );
}

updatePlayer(payload: Partial<Player>): Observable<Player> {
  return this.http
    .put<Player>('/api/player', payload, {withCredentials: true})
    .pipe(
      tap(updated => {
        this.currentPlayerSubject.next(updated);
        if (typeof window !== 'undefined') {
          localStorage.setItem('currentPlayer', JSON.stringify(updated))
        }
      })
    );
}
}