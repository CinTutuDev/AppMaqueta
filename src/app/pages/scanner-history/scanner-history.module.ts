import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScannerHistoryPageRoutingModule } from './scanner-history-routing.module';

import { ScannerHistoryPage } from './scanner-history.page';
import * as CordovaSQLiteDriver from 'localforage-cordovasqlitedriver';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScannerHistoryPageRoutingModule,
    
    
  ],
  declarations: [ScannerHistoryPage]
})
export class ScannerHistoryPageModule {}
