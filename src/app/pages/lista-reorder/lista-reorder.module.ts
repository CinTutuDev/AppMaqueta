import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaReorderPageRoutingModule } from './lista-reorder-routing.module';

import { ListaReorderPage } from './lista-reorder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaReorderPageRoutingModule
  ],
  declarations: [ListaReorderPage]
})
export class ListaReorderPageModule {}
