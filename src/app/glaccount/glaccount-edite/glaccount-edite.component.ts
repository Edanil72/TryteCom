import { Component, OnInit } from '@angular/core';
import { Glaccount } from '../../glaccount/glaccount';
import { GlaccountService } from 'src/app/glaccount.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ResponseJson } from '../ResponseJson';

@Component({
  selector: 'app-glaccount-edite',
  templateUrl: './glaccount-edite.component.html',
  styleUrls: ['./glaccount-edite.component.css']
})
export class GlaccountEditeComponent implements OnInit {

  id: number;
  glaccount: Glaccount= new Glaccount();
  glaccounts: Glaccount[]=[];
  response: ResponseJson;
  sucesso: boolean = false;
  erros: string[];
  

  constructor(private service: GlaccountService,
                  private router: Router,
                  private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {

    this.id = this.activatedRoute.snapshot.params['id'];
    this.service.getGlaccountById(this.id).subscribe(data=>{
      this.glaccount=data.data;
    }, error=>console.log(error));
  }

  onSubmit(){
    this.service
      .atualizar(this.glaccount)
      .subscribe(response => {
        this.sucesso = true;
        this.erros = null;
        console.log(response);
      }, errorResponse => {
        this.erros = ['Erro ao atualizar o ficheiro'];
        this.sucesso = false;
        console.log(errorResponse.error.erros);
      });
  }

  voltarParaVer(){
    this.router.navigate(['/glaccount/form']);
  }

}
