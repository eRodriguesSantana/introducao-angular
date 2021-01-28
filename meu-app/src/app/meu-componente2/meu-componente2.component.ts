import { Component, OnInit } from '@angular/core';

import { AlunosService } from './../services/alunos.service';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

interface GithubResponse {
  incomplete_result: boolean;
  items: any[];
  total_count: number;
}

@Component({
  selector: 'app-meu-componente2',
  templateUrl: './meu-componente2.component.html',
  styleUrls: ['./meu-componente2.component.css'],
  providers: [AlunosService]
})
export class MeuComponente2Component implements OnInit {

  nome = "Eduardo";
  alunos = [];
  searchText = '';
  projects = [];

  constructor(
    private alunosService: AlunosService,
    private http: HttpClient
  ) {
    this.alunos = this.alunosService.getAlunos();
  }

  ngOnInit(): void {
  }

  handleClick() {
    alert('Hi');
  }

  getProjects() {
    if(this.searchText) {
      const url = `https://api.github.com/search/repositories`;

      /*Objeto imutavel, significa que no ato da instanciação deve atribuir seus valores*/
      const params = new HttpParams().set('q', this.searchText);

      /*Objeto imutavel, significa que no ato da instanciação deve atribuir seus valores*/
       const headers = new HttpHeaders().set('Content-Type', 'text/html');

       this.http.get<GithubResponse>(url, {params, headers})
         .subscribe(
           response => {
	     this.projects = response.items;
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
