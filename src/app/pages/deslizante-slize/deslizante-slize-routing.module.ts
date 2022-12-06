import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeslizanteSlizePage } from './deslizante-slize.page';

const routes: Routes = [
  {
    path: '',
    component: DeslizanteSlizePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeslizanteSlizePageRoutingModule {}
