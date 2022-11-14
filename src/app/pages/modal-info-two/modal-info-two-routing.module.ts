import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalInfoTwoPage } from './modal-info-two.page';

const routes: Routes = [
  {
    path: '',
    component: ModalInfoTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalInfoTwoPageRoutingModule {}
