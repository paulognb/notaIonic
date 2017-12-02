import { AngularFireDatabase } from 'angularfire2/database/database';
import { Injectable } from '@angular/core';

@Injectable()
export class NotasService{
  constructor(public afDB: AngularFireDatabase){}
    // notas = [
    //   {
    //     id:1,
    //     title:'Nota 1',
    //     description:'Descricao1'
    //   },
    //   {
    //     id:2,
    //     title:'Nota 2',
    //     description:'Descricao2'
    //   },
    //   {
    //     id:3,
    //     title:'Nota 3',
    //     description:'Descricao3'
    //   }
  
    // ];

    notas = [];
    
  public getNotas(){
      // return this.notas;
      return this.afDB.list('notas/');
  }

  public getNota(id){
    // return this.notas.filter(function(e, i){return e.id == id}) [0] || {id: null, title: null, description: null};
    return this.afDB.object('notas/'+id);
  }

  public createNota(nota){
    // this.notas.push(nota);
    this.afDB.database.ref('notas/'+nota.id).set(nota);
  }

  public editNota(nota){
    // for (var i = 0; i < this.notas.length; i++) {
    //   if(this.notas[i].id == nota.id){
    //     this.notas[i] = nota;
    //   }
    // }
    this.afDB.database.ref('notas/'+nota.id).set(nota);
  }

  public deleteNota(nota){
    // for (var i = 0; i < this.notas.length; i++) {
    //   if(this.notas[i].id == nota.id){
    //     this.notas.splice(i, 1);
    //   }
    // }
    this.afDB.database.ref('notas/'+nota.id).remove();
  }

}