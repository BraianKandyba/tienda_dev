import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { InicioModule } from './pages/inicio/inicio.module';
import { AccesoriosModule } from './pages/accesorios/accesorios.module';
import { RopaModule } from './pages/ropa/ropa.module';
import { ComputadorasModule } from './pages/computadoras/computadoras.module';
import { ModalComponent } from './componentes/modal/modal.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    InicioModule,
    AccesoriosModule,
    RopaModule,
    ComputadorasModule
  ],
  exports:[
    DashboardComponent
  ]
})
export class DashboardModule { }
