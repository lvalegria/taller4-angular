import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JardinesRoutingModule } from './jardines-routing.module';
import { PrincipalComponent } from './principal/principal.component';


@NgModule({
  declarations: [
    PrincipalComponent
  ],
  imports: [
    CommonModule,
    JardinesRoutingModule
  ]
})
export class JardinesModule { }
