import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RopaRoutingModule } from './ropa-routing.module';
import { RopaComponent } from './ropa.component';


@NgModule({
  declarations: [
    RopaComponent
  ],
  imports: [
    CommonModule,
    RopaRoutingModule
  ],
  exports:[
    RopaComponent
  ]
})
export class RopaModule { }
