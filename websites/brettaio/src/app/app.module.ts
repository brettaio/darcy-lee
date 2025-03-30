import {
  NgModule,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  HeroBrettaioComponent,
  HeaderBrettioAppComponent,
  FooterBrettaioComponent,
  ProblemPropBrettaioComponent,
  PricingBrettaioComponent,
  HeroBrettaioAppComponent,
  TestimonialHeroComponent,
  LogoMarqueeComponent,
  UnderConstructionComponent,
} from '../../../../component/src/components';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroBrettaioComponent,
    HeaderBrettioAppComponent,
    FooterBrettaioComponent,
    ProblemPropBrettaioComponent,
    PricingBrettaioComponent,
    TestimonialHeroComponent,
    HeroBrettaioAppComponent,
    LogoMarqueeComponent,
    UnderConstructionComponent,
  ],
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync(),
    provideAnimations(),
    provideHttpClient(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
