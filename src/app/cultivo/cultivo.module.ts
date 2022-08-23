import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CultivoRoutingModule } from './cultivo-routing.module';
import { TiposdecultivoComponent } from './tiposdecultivo/tiposdecultivo.component';


@NgModule({
  declarations: [
    TiposdecultivoComponent
  ],
  imports: [
    CommonModule,
    CultivoRoutingModule
  ]
})
export class CultivoModule { }
