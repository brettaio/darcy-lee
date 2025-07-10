// component/src/lib/calendar/booking-app/booking-app-calendar.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule }      from '@angular/common';
import { getCalendarGrid }   from './calendar-utils';
import { ScheduledAircraft } from '../../../../../model/src/model';
import { CalendarEventService } from '../../../../../service/src/services';

@Component({
  selector: 'component-booking-app-calendar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- date picker + Prev/Next -->
    <div class="p-4 bg-white grid grid-cols-3 rounded-lg shadow items-center">
      <button (click)="prev()" class="justify-self-start px-2 py-1 hover:bg-gray-100 rounded">
        ‹ Prev
      </button>
      <input
        type="date"
        [value]="selectedDate | date:'yyyy-MM-dd'"
        (change)="onDateInput($event)"
        class="justify-self-center border rounded p-2"
      />
      <button (click)="next()" class="justify-self-end px-2 py-1 hover:bg-gray-100 rounded">
        Next ›
      </button>
    </div>

    <!-- Month/Year -->
    <section class="mt-6 text-center">
      <h2 class="text-sm font-semibold text-gray-900">
        {{ monthNames[month] }} {{ year }}
      </h2>

      <!-- Weekday Labels -->
      <div class="mt-2 grid grid-cols-7 text-xs font-medium text-gray-500">
        <div *ngFor="let wd of weekDays">{{ wd }}</div>
      </div>

      <!-- Date Grid -->
      <div *ngFor="let week of weeks" class="mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200">
        <button
          *ngFor="let day of week"
          type="button"
          class="py-1.5 hover:bg-gray-100 focus:z-10"
          [disabled]="!day"
          (click)="onSelect(day)"
          [ngClass]="{
            'ring-2 ring-indigo-500 bg-indigo-100': day && isSameDate(day, selectedDate),
            'bg-green-100': day && hasEvent(day) && !isSameDate(day, selectedDate),
            'bg-white text-gray-900': day && !isSameDate(day, selectedDate) && !hasEvent(day),
            'bg-gray-50 text-gray-400': !day
          }"
        >
          {{ day?.getDate() }}
        </button>
      </div>
    </section>

    <!-- Upcoming & Selected-Day Events -->
    <section class="mt-12 grid gap-6 md:grid-cols-2">
      <!-- Upcoming Events -->
      <div>
        <h2 class="text-base font-semibold text-gray-900 mb-4">Upcoming events</h2>
        <div class="grid grid-cols-2 gap-4">
          <div
            *ngFor="let ev of upcomingEvents"
            class="space-y-1 rounded-lg bg-gray-50 p-3 text-sm shadow"
          >
            <p class="font-semibold text-gray-800">
              {{ ev.Ident }} (Booking #{{ ev.Booking_ID }})
            </p>
            <p class="text-gray-600">
              Aircraft ID: {{ ev.AC_ID }} | Status: {{ ev.Status || 'N/A' }}
            </p>
            <p class="text-gray-500">
              <time>{{ ev.start | date:'MMM d, y h:mm a' }}</time>
            </p>
          </div>
        </div>
      </div>

      <!-- Events on Selected Day -->
      <div>
        <h2 class="text-base font-semibold text-gray-900 mb-4">
          Events on {{ selectedDate | date:'MMM d, y' }}
        </h2>
        <ul class="space-y-4">
          <li *ngIf="!selectedEvents.length" class="text-gray-500">
            No events on this day.
          </li>
          <li
            *ngFor="let ev of selectedEvents"
            class="space-y-1 rounded-lg bg-indigo-50 p-3 text-sm shadow"
          >
            <p class="font-semibold text-indigo-700">
              {{ ev.Ident }} (Booking #{{ ev.Booking_ID }})
            </p>
            <p class="text-indigo-600">
              Aircraft ID: {{ ev.AC_ID }} | Status: {{ ev.Status || 'N/A' }}
            </p>
            <p class="text-indigo-500">
              <time>{{ ev.start | date:'h:mm a' }}</time>
            </p>
          </li>
        </ul>
      </div>
    </section>
  `,
  styles: [``]
})
export class BookingAppCalendarComponent implements OnInit {
  year = new Date().getFullYear();
  month = new Date().getMonth();
  weeks: (Date | null)[][] = [];
  selectedDate = new Date();
  events: ScheduledAircraft[] = [];

  weekDays  = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  monthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

  constructor(private calendarService: CalendarEventService) {}

  ngOnInit(): void {
    this.calendarService.initEvents(); // 🔥 trigger the fetch on load
    this.render();
    this.loadEvents();
  }

  private render(): void {
    this.weeks = getCalendarGrid(this.year, this.month);
  }

  prev(): void {
    if (this.month === 0) {
      this.month = 11;
      this.year--;
    } else {
      this.month--;
    }
    this.render();
  }

  next(): void {
    if (this.month === 11) {
      this.month = 0;
      this.year++;
    } else {
      this.month++;
    }
    this.render();
  }

  onDateInput(event: Event): void {
    const val = (event.target as HTMLInputElement).value;
    if (!val) return;
    const [y, m, d] = val.split('-').map(n => +n);
    this.selectedDate = new Date(y, m - 1, d);
    if (this.year !== y || this.month !== (m - 1)) {
      this.year = y;
      this.month = m - 1;
      this.render();
    }
  }

  onSelect(day: Date | null): void {
    if (!day) return;
    this.selectedDate = day;
    this.year = day.getFullYear();
    this.month = day.getMonth();
    this.render();
  }

  private loadEvents(): void {
    this.calendarService.getEvents().subscribe(evts => {
      this.events = evts;
    });
  }

  /** Always show every event, sorted chronologically */
  get upcomingEvents(): ScheduledAircraft[] {
    return [...this.events].sort((a,b) => a.start.localeCompare(b.start));
  }

  /** Only show events whose start date matches the selected day */
  get selectedEvents(): ScheduledAircraft[] {
    const day = this.selectedDate.toISOString().slice(0,10);
    return this.events
      .filter(e => e.start.slice(0,10) === day)
      .sort((a,b) => a.start.localeCompare(b.start));
  }

  /** Does this cell-date have any bookings? */
  hasEvent(day: Date | null): boolean {
    if (!day) return false;
    const ds = day.toISOString().slice(0,10);
    return this.events.some(e => e.start.slice(0,10) === ds);
  }

  /** Compare two dates ignoring time */
  isSameDate(a: Date | null, b: Date | null): boolean {
    if (!a || !b) return false;
    return a.getFullYear()===b.getFullYear()
        && a.getMonth()   ===b.getMonth()
        && a.getDate()    ===b.getDate();
  }
}
