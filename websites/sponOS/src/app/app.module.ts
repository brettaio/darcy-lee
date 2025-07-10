import {
  NgModule,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { HeaderComponent, LoginComponent } from '../../../../component/src/components';
import {
  provideHttpClient,
  withInterceptorsFromDi,
  withXsrfConfiguration, 
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { App } from './app';
import { CredentialsInterceptor } from '../../../../interceptor/src/interceptor';

@NgModule({
  declarations: [App],
  imports: [BrowserModule, AppRoutingModule, HeaderComponent, LoginComponent, ReactiveFormsModule, RouterOutlet ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay()),
    provideHttpClient(
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
  bootstrap: [App],
})
export class AppModule {}
