import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaJSONPage } from './lista-json.page';

const routes: Routes = [
  {
    path: '',
    component: ListaJSONPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaJSONPageRoutingModule {}
