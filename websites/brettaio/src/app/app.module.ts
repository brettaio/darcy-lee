import { NgModule, provideZonelessChangeDetection } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
  CustomerOnboardingBrettaioComponent,
  CtaComponent,
} from '../../../../component/src/components';
import {
  LandingPageOnePage,
  LandingPageTwoPage,
} from '../../../../page/src/pages';
import { provideHttpClient, withFetch } from '@angular/common/http';
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
    CustomerOnboardingBrettaioComponent,
    FormsModule,
    CtaComponent,
    LandingPageOnePage,
    LandingPageTwoPage,
  ],
  providers: [
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync(),
    provideAnimations(),
    provideHttpClient(withFetch()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
