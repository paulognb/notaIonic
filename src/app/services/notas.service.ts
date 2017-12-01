import { Injectable } from '@angular/core';

@Injectable()
export class NotasService{
    notas = [
      {
        id:1,
        title:'Nota 1',
        description:'Descricao1'
      },
      {
        id:2,
        title:'Nota 2',
        description:'Descricao2'
      },
      {
        id:3,
        title:'Nota 3',
        description:'Descricao3'
      }
  
    ];
    
  public getNotas(){
      return this.notas;
  }

  public getNota(id){
    return this.notas.filter(function(e, i){return e.id == id}) [0] || {id: null, title: null, description: null};
  }

  public createNota(nota){
    this.notas.push(nota);
  }

}