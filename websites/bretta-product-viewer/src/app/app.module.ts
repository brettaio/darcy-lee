import {
  NgModule,
  provideExperimentalZonelessChangeDetection,
  importProvidersFrom,
} from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  HeaderComponent,
  HeaderBrettaioComponent,
  FooterComponent,
  FooterBrettaioComponent,
  HeroComponent,
  HeroBrettaioComponent,
} from '../../../../component/src/components';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderComponent,

    HeaderBrettaioComponent,
    HeroComponent,
    HeroBrettaioComponent,
    FooterBrettaioComponent,
    FooterComponent,
    CommonModule,
  ],
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideClientHydration(withEventReplay()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
