import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
import { estabelecimento } from '../../models/estabelecimento/estabelecimento';
import { EditarEstabelecimentoPage } from '../editar-estabelecimento/editar-estabelecimento';
import { CadastroEstabelecimentoPage } from '../cadastro-estabelecimento/cadastro-estabelecimento';

@IonicPage()
@Component({
  selector: 'page-lista-estabelecimento',
  templateUrl: 'lista-estabelecimento.html',
})

export class ListaEstabelecimentoPage {

  estabelecimento$: FirebaseListObservable<estabelecimento[]>

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase, private actionSheetCtrl: ActionSheetController) {
    this.estabelecimento$ = this.database.list('Lista de Estabelecimentos');
  }

  selecionarNovoestabelecimento(novoEstabelecimento: estabelecimento) {
    this.actionSheetCtrl.create({
      title: `${novoEstabelecimento.nome}`,
      buttons: [
        {
          text: 'Editar',
          handler: () => {
            this.navCtrl.push(EditarEstabelecimentoPage,
              { novoEstabelecimentoId: novoEstabelecimento.$key });

          }
        },
        {
          text: 'Remover',
          role: 'destructive',
          handler: () => {
            this.estabelecimento$.remove(novoEstabelecimento.$key);
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
    this.navCtrl.push(CadastroEstabelecimentoPage);
  }

}
