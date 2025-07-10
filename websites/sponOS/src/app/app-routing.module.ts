import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Sponsus Page Components

import { SponOSHomePage } from '../../../../page/src/lib/sponOShome/sponus-home.page';
// import { SponOSPlayerLoginPage } from '../../../../page/src/lib/sponus-player-login/sponus-player-login.page';
// import { SponOSPlayerSignupPage } from '../../../../page/src/lib/sponus-player-signup/sponus-player-signup.page';
// import { SponOSPlayerHomePage } from '../../../../page/src/lib/sponus-player-home/sponus-player-home.page';
import { SponOSPlayerDashboardPage } from '../../../../page/src/lib/sponOSplayer-dashboard/sponOSplayer-dashboard.page';
import { LoginComponent } from '../../../../component/src/lib/forms/sponOS/login/login.component';
import { sponOSAuthGuard } from '../../../../guard/src/lib/sponOS/auth/auth.guard';
// import { SponOSCorporateSponsorCapturePage } from '../../../../page/src/lib/sponus-corporate-sponsor-capture/sponus-corporate-sponsor-capture.page';
// import { SponOSUserSponsorCapturePage } from '../../../../page/src/lib/sponus-user-sponsor-capture/sponus-user-sponsor-capture.page';

const routes: Routes = [
{path: '', component: SponOSHomePage },
{ path: 'login', component: LoginComponent, },
{ path: 'player', component: SponOSPlayerDashboardPage, canActivate: [sponOSAuthGuard] },
{ path: '**', redirectTo: 'login' }

//   // 1) Protected dashboard: /player/:id
//   {
//     path: 'player/:id',
//     component: SponOSPlayerDashboardPage,
//   },

//   // 2) Public profile: /:id
//   {
//     path: ':id',
//     component: SponOSPlayerHomePage,
//   },

//   // 3) Fallback (optional)
//  // { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
