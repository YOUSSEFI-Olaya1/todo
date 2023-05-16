import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
export const firebaseConfig = {
  apiKey: "AIzaSyALN7rQMNubh6VvvEHhHAs8WuMolW_ti4w",
  authDomain: "miniprojet2-e7b17.firebaseapp.com",
  projectId: "miniprojet2-e7b17",
  storageBucket: "miniprojet2-e7b17.appspot.com",
  messagingSenderId: "150860262953",
  appId: "1:150860262953:web:a60597bf30ad729f7d3638",
  measurementId: "G-XJM3VDRFQD"
};
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,AngularFireModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    
     IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
