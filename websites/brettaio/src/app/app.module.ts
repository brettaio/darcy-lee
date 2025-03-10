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
} from '../../../../component/src/components';
import { LogoMarqueeComponent } from '../../../../component/src/lib/logo-marquee/logo-marquee.component';
import { UnderConstructionComponent } from '../../../../component/src/lib/under-construction/under-construction.component';

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
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
