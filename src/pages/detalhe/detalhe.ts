import { NotasService } from './../../app/services/notas.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetalhePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhe',
  templateUrl: 'detalhe.html',
})
export class DetalhePage {

  nota = {id: null, title: null, description: null};
  id = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public notasService: NotasService) {
    this.id = navParams.get('id');

    if(this.id !=0){
      this.nota = notasService.getNota(this.id);
    }
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhePage');
  }

  addNota(){
    this.nota.id = Date.now();
    this.notasService.createNota(this.nota);
    alert('Nota criada com sucesso!');
    this.navCtrl.pop();
  }

}
