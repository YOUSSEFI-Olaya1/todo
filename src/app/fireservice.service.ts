import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuth} from '@angular/fire/compat/auth';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore} from '@angular/fire/compat/firestore';
//import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class FireserviceService {

  constructor( public firestore: AngularFirestore,
    public auth: AngularFireAuth) { 
  }
  loginWithEmail(data:any) {
    return this.auth.signInWithEmailAndPassword(data.email, data.password);
  }

  signup(data:any) {
    return this.auth.createUserWithEmailAndPassword(data.email, data.password);
  }

  saveDetails(data:any) {
    return this.firestore.collection("users").doc(data.uid).set(data);
  }
  getDetails(data:any) {
    return this.firestore.collection("users").doc(data.uid).valueChanges();
  }
}
