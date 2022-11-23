import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesplazablesPageRoutingModule } from './desplazables-routing.module';

import { DesplazablesPage } from './desplazables.page';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesplazablesPageRoutingModule,
    ComponentsModule,
    PipesModule
  ],
  declarations: [DesplazablesPage]
})
export class DesplazablesPageModule {}
