import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";
import { EditarEstabelecimentoPage } from './editar-estabelecimento';

@NgModule({
  declarations: [EditarEstabelecimentoPage],
  imports: [IonicPageModule.forChild(EditarEstabelecimentoPage)],
  entryComponents: [EditarEstabelecimentoPage]
})
export class EditarEstabelecimentoModulePage { }