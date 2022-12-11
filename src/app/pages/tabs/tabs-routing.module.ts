import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tabs/account',
    pathMatch: 'full',
  },
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'pelis',
        loadChildren: () =>
          import('../movies/movies.module').then((m) => m.MoviesPageModule),
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
export class TabsPageRoutingModule {}
