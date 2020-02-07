import { Injectable } from '@angular/core';
import { Aluno } from './Aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  constructor() { }

  private listaAlunos: Aluno[] = [
    new Aluno('Lucas', 8.0, 5.3),
    new Aluno('João', 1.2,  3.0),
    new Aluno('Pedrinho', 4.0, 8.6)
  ];

  public cadastrar(aluno: Aluno) {
    this.listaAlunos.push(aluno);
  }

  public listar() {
    return this.listaAlunos;
  }

  public editar(id: number, aluno: Aluno) {
    this.listaAlunos[id] = aluno;
  }

  public excluir(id: number) {
    this.listaAlunos.splice(id, 1);
  }
}
