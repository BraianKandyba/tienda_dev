import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComputadorasRoutingModule } from './computadoras-routing.module';
import { ComputadorasComponent } from './computadoras.component';


@NgModule({
  declarations: [
    ComputadorasComponent
  ],
  imports: [
    CommonModule,
    ComputadorasRoutingModule
  ],
  exports:[
    ComputadorasComponent
  ]
})
export class ComputadorasModule { }
