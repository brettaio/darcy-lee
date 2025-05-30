import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestPage } from '../../../../page/src/pages';

const routes: Routes = [{ path: '', component: TestPage }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
