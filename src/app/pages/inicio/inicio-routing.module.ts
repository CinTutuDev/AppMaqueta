import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioPage } from './inicio.page';

const routes: Routes = [
  {
    path: '',
    component: InicioPage,
    children: [
      {
        path: 'alert',
        loadChildren: () =>
          import('../alert/alert.module').then((m) => m.AlertPageModule),
      },
      {
        path: 'botones',
        loadChildren: () =>
          import('../button/button.module').then((m) => m.ButtonPageModule),
      },
      {
        path: 'deslizantes',
        loadChildren: () =>
          import('../deslizante-slize/deslizante-slize.module').then(
            (m) => m.DeslizanteSlizePageModule
          ),
      },
    ],
  },
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioPageRoutingModule {}
