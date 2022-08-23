import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FotosjardinComponent} from './fotosjardin/fotosjardin.component';

const routes: Routes = [
  {
    path:'',
    component:FotosjardinComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TiposdejardinRoutingModule { }
