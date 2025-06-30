import { Component, OnInit } from '@angular/core';
import { getCalendarGrid } from './calendar-utils';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'component-booking-app-calendar',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div>
  <div class="relative grid grid-cols-1 gap-x-14">
 <section class="text-center">
  <!-- month header & nav -->
  <div class="flex justify-between items-center mb-4">
    <button (click)="prev()" class="px-2 py-1 hover:bg-gray-100 rounded">‹ Prev</button>
    <h2 class="text-sm font-semibold text-gray-900">
      {{ monthNames[month] }} {{ year }}
    </h2>
    <button (click)="next()" class="px-2 py-1 hover:bg-gray-100 rounded">Next ›</button>
  </div>

  <!-- weekday labels -->
  <div class="mt-2 grid grid-cols-7 text-xs font-medium text-gray-500">
    <div *ngFor="let wd of weekDays">{{ wd }}</div>
  </div>

  <!-- date grid -->
  <div *ngFor="let week of weeks" class="mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200">
    <button
      *ngFor="let day of week"
      type="button"
      class="py-1.5 hover:bg-gray-100 focus:z-10"
      [disabled]="!day"
      [ngClass]="{
        'bg-white text-gray-900': day !== null,
        'bg-gray-50 text-gray-400': day === null
      }"
    >
      {{ day?.getDate() }}
    </button>
  </div>
</section>
  </div>
  <section class="mt-12">
    <h2 class="text-base font-semibold text-gray-900">Upcoming events</h2>
    <ol class="mt-2 divide-y divide-gray-200 text-sm/6 text-gray-500">
      <li class="py-4 sm:flex">
        <time datetime="2022-01-17" class="w-28 flex-none">Wed, Jan 12</time>
        <p class="mt-2 flex-auto sm:mt-0">Nothing on today’s schedule</p>
      </li>
      <li class="py-4 sm:flex">
        <time datetime="2022-01-19" class="w-28 flex-none">Thu, Jan 13</time>
        <p class="mt-2 flex-auto font-semibold text-gray-900 sm:mt-0">View house with real estate agent</p>
        <p class="flex-none sm:ml-6"><time datetime="2022-01-13T14:30">2:30 PM</time> - <time datetime="2022-01-13T16:30">4:30 PM</time></p>
      </li>
      <li class="py-4 sm:flex">
        <time datetime="2022-01-20" class="w-28 flex-none">Fri, Jan 14</time>
        <p class="mt-2 flex-auto font-semibold text-gray-900 sm:mt-0">Meeting with bank manager</p>
        <p class="flex-none sm:ml-6">All day</p>
      </li>
      <li class="py-4 sm:flex">
        <time datetime="2022-01-18" class="w-28 flex-none">Mon, Jan 17</time>
        <p class="mt-2 flex-auto font-semibold text-gray-900 sm:mt-0">Sign paperwork at lawyers</p>
        <p class="flex-none sm:ml-6"><time datetime="2022-01-17T10:00">10:00 AM</time> - <time datetime="2022-01-17T10:15">10:15 AM</time></p>
      </li>
    </ol>
  </section>
</div>

  `,
  styles: ``
})
export class BookingAppCalendarComponent implements OnInit {
year = new Date().getFullYear();
month = new Date().getMonth();
weeks: (Date|null)[][] = [];

weekDays = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
monthNames = ['Jan', 'Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];


ngOnInit(): void {
    this.render();
}

render() {
  this.weeks = getCalendarGrid(this.year, this.month);
}

prev() {
  if (this.month === 0) {
    this.month = 11; this.year--;
  } else {
    this.month--;
  }
  this.render();
}

next() {
  if (this.month === 11) {
    this.month = 0; this.year++;
  } else {
    this.month++;
  }
  this.render();
}

}
