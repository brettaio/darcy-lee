import { Component } from '@angular/core';
import { StackedLayoutOneComponent } from '../../../../component/src/lib/application-shell/stacked-layout-one/stacked-layout-one.component';

@Component({
  selector: 'page-booking-app',
  standalone: true,
  imports: [StackedLayoutOneComponent],
  template: `
    <component-stacked-layout-one />
  `,
  styles: ``
})
export class BookingAppPage {

}
