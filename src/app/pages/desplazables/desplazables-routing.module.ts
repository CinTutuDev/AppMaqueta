import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesplazablesPage } from './desplazables.page';

const routes: Routes = [
  {
    path: '',
    component: DesplazablesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesplazablesPageRoutingModule {}
