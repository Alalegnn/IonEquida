import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cheval } from '../../model/Cheval';
import { Observable } from 'rxjs/Observable';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { ToastController } from "ionic-angular";

/*
  Generated class for the ChevauxProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChevauxProvider {

  private baseURI: string  = "http://localhost/wequida/";

  constructor(public http: HttpClient, public toastCtrl: ToastController) {
  }

  listerChevaux() {
    let headers   : any   = new HttpHeaders({ 'Content-Type': 'application/json' }),
    options   : any   = { "key" : "lister"},
    url       : any       = this.baseURI + "gestionChevaux.php";

    //console.log(url);
    //console.log(JSON.stringify(options));
    return new Observable(observer => {
        this.http.post(url, JSON.stringify(options), headers)
            .subscribe(data => {
                //console.log("dans provider chevaux - methode listerChevaux");
                //console.log(data);
                if (!data) {
                    observer.error('Aucun cheval trouvé');
                } else {
                    observer.next(data);
                    observer.complete();
                }
            });
    });
    }

    consulterCheval(idCheval: number) {

        console.log("provider consultercheval");
        let headers   : any   = new HttpHeaders({ 'Content-Type': 'application/json' }),
        options   : any   = { "key" : "consulterCheval", "idCheval" : idCheval},
        url       : any       = this.baseURI + "gestionChevaux.php";
        /*console.log(url);
        console.log(options);
        console.log(JSON.stringify(options));
        console.log(headers);*/
        return new Observable(observer => {
            this.http.post(url, JSON.stringify(options), headers)
                .subscribe(data => {
                    //console.log('dans provider- methode consulterCheval');
                    //console.log(data);
                    //console.log(" data du pvider ");
                    if (!data) {
                        observer.error('Aucun cheval trouvé');
                    } else {
                        observer.next(data);
                        observer.complete();
                    }
                });
        });
      }

      updateCheval(cheval: Cheval){
          console.log(cheval)
        
        let headers   : any   = new HttpHeaders({ 'Content-Type': 'application/json' }),
        options   : any   = { "key" : "updateCheval", "cheval_id" : cheval.id, "cheval_nom" : cheval.nom, "cheval_sexe" : cheval.sexe },
        url       : any       = this.baseURI + "gestionChevaux.php";

        console.log ("avec encodage" + JSON.stringify(options));
                this.http.post(url, JSON.stringify(options), headers)
                    .subscribe((data : any ) => {
                        // Read the result field from the JSON response.
                       // if (!data['message']) {
                        this.sendNotification('Nice');
                    },
                    (error : any) =>
                    {
                        this.sendNotification("Oups probleme: double entree");
                        console.log(error);
                    });  

      }


      ajouterCheval(cheval: Cheval){

        let headers   : any   = new HttpHeaders({ 'Content-Type': 'application/json' }),
        options   : any   = { "key" : "ajouterCheval", "cheval_id" : cheval.id, "cheval_nom" : cheval.nom, "cheval_sexe" : cheval.sexe },
        url       : any       = this.baseURI + "gestionChevaux.php";

        console.log ("avec encodage" + JSON.stringify(options));
                this.http.post(url, JSON.stringify(options), headers)
                    .subscribe((data : any ) => {
                        // Read the result field from the JSON response.
                       // if (!data['message']) {
                        this.sendNotification('Nice');
                    },
                    (error : any) =>
                    {
                        this.sendNotification("Oups probleme: double entree");
                    });
                }

        


sendNotification(message: string) : void
{
    let notification = this.toastCtrl.create({
        message : message,
        duration : 3000
    });
    notification.present();
}
}
