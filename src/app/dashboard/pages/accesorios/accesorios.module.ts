import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccesoriosRoutingModule } from './accesorios-routing.module';
import { AccesoriosComponent } from './accesorios.component';


@NgModule({
  declarations: [
    AccesoriosComponent
  ],
  imports: [
    CommonModule,
    AccesoriosRoutingModule
  ],
  exports:[
    AccesoriosComponent
  ]
})
export class AccesoriosModule { }
