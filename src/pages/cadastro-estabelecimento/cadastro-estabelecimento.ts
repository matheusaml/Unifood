import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
import { estabelecimento } from '../../models/estabelecimento/estabelecimento';
import { EditarEstabelecimentoPage } from '../editar-estabelecimento/editar-estabelecimento';

@IonicPage()
@Component({
  selector: 'page-cadastro-estabelecimento',
  templateUrl: 'cadastro-estabelecimento.html',
})
export class CadastroEstabelecimentoPage {
  novoEstabelecimento = {} as estabelecimento;

  estabelecimento$: FirebaseListObservable<estabelecimento[]>
  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {
    this.estabelecimento$ = this.database.list('Lista de Estabelecimentos');

  }

  addEstabelecimento(novoEstabelecimento: estabelecimento) {
    this.estabelecimento$.push({
      nome: this.novoEstabelecimento.nome,
      tipo: this.novoEstabelecimento.tipo,
      descricao: this.novoEstabelecimento.descricao,
     /*  foto: (this.novoEstabelecimento.foto) */
    });

    this.novoEstabelecimento = {} as estabelecimento;
    this.navCtrl.pop();
  }

    editar() {
      this.navCtrl.push(EditarEstabelecimentoPage)
    }

}
