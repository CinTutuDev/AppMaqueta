import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeslizanteSlide2Page } from './deslizante-slide2.page';

const routes: Routes = [
  {
    path: '',
    component: DeslizanteSlide2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeslizanteSlide2PageRoutingModule {}
