import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';
import { FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
import { estabelecimento } from '../../models/estabelecimento/estabelecimento';

@IonicPage()
@Component({
  selector: 'page-editar-estabelecimento',
  templateUrl: 'editar-estabelecimento.html',
})
export class EditarEstabelecimentoPage {

  novoEstabelecimentoSubscription: Subscription;
  estabelecimento$: FirebaseObjectObservable<estabelecimento>;
  novoEstabelecimento = {} as estabelecimento;

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {

    const novoEstabelecimentoId = this.navParams.get('novoEstabelecimentoId');
    console.log(novoEstabelecimentoId);

    this.estabelecimento$ = this.database.object(`Lista de Estabelecimentos/${novoEstabelecimentoId}`);
    this.novoEstabelecimentoSubscription =
      this.estabelecimento$.subscribe(novoEstabelecimento => this.novoEstabelecimento = novoEstabelecimento);
  }

  editarNovoEstabelecimento(novoEstabelecimento: estabelecimento) {
    this.estabelecimento$.update(novoEstabelecimento);
    this.navCtrl.pop();
  }

  ionViewWillLeave() {
    this.novoEstabelecimentoSubscription.unsubscribe();
  }
}
