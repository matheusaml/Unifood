import { NgModule } from '@angular/core';
import { ListaEstabelecimentoPage } from './lista-estabelecimento';
import { IonicPageModule } from "ionic-angular";

@NgModule({
  declarations: [ListaEstabelecimentoPage],
  imports: [IonicPageModule.forChild(ListaEstabelecimentoPage)],
  entryComponents: [ListaEstabelecimentoPage]
})
export class ListaEstabelecimentoPageModule { }