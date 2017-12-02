import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';
import { FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
import { item } from '../../models/item/item';

@IonicPage()
@Component({
  selector: 'page-editar-item',
  templateUrl: 'editar-item.html',
})
export class EditarItemPage {

  novoItemSubscription: Subscription;
  Item$: FirebaseObjectObservable<item>;
  novoItem = {} as item;

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {

    const novoItemId = this.navParams.get('novoItemId');
    console.log(novoItemId);

    this.Item$ = this.database.object(`Lista de Items/${novoItemId}`);
    this.novoItemSubscription =
      this.Item$.subscribe(novoItem => this.novoItem = novoItem);
  }

  editarNovoItem(novoItem: item) {
    this.Item$.update(novoItem);
    this.navCtrl.pop();
  }

  ionViewWillLeave() {
    this.novoItemSubscription.unsubscribe();
  }
}
