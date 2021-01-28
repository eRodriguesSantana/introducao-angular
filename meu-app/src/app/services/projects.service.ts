import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs';

interface GithubResponse {
  incomplete_result: boolean;
  items: any[];
  total_count: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) { }

  getProjects(searchText) {
    if(searchText) {
      const url = `https://api.github.com/search/repositories`;

      /*Objeto imutavel, significa que no ato da instanciação deve atribuir seus valores*/
      const params = new HttpParams().set('q', searchText);

      /*Objeto imutavel, significa que no ato da instanciação deve atribuir seus valores*/
       const headers = new HttpHeaders().set('Content-Type', 'text/html');

       this.http.get<GithubResponse>(url, {params, headers})
         .subscribe(
           response => {
	     this.projects.next(response.items); /*next() altera um valor da variavel, nesse caso do array*/
           }
         )

        /*Exemplo de uso caso o verbo da requisição fosse POST, PUT ou DELETE
        this.http.post<GithubResponse>(url, {objeto_enviado}, {params, headers})
         .subscribe(
           response => {
	     this.projects = response.items;
           }
         )*/
     }
   }
}
