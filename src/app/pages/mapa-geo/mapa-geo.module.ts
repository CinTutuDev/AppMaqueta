import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapaGeoPageRoutingModule } from './mapa-geo-routing.module';

import { MapaGeoPage } from './mapa-geo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapaGeoPageRoutingModule
  ],
  declarations: [MapaGeoPage]
})
export class MapaGeoPageModule {}
