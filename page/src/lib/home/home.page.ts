import { Component, OnInit } from '@angular/core';
import {
  HeroComponent,
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
    HeroComponent,
    TestimonialComponent,
    FaqComponent,
    FormComponent,
    ProblemPropositionComponent,
    ValuePropositionOneComponent,
    SolutionIntroComponent,
  ],
  template: `
    <component-hero />
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
