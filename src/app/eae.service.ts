import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpClientModule, HttpErrorResponse, HttpHeaders} from '@angular/common/http';import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { Eae } from './recovery/eae';
/* import { ServicoPrestadoBusca } from './servico-prestado/servico-prestado-lista/servicoPrestadoBusca'; */

@Injectable({
  providedIn: 'root',
})
export class EaeService {
  apiURL: string = environment.apiURLBase + '/eae';

  constructor(private http: HttpClient) {}

   //Headers
    httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'aplication/json'})
    };

  salvar(eae: Eae): Observable<Eae> {
    return this.http.post<Eae>(this.apiURL, eae);
  }

     getEae(): Observable<any> {
        const tokenString = localStorage.getItem('access_token');
           const token = JSON.parse(tokenString);
           const headers = {
             'Authorization' : 'Bearer ' + token.access_token
           };
      return this.http.get<Eae[]>(this.apiURL+ `/all`, { headers });
    }

/*   buscar(nome: string, mes: number): Observable<ServicoPrestadoBusca[]> {
    const httpParams = new HttpParams()
      .set('nome', nome)
      .set('mes', mes ? mes.toString() : '');

    // /api/servicos-prestados?nome=Maria&mes=1
    const url = this.apiURL + '?' + httpParams.toString();
    // console.log(url);
    return this.http.get<ServicoPrestadoBusca[]>(url);
  } */

  atualizar(eae: Eae): Observable<any> {
    return this.http.put<Eae>(`${this.apiURL}/${eae.id}`, eae);
  }

  getEaeById(id: number): Observable<Eae> {
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }

  deletar(eae: Eae): Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${eae.id}`);
  }

}
