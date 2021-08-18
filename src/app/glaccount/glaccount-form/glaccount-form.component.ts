import { Component, OnInit, EventEmitter, Input, Output, ViewChild, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Observable,Subject } from "rxjs";

import {FormControl,Validators} from '@angular/forms';

import { Glaccount } from '../../glaccount/glaccount';
import { GlaccountService } from 'src/app/glaccount.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-glaccount-form',
  templateUrl: './glaccount-form.component.html',
  styleUrls: ['./glaccount-form.component.css'],
})
export class GlaccountFormComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'glaccountingaccount', 'glaccounting', 'glcurency', 'gldescription', 'glnumber'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  id: number;
  glaccountingaccount: string;
  glaccounting: number;
  glcurency: number;
  gldescription: string; 
  glnumber: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, glaccountingaccount: 'Hydrogen', glaccounting: 1.0079, glcurency: 4, gldescription: 'fd', glnumber: 3},
  {id: 2, glaccountingaccount: 'Helium', glaccounting: 4.0026, glcurency: 6, gldescription: 'fd', glnumber: 5},
  {id: 3, glaccountingaccount: 'Lithium', glaccounting: 6.941, glcurency: 5, gldescription: 'fd', glnumber: 4},
  {id: 4, glaccountingaccount: 'Beryllium', glaccounting: 9.0122, glcurency: 8, gldescription: 'fd', glnumber: 2},
  {id: 5, glaccountingaccount: 'Boron', glaccounting: 10.811, glcurency: 1, gldescription: 'fd', glnumber: 1},
  {id: 6, glaccountingaccount: 'Carbon', glaccounting: 12.0107, glcurency: 2, gldescription: 'fd', glnumber: 6},
];
