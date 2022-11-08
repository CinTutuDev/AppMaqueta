import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaJSONPageRoutingModule } from './lista-json-routing.module';

import { ListaJSONPage } from './lista-json.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaJSONPageRoutingModule,
    ComponentsModule

  ],
  declarations: [ListaJSONPage]
})
export class ListaJSONPageModule { }
