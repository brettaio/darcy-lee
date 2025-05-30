import { Component } from '@angular/core';
import { FaqBrettaioComponent } from '../../../../component/src/lib/faqs/faq-brettaio.component';

@Component({
  selector: 'page-pricing-brettaio',
  imports: [FaqBrettaioComponent],
  template: `
    <component-faq-brettaio />
  `,
  styles: ``,
})
export class PricingBrettaioPage {}
