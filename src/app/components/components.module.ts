import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PopOverInfComponent } from './pop-over-inf/pop-over-inf.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [HeaderComponent, PopOverInfComponent],
  exports: [HeaderComponent, PopOverInfComponent],
  imports: [CommonModule, IonicModule],
})
export class ComponentsModule {}
