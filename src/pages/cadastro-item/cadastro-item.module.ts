import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";
import { CadastroItemPage } from './cadastro-item';

@NgModule({
  declarations: [CadastroItemPage],
  imports: [IonicPageModule.forChild(CadastroItemPage)],
  entryComponents: [CadastroItemPage]
})
export class CadastroItemModulePage { }