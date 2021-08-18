import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpClientModule, HttpErrorResponse, HttpHeaders} from '@angular/common/http';import { Observable } from 'rxjs';
import { Ficheiroddr } from './recovery/recovery-lista/ddr';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DdrService {
  apiURL: string = environment.apiURLBase + '/ddr';

  constructor(private http: HttpClient) { }

    //Headers
      httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'aplication/json'})
      };

        salvar(ddr: Ficheiroddr): Observable<Ficheiroddr> {
          return this.http.post<Ficheiroddr>(this.apiURL, ddr);
        }

           getFicheiroddr(): Observable<any> {
              const tokenString = localStorage.getItem('access_token');
                 const token = JSON.parse(tokenString);
                 const headers = {
                   'Authorization' : 'Bearer ' + token.access_token
                 };
            return this.http.get<Ficheiroddr[]>(this.apiURL+ `/all`, { headers });
          }
           getFicheiroddrById(id: number): Observable<Ficheiroddr> {
              return this.http.get<any>(`${this.apiURL}/${id}`);
            }
}
