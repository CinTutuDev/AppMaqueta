import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GitHubPage } from './git-hub.page';

const routes: Routes = [
  {
    path: '',
    component: GitHubPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GitHubPageRoutingModule {}
