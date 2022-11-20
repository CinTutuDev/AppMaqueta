import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RangoProgressPageRoutingModule } from './rango-progress-routing.module';

import { RangoProgressPage } from './rango-progress.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RangoProgressPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RangoProgressPage]
})
export class RangoProgressPageModule {}
