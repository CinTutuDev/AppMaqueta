import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeslizanteSlizePageRoutingModule } from './deslizante-slize-routing.module';

import { DeslizanteSlizePage } from './deslizante-slize.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeslizanteSlizePageRoutingModule
  ],
  declarations: [DeslizanteSlizePage]
})
export class DeslizanteSlizePageModule {}
