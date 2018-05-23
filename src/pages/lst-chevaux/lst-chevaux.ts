import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cheval } from '../../model/cheval';
import { ChevauxProvider} from '../../providers/chevaux/chevaux';
import { ConsulterChevalPage } from '../consulter-cheval/consulter-cheval';
import { AjouterChevalPage } from '../ajouter-cheval/ajouter-cheval';

/**
 * Generated class for the LstChevauxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lst-chevaux',
  templateUrl: 'lst-chevaux.html',
})
export class LstChevauxPage {
  

  private chevaux;
  private error: string = '';
  private loading: Boolean = false;


  constructor(public navCtrl: NavController, public navParams: NavParams, public chevauxProvider: ChevauxProvider) {
    this.lister();
   // console.log("constr" + this.chevaux);
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad LstChevauxPage');
  }


  lister() {
    this.loading = true;
    this.chevauxProvider.listerChevaux().subscribe(
      value => this.chevaux = value,
      error => this.error = error,
      () => this.loading = false);
  }

  consulterCheval(idCheval: number){
    this.navCtrl.push(ConsulterChevalPage, {idCheval: idCheval});
  }


  ajouterCheval(){
    this.navCtrl.push(AjouterChevalPage);

  }

}
