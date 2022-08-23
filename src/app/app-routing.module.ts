import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'jardines',
    loadChildren:()=>import('./jardines/jardines.module').then(m=>m.JardinesModule)     
  },
  {
    path:'tiposdejardin',
    loadChildren:()=>import('./tiposdejardin/tiposdejardin.module').then(m=>m.TiposdejardinModule)
  },
  {
    path:'cultivo',
    loadChildren:()=>import('./cultivo/cultivo.module').then(m=>m.CultivoModule)
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
