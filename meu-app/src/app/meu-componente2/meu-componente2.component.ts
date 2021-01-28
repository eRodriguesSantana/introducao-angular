import { Component, OnInit, OnDestroy } from '@angular/core';

import { takeWhile } from 'rxjs/operators';
import { AlunosService } from './../services/alunos.service';
import { ProjectsService } from './../services/projects.service';

@Component({
  selector: 'app-meu-componente2',
  templateUrl: './meu-componente2.component.html',
  styleUrls: ['./meu-componente2.component.css'],
  providers: [AlunosService]
})
export class MeuComponente2Component implements OnInit, OnDestroy {

  nome = "Eduardo";
  alunos = [];
  projects = [];
  searchText = '';

  isAlive = true;

  constructor(
    private alunosService: AlunosService,
    private projectsService: ProjectsService
  ) {
    this.alunos = this.alunosService.getAlunos();
  }

  ngOnInit(): void {
    this.projectsService.projects
    .pipe(
      takeWhile(() => this.isAlive)
    )
    .subscribe(
      projects => {
        this.projects = projects;
        this.handleClick();
      }
    )
  }

  ngOnDestroy() {
    this.isAlive = false;
  }

  handleClick() {
    alert('Hi');
  }

  getProjects() {
    this.projectsService.getProjects(this.searchText);
  }
}
