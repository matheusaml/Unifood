import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";
import { CadastroEstabelecimentoPage } from './cadastro-estabelecimento';

@NgModule({
  declarations: [CadastroEstabelecimentoPage],
  imports: [IonicPageModule.forChild(CadastroEstabelecimentoPage)],
  entryComponents: [CadastroEstabelecimentoPage]
})
export class CadastroEstabelecimentoModulePage { }