import { CarrinhoPage } from './../carrinho/carrinho';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';

@IonicPage()
@Component({
  selector: 'page-cardapio',
  templateUrl: 'cardapio.html',
})

export class CardapioPage {
  ionViewDidLoad() {
    console.log('ionViewDidLoad CardapioPage');
  }

}
