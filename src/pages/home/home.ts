import { DetalhePage } from './../detalhe/detalhe';
import { NotasService } from './../../app/services/notas.service';
import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  notas = [];
  @ViewChild('myNav') nav: NavController

  constructor(public navCtrl: NavController, public notasService : NotasService) {
    this.notas = notasService.getNotas();
  }

  public gotoDetalhe(id){
    this.navCtrl.push(DetalhePage, {id:id});
  }
  
  public createNota(){
    this.navCtrl.push(DetalhePage, {id:0});
  }
}
