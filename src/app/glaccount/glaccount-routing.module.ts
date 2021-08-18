import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlaccountFormComponent } from './glaccount-form/glaccount-form.component';
import { GlaccountListaComponent } from './glaccount-lista/glaccount-lista.component';
import { GlaccountEditeComponent } from './glaccount-edite/glaccount-edite.component';

import { LayoutComponent } from '../layout/layout.component';

import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  {
    path: 'glaccount',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'form',
        component: GlaccountFormComponent,
      },
        {
              path: 'glaccount-edite/:id',
              component: GlaccountEditeComponent,
            },
    /*   {
        path: 'form/:id',
        component: GlaccountFormComponent,
      }, */
      {
        path: 'lista',
        component: GlaccountListaComponent,
      },
      {
        path: '',
        redirectTo: '/glaccount/lista',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GlaccountRoutingModule {}
