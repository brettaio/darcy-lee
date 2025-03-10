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
import { HeroBrettaioComponent } from '../../../../component/src/lib/hero-brettaio/hero-brettaio.component';
import { HeaderBrettaioComponent } from '../../../../component/src/lib/header-brettaio/header-brettaio.component';
import { FooterBrettaioComponent } from '../../../../component/src/lib/footer-brettaio/footer-brettaio.component';
import { ProblemPropBrettaioComponent } from '../../../../component/src/lib/problem-prop-brettaio/problem-prop-brettaio.component';
import { PricingBrettaioComponent } from '../../../../component/src/lib/pricing-brettaio/pricing-brettaio.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroBrettaioComponent,
    HeaderBrettaioComponent,
    FooterBrettaioComponent,
    ProblemPropBrettaioComponent,
    PricingBrettaioComponent,
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
