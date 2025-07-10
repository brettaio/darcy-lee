import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, switchMap, tap, map, catchError, of } from 'rxjs';
import { User } from '../../../../model/src/model';
import { CalendarEventService } from '../calendar/calendar-event.service';


@Injectable({ providedIn: 'root' })
export class BookingAppAuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(
    private http: HttpClient,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object,
    private calendarEventService: CalendarEventService  // ← inject the calendar service
  ) {
    // On init, load from localStorage and verify session
    if (isPlatformBrowser(this.platformId)) {
      const stored = this.loadUser();
      if (stored) {
        this.http.get<User>('/api/user', { withCredentials: true }).pipe(
          tap(user => this.setUser(user)),
          catchError(() => {
            this.clearUser();
            return of(null);
          })
        ).subscribe();
      }
    }
  }

  /** Run this to log in; it fetches CSRF, logs in, stores user, then grabs calendar events */
  login(email: string, password: string): Observable<void> {
    return this.http
      .get('/sanctum/csrf-cookie', { withCredentials: true })
      .pipe(
        switchMap(() =>
          this.http.post<User>(
            '/api/login',
            { email, password },
            { withCredentials: true, headers: { 'Accept': 'application/json' } }
          )
        ),
        tap(user => {
          this.setUser(user);
          // ← now that we're authenticated, pull in the calendar data
          this.calendarEventService.initEvents();
        }),
        switchMap(() => of(void 0))
      );
  }

  /** Logs out, clears state, and sends you back to /login */
  logout(): Observable<void> {
    return this.http
      .get('/sanctum/csrf-cookie', { withCredentials: true })
      .pipe(
        switchMap(() =>
          this.http.post<void>(
            '/api/logout',
            {},
            { withCredentials: true, headers: { 'Accept': 'application/json' } 
          }
          )
        ),
        tap(() => {
          this.clearUser();
          this.router.navigate(['/login']);
        })
      );
  }

  private setUser(user: User | null) {
    this.currentUserSubject.next(user);
    if (isPlatformBrowser(this.platformId) && user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
    }
  }

  private loadUser(): User | null {
    if (!isPlatformBrowser(this.platformId)) return null;
    const json = localStorage.getItem('currentUser');
    return json ? (JSON.parse(json) as User) : null;
  }

  private clearUser() {
    this.currentUserSubject.next(null);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('currentUser');
    }
  }
}