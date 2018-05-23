import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AjouterChevalPage } from './ajouter-cheval';

@NgModule({
  declarations: [
    AjouterChevalPage,
  ],
  imports: [
    IonicPageModule.forChild(AjouterChevalPage),
  ],
})
export class AjouterChevalPageModule {}
