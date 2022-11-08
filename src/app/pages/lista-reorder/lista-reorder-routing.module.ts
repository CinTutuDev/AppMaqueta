import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaReorderPage } from './lista-reorder.page';

const routes: Routes = [
  {
    path: '',
    component: ListaReorderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaReorderPageRoutingModule {}
