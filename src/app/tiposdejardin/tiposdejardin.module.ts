import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TiposdejardinRoutingModule } from './tiposdejardin-routing.module';
import { FotosjardinComponent } from './fotosjardin/fotosjardin.component';


@NgModule({
  declarations: [
    FotosjardinComponent
  ],
  imports: [
    CommonModule,
    TiposdejardinRoutingModule
  ]
})
export class TiposdejardinModule { }
