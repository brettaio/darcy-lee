import { Component, OnInit } from '@angular/core';
import {
  HeroEnzoComponent,
  TestimonialComponent,
  FaqComponent,
  FormComponent,
  ProblemPropositionComponent,
  ValuePropositionOneComponent,
  SolutionIntroComponent,
} from '../../../../component/src/components';
@Component({
  selector: 'page-home',
  imports: [
    HeroEnzoComponent,
    TestimonialComponent,
    FaqComponent,
    FormComponent,
    ProblemPropositionComponent,
    ValuePropositionOneComponent,
    SolutionIntroComponent,
  ],
  template: `
    <component-hero-enzo />
    <component-problem-proposition />
    <component-solution-intro />
    <component-value-proposition-one />
    <component-testimonial />
    <component-faq />
    <component-form />
  `,
  styles: ``,
})
export class HomePage {}
