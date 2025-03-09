import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  AboutPage,
  BlogPage,
  ContactPage,
  HomePage,
  NotFoundPage,
  PrivacyPolicyPage,
  ServicesPage,
} from '../../../../page/src/pages';

const routes: Routes = [
  { path: '', component: HomePage, pathMatch: 'full' },
  { path: 'about', component: AboutPage },
  { path: 'blog', component: BlogPage },
  { path: 'contact', component: ContactPage },
  { path: 'privacy-policy', component: PrivacyPolicyPage },
  { path: 'services', component: ServicesPage },
  { path: '**', component: HomePage }, // Wildcard for 404s
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
