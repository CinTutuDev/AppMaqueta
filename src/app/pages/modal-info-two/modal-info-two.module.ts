import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalInfoTwoPageRoutingModule } from './modal-info-two-routing.module';

import { ModalInfoTwoPage } from './modal-info-two.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalInfoTwoPageRoutingModule
  ],
  declarations: [ModalInfoTwoPage]
})
export class ModalInfoTwoPageModule {}
