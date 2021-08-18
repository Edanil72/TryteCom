import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpClientModule, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

import { Glaccount } from './glaccount/glaccount';
import {ResponseJson} from './glaccount/ResponseJson';
@Injectable({
  providedIn: 'root',
})
export class GlaccountService {
  apiURL: string = environment.apiURLBase + '/glaccount';
  api: string = this.apiURL + '/find/';

  constructor(private http: HttpClient) {}

 //Headers
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'aplication/json'})
  };


  salvar(glaccount: Glaccount): Observable<Glaccount>{
      return this.http.post<Glaccount>(this.apiURL, glaccount);
    }

     atualizar(glaccount: Glaccount): Observable<any> {
        return this.http.put<Glaccount>(`${this.apiURL}/update`, glaccount);
      }


    getGlaccount(): Observable<Glaccount[]>{
      const tokenString = localStorage.getItem('access_token');
      const token = JSON.parse(tokenString);
      const headers = {
        'Authorization' : 'Bearer ' + token.access_token
      };
      return this.http.get<Glaccount[]>(this.apiURL + `/all`, { headers });
    }

    getGlaccountById( id: number): Observable<ResponseJson>{
      const tokenString = localStorage.getItem('access_token');
      const token = JSON.parse(tokenString);
      const headers = {
        'Authorization' : 'Bearer ' + token.access_token
      };
      console.log(this.http.get<Glaccount>(`${this.apiURL}/find/${id}`, { headers }));
      return this.http.get<ResponseJson>(`${this.api}${id}`, { headers });
    }

    eliminarGlaccount(glaccount: Glaccount): Observable<any>{
      const tokenString = localStorage.getItem('access_token');
      const token = JSON.parse(tokenString);
      const headers = {
        'Authorization' : 'Bearer ' + token.access_token
      };
      return this.http.delete<any>(`${this.apiURL}/${glaccount.id}`, { headers });

      //teste
    }

/*   // Observable -> esperar requisição assincrona para retornar
  salvar(glaccount: Glaccount): Observable<Glaccount> {
    return this.http.post<Glaccount>(this.apiURL, glaccount);
  }

  atualizar(glaccount: Glaccount): Observable<any> {
    return this.http.put<Glaccount>(`${this.apiURL}/${glaccount.id}`, glaccount);
  }

  getGlaccount(): Observable<Glaccount[]> {
    return this.http.get<Glaccount[]>(this.apiURL);
  }

  getGlaccountById(id: number): Observable<Glaccount> {
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }

  deletar(glaccount: Glaccount): Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${glaccount.id}`);
  }

   *//**
  getClientes(): Cliente[] {
    let cliente: Cliente = new Cliente();
    cliente.id = 1;
    cliente.nome = 'Fulano de tal';
    cliente.dataCadastro = '18/04/2020';
    cliente.cpf = '888.888.888-88';
    return [cliente];
  }
  */
}
