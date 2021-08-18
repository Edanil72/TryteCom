import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';

import { RecoveryRoutingModule } from './recovery-routing.module';
import { RecoveryFormComponent } from './recovery-form/recovery-form.component';
import { RecoveryListaComponent } from './recovery-lista/recovery-lista.component';
import { RecoveryDdrComponent } from './recovery-ddr/recovery-ddr.component';

@NgModule({
  declarations: [RecoveryFormComponent, RecoveryListaComponent, RecoveryDdrComponent],
  imports: [
    CommonModule,
    RecoveryRoutingModule,
    FormsModule,
    RouterModule,
    MatTableModule, 
    MatPaginatorModule,
    MatInputModule
  ],
  exports: [RecoveryFormComponent, RecoveryListaComponent, RecoveryDdrComponent],
})
export class RecoveryModule {}
