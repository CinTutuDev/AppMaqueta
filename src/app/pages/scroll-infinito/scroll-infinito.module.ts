import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScrollInfinitoPageRoutingModule } from './scroll-infinito-routing.module';

import { ScrollInfinitoPage } from './scroll-infinito.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScrollInfinitoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ScrollInfinitoPage]
})
export class ScrollInfinitoPageModule {}
