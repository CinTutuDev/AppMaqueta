import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ButtonPageRoutingModule } from './button-routing.module';

import { ButtonPage } from './button.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ButtonPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ButtonPage]
})
export class ButtonPageModule {}
