import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ButtonsPopPageRoutingModule } from './buttons-pop-routing.module';

import { ButtonsPopPage } from './buttons-pop.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ButtonsPopPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ButtonsPopPage]
})
export class ButtonsPopPageModule {}
