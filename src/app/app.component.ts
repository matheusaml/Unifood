import { ListaEstabelecimentoPage } from './../pages/lista-estabelecimento/lista-estabelecimento';
import { CarrodecomprasPage } from './../pages/carrodecompras/carrodecompras';
import { LoginPage } from './../pages/login/login';
import { HomePage } from './../pages/home/home';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CadastroItemPage } from '../pages/cadastro-item/cadastro-item';
import { ListaItemPage } from '../pages/lista-item/lista-item';
import { CardapioPessoaPage } from '../pages/cardapiopessoa/cardapiopessoa';
import { CadastroEstabelecimentoPage } from '../pages/cadastro-estabelecimento/cadastro-estabelecimento';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  //PAGINA INICIAL DO APLICATIVO
  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Cadastrar Pedido', component: CadastroItemPage},
      { title: 'Cadastrar Cardápio', component: ListaItemPage},
      { title: 'Cardápio', component: CardapioPessoaPage},
      { title: 'Carrinho de Compras', component: CarrodecomprasPage},
      { title: 'Cadastrar Estabelecimento', component: CadastroEstabelecimentoPage},
      { title: 'Listar Estabelecimento', component: ListaEstabelecimentoPage},
      
           
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }
}
