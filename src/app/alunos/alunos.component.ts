import { Component, OnInit } from '@angular/core';
import { Aluno } from './Aluno';
import { AlunosService } from './alunos.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public aluno: Aluno;
  public id: number;
  public listaAlunos: Aluno[];

  constructor(private servico: AlunosService) { }

  ngOnInit() {
    this.id = -1;
    this.aluno = new Aluno();
    this.listaAlunos = this.servico.listar();
  }

  cadastrarAluno() {
    this.servico.cadastrar(this.aluno);
    this.aluno = new Aluno();
    this.id = -1;
  }

  editarAluno(id: number) {
    this.id = id;
    this.aluno = new Aluno(
      this.listaAlunos[id].nomeAluno,
      this.listaAlunos[id].nota1Aluno,
      this.listaAlunos[id].nota2Aluno
    );
  }

  excluirAluno(id: number) {
    this.servico.excluir(id);
    this.aluno = new Aluno();
    this.id = -1;
  }

  atualizar() {
    this.servico.editar(this.id, this.aluno);
    this.id = -1;
    this.aluno = new Aluno();
  }

  mediaAluno(nota1: number, nota2: number) {
    return (nota1 + nota2) / 2;
  }

}
