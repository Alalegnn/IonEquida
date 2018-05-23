import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LstChevauxPage } from '../pages/lst-chevaux/lst-chevaux';
import { ConsulterChevalPage } from '../pages/consulter-cheval/consulter-cheval';
import { AjouterChevalPage } from '../pages/ajouter-cheval/ajouter-cheval';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ChevauxProvider } from '../providers/chevaux/chevaux';
import { UpdateChevalPage } from '../pages/update-cheval/update-cheval';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LstChevauxPage,
    ConsulterChevalPage,
    AjouterChevalPage,
    UpdateChevalPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LstChevauxPage,
    ConsulterChevalPage,
    AjouterChevalPage,
    UpdateChevalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ChevauxProvider
  ]
})
export class AppModule {}
