import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeslizanteSlide2PageRoutingModule } from './deslizante-slide2-routing.module';

import { DeslizanteSlide2Page } from './deslizante-slide2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeslizanteSlide2PageRoutingModule
  ],
  declarations: [DeslizanteSlide2Page]
})
export class DeslizanteSlide2PageModule {}
