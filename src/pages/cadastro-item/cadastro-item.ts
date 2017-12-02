import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
import { item } from '../../models/item/item';
import { EditarItemPage } from '../editar-item/editar-item';

@IonicPage()
@Component({
  selector: 'page-cadastro-item',
  templateUrl: 'cadastro-item.html',
})
export class CadastroItemPage {
  novoItem = {} as item;

  Item$: FirebaseListObservable<item[]>
  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {
    this.Item$ = this.database.list('Lista de Items');

  }

  addItem(novoItem: item) {
    this.Item$.push({
      nome: this.novoItem.nome,
      tipo: this.novoItem.tipo,
      descricao: this.novoItem.descricao,
      preco: this.novoItem.preco,
     /*  foto: (this.novoItem.foto) */
    });

    this.novoItem = {} as item;
    this.navCtrl.pop();
  }

    editar() {
      this.navCtrl.push(EditarItemPage)
    }

}
