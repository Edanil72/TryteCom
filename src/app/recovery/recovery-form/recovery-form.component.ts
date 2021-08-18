import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Eae } from '../eae';
import { EaeService } from 'src/app/eae.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recovery-form',
  templateUrl: './recovery-form.component.html',
  styleUrls: ['./recovery-form.component.css'],
})
export class RecoveryFormComponent implements OnInit {
 /*  clientes: Cliente[] = []; */
  servico: EaeService;
  eae: Eae[] = [];
  success: boolean = false;
  errors: String[];
    id: number;
    data: any;

  constructor(
    /* private clientesService: ClientesService, */
    private service: EaeService,
    private router: Router,
    private activatedRoute: ActivatedRoute

  ) {}

  ngOnInit(): void {
   this.service.getEae()
            .subscribe((resposta) => {
              this.eae = resposta;
            }, error => console.log(error));

       let params: Observable<Params> = this.activatedRoute.params;
      params.subscribe((urlParams) => {
        this.id = urlParams['id'];

        if (this.id) {
          this.service.getEaeById(this.id).subscribe(
            (response) => (this.data = response),
            (errorResponse) => (this.data = new Eae())
          );
        }
      });

  }

  onSubmit() {

  }

  voltar(){
        this.router.navigate(['/recovery/recovery-lista']);
      }
}
