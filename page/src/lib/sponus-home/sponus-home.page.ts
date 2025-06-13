import { Component } from '@angular/core';
import { HeroComponent } from '../../../../component/src/components';

@Component({
  selector: 'page-sponus-home',
  imports: [HeroComponent],
  template: `
    <component-hero />
  `,
  styles: ``,
})
export class SponusHomePage {}
