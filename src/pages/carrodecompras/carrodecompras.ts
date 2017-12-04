import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-carrodecompras',
  templateUrl: 'carrodecompras.html',
})
export class CarrodecomprasPage {


  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarrodecomprasPage');
  }

}
