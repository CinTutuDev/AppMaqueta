import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RangoProgressPage } from './rango-progress.page';

const routes: Routes = [
  {
    path: '',
    component: RangoProgressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RangoProgressPageRoutingModule {}
