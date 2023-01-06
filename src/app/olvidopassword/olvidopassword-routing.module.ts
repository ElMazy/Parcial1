import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OlvidopasswordPage } from './olvidopassword.page';

const routes: Routes = [
  {
    path: '',
    component: OlvidopasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OlvidopasswordPageRoutingModule {}
