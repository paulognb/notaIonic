import { DetalhePage } from './../pages/detalhe/detalhe';
import { NotasService } from './services/notas.service';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

export const firebaseConfig = {
  apiKey: "AIzaSyBD_W5mHCYT6IyCy83_Exzxs2Zw7efQyec",
  authDomain: "notaionic-3fe12.firebaseapp.com",
  databaseURL: "https://notaionic-3fe12.firebaseio.com",
  projectId: "notaionic-3fe12",
  storageBucket: "notaionic-3fe12.appspot.com",
  messagingSenderId: "948636522266"
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetalhePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetalhePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NotasService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
