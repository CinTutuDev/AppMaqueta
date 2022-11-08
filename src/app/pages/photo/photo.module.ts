import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhotoPageRoutingModule } from './photo-routing.module';

import { PhotoPage } from './photo.page';
/* lo importo para tener la flecha e ir a inicio */
import {ComponentsModule} from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhotoPageRoutingModule,
    ComponentsModule
    
  ],
  declarations: [PhotoPage]
})
export class PhotoPageModule {}
