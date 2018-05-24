import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cheval } from '../../model/cheval';
import { ChevauxProvider} from '../../providers/chevaux/chevaux';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';


/**
 * Generated class for the UpdateChevalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update-cheval',
  templateUrl: 'update-cheval.html',
})
export class UpdateChevalPage {

  public form                   : FormGroup;


  constructor(public navCtrl: NavController, public navParams: NavParams,public fb: FormBuilder, public chevauxProvider: ChevauxProvider) {
    
    console.log("constr modifier cheval");
    let cheval = this.navParams.get("cheval");
     // Create form builder validation rules
     console.log(cheval);
     this.form = fb.group({
      "cheval_id"                  : [cheval.id,Validators.required],
      "cheval_nom"           : [cheval.nom,Validators.required],
      "cheval_sexe"           : [cheval.sexe,Validators.required],
      "cheval_prixDepart"     : [cheval.prixDepart,Validators.required]
   });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateChevalPage');
  }

  updateCheval() : void {
    let 	cheval_id : number = this.form.controls["cheval_id"].value,
    cheval_nom : string  = this.form.controls["cheval_nom"].value,
    cheval_sexe : string  = this.form.controls["cheval_sexe"].value,
    cheval_prixDepart : number = this.form.controls["cheval_prixDepart"].value;

    let cheval : Cheval = new Cheval(cheval_id,cheval_nom,cheval_sexe);
    cheval.id =	cheval_id;
    cheval.nom = cheval_nom ;
    cheval.sexe = cheval_sexe;
    cheval.prixDepart = cheval_prixDepart;

    console.log(cheval);

    this.chevauxProvider.updateCheval(cheval);
    console.log('UPDATE');       
    //this.sendNotification('OK');

 }
  }


