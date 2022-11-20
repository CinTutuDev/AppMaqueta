import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapaGeoPage } from './mapa-geo.page';

const routes: Routes = [
  {
    path: '',
    component: MapaGeoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapaGeoPageRoutingModule {}
