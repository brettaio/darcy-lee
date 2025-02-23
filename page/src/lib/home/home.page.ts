import { Component } from '@angular/core';
import {
  HeroComponent,
  CtaComponent,
  TestimonialComponent,
  FaqComponent,
} from '../../../../component/src/components';
import { FormComponent } from '../../../../component/src/lib/form/form.component';
import { ProblemPropositionComponent } from '../../../../component/src/lib/problem-proposition/problem-proposition.component';
import { ValuePropositionOneComponent } from '../../../../component/src/lib/value-proposition-one/value-proposition-one.component';
import { ValuePropositionTwoComponent } from '../../../../component/src/lib/value-proposition-two/value-proposition-two.component';
import { ValuePropositionThreeComponent } from '../../../../component/src/lib/value-proposition-three/value-proposition-three.component';
import { SolutionIntroComponent } from '../../../../component/src/lib/solution-intro/solution-intro.component';

@Component({
  selector: 'page-home',
  imports: [
    HeroComponent,
    TestimonialComponent,
    FaqComponent,
    FormComponent,
    ProblemPropositionComponent,
    ValuePropositionOneComponent,
    ValuePropositionTwoComponent,
    ValuePropositionThreeComponent,
    SolutionIntroComponent,
  ],
  template: `
    <component-hero />
    <component-problem-proposition />
    <component-solution-intro />
    <component-value-proposition-one />
    <component-value-proposition-two />
    <component-value-proposition-three />
    <component-testimonial />
    <component-faq />
    <component-form />
  `,
  styles: ``,
})
export class HomePage {}
