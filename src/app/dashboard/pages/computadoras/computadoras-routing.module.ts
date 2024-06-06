import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComputadorasComponent } from './computadoras.component';

const routes: Routes = [
  {
    path: '',
    component: ComputadorasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComputadorasRoutingModule { }
