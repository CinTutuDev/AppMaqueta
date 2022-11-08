import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesDetallesPage } from './movies-detalles.page';

const routes: Routes = [
  {
    path: '',
    component: MoviesDetallesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesDetallesPageRoutingModule {}
