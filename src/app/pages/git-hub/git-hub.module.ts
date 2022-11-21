import { ComponentsModule } from 'src/app/components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GitHubPageRoutingModule } from './git-hub-routing.module';

import { GitHubPage } from './git-hub.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GitHubPageRoutingModule,
    ComponentsModule
  ],
  declarations: [GitHubPage]
})
export class GitHubPageModule {}
