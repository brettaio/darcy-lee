import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptorsFromDi, withXsrfConfiguration, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { BookingAppPage } from "../../../../page/src/pages";
import { MatNativeDateModule } from '@angular/material/core';
import { CredentialsInterceptor } from '../../../../interceptor/src/interceptor';
import { RouterModule, RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BookingAppPage,
    MatNativeDateModule,
    RouterModule,
    RouterOutlet
],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay()),
    provideHttpClient(
      withFetch(), 
      withInterceptorsFromDi(), 
      withXsrfConfiguration({
        cookieName: 'XSRF-TOKEN',
        headerName: 'X-XSRF-TOKEN',
      })
    ),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CredentialsInterceptor,
      multi: true,
    }
  ],
  bootstrap: [App]
})
export class AppModule { }
