import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TiposdecultivoComponent } from './tiposdecultivo/tiposdecultivo.component';

const routes: Routes = [
  {
    path:'',
    component:TiposdecultivoComponent,


  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CultivoRoutingModule { }
