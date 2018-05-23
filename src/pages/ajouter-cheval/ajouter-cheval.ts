import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Cheval } from '../../model/cheval';
import { ChevauxProvider} from '../../providers/chevaux/chevaux';

/**
 * Generated class for the AjouterChevalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajouter-cheval',
  templateUrl: 'ajouter-cheval.html',
})
export class AjouterChevalPage {

  public form                   : FormGroup;
  public isEdited               : boolean = false;



  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder, public chevauxProvider: ChevauxProvider) {

     // Create form builder validation rules
     this.form = fb.group({
      "cheval_id"                  : [""],
      "cheval_nom"           : ["", Validators.required],
      "cheval_sexe"           : ["", Validators.required]
   });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjouterChevalPage');
  }

  ajouterCheval() : void
  { 
      let 	cheval_id : number = this.form.controls["cheval_id"].value,
      cheval_nom : string  = this.form.controls["cheval_nom"].value,
      cheval_sexe : string  = this.form.controls["cheval_sexe"].value;
  
      let cheval : Cheval = new Cheval(cheval_id,cheval_nom,cheval_sexe);
      cheval.id =	cheval_id;
      cheval.nom = cheval_nom ;
      cheval.sexe = cheval_sexe;

      console.log(cheval);

      this.chevauxProvider.ajouterCheval(cheval);
      console.log('CREATE');       
      //this.sendNotification('OK');

   }
  }
