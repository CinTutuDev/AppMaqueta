import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimePage } from './time.page';

const routes: Routes = [
  {
    path: '',
    component: TimePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimePageRoutingModule {}
