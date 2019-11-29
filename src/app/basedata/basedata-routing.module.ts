import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaseDataPage } from './basedata.page';

const routes: Routes = [
  {
    path: '',
    component: BaseDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaseDataPageRoutingModule {}
