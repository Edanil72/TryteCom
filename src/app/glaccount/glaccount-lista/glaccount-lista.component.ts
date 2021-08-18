import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';


import { Glaccount } from '../glaccount';
import { GlaccountService } from 'src/app/glaccount.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}

/** Constants used to fill up our data base. */
const FRUITS: string[] = [
  'blueberry', 'lychee', 'kiwi', 'mango', 'peach', 'lime', 'pomegranate', 'pineapple'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

@Component({
  selector: 'app-glaccount-lista',
  templateUrl: './glaccount-lista.component.html',
  styleUrls: ['./glaccount-lista.component.css'],
})
export class GlaccountListaComponent implements OnInit, AfterViewInit {
  
  displayedColumns: string[] = ['id', 'name', 'progress', 'fruit', 'accao'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  glaccountSelecionado: Glaccount;
  mensagemSucesso: string;
  mensagemErro: string;
  id: number;
  tableEae: any;
  glaccount = {} as Glaccount;

  glaccounts: any = [];

  constructor(private service: GlaccountService, private router: Router) {

    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);

  }

  ngOnInit(): void {

    this.getGlaccount();
    this.glaccounts = {};
       
    this.service.getGlaccount()
    .subscribe(resposta => this.glaccounts = resposta);

    var i = setInterval(function () {
    
      clearInterval(i);
    
      document.getElementById("loading").style.display = "none";
      document.getElementById("conteudo").style.display = "inline";
  
    }, 2000);

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getGlaccount(){
    this.service.getGlaccount().subscribe((glaccounts: Glaccount[]) => {
      this.glaccounts = glaccounts;
    });
  }

  novoCadastro() {
    this.router.navigate(['/glaccount/form']);
  }

  chamarFormGlaccount() {
    this.router.navigate(['/glaccount/form']);
  }

  preparaDelecao(glaccount: Glaccount) {
    this.glaccountSelecionado = glaccount;
  }

}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))]
  };
}
