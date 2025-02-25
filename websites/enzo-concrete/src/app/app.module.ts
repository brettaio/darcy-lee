import {
  NgModule,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  HeaderComponent,
  FooterComponent,
} from '../../../../component/src/components';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  ANALYTICS_CONFIG,
  AnalyticsConfig,
} from '../../../../service/src/services';

const analyticsConfig: AnalyticsConfig = {
  gaId: 'G-6KR52LVJM0',
};
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderComponent,
    FooterComponent,
    BrowserAnimationsModule,
  ],
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideClientHydration(withEventReplay()),
    { provide: ANALYTICS_CONFIG, useValue: analyticsConfig },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
