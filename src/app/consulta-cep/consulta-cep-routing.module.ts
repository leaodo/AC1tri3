import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultaCepPage } from './consulta-cep.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultaCepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultaCepPageRoutingModule {}
