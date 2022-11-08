import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RickMortyPageRoutingModule } from './rick-morty-routing.module';

import { RickMortyPage } from './rick-morty.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RickMortyPageRoutingModule
  ],
  declarations: [RickMortyPage]
})
export class RickMortyPageModule {}
