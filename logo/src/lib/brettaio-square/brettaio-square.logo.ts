import { Component, Input } from '@angular/core';
import { appDataStore } from '../../../../websites/brettaio/src/app/store/app-data.store';

@Component({
  selector: 'logo-brettaio-square',
  imports: [],
  template: `
    <div [style.padding.px]="padding">
      <a href="/">
        <span
          class="sr-only"
          [innerText]="appDataStore.brandData().businessName"
        ></span>
        <img
          [src]="src"
          [alt]="alt"
          [style.width.px]="size"
          [style.height.px]="size"
          [style.borderRadius.px]="rounding"
        />
      </a>
    </div>
  `,
  styles: ``,
})
export class BrettaioSquareLogo {
  @Input() size!: number;
  @Input() src!: string;
  @Input() alt!: string;
  @Input() padding!: number;
  @Input() rounding!: number;
  appDataStore = appDataStore;
}
