import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of, switchMap, tap, map, catchError } from 'rxjs';
import { Player } from '../../../../model/src/model';

@Injectable({ providedIn: 'root' })
export class SponOSAuthService {
  private currentPlayerSubject = new BehaviorSubject<Player | null>(null);
  public currentPlayer$ = this.currentPlayerSubject.asObservable();

  constructor(
    private http: HttpClient,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformBrowser(this.platformId)) {
      // On app start, try to load the current user:
      this.http.get<Player>('/api/player', { withCredentials: true }).pipe(
        catchError(() => of(null)), // if 401 or network error, treat as not logged in
        tap(player => {
          this.currentPlayerSubject.next(player);
          if (player) {
            localStorage.setItem('currentPlayer', JSON.stringify(player));
          } else {
            localStorage.removeItem('currentPlayer');
          }
        })
      ).subscribe();
    }
  }

  login(email: string, password: string): Observable<void> {
    return this.http.get('/sanctum/csrf-cookie', { withCredentials: true }).pipe(
      switchMap(() =>
        this.http.post<void>('/api/login', { email, password }, { withCredentials: true })
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
      tap(() => {
        // redirect after successful login
        this.router.navigate(['/player']);
      }),
      map(() => void 0)
    );
  }

  logout(): Observable<void> {
    return this.http.get<void>('/sanctum/csrf-cookie', { withCredentials: true }).pipe(
      switchMap(() =>
        this.http.post<void>('/api/logout', {}, { withCredentials: true })
      ),
      tap(() => {
        this.currentPlayerSubject.next(null);
        localStorage.removeItem('currentPlayer');
        // redirect after logout
        this.router.navigate(['/']);
      }),
      map(() => void 0)
    );
  }

  updatePlayer(payload: Partial<Player>): Observable<Player> {
    return this.http.put<Player>('/api/player', payload, { withCredentials: true }).pipe(
      tap(updated => {
        this.currentPlayerSubject.next(updated);
        localStorage.setItem('currentPlayer', JSON.stringify(updated));
      })
    );
  }
}
