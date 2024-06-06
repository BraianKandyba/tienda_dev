import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ModalComponent } from './componentes/modal/modal.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children:
    [
      {
        path: 'inicio',
        loadChildren: ()=>import('./pages/inicio/inicio.module').then((m)=>m.InicioModule)
      },
      {
        path: 'accesorios',
        loadChildren: ()=>import('./pages/accesorios/accesorios.module').then((m)=>m.AccesoriosModule)
      },
      {
        path: 'ropa',
        loadChildren: ()=>import('./pages/ropa/ropa.module').then((m)=>m.RopaModule)
      },
      {
        path: 'computadoras',
        loadChildren: ()=>import('./pages/computadoras/computadoras.module').then((m)=>m.ComputadorasModule)
      },
      {
        path: 'modal',
        component: ModalComponent

      },
      {
        path:'**',
        redirectTo: 'inicio'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
