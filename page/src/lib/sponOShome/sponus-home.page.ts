import { Component } from '@angular/core';
import { HeroComponent } from '../../../../component/src/components';

@Component({
  selector: 'page-sponOShome',
  imports: [HeroComponent],
  template: `
    <component-hero   (openLogin)="showLogin = true"></component-hero>
  `,
  styles: ``,
})
export class SponOSHomePage {
  showLogin = false;
}
