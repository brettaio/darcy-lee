import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, EMPTY, timer } from 'rxjs';
import { map, tap, switchMap, catchError } from 'rxjs/operators';
import { ExternalResponse, ScheduledAircraft } from '../../../../model/src/model';
import { environment } from '../../../../websites/booking-app/src/environments/environment';

@Injectable({ providedIn: 'root' })
export class CalendarEventService {
  private eventsSubject = new BehaviorSubject<ScheduledAircraft[]>([]);
  public events$ = this.eventsSubject.asObservable();

  constructor(private http: HttpClient) {}

  initEvents(): void {
    const today     = new Date();
    const endOfYear = new Date(today.getFullYear(), 11, 31);

    const bodyParams = new HttpParams()
      .set('debug',    'false')
      .set('token',    environment.externalApiToken)
      .set('report',   'Schedule_Aircraft')
      .set('datatype', 'JSON')
      .set('start',    this.formatDate(today))
      .set('end',      this.formatDate(endOfYear));

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json'
    });

    this.http
      .post('https://cirro.air-suite.com/API.php', bodyParams.toString(), {
        headers,
        responseType: 'text'
      })
      .pipe(
        // 1) Parse the raw text into JSON
        map(raw => JSON.parse(raw) as ExternalResponse),

        // 2) Branch on the ServerResponse
        switchMap(resp => {
          // Throttled?
          if (resp.ServerResponse.startsWith('Request Throttled')) {
            // Extract the number of seconds to wait
            const m = resp.ServerResponse.match(/(\d+)\s*seconds/);
            const secs = m ? parseInt(m[1], 10) : 5;  // default 5s
            console.warn(`Cirro API throttled, retrying in ${secs}s`);

            // Schedule a retry after that many seconds
            return timer(secs * 1000).pipe(
              tap(() => this.initEvents()),
              // We don’t want to push any data downstream right now
              switchMap(() => EMPTY)
            );
          }

          // Success?
          if (resp.ServerResponse === 'Success') {
            this.eventsSubject.next(resp.Data);
          } else {
            console.error('Calendar fetch failed:', resp.ServerResponse);
          }

          // Done for this round
          return EMPTY;
        }),

        // 3) Catch any low‐level errors
        catchError(err => {
          console.error('Calendar-service fatal error', err);
          return EMPTY;
        })
      )
      .subscribe();
  }

  getEvents() {
    return this.events$;
  }

  private formatDate(date: Date): string {
    return date.toISOString().slice(0, 10);
  }
}
