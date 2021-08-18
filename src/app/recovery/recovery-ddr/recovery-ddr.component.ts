import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Ficheiroddr } from '../recovery-lista/ddr';
import { DdrService } from 'src/app/ddr.service';
import { Observable } from 'rxjs';
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
  selector: 'app-recovery-ddr',
  templateUrl: './recovery-ddr.component.html',
  styleUrls: ['./recovery-ddr.component.css']
})
export class RecoveryDdrComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'progress', 'fruit', 'accao'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  servico: DdrService;
  ddr: Ficheiroddr[] = [];
  success: boolean = false;
  errors: String[];
  id: number;
  data: any;
  
  constructor( private service: DdrService, private router: Router, private activatedRoute: ActivatedRoute) { 
    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit(): void {
            this.service.getFicheiroddr()
              .subscribe((resposta) => {
                this.ddr = resposta;
              }, error => console.log(error));

         let params: Observable<Params> = this.activatedRoute.params;
        params.subscribe((urlParams) => {
          this.id = urlParams['id'];

          if (this.id) {
            this.service.getFicheiroddrById(this.id).subscribe(
              (response) => (this.data = response),
              (errorResponse) => (this.data = new Ficheiroddr())
            );
          }
        });

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

  voltar(){
    this.router.navigate(['/recovery/recovery-lista']);
  }

  chamarTabela(){

    $( "<div id='loading' style='display: block'><div class='text-center text-warning mt-5'><div class='spinner-border' role='status'><span class='sr-only'>Loading...</span></div></div></div>").appendTo("#loading");
   
    var i = setInterval(function () {
      clearInterval(i);
      
      $("#loading").hide();
      $("#conteudo").show();
    
    }, 2000);
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
