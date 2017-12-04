import { EditarEstabelecimentoPage } from './../pages/editar-estabelecimento/editar-estabelecimento';
import { ListaEstabelecimentoPage } from './../pages/lista-estabelecimento/lista-estabelecimento';
import { CadastroEstabelecimentoPage } from './../pages/cadastro-estabelecimento/cadastro-estabelecimento';
import { CardapioPessoaPage } from './../pages/cardapiopessoa/cardapiopessoa';
import { ListaItemPage } from './../pages/lista-item/lista-item';
import { EditarItemPage } from './../pages/editar-item/editar-item';
import { CadastroItemPage } from './../pages/cadastro-item/cadastro-item';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { CarrinhoPage } from './../pages/carrinho/carrinho';
import { CardapioPage } from './../pages/cardapio/cardapio';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { LoginPage } from './../pages/login/login';
import { CadastroPage } from './../pages/cadastro/cadastro';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Geolocation } from '@ionic-native/geolocation';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import { auth } from '../providers/auth/auth';
import { FirebaseProvider } from '../providers/firebase/firebase';
import { CardapioServProvider } from '../providers/cardapio-serv/cardapio-serv';
import { CarrodecomprasPage } from '../pages/carrodecompras/carrodecompras';

var config = {
  apiKey: "AIzaSyBmEILYLUQCPidLQlu46Gqp4pofizncc-c",
  authDomain: "foodtruck-7d176.firebaseapp.com",
  databaseURL: "https://foodtruck-7d176.firebaseio.com",
  projectId: "foodtruck-7d176",
  storageBucket: "",
  messagingSenderId: "65072533397"
};

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '0673d468'
  }
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    CadastroPage,
    CardapioPage,
    CarrinhoPage,
    CadastroItemPage,
    EditarItemPage,
    ListaItemPage,
    CardapioPessoaPage,
    CarrodecomprasPage,
    CadastroEstabelecimentoPage,
    ListaEstabelecimentoPage,
    EditarEstabelecimentoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    CadastroPage,
    CardapioPage,
    CarrinhoPage,
    CadastroItemPage,
    EditarItemPage,
    ListaItemPage,
    CardapioPessoaPage,
    CarrodecomprasPage,
    CadastroEstabelecimentoPage,
    ListaEstabelecimentoPage,
    EditarEstabelecimentoPage
  ],

  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    auth,
    FirebaseProvider,
    CardapioServProvider,
    AngularFireDatabase,
    Geolocation

  ]
})
export class AppModule {}
