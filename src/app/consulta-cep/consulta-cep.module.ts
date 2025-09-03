import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultaCepPageRoutingModule } from './consulta-cep-routing.module';

import { ConsultaCepPage } from './consulta-cep.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultaCepPageRoutingModule
  ],
  declarations: [ConsultaCepPage]
})
export class ConsultaCepPageModule {}
