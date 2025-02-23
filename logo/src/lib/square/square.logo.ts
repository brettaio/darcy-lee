import { Component, Input } from '@angular/core';

@Component({
  selector: 'logo-square',
  imports: [],
  template: `
    <div [style.padding.px]="padding">
      <img
        [src]="src"
        [alt]="alt"
        class="object-cover"
        [style.width.px]="size"
        [style.height.px]="size"
        [style.borderRadius.px]="rounding"
      />
    </div>
  `,
  styles: ``,
})
export class SqaureLogo {
  @Input() size!: number;
  @Input() src!: string;
  @Input() alt!: string;
  @Input() padding!: number;
  @Input() rounding!: number;
}
