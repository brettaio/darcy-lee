import { Component, OnInit } from '@angular/core';
import {
  HeroComponent,
  TestimonialComponent,
  FaqComponent,
  FormComponent,
  ProblemPropositionComponent,
  ValuePropositionOneComponent,
  ValuePropositionThreeComponent,
  ValuePropositionTwoComponent,
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
