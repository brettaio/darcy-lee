import { Component } from '@angular/core';
import {
  HeroBrettaioComponent,
  PricingBrettaioComponent,
  ProblemPropBrettaioComponent,
} from '../../../../component/src/components';
import { FormBrettioComponent } from '../../../../component/src/lib/forms/form-brettio.component';

@Component({
  selector: 'page-home-brettaio',
  imports: [
    HeroBrettaioComponent,
    ProblemPropBrettaioComponent,
    PricingBrettaioComponent,
    FormBrettioComponent,
  ],
  template: `
    <component-hero-brettaio />
    <component-problem-prop-brettaio />
    <component-pricing-brettaio />
    <component-form-brettio />
  `,
  styles: ``,
})
export class HomeBrettaioPage {}
