import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
import { item } from '../../models/item/item';
import { EditarItemPage } from '../editar-item/editar-item';
import { CadastroItemPage } from '../cadastro-item/cadastro-item';

@IonicPage()
@Component({
  selector: 'page-lista-item',
  templateUrl: 'lista-item.html',
})

export class ListaItemPage {

  Item$: FirebaseListObservable<item[]>

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase, private actionSheetCtrl: ActionSheetController) {
    this.Item$ = this.database.list('Lista de Items');
  }

  selecionarNovoItem(novoItem: item) {
    this.actionSheetCtrl.create({
      title: `${novoItem.nome}`,
      buttons: [
        {
          text: 'Editar',
          handler: () => {
            this.navCtrl.push(EditarItemPage,
              { novoItemId: novoItem.$key });

          }
        },
        {
          text: 'Remover',
          role: 'destructive',
          handler: () => {
            this.Item$.remove(novoItem.$key);
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log("CANCELADO");
          }
        }
      ]
    }).present();
  }

  cadastroPage() {
    this.navCtrl.push(CadastroItemPage);
  }

}
