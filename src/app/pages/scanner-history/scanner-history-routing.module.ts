import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScannerHistoryPage } from './scanner-history.page';

const routes: Routes = [
  {
    path: '',
    component: ScannerHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScannerHistoryPageRoutingModule {}
