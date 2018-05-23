import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cheval } from '../../model/cheval';
import { ChevauxProvider} from '../../providers/chevaux/chevaux';
import { UpdateChevalPage } from '../update-cheval/update-cheval';

/**
 * Generated class for the ConsulterChevalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-consulter-cheval',
  templateUrl: 'consulter-cheval.html',
})
export class ConsulterChevalPage {

   //private cheval: Cheval = new Cheval();
  public cheval; 
  private error: string = '';
  private loading: Boolean = false;
  private chevaux;



  constructor(public navCtrl: NavController, public navParams: NavParams, public chevauxProvider: ChevauxProvider) {
   
   
    console.log("constr consultercheval");
    let idCheval = this.navParams.get("idCheval");
    //this.chevauxProvider.consulterCheval(idCheval);
    this.consulterCheval(idCheval);
    //console.log(this.cheval.nom);
    console.log("constr" + this.cheval);
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad ConsulterChevalPage');
  }

  consulterCheval(idCheval: number) {
    
    this.loading = true;
    this.chevauxProvider.consulterCheval(idCheval).subscribe(
      value => this.chevaux = value,
      error => this.error = error,
      () => this.loading = false);

      console.log('fin methode consul cheval appelant rovder');
  }

  updateCheval(cheval : Cheval ){
    this.navCtrl.push(UpdateChevalPage, {cheval : cheval});
  console.log(cheval);
  }


}