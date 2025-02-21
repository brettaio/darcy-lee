import { Component } from "@angular/core";
import {
  HeroComponent,
  CtaComponent,
  TestimonialComponent,
  FaqComponent,
} from "../../../../component/src/components";
import { FormComponent } from "../../../../component/src/lib/form/form.component";

@Component({
  selector: "page-home",
  imports: [
    HeroComponent,
    CtaComponent,
    TestimonialComponent,
    FaqComponent,
    FormComponent,
  ],
  template: `
    <component-hero />
    <component-cta />
    <component-testimonial />
    <component-faq />
    <component-form />
  `,
  styles: ``,
})
export class HomePage {}
