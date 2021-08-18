import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EaeService } from 'src/app/eae.service';

import { Eae } from '../eae';


@Component({
  selector: 'app-recovery-lista',
  templateUrl: './recovery-lista.component.html',
  styleUrls: ['./recovery-lista.component.css'],
})
export class RecoveryListaComponent implements OnInit {

  eae: Eae[];
  mensagemSucesso: string;
  mensagemErro: string;
  success: boolean = false;
  errors: String[];
  id: number;
  data: any;

  constructor(private service: EaeService, private router: Router) {

/*   this.service.getEae()
            .subscribe(data => {
              this.data = data;
            }, error => console.log(error)); */
  }

  ngOnInit(): void {}

  listarEae(){
    this.router.navigate(['/recovery/recovery-form']);
  }

  listarDdr(){
    this.router.navigate(['/recovery/recovery-ddr']);
  }

  //name = 'Angular';
  model: {name: string, choice?: string } = { name: '', choice: null };
  onSubmit() {
    console.log(this.model);

    if (this.model.choice === '/recovery-form') {
      this. listarEae();
    }
    else (this.listarDdr());
  }



/*  chamarFormEae() {
      this.router.navigate(['/recovery-form']);
    }

     chamarFormDdr(){
        this.router.navigate(['/recovery-ddr']);
      }

 *//*   consultar() {
    // console.log(this.nome + ' ' + this.mes);
    this.service.buscar(this.nome, this.mes).subscribe((response) => {
      this.lista = response;
      if (this.lista.length <= 0) {
        this.message = 'Nenhum registro encontrado.';
      } else {
        this.message = null;
      }
    });
  } *//*

    model: {name: string, choice?: string } = { name: '', choice: null };
    onSubmit() {
      console.log(this.model);

      if (this.model.choice === '/recovery-form') {
        this. chamarFormEae();
      }
      else (this.chamarFormDdr());
    } */
}
