import { PrincipalPage } from './../principal/principal';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {}

  /*Método de acesso para Página Principal*/
  openPrincipal(){
    this.navCtrl.push(PrincipalPage);
    
  }

  /*Método de acesso para Página Principal sem ser em PILHA
  openPrincipal(){
    this.navCtrl.setRoot(PrincipalPage);
    
  }*/

}
