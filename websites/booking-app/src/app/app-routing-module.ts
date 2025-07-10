import { NgModule } from '@angular/core';
import { BookingAppCalendarComponent, BookingAppLoginComponent } from '../../../../component/src/components';
import { StackedLayoutOneComponent} from '../../../../component/src/components';
import { BookingAppAuthGuard } from '../../../../guard/src/guards';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  // 1) Protected shell: '' → StackedLayoutOneComponent
  //    Guard redirects to /login if not authenticated.
  {
    path: '',
    component: StackedLayoutOneComponent,
    canActivate: [BookingAppAuthGuard],
    children: [
      // once in the shell, go to /calendar by default
      { path: '', redirectTo: 'calendar', pathMatch: 'full' },
      { path: 'calendar', component: BookingAppCalendarComponent },
      // …any other post-login components…
    ]
  },

  // 2) Public login form
  { path: 'login', component: BookingAppLoginComponent },

  // 3) Anything else sends you back to the shell—which the guard
  //    immediately routes to /login if you’re not signed in.
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
