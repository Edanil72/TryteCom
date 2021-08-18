import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecoveryFormComponent } from './recovery-form/recovery-form.component';
import { RecoveryListaComponent } from './recovery-lista/recovery-lista.component';
import { RecoveryDdrComponent } from './recovery-ddr/recovery-ddr.component';

import { LayoutComponent } from '../layout/layout.component';

import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  {
    path: 'recovery',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'recovery-form',
        component: RecoveryFormComponent,
      },
      {
              path: 'recovery-ddr',
              component: RecoveryDdrComponent,
            },
      {
        path: 'recovery-lista',
        component: RecoveryListaComponent,
      },
      {
        path: '',
        redirectTo: '/recovery/recovery-lista',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecoveryRoutingModule {}
