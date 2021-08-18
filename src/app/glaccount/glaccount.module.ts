import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';



import { GlaccountRoutingModule } from './glaccount-routing.module';
import { GlaccountFormComponent } from './glaccount-form/glaccount-form.component';
import { GlaccountListaComponent } from './glaccount-lista/glaccount-lista.component';
import { GlaccountEditeComponent } from './glaccount-edite/glaccount-edite.component';

@NgModule({
  declarations: [GlaccountFormComponent, GlaccountListaComponent, GlaccountEditeComponent],
  imports: [CommonModule, GlaccountRoutingModule, FormsModule, ReactiveFormsModule, DataTablesModule, MatTableModule, MatPaginatorModule, MatFormFieldModule, MatInputModule],
  exports: [GlaccountFormComponent, GlaccountListaComponent, GlaccountEditeComponent],
})

export class GlaccountModule {}
