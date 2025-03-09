import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  HomeBrettaioPage,
  SolutionsBrettaioPage,
  PricingBrettaioPage,
  SuccessBrettaioPage,
  ContactBrettaioPage,
  PrivacyPolicyPage,
  RefundCancellationPage,
  TermsConditionsPage,
} from '../../../../page/src/pages';

const routes: Routes = [
  { path: '', component: HomeBrettaioPage },
  { path: 'solutions', component: SolutionsBrettaioPage },
  { path: 'pricing', component: PricingBrettaioPage },
  { path: 'success-stories', component: SuccessBrettaioPage },
  { path: 'contact', component: ContactBrettaioPage },
  { path: 'privacy-policy', component: PrivacyPolicyPage },
  { path: 'terms-conditions', component: TermsConditionsPage },
  { path: 'refund-cancellation', component: RefundCancellationPage },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect root to home
  // { path: '**', component: NotFoundComponent }, // Wildcard route for 404
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
