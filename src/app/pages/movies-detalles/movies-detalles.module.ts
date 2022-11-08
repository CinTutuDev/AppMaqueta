import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoviesDetallesPageRoutingModule } from './movies-detalles-routing.module';

import { MoviesDetallesPage } from './movies-detalles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoviesDetallesPageRoutingModule
  ],
  declarations: [MoviesDetallesPage]
})
export class MoviesDetallesPageModule {}
