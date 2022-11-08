import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ButtonsPopPage } from './buttons-pop.page';

const routes: Routes = [
  {
    path: '',
    component: ButtonsPopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ButtonsPopPageRoutingModule {}
