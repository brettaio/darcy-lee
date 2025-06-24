import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Sponsus Page Components

import { SponusHomePage } from '../../../../page/src/lib/sponus-home/sponus-home.page';
import { SponusPlayerLoginPage } from '../../../../page/src/lib/sponus-player-login/sponus-player-login.page';
import { SponusPlayerHomePage } from '../../../../page/src/lib/sponus-player-home/sponus-player-home.page';
import { SponusPlayerSignupPage } from '../../../../page/src/lib/sponus-player-signup/sponus-player-signup.page';
import { SponusPlayerDashboardPage } from '../../../../page/src/lib/sponus-player-dashboard/sponus-player-dashboard.page';
import { SponusCorporateSponsorCapturePage } from '../../../../page/src/lib/sponus-corporate-sponsor-capture/sponus-corporate-sponsor-capture.page';
import { SponusUserSponsorCapturePage } from '../../../../page/src/lib/sponus-user-sponsor-capture/sponus-user-sponsor-capture.page';

const routes: Routes = [
  { path: '', component: SponusHomePage },

  {
    path: 'player',
    children: [
      { path: 'login', component: SponusPlayerLoginPage },
      { path: 'signup', component: SponusPlayerSignupPage },

      {
        path: ':id',
        children: [
          { path: 'home', component: SponusPlayerHomePage },
          { path: 'dashboard', component: SponusPlayerDashboardPage },
        ],
      },
    ],
  },

  { path: 'user-sponsor-capture', component: SponusUserSponsorCapturePage },
  {
    path: 'corporate-sponsor-capture',
    component: SponusCorporateSponsorCapturePage,
  },

  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
